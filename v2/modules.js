/* ============================================================
   v2/modules.js
   모듈 엔진의 핵심 레지스트리.

   LAYOUTS[slide.layout]  — 화면 "구조"만 담당.
     - split: true 면 .stage-side 패널이 함께 렌더링됨.
     - mount(main, side, slide): main/side 요소에 레이아웃용 클래스를 붙이는 정도만 함.
   MODULES[slide.module]  — 화면 "내용/인터랙션"을 담당.
     - initState(slide): 이 슬라이드에 진입할 때 필요한 최초 상태를 만들어 반환.
       (host.html의 render()가 slide.id가 바뀔 때만 이걸 호출하므로,
        goTo()가 모듈 종류를 몰라도 상태가 알아서 리셋됩니다.)
     - renderHost(main, side, slide, state, helpers): main(.stage-main)과 side(.stage-side, 없으면 null)
       안에 DOM을 채워 넣음. helpers = {el, esc, rerender}.

   2단계 범위: 레이아웃 splitRight 추가 + 모듈 clickReveal(기존 sideReveal류 클릭공개),
   stepList(기존 warmup류 다단계 진행) 추가.
   ============================================================ */
"use strict";

var LAYOUTS = {
  coverCenter: {
    split:false,
    mount: function(main){ main.classList.add("hero-cover"); }
  },
  plain: {
    split:false,
    mount: function(main){}
  },
  splitRight: {
    split:true,
    mount: function(main, side){}
  }
};

/* 여러 모듈이 공유하는 "제목+본문" 렌더링 — 이 파일 안에서만 쓰는 작은 헬퍼입니다. */
function renderTitleBody(container, cfg, helpers){
  var el = helpers.el, esc = helpers.esc;
  if(cfg.title){
    container.appendChild(el("div","slide-title", esc(cfg.title).replace(/\n/g,"<br>")));
  }
  if(cfg.body && cfg.body.length){
    var bodyEl = el("div","slide-body");
    bodyEl.innerHTML = cfg.body.map(function(line){ return "<div class=\"ln\">"+esc(line)+"</div>"; }).join("");
    container.appendChild(bodyEl);
  }
}

var MODULES = {

  /* 정적 콘텐츠: 제목/본문/알약(pill) 목록을 한 번에 표시. 상호작용 없음. */
  static: {
    initState: function(){ return {}; },
    renderHost: function(main, side, slide, state, helpers){
      var el = helpers.el;
      var cfg = slide.moduleConfig || {};
      main.appendChild(el("div","slide-eyebrow","HR사업개발팀 · MONTHLY"));
      renderTitleBody(main, cfg, helpers);
      if(cfg.pills && cfg.pills.length){
        var row = el("div","pill-row");
        cfg.pills.forEach(function(p){ row.appendChild(el("span","pill", helpers.esc(p))); });
        main.appendChild(row);
      }
    }
  },

  /* 스텝 공개형: moduleConfig.messages 배열을 클릭할 때마다 다음 문구로 교체(누적X). */
  stepReveal: {
    initState: function(){ return {step:0}; },
    renderHost: function(main, side, slide, state, helpers){
      var el = helpers.el, esc = helpers.esc;
      var messages = (slide.moduleConfig && slide.moduleConfig.messages) || [];
      main.classList.add("warmup-slide");
      main.appendChild(el("div","slide-eyebrow","HR사업개발팀 · MONTHLY"));
      var wrap = el("div","warmup-content warmup-center");
      var msg = messages[state.step] || "";
      wrap.appendChild(el("div","slide-title", esc(msg).replace(/\n/g,"<br>")));
      main.appendChild(wrap);
      main.addEventListener("click", function(){
        if(state.step < messages.length-1){ state.step++; helpers.rerender(); }
      });
    }
  },

  /* 클릭 공개형: 왼쪽(main)은 항상 보이고, 오른쪽(side)은 클릭하기 전엔 힌트만,
     클릭하면 target/actual 비교 막대가 나타남. 기존 host.html의 sideReveal 패턴을
     레이아웃/모듈로 분리한 버전 — 음수 상세표시 등 엣지케이스는 단순화했습니다. */
  clickReveal: {
    initState: function(){ return {open:false}; },
    renderHost: function(main, side, slide, state, helpers){
      var el = helpers.el, esc = helpers.esc;
      var cfg = slide.moduleConfig || {};
      var reveal = cfg.reveal || {};

      main.appendChild(el("div","slide-eyebrow","HR사업개발팀 · MONTHLY"));
      renderTitleBody(main, cfg, helpers);
      if(cfg.caption){ main.appendChild(el("div","slide-caption", esc(cfg.caption))); }

      if(!side) return;
      var box = el("div","cr-box"+(state.open?" open":""));
      if(reveal.label){ box.appendChild(el("div","cr-label", esc(reveal.label))); }
      (reveal.lines||[]).forEach(function(line){ box.appendChild(el("div","cr-line", esc(line))); });

      if(!state.open){
        box.appendChild(el("div","cr-hint","👆 클릭하면 확인할 수 있어요"));
      } else {
        (reveal.groups||[]).forEach(function(g){
          var row = el("div","cr-row");
          row.appendChild(el("div","cr-row-label", esc(g.label)));
          var track = el("div","cr-track");
          var pct = g.target ? Math.max(0, Math.min(100, (g.actual/g.target)*100)) : 0;
          var fill = el("div","cr-fill"+(g.actual<0?" neg":"")); fill.style.width = pct+"%";
          track.appendChild(fill);
          row.appendChild(track);
          row.appendChild(el("div","cr-row-nums", "목표 "+g.target+(g.unit||"")+" · 현재 "+g.actual+(g.unit||"")));
          box.appendChild(row);
        });
      }
      box.addEventListener("click", function(){
        if(!state.open){ state.open = true; helpers.rerender(); }
      });
      side.appendChild(box);
    }
  },

  /* 다단계 진행형: 1) 문구를 한 줄씩 클릭으로 공개(intro) → 2) 다 나오면
     좌/우 두 목록을 항목별로 클릭할 때마다 하나씩 쌓아가며 채움(lists).
     기존 host.html의 warmup 패턴을 그대로 모듈로 옮긴 버전입니다. */
  stepList: {
    initState: function(){ return {phase:"intro", introCount:0, selfCount:0, interCount:0}; },
    renderHost: function(main, side, slide, state, helpers){
      var el = helpers.el, esc = helpers.esc;
      var cfg = slide.moduleConfig || {};
      var intro = cfg.intro || [];
      var lists = cfg.lists || [{title:"",items:[]},{title:"",items:[]}];
      var selfItems = lists[0].items, interItems = lists[1].items;
      var selfTitle = lists[0].title, interTitle = lists[1].title;

      main.classList.add("warmup-slide");

      if(state.phase==="intro"){
        var introWrap = el("div","warmup-content warmup-center");
        if(state.introCount===0){
          introWrap.appendChild(el("div","warmup-line warmup-placeholder","Warming Up!!"));
        }
        for(var ii=0; ii<state.introCount && ii<intro.length; ii++){
          introWrap.appendChild(el("div","warmup-line", esc(intro[ii]).replace(/\n/g,"<br>")));
        }
        main.appendChild(introWrap);
      } else {
        var listsRow = el("div","warmup-lists-row");
        var leftCol = el("div","warmup-content warmup-left");
        leftCol.appendChild(el("div","warmup-stage-title", esc(selfTitle)));
        for(var si=0; si<state.selfCount && si<selfItems.length; si++){
          leftCol.appendChild(el("div","warmup-item", esc((si+1)+". "+selfItems[si]).replace(/\n/g,"<br>")));
        }
        listsRow.appendChild(leftCol);

        var rightCol = el("div","warmup-content warmup-left");
        if(state.selfCount>=selfItems.length){
          rightCol.appendChild(el("div","warmup-stage-title", esc(interTitle)));
          for(var pi=0; pi<state.interCount && pi<interItems.length; pi++){
            rightCol.appendChild(el("div","warmup-item", esc((pi+1)+". "+interItems[pi]).replace(/\n/g,"<br>")));
          }
        }
        listsRow.appendChild(rightCol);
        main.appendChild(listsRow);
      }

      main.addEventListener("click", function(){
        if(state.phase==="intro"){
          if(state.introCount < intro.length){ state.introCount++; }
          else { state.phase = "lists"; state.selfCount = 1; }
        } else {
          if(state.selfCount < selfItems.length){ state.selfCount++; }
          else if(state.interCount < interItems.length){ state.interCount++; }
        }
        helpers.rerender();
      });
    }
  }

};
