/* ============================================================
   shared.js
   공통 데이터(25장 슬라이드)와 순수 렌더링 헬퍼.
   host.html 과 index.html(참여자용) 양쪽에서 그대로 불러다 씁니다.
   ============================================================ */
"use strict";

var ACT_LABEL = {1:"PERSONAL INVESTOR",2:"INVESTMENT MEMO",3:"INVESTMENT COMMITTEE",4:"TO MYSELF"};

var SLIDES = [
{id:"s00",act:1,kind:"content",cover:true,title:"오랜만입니다!\n다시, 함께 모이는 시간",
 body:["여러 일정에 밀려 잠시 쉬어갔던 Monthly, 오랜만에 다시 엽니다.","자유롭게 서로의 생각을 나누는 시간이 되길 바랍니다."],
 visual:{type:"pills",items:["반갑습니다","오랜만입니다","자유롭게","솔직하게","함께"]}},

{id:"s00b",act:1,kind:"content",
 warmup:{
   bgImage:"images/warmup-bg.png",
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

{id:"s01",act:1,kind:"content",title:"투자! 무엇을? 얼마나?",
 videoSide:{youtubeId:"vjShPuqIaZo",start:56,end:87},
 body:["우리는 매일 투자합니다. 무언가에...","","돈, 시간, 에너지, 관계, 커리어 등 나와 관련된...","그런데... 내가 중요하다고 생각하는 것과","다른 사람이 중요하다고 생각하는 것이 항상 같지는 않다는 것입니다."],
 visual:{type:"pills",items:["MONEY","TIME","ENERGY","CAREER","RELATIONSHIP","ME"]},
 caption:"돈보다 더 중요한 투자는 무엇일까요?",
 note:["오늘은 회사 이야기를 조금 늦게 하겠습니다.","먼저 우리 자신을 하나의 투자자라고 생각해보겠습니다.","그리고 마지막에 이 질문을 우리 팀과 회사에 그대로 적용해보겠습니다."]},

{id:"s02",act:1,kind:"choice",showPie:true,title:"1억이 생긴다면,\n어디에 투자하시겠습니까?",
 body:["조건은 하나입니다.","1억을 반드시 투자해야 합니다.","","당신의 선택은?"],
 options:[{k:"kr_top",l:"국내주식(삼전닉스)"},{k:"kr_etc",l:"국내주식(기타)"},{k:"overseas",l:"해외주식/채권 등"},{k:"experience",l:"경험"},{k:"career",l:"커리어"},{k:"health",l:"건강"},{k:"etc",l:"기타",note:true,noteLabel:"기타를 선택하셨다면, 어떤 항목인가요?"}],
 caption:"같은 1억원, 다른 선택! Why?",
 note:["어떤 선택이 맞는지가 중요한 게 아닙니다.","왜 그걸 선택했는지가 중요합니다.","여기서부터 사람마다 판단 기준이 다르다는 걸 볼 수 있습니다."]},

{id:"s03",act:1,kind:"choice",title:"투자의 목적. Why?",
 body:["투자를 결정할 때 우리는 서로 다른 질문을 합니다.","일반적으로는 '성장할까? 안전할까? 돈을 벌어줄까?'","그 밖에도 — 재미, 의미, 내가 잘 아는가, 내가 원하는 삶과 일치하는가."],
 sideExtraImage:{src:"images/slide04-ref.png",alt:"참고 자료"},
 visual:{type:"triangle",vertices:["성장성","안정성","수익성"],orbit:["재미","의미","시간","자유","인정","경험"]},
 options:[{k:"growth",l:"성장성"},{k:"stability",l:"안정성"},{k:"profit",l:"수익성"}],
 caption:"각자의 현재 상태와 가치관의 차이가 판단의 차이",
 note:["여러분은 성장성, 안정성, 수익성 중 무엇을 가장 중요하게 보시나요?","그리고 이 기준이 회사에서 일할 때도 똑같이 작동하고 있을까요?"]},

{id:"s04",act:1,kind:"choice",title:"같은 정보인데... 달라지는 판단",
 body:["회사 A: 매출 성장률 +30%, 시장 규모의 확장성, 높은 변동성, 현재 적자.","여러분이라면 이 회사에 투자하시겠습니까?","","하이닉스는 작년 이맘 때 35만원","하이닉스는 3개월전 298만원"],
 bodyImage:{src:"images/slide06-hynix.png",alt:"참고 자료"},
 options:[{k:"strong",l:"적극 투자",em:"🟢"},{k:"partial",l:"일부 투자",em:"🟡"},{k:"watch",l:"관망",em:"⚪"},{k:"no",l:"투자하지 않음",em:"🔴"}],
 caption:"개인의 경험과 관점/가치관에 따라 달라지는 기준",
 note:["투자자 A에게는 '성장성'이 보이고, 투자자 B에게는 '위험성'이 보입니다.","둘 중 누가 틀렸다고 말하기 어렵습니다."]},

{id:"s05",act:1,kind:"content",bgCenter:true,title:"달라도 너무 다른 내 기대와 시장 가치",
 body:["우리가 기대하는 것과 실제로 발생하는 결과 사이에는 차이가 있습니다.","그리고 그 사이에는 — 정보 · 기대 · 심리 · 타인의 평가 — 가 개입합니다."],
 visual:{type:"flow",nodes:["실제 가치","내가 보는 가치","시장에 형성된 기대","시장 가치"]},
 caption:"좋은 자산과 좋은 평가를 받는 자산이 항상 같지는 않다.",
 note:["이게 오늘 이야기하고 싶은 핵심입니다.","내가 생각하는 가치와 남들이 평가하는 가치가 다를 수 있습니다.","그런데 이건 투자뿐만 아니라 사람에게도 그대로 적용됩니다."]},

{id:"s06",act:1,kind:"dualscale",title:"나를 한 번 평가해 볼까요?",
 body:["현재 나의 회사 내 시장가치는 100점 만점에 몇 점일까요?","그리고 한 번 더","— 내가 생각하기에 다른 사람들이 평가하는 나의 점수는 몇 점일까요?"],
 fields:[{k:"self",l:"① 내가 평가하는 나"},{k:"perceived",l:"② 내가 예상하는 타인의 평가"}],
 visual:{type:"johari",axisY:"자기 노출",axisX:"피드백 수용",quadrants:[
   {label:"공개 영역",desc:"나도 알고\n남도 알고"},
   {label:"눈먼 영역",desc:"나는 모르고\n남은 알고"},
   {label:"비밀 영역",desc:"나는 알고\n남은 모르고"},
   {label:"미지 영역",desc:"나도 모르고\n남도 모르고"}
 ]},
 caption:"Self Value vs. Perceived Value",
 note:["두 점수가 같습니까?","차이가 있다면 왜 차이가 날까요?"]},

{id:"s07",act:1,kind:"content",title:"내가 보는 나, 남이 보는 나",
 imageSide:{src:"images/mirror-self-image.png",alt:"거울 속에 비치는 자신의 모습"},
 body:["우리는 나 자신을 평가할 때 다른 사람이 알 수 없는 정보까지 알고 있습니다","— 노력, 고민, 실패, 의도, 과정.","","반면 다른 사람은 주로 결과, 행동, 영향, 함께 일한 경험을 봅니다."],
 visual:{type:"matrix2",colHead:["남이 높게 평가","남이 낮게 평가"],rowHead:["내가 높게 평가","내가 낮게 평가"],cells:[["명확한 강점","평가 Gap"],["Hidden Value","개선 영역"]]},
 caption:"평가의 차이는 '서로 다른 정보'에서 시작",
 note:["내가 잘한다고 생각하지만 남들이 잘 모르는 능력이 있을 수 있습니다.","반대로 내가 별것 아니라고 생각하지만 남들이 높게 평가하는 것도 있습니다."]},

{id:"s08",act:1,kind:"content",title:"최종(?) 가치는 누가 결정하는가?",
 body:["내가 잘하는 것 ≠ 회사가 원하는 것","회사가 원하는 것 ≠ 고객이 비용을 부담하는 것","내가 생각하는 가치 ≠ 시장이 평가하는 가치"],
 visual:{type:"chain",nodes:[{n:"나",v:"내가 만드는 가치"},{n:"회사",v:"조직이 인정하는 가치"},{n:"고객 / 시장",v:"시장이 지불하는 가치"}]},
 rightPanel:{
   title:"손해인 커리어에서 배우는 직장인의 성장 공식",
   tagline:"「전문성이 없는 사람」이 아니라 「연결할 수 있는 사람」이 되다",
   timelineLayout:"grid",
   timeline:[
     {desc:"20대의 선택 문과 출신\n→ NVIDIA 인턴"},
     {desc:"모르는 것을 숨기지 않고 질문\n기술자에게 배우고, AI·GPU를 이해"},
     {desc:"기술을 만드는 사람 × 기술을 이해하는 사람 × 사람에게 설명하는 사람"},
     {desc:"마케팅 → 개발자 커뮤니티 → AI 교육\n→ 사업개발로 역할 확장"}
   ],
   formula:{resultLine:"2026년 업스테이지 AI 교육 부문 대표/부사장 손해인의 성장 공식",equation:"성장 = 새로운 경험 × 학습하는 태도 × 나만의 연결능력"},
   keyQuestion:{q1:"나는 지금 무엇을 잘하는가? 보다 중요한 질문은",q2:"“내가 가진 경험들을 무엇과 연결하면 새로운 가치가 만들어지는가?”"}
 },
 caption:"가치는 만들어지는 것과 동시에 평가되는 것.",
 note:["여기서부터 개인의 이야기가 조직의 이야기로 연결됩니다."]},

{id:"s09",act:1,kind:"content",title:"우리는 서로 다른 정보를 가지고 평가한다",
 body:[],
 visual:{type:"radial",center:"평가",spokes:[
   {label:"나",desc:"노력 · 과정 · 고민"},
   {label:"동료",desc:"협업 · 관계 · 실행"},
   {label:"리더",desc:"결과 · 영향 · 성장"},
   {label:"고객",desc:"문제 해결 · 체감 가치"},
   {label:"시장",desc:"성과 · 경쟁력 · 가격"}
 ]},
 caption:"평가의 차이는 '누가 맞느냐'보다 '무엇을 보고 있느냐'의 차이에서 발생.",
 note:["내가 억울했던 평가가 있다면, 상대방은 나에게 없는 정보를 가지고 있었을 수도 있습니다."]},

{id:"s10",act:1,kind:"content",imageSide:{src:"images/slide12-ref.png",alt:"참고 이미지",shape:"square"},title:"실제 가치보다 더 많이 반영되는 '기대'",
 body:["시장에서는 실제 가치뿐 아니라","'다른 사람들이 앞으로 어떻게 평가할 것인가'가 현재 판단에 영향."],
 visual:{type:"formula",terms:["실제 가치","미래에 대한 기대","대중의 관심"],result:"현재의 시장 평가"},
 caption:"시장은 현재의 가치보다 미래에 대한 기대를 먼저 가격에 반영하기도 한다.",
 note:["조직에서도 비슷합니다.","AI를 잘하는 사람, 영업을 잘하는 사람, 데이터를 잘하는 사람…","그런데 우리가 정말 중요하게 생각하는 것과 '요즘 중요하다고 하는 것'은 항상 같을까요?"]},

{id:"s11",act:1,kind:"scale",hidePrompt:true,title:"'나'를 '주가'처럼 평가 한다면?",
 body:["현재 나의 주가 = 100","그렇다면, 1년 후 나의 주가는?"],
 scale:{unit:"",promptShort:"1년 후 목표 주가 (현재=100 기준)",min:0,max:300},
 caption:"시장이 평가하는 나의 미래가치를 어떻게 높일 것인가?",
 note:["열심히 하는 것과 주가가 오르는 것은 같은 이야기가 아닐 수 있습니다.","내가 투자한 시간과 에너지가 시장가치로 전환되고 있는지를 봐야 합니다."]},

{id:"s13",act:2,kind:"numquiz",hidePrompt:true,title:"HR사업개발팀은 얼마로 평가할 수 있을까요?",
 body:["여러분은 우리 팀의 2026년 목표를 얼마나 기억하고 있을까요?","숫자를 직접 입력해보세요 — 정답은 다음 화면에서 공개됩니다.","이제부터 우리는 '팀원'이 아니라 '투자자'의 시선으로 우리 팀을 보겠습니다."],
 quiz:{groups:[
   {k:"revenue",label:"2026 매출액 목표는? 목표 달성율은?",targetLabel:"매출액 목표",targetUnit:"억",rateLabel:"목표 달성율",rateUnit:"%"},
   {k:"profit",label:"2026 직접이익 목표는? 목표 달성율은?",targetLabel:"직접이익 목표",targetUnit:"억",rateLabel:"목표 달성율",rateUnit:"%"}
 ]},
 note:["여기서는 정답보다 우리 팀의 숫자에 얼마나 관심이 있었는지를 보는 시간입니다.","다음 화면에서 실제 목표를 공개합니다."]},

{id:"s13r",act:2,kind:"content",title:"2026년 HR사업개발팀 경영계획은...",
 body:["","","ㅁ 매출액 목표는 78.07억","ㅁ 직접이익 목표 5.1억","ㅁ 공헌이익 목표 35.32억"],
 caption:"우리가 지금 향하고 있는 숫자입니다.",
 sideReveal:{label:"9월 현재",lines:["2026년 9월 현재까지의"],
   chart:{groups:[
     {label:"매출액",target:78.07,actual:54.7,unit:"억"},
     {label:"직접이익",target:5.1,actual:-1.4,unit:"억"}
   ]}
 },
 note:["방금 여러분이 예상한 숫자와 비교해보세요.","이 숫자를 기억하는 것이 오늘 이 시간의 작은 목표입니다."]},

{id:"s14",act:2,kind:"scale",hidePrompt:true,bgCenter:true,title:"① 우리 팀의 성장 가능성?",
 body:["현재의 크기보다 중요한 것은 앞으로 만들어낼 수 있는 크기입니다.","주요 지표: 매출 · 고객 · 사업 규모 · 신규 BM"],
 visual:{type:"growthbars",scaleMax:80,series:[
   {year:"2024",dual:true,base:48,total:76.5,revealLabel:"28.3억",valueLabel:"76.5억"},
   {year:"2025",dual:true,base:61,total:65.4,revealLabel:"4.1억",valueLabel:"65.4억"},
   {year:"2026(계획)",dual:false,total:78.1,valueLabel:"78.1억"},
   {year:"2027",question:true}
 ]},
 scale:{unit:"점",promptShort:"우리 팀의 성장성 점수",min:0,max:100},
 caption:"과거 실적은 증명, 성장성은 미래에 대한 질문.",
 note:[]},

{id:"s15",act:2,kind:"wordcloud",hidePrompt:true,title:"② 안정성 : 이대로 괜찮은거야?",
 body:["우리가 아니면 안되는건가? 반복 가능성 검증","왜 우리인가? Core Competency","특정 사업에 지나치게 의존하고 있지는 않은가?","사람이 바뀌어도 사업이 지속되는가?"],
 wc:{prompt:"우리 팀의 가장 큰 리스크는 무엇이라고 생각합니까?"},
 caption:"바람직한 BM 구조는 안정과 성장을 동시에...",
 note:[]},

{id:"s16",act:2,kind:"content",title:"③ 수익성 : '많이'가 아니라 '잘' !",
 body:["매출 성장 ≠ 이익 성장","바쁘게 일함 ≠ 높은 생산성","고객이 많음 ≠ 좋은 BM"],
 visual:{type:"hbarsplit",scaleMax:25,legend:[{label:"매출",color:"#6366F1"},{label:"공헌이익",color:"#14B8A6"}],items:[
   {label:"시스템-하이닉스",revenue:22.1,profit:11.6},
   {label:"집합-PJT(SKA)",revenue:17.2,profit:0.9},
   {label:"행사·특강",revenue:7.1,profit:1.8},
   {label:"시스템-기타",revenue:8.8,profit:5.5},
   {label:"자체콘텐츠",revenue:8.5,profit:7.5},
   {label:"러닝메이트 정기",revenue:6.1,profit:0.9},
   {label:"SKT(VLS·동반)",revenue:5.8,profit:5.6},
   {label:"러닝메이트 전사",revenue:2.5,profit:1.6}
 ]},
 caption:"우리가 만든 매출 중, 무엇이 진짜 기업가치로 남는가?",
 note:["이 부분은 특히 사업개발팀이 냉정하게 봐야 합니다.","매출을 만드는 능력과 좋은 BM을 만드는 능력은 다릅니다."]},

{id:"s19",act:2,kind:"choiceplus",hidePrompt:true,title:"HR개발팀 구성원 여러분\n우리 팀에 투자하시겠습니까?",
 body:[],
 visual:{type:"triangle",vertices:["성장성","안정성","수익성"],orbit:["재미","의미","시간","자유","인정","경험"]},
 options:[{k:"strong",l:"적극 투자",em:"🟢"},{k:"watch-in",l:"투자하지만 지켜본다",em:"🟡"},{k:"proof",l:"조금 더 증명이 필요하다",em:"⚪"},{k:"no",l:"지금은 투자하지 않는다",em:"🔴"}],
 followup:"투자하지 않는다면, 딱 하나 무엇이 바뀌어야 합니까?",
 caption:"비판을 견디는 팀이 아니라, 비판을 성장의 정보로 바꾸는 팀.",
 note:[]},

{id:"s20",act:3,kind:"content",title:"2026년의 성과 기반, 2027년 우리가 가려고 하는 방향과 속도는?",
 body:["2026년의 성과를 기반으로 2027년에는 선택과 집중이 필요."],
 visual:{type:"prioritylist",items:[
   {tag:"최우선",title:"자체콘텐츠 목표 만회 (최대 이익 레버)",desc:"1~7월 3.85억으로 계획 8.5억 대비 미달 전망. 공헌이익률 88%로 매출 1억이 곧 이익 0.9억 — 잔여 기간 이익 개선의 최대 레버."},
   {tag:"이익방어",title:"러닝메이트 축소 대응 · 목표 재설정",desc:"mySUNI 분담사 확대로 정기교육 수요 축소(계획 6.1억 vs 25년 3.2억). 이익률 14%라 이익 영향은 제한적 — 목표 현실화 및 전사교육 실행에 집중."},
   {tag:"신시장",title:"러닝메이트 Lite 고객 확보 (8월 런칭 완료)",desc:"중소기업 구독 고객 확보가 28년 HRD아카이브 고객 기반의 선행 학습. 산업안전팀 코웨이 채널 활용."},
   {tag:"수주",title:"I-Zen 참여 기회 확보 · 하이닉스 완결",desc:"I-Zen(SK그룹 AI 우수인력 사전 확보 프로젝트) 27년 시행 예정 - 기획인력 우선 투입. 하이닉스 Pit 연말 완결 및 27년 인디애나 발주 대비."},
   {tag:"준비",title:"HRD아카이브 27년 개발 사전 준비",desc:"26년은 준비에 집중 — CP 제휴 구조 재설계로 변동비 65% 절감안 마련, K-뉴딜 27년 차기 공모 협업으로 공공 레퍼런스 확보."}
 ]},
 caption:"'더 많이 하는 것'이 아니라 '어디에 더 투자할 것인가' 방향 결정.",
 note:[]},

{id:"s25",act:4,kind:"sentence",title:"2027년의 나에게",
 body:["나는 앞으로 무엇에 투자하겠습니다.","시간 · 역량 · 경험 · 관계 · 건강 · 돈 · 용기 · 새로운 도전"],
 sentence:{prefix:"2027년의 나에게 투자한다면, 나는",suffix:"에 투자하겠다."},
 caption:"결국 가장 중요한 투자 대상은 '나 자신'이다.",
 note:["오늘 회사 이야기를 많이 했지만, 사실 오늘 이야기의 주인공은 회사가 아니었습니다.","우리가 어디에 시간을 쓰고, 어떤 일을 선택하고, 무엇을 중요하게 생각하고, 다른 사람의 평가를 어떻게 받아들이는지에 대한 이야기였습니다.","HR사업개발팀도 결국 사람들의 시간과 역량이 투자되는 하나의 자산입니다.","2027년에는 우리 팀의 가치도, 여러분 한 사람 한 사람의 가치도 지금보다 더 높아졌으면 좋겠습니다."]}
];

var INTERACTIVE_KINDS = ["choice","scale","dualscale","wordcloud","dualwordcloud","allocation","choiceplus","openthree","sentence","numquiz"];

function slideById(id){
  for(var i=0;i<SLIDES.length;i++) if(SLIDES[i].id===id) return SLIDES[i];
  return null;
}

/* ============================= DOM HELPERS ============================= */
function el(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }

/* ============================= VISUALS (content diagrams — host page only, static/editable blanks) ============================= */
function renderVisual(container, v, blankFn, extra){
  if(!v) return;
  extra = extra || {};
  if(v.type==="pills"){
    var pr = el("div","pill-row");
    v.items.forEach(function(t){ pr.appendChild(el("span","pill",esc(t))); });
    container.appendChild(pr);
  } else if(v.type==="triangle"){
    var tw = el("div","triangle");
    var lines = el("div","triangle-lines");
    lines.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;"><polygon points="50,10 12,88 88,88" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="1" stroke-dasharray="4 3"/></svg>';
    tw.appendChild(lines);
    tw.appendChild(el("span","vx top",esc(v.vertices[0])));
    tw.appendChild(el("span","vx bl",esc(v.vertices[1])));
    tw.appendChild(el("span","vx br",esc(v.vertices[2])));
    var positions=[["47%","26%"],["60%","39%"],["32%","53%"],["62%","63%"],["47%","70%"],["35%","76%"]];
    var orbitColors=["#F472B6","#60A5FA","#34D399","#FBBF24","#A78BFA","#FB7185"];
    v.orbit.forEach(function(w,i){ var s=el("span","orbit",esc(w)); var p=positions[i%positions.length]; s.style.left=p[0]; s.style.top=p[1]; s.style.color=orbitColors[i%orbitColors.length]; tw.appendChild(s); });
    container.appendChild(tw);
  } else if(v.type==="flow"){
    var fc = el("div","flow-chain");
    v.nodes.forEach(function(n,i){ if(i>0) fc.appendChild(el("div","flow-arrow","↓")); fc.appendChild(el("div","flow-node",esc(n))); });
    container.appendChild(fc);
  } else if(v.type==="matrix2"){
    var t = el("table","matrix2");
    var thead = el("tr"); thead.appendChild(el("th","",""));
    v.colHead.forEach(function(c){ thead.appendChild(el("th","",esc(c))); }); t.appendChild(thead);
    v.rowHead.forEach(function(r,ri){
      var tr = el("tr"); tr.appendChild(el("th","",esc(r)));
      v.cells[ri].forEach(function(c){ tr.appendChild(el("td",ri===0?"hi":"",esc(c))); });
      t.appendChild(tr);
    });
    container.appendChild(t);
  } else if(v.type==="chain"){
    var fc2 = el("div","flow-chain");
    v.nodes.forEach(function(n,i){
      if(i>0) fc2.appendChild(el("div","flow-arrow","↓ "+esc(n.v)));
      fc2.appendChild(el("div","flow-node","<b>"+esc(n.n)+"</b>"));
    });
    container.appendChild(fc2);
  } else if(v.type==="table"){
    var tt = el("table","data-table");
    var hr = el("tr"); v.head.forEach(function(h){ hr.appendChild(el("th","",esc(h))); }); tt.appendChild(hr);
    v.rows.forEach(function(r){ var tr=el("tr"); r.forEach(function(c){ tr.appendChild(el("td","",esc(c))); }); tt.appendChild(tr); });
    container.appendChild(tt);
  } else if(v.type==="formula"){
    var fw = el("div","flow-chain");
    v.terms.forEach(function(t,i){ if(i>0) fw.appendChild(el("div","flow-arrow","+")); fw.appendChild(el("div","flow-node",esc(t))); });
    fw.appendChild(el("div","flow-arrow","↓"));
    fw.appendChild(el("div","flow-node","<b>"+esc(v.result)+"</b>"));
    container.appendChild(fw);
  } else if(v.type==="bridge"){
    var bw = el("div","card-row");
    var lc = el("div","value-card"); lc.appendChild(el("h4","",esc(v.leftLabel)));
    v.left.forEach(function(w){ lc.appendChild(el("p","",esc(w))); });
    var rc = el("div","value-card"); rc.appendChild(el("h4","",esc(v.rightLabel)));
    v.right.forEach(function(w){ rc.appendChild(el("p","",esc(w))); });
    bw.appendChild(lc); bw.appendChild(rc); container.appendChild(bw);
    var q = el("div","slide-title", esc(v.center).replace(/\n/g,"<br>")); q.style.marginTop="14px"; q.style.fontSize="24px";
    container.appendChild(q);
  } else if(v.type==="stats"){
    var sg = el("div","stat-grid");
    v.items.forEach(function(it){
      var tile = el("div","stat-tile");
      tile.appendChild(el("div","st-k",esc(it.l)));
      var vwrap = el("div","st-v");
      if(blankFn) vwrap.appendChild(blankFn(it.k,{placeholder:it.text?"내용 입력":"0"}));
      if(it.unit) vwrap.appendChild(document.createTextNode(it.unit));
      tile.appendChild(vwrap);
      sg.appendChild(tile);
    });
    container.appendChild(sg);
  } else if(v.type==="growthbars"){
    var scaleMax = v.scaleMax || 100;
    var step = v.step || 10;
    var ticks = []; for(var tv=0; tv<=scaleMax; tv+=step) ticks.push(tv);

    var outer = el("div","gbars-outer");
    var chartRow = el("div","gbars-chart-row");

    var axis = el("div","gbar-axis");
    ticks.forEach(function(tv){
      var tick = el("div","gbar-tick",String(tv)); tick.style.bottom = (tv/scaleMax*100)+"%";
      axis.appendChild(tick);
    });
    chartRow.appendChild(axis);

    var plot = el("div","gbar-plot");
    var grid = el("div","gbar-grid");
    ticks.forEach(function(tv){
      var line = el("div","gbar-gridline"); line.style.bottom = (tv/scaleMax*100)+"%";
      grid.appendChild(line);
    });
    plot.appendChild(grid);

    var barsRow = el("div","gbar-bars-row");
    var animFills = [];
    v.series.forEach(function(s){
      var track = el("div","gbar-track");
      if(s.question){
        track.appendChild(el("div","gbar-q","?"));
        if(extra.onToggleReveal){
          track.classList.add("gbar-clickable");
          track.addEventListener("click", extra.onToggleReveal);
        }
      } else {
        var baseVal = s.dual ? s.base : s.total;
        var totalVal = s.total;
        var basePct = Math.max(0,Math.min(100, baseVal/scaleMax*100));
        var totalPct = Math.max(0,Math.min(100, totalVal/scaleMax*100));
        var baseFill = el("div","gbar-fill base");
        track.appendChild(baseFill);
        animFills.push({el:baseFill, pct:basePct});
        if(s.dual){
          var overlayFill = el("div","gbar-fill overlay");
          overlayFill.style.bottom = basePct+"%";
          track.appendChild(overlayFill);
          animFills.push({el:overlayFill, pct:Math.max(0,totalPct-basePct)});
        }
        if(s.valueLabel){
          var vlbl = el("div","gbar-value-label", esc(s.valueLabel));
          vlbl.style.bottom = totalPct+"%";
          track.appendChild(vlbl);
        }
        if(s.revealLabel){
          var lbl = el("div","gbar-reveal-label", esc(s.revealLabel));
          if(!extra.revealOpen) lbl.style.display = "none";
          track.appendChild(lbl);
        }
      }
      barsRow.appendChild(track);
    });
    plot.appendChild(barsRow);
    chartRow.appendChild(plot);
    outer.appendChild(chartRow);
    setTimeout(function(){ animFills.forEach(function(f){ f.el.style.height = f.pct+"%"; }); }, 100);

    var labelsRow = el("div","gbars-labels-row");
    labelsRow.appendChild(el("div","gbar-axis-spacer"));
    var labelsInner = el("div","gbar-labels-inner");
    v.series.forEach(function(s){ labelsInner.appendChild(el("div","gbar-year",esc(s.year))); });
    labelsRow.appendChild(labelsInner);
    outer.appendChild(labelsRow);

    container.appendChild(outer);
  } else if(v.type==="hbarsplit"){
    var hMax = v.scaleMax || 100;
    var hOuter = el("div","hbar-outer");
    var hLegend = el("div","gb-legend");
    v.legend.forEach(function(l){
      var item = el("span","gb-legend-item");
      var sw = el("span","gb-swatch"); sw.style.background = l.color;
      item.appendChild(sw); item.appendChild(document.createTextNode(l.label));
      hLegend.appendChild(item);
    });
    hOuter.appendChild(hLegend);

    var hRows = el("div","hbar-rows");
    var hFills = [];
    v.items.forEach(function(it){
      var row = el("div","hbar-row");
      row.appendChild(el("div","hbar-label", esc(it.label)));
      var track = el("div","hbar-track");
      var revFill = el("div","hbar-fill hbar-revenue"); revFill.style.background = v.legend[0].color;
      var profFill = el("div","hbar-fill hbar-profit"); profFill.style.background = v.legend[1].color;
      track.appendChild(revFill); track.appendChild(profFill);
      row.appendChild(track);
      var valWrap = el("div","hbar-values");
      valWrap.appendChild(el("span","hbar-val-rev", String(it.revenue)));
      valWrap.appendChild(el("span","hbar-val-prof", String(it.profit)));
      row.appendChild(valWrap);
      hRows.appendChild(row);
      hFills.push({el:revFill, pct:Math.max(0,Math.min(100,it.revenue/hMax*100))});
      hFills.push({el:profFill, pct:Math.max(0,Math.min(100,it.profit/hMax*100))});
    });
    hOuter.appendChild(hRows);
    container.appendChild(hOuter);
    setTimeout(function(){ hFills.forEach(function(f){ f.el.style.width = f.pct+"%"; }); }, 100);
  } else if(v.type==="groupedbars"){
    var gscaleMax = v.scaleMax || 100;
    var gstep = v.step || 10;
    var gticks = []; for(var gtv=0; gtv<=gscaleMax; gtv+=gstep) gticks.push(gtv);

    var gouter = el("div","gbars-outer2");
    var glegend = el("div","gb-legend");
    v.legend.forEach(function(l){
      var item = el("span","gb-legend-item");
      var sw = el("span","gb-swatch"); sw.style.background = l.color;
      item.appendChild(sw); item.appendChild(document.createTextNode(l.label));
      glegend.appendChild(item);
    });
    gouter.appendChild(glegend);

    var gchartRow = el("div","gbars-chart-row2");
    var gplot = el("div","gbar-plot2");
    var ggrid = el("div","gbar-grid2");
    gticks.forEach(function(tv){
      var gline = el("div","gbar-gridline2"); gline.style.bottom = (tv/gscaleMax*100)+"%";
      ggrid.appendChild(gline);
    });
    gplot.appendChild(ggrid);

    var gbarsRow = el("div","gbar-bars-row2");
    v.groups.forEach(function(grp){
      var col = el("div","gbar-col2");
      var barsWrap = el("div","gbar-bars-wrap2");
      grp.values.forEach(function(val,vi){
        var pct = Math.max(0,Math.min(100,val/gscaleMax*100));
        var barCol = el("div","gbar-single");
        var track = el("div","gbar-single-track");
        var fill = el("div","gbar-single-fill");
        fill.style.height = pct+"%";
        fill.style.background = v.legend[vi] ? v.legend[vi].color : "#888";
        track.appendChild(fill);
        barCol.appendChild(track);
        var label = el("div","gbar-val-label",String(val));
        label.style.bottom = pct+"%";
        barCol.appendChild(label);
        barsWrap.appendChild(barCol);
      });
      col.appendChild(barsWrap);
      col.appendChild(el("div","gbar-cat-label2", esc(grp.label)));
      gbarsRow.appendChild(col);
    });
    gplot.appendChild(gbarsRow);
    gchartRow.appendChild(gplot);
    gouter.appendChild(gchartRow);
    container.appendChild(gouter);
  } else if(v.type==="bizTable"){
    var bt = el("table","data-table");
    var hr2 = el("tr"); hr2.appendChild(el("th","","사업")); v.cols.forEach(function(c){ hr2.appendChild(el("th","",esc(c))); }); bt.appendChild(hr2);
    v.rows.forEach(function(r){
      var tr = el("tr"); tr.appendChild(el("td","","<b>"+esc(r)+"</b>"));
      v.cols.forEach(function(c){ var td=el("td",""); if(blankFn) td.appendChild(blankFn(v.keyPrefix+"-"+r+"-"+c)); tr.appendChild(td); });
      bt.appendChild(tr);
    });
    container.appendChild(bt);
  } else if(v.type==="twocol"){
    var tc = el("table","data-table");
    var hr3 = el("tr"); v.colHead.forEach(function(h){ hr3.appendChild(el("th","",esc(h))); }); tc.appendChild(hr3);
    for(var i=0;i<v.rows;i++){
      var tr = el("tr");
      var td1=el("td",""); if(blankFn) td1.appendChild(blankFn(v.keyPrefix+"-l"+i,{placeholder:"우리 생각"})); tr.appendChild(td1);
      var td2=el("td",""); if(blankFn) td2.appendChild(blankFn(v.keyPrefix+"-r"+i,{placeholder:"고객 반응"})); tr.appendChild(td2);
      tc.appendChild(tr);
    }
    container.appendChild(tc);
  } else if(v.type==="three"){
    var thc = el("div","three-col");
    v.cols.forEach(function(c){
      var box = el("div","tc"); box.appendChild(el("h4","",esc(c.h)));
      var ul = el("ul"); c.items.forEach(function(it){ ul.appendChild(el("li","",esc(it))); }); box.appendChild(ul);
      thc.appendChild(box);
    });
    container.appendChild(thc);
  } else if(v.type==="radial"){
    var rsize = 460, rradius = 190;
    var rwrap = el("div","radial-wrap"); rwrap.style.width=rsize+"px"; rwrap.style.height=rsize+"px";
    rwrap.appendChild(el("div","radial-center", esc(v.center)));
    var rcx = rsize/2, rcy = rsize/2;
    v.spokes.forEach(function(s,i){
      var angleDeg = -90 + i*(360/v.spokes.length);
      var rad = angleDeg*Math.PI/180;
      var nx = rcx + rradius*Math.cos(rad);
      var ny = rcy + rradius*Math.sin(rad);
      var line = el("div","radial-line");
      line.style.width = rradius+"px"; line.style.left = rcx+"px"; line.style.top = rcy+"px";
      line.style.transform = "rotate("+angleDeg+"deg)";
      rwrap.appendChild(line);
      var node = el("div","radial-node");
      node.style.left = nx+"px"; node.style.top = ny+"px";
      node.appendChild(el("div","radial-dot"));
      node.appendChild(el("div","radial-oval", esc(s.label)));
      node.appendChild(el("div","radial-desc", esc(s.desc)));
      rwrap.appendChild(node);
    });
    container.appendChild(rwrap);
  } else if(v.type==="johari"){
    var jwrap = el("div","johari-wrap");
    jwrap.appendChild(el("div","johari-axis-y",esc(v.axisY||"")));
    var jcol = el("div","johari-col");
    var jgrid = el("div","johari-grid");
    v.quadrants.forEach(function(q){
      var cell = el("div","johari-cell");
      cell.appendChild(el("div","jc-label",esc(q.label)));
      cell.appendChild(el("div","jc-desc",esc(q.desc)));
      jgrid.appendChild(cell);
    });
    jcol.appendChild(jgrid);
    jcol.appendChild(el("div","johari-axis-x",esc(v.axisX||"")));
    jwrap.appendChild(jcol);
    container.appendChild(jwrap);
  } else if(v.type==="prioritylist"){
    var plList = el("div","pl-list");
    v.items.forEach(function(it){
      var row = el("div","pl-item");
      var tag = el("div","pl-tag",esc(it.tag));
      row.appendChild(tag);
      var pbody = el("div","pl-body");
      pbody.appendChild(el("div","pl-title",esc(it.title)));
      pbody.appendChild(el("div","pl-desc",esc(it.desc)));
      row.appendChild(pbody);
      plList.appendChild(row);
    });
    container.appendChild(plList);
  } else if(v.type==="cards"){
    var cr = el("div","card-row");
    v.items.forEach(function(it){
      var c = el("div","value-card"); c.appendChild(el("h4","",esc(it.t))); c.appendChild(el("p","",esc(it.d))); cr.appendChild(c);
    });
    container.appendChild(cr);
  }
}

function wordCloudEl(words){
  var counts = {};
  words.forEach(function(w){ var k=String(w||"").trim(); if(!k) return; counts[k]=(counts[k]||0)+1; });
  var keys = Object.keys(counts).sort(function(a,b){return counts[b]-counts[a];});
  var max = Math.max.apply(null, keys.map(function(k){return counts[k];}).concat([1]));
  var c = el("div","cloud");
  if(!keys.length){ c.appendChild(el("div","empty-note","아직 입력된 응답이 없습니다")); return c; }
  keys.forEach(function(k){
    var size = 13 + (counts[k]/max)*22;
    var t = el("span","tag", esc(k)+(counts[k]>1?" ×"+counts[k]:""));
    t.style.fontSize = size+"px"; t.style.fontWeight = counts[k]>1?"600":"400";
    c.appendChild(t);
  });
  return c;
}
