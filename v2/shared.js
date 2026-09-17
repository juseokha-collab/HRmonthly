/* ============================================================
   v2/shared.js
   모듈화된 새 슬라이드 스키마: {id, act, layout, module, moduleConfig}
   - layout: 화면 구조(LAYOUTS의 키, v2/modules.js에 정의)
   - module: 콘텐츠/인터랙션 동작(MODULES의 키, v2/modules.js에 정의)
   - moduleConfig: 해당 모듈이 읽는 세부 데이터 (문구, 이미지 등)

   기존 루트 shared.js 는 전혀 건드리지 않고, 필요한 순수 헬퍼(el/esc)만
   이 파일에 별도로 복사해 둡니다. (기존 파일 무수정 원칙)
   ============================================================ */
"use strict";

var ACT_LABEL = {1:"PERSONAL INVESTOR",2:"INVESTMENT MEMO",3:"INVESTMENT COMMITTEE",4:"TO MYSELF"};

function el(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }

var SLIDES = [
  {id:"s00a", act:1, layout:"coverCenter", module:"stepReveal",
   moduleConfig:{messages:[
     "유현 매니저님 반갑습니다\n자리에서 일어나 주세요",
     "두손을 번쩍 들어주시고",
     "9월 Monthly 시작합니다 라고 외쳐주세요"
   ]}},

  {id:"s00", act:1, layout:"coverCenter", module:"static",
   moduleConfig:{
     title:"오랜만입니다!\n다시, 함께 모이는 시간",
     body:["여러 일정에 밀려 잠시 쉬어갔던 Monthly, 오랜만에 다시 엽니다.","자유롭게 서로의 생각을 나누는 시간이 되길 바랍니다."],
     pills:["반갑습니다","오랜만입니다","자유롭게","솔직하게","함께"]
   }},

  {id:"s00b", act:1, layout:"plain", module:"stepList",
   moduleConfig:{
     intro:[
       "지금 당신의 삶에서\n'있어서 참 다행이다'라고 생각하는\n사람이나, 생각하는 것은 무엇인가요?",
       "그것을 얻거나 지키기 위해\n내가 했던 노력은 무엇이었나요?"
     ],
     lists:[
       {title:"Self Awareness",items:[
         "우리는 매 순간 좋다/나쁘다, 중요하다/중요하지 않다고 판단합니다.\n당신은 무엇을 기준으로 판단합니까?",
         "수많은 판단의 기준 중에서\n당신에게 가장 중요한 Value 하나를 고른다면 무엇입니까?",
         "그 가치는 언제부터 나에게 중요해졌을까요?",
         "고등학교 시절로 돌아가서 다시 삶을 살게 된다면,\n가장 크게 달라질 당신의 선택은 무엇일까요?",
         "그때의 나는 왜 그렇게 선택했고, 지금의 나는 왜 다르게 선택하려 할까요?",
         "\"나는 지금 꽤 행복하다\"고 느끼게 하는 순간은 언제인가요?",
         "당신은 어떤 사람입니까? 한 단어로 표현한다면?",
         "다른 사람들이 당신을 한 단어로 기억한다면, 어떤 단어였으면 좋겠습니까?"
       ]},
       {title:"Interpersonal",items:[
         "사람을 선택하거나 함께 일할 때,\n당신이 가장 중요하게 보는 기준은 무엇입니까?",
         "그렇다면 주식·부동산·상품 같은 자산을 선택할 때\n가장 중요하게 보는 기준은 무엇입니까?",
         "사람을 판단하는 기준과 자산을 판단하는 기준은 같습니까, 다릅니까?\n왜 그렇습니까?",
         "사람을 믿는다는 것을 무엇이라고 생각합니까?",
         "지금까지 몇번의 사기(?)를 당해봤을까요?",
         "그게 사기가 맞나요?",
         "과대포장은 어디까지가 과대라고 할 수 있을까요?"
       ]}
     ]
   }},

  {id:"s13r", act:2, layout:"splitRight", module:"clickReveal",
   moduleConfig:{
     title:"2026년 HR사업개발팀 경영계획은...",
     body:["","","ㅁ 매출액 목표는 78.07억","ㅁ 직접이익 목표 5.1억","ㅁ 공헌이익 목표 35.32억"],
     caption:"우리가 지금 향하고 있는 숫자입니다.",
     reveal:{
       label:"9월 현재",
       lines:["2026년 9월 현재까지의"],
       groups:[
         {label:"매출액",target:78.07,actual:54.7,unit:"억"},
         {label:"직접이익",target:5.1,actual:-1.4,unit:"억"}
       ]
     }
   }}
];
