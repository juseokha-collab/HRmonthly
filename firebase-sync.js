/* ============================================================
   firebase-sync.js
   Firebase(익명 인증 + Firestore) 연결 레이어.
   host.html(진행자 화면)과 index.html(참여자 화면)이 공통으로 사용합니다.
   firebase-config.js 를 먼저 채워넣어야 동작합니다.
   ============================================================ */
"use strict";

var FBSync = (function(){
  var db = null, auth = null, myUid = null, ready = false;
  var readyCallbacks = [];

  function isConfigured(){
    return FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey.indexOf("여기에") === -1;
  }

  function init(onReady, onError){
    if(!isConfigured()){
      onError && onError("firebase-config.js 에 실제 Firebase 설정값이 아직 입력되지 않았습니다.");
      return;
    }
    try{
      firebase.initializeApp(FIREBASE_CONFIG);
      auth = firebase.auth();
      db = firebase.firestore();
      auth.onAuthStateChanged(function(user){
        if(user){
          myUid = user.uid; ready = true;
          onReady && onReady(myUid);
          readyCallbacks.forEach(function(fn){ fn(myUid); });
          readyCallbacks = [];
        }
      });
      auth.signInAnonymously().catch(function(err){
        onError && onError("익명 로그인에 실패했습니다: " + err.message);
      });
    }catch(err){
      onError && onError("Firebase 초기화 오류: " + err.message);
    }
  }

  function whenReady(fn){
    if(ready) fn(myUid); else readyCallbacks.push(fn);
  }

  function stateRef(){ return db.collection("sessions").doc(SESSION_ID); }
  function answersCol(){ return db.collection("sessions").doc(SESSION_ID).collection("answers"); }

  /* ---- 진행 중인 슬라이드 동기화 ---- */
  function watchState(cb){
    return stateRef().onSnapshot(function(snap){
      cb(snap.exists ? snap.data() : {slideIndex:0});
    }, function(err){ console.error("watchState error", err); });
  }
  function setSlideIndex(i){
    whenReady(function(){
      stateRef().set({slideIndex:i, updatedAt: firebase.firestore.FieldValue.serverTimestamp()}, {merge:true})
        .catch(function(err){ console.error("setSlideIndex error", err); });
    });
  }

  /* ---- 전체 응답(모든 슬라이드) 실시간 구독 — 진행자 화면용 ---- */
  function watchAllAnswers(cb){
    return answersCol().onSnapshot(function(snap){
      var list = [];
      snap.forEach(function(doc){ list.push(Object.assign({_id:doc.id, _ref:doc.ref}, doc.data())); });
      cb(list);
    }, function(err){ console.error("watchAllAnswers error", err); });
  }

  /* ---- 참여자 응답 제출(같은 슬라이드는 덮어쓰기) ---- */
  function submitAnswer(slideId, payload){
    whenReady(function(uid){
      var docId = slideId + "_" + uid;
      var data = Object.assign({slideId: slideId, uid: uid, updatedAt: firebase.firestore.FieldValue.serverTimestamp()}, payload);
      answersCol().doc(docId).set(data).catch(function(err){ console.error("submitAnswer error", err); });
    });
  }

  /* ---- 진행자: 특정 슬라이드의 응답 전체 삭제 ---- */
  function clearSlideAnswers(slideId, cachedDocs){
    var targets = cachedDocs.filter(function(d){ return d.slideId===slideId; });
    if(!targets.length) return Promise.resolve();
    var batch = db.batch();
    targets.forEach(function(d){ batch.delete(d._ref); });
    return batch.commit();
  }

  function myAnswerDocId(slideId){ return slideId + "_" + myUid; }

  /* ---- 참여자: 특정 슬라이드에 대한 내 기존 응답 1회 조회(재접속 시 값 복원용) ---- */
  function getMyAnswer(slideId, cb){
    whenReady(function(uid){
      answersCol().doc(slideId+"_"+uid).get().then(function(doc){
        cb(doc.exists ? doc.data() : null);
      }).catch(function(err){ console.error("getMyAnswer error", err); cb(null); });
    });
  }

  return {
    init: init, whenReady: whenReady, isConfigured: isConfigured,
    watchState: watchState, setSlideIndex: setSlideIndex,
    watchAllAnswers: watchAllAnswers, submitAnswer: submitAnswer,
    clearSlideAnswers: clearSlideAnswers, myAnswerDocId: myAnswerDocId,
    getMyAnswer: getMyAnswer,
    getUid: function(){ return myUid; }
  };
})();
