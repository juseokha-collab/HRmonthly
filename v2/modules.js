/* ============================================================
   v2/modules.js
   모듈 엔진의 핵심 레지스트리.

   LAYOUTS[slide.layout]  — 화면 "구조"만 담당. main 요소에 클래스를 붙이는 정도.
   MODULES[slide.module]  — 화면 "내용/인터랙션"을 담당.
     - initState(slide): 이 슬라이드에 진입할 때 필요한 최초 상태를 만들어 반환.
       (host.html의 render()가 slide.id가 바뀔 때만 이걸 호출하므로,
        goTo()가 모듈 종류를 몰라도 상태가 알아서 리셋됩니다.)
     - renderHost(main, slide, state, helpers): main(.stage-main) 안에 DOM을 채워 넣음.
       helpers = {el, esc, rerender} — rerender()는 host.html의 render()를 다시 호출.

   1단계 범위: 레이아웃 2종(coverCenter/plain), 모듈 2종(static/stepReveal).
   ============================================================ */
"use strict";

var LAYOUTS = {
  coverCenter: {
    mount: function(main){ main.classList.add("hero-cover"); }
  },
  plain: {
    mount: function(main){}
  }
};

var MODULES = {

  /* 정적 콘텐츠: 제목/본문/알약(pill) 목록을 한 번에 표시. 상호작용 없음. */
  static: {
    initState: function(){ return {}; },
    renderHost: function(main, slide, state, helpers){
      var el = helpers.el, esc = helpers.esc;
      var cfg = slide.moduleConfig || {};
      main.appendChild(el("div","slide-eyebrow","HR사업개발팀 · MONTHLY"));
      if(cfg.title){
        main.appendChild(el("div","slide-title", esc(cfg.title).replace(/\n/g,"<br>")));
      }
      if(cfg.body && cfg.body.length){
        var bodyEl = el("div","slide-body");
        bodyEl.innerHTML = cfg.body.map(function(line){ return "<div class=\"ln\">"+esc(line)+"</div>"; }).join("");
        main.appendChild(bodyEl);
      }
      if(cfg.pills && cfg.pills.length){
        var row = el("div","pill-row");
        cfg.pills.forEach(function(p){ row.appendChild(el("span","pill", esc(p))); });
        main.appendChild(row);
      }
    }
  },

  /* 스텝 공개형: moduleConfig.messages 배열을 클릭할 때마다 다음 문구로 교체(누적X). */
  stepReveal: {
    initState: function(){ return {step:0}; },
    renderHost: function(main, slide, state, helpers){
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
  }

};
