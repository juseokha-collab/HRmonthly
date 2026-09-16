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
   }}
];
