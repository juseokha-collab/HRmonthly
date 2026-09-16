/* ============================================================
   v2/firebase-config.js
   루트 firebase-config.js 와 동일한 Firebase 프로젝트를 쓰되,
   SESSION_ID만 분리해서 v2 테스트 데이터가 실제 운영(9월 Monthly) 데이터와
   섞이지 않도록 합니다.
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

var SESSION_ID = "hrbd-2026-09-v2";
