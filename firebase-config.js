/* ============================================================
   firebase-config.js
   ⚠️ 이 파일만 수정하면 됩니다.
   Firebase 콘솔(console.firebase.google.com) → 프로젝트 설정 →
   "내 앱" → 웹 앱(</>) 등록 후 나오는 firebaseConfig 값을
   아래 FIREBASE_CONFIG 자리에 그대로 붙여넣으세요.
   ============================================================ */
"use strict";

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCk9VgJiKMnY63cxMPEjbeqXdcRPQbaogc",
  authDomain: "hrmonthly.firebaseapp.com",
  projectId: "hrmonthly",
  storageBucket: "hrmonthly.firebasestorage.app",
  messagingSenderId: "1069879582509",
  appId: "1:1069879582509:web:23ecf0c6ca6804844b3da4"
};

/* 이번 워크숍을 구분하는 방(room) 코드입니다.
   특별한 이유가 없다면 그대로 두어도 됩니다.
   같은 코드로 host.html 과 index.html 을 모두 열면 서로 연결됩니다.
   행사를 새로 열 때마다 날짜를 바꿔서 재사용할 수 있습니다. (예: "hrbd-2026-10") */
var SESSION_ID = "hrbd-2026-09";
