(this["webpackJsonpreact-ts-practice"]=this["webpackJsonpreact-ts-practice"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"signIn",(function(){return kn})),t.d(r,"signOut",(function(){return Tn})),t.d(r,"deleteAccount",(function(){return Sn})),t.d(r,"updateKilledCount",(function(){return In})),t.d(r,"updateVictims",(function(){return Nn})),t.d(r,"fetchCommunity",(function(){return Cn})),t.d(r,"addPost",(function(){return _n})),t.d(r,"deletePost",(function(){return Dn})),t.d(r,"fetchRanking",(function(){return An}));var i,c=t(2),o=t(30),a=t.n(o),s=t(14),l=t(9),u=t(27),d=t(24),p=t(40),b=t(21),f=t(13);!function(n){n.SIGN_IN="\ub85c\uadf8\uc778 \uc694\uccad",n.SIGN_OUT="\ub85c\uadf8\uc544\uc6c3",n.UPDATE_KILLED_COUNT="\uc720\uc800 \uc2a4\ucf54\uc5b4 \uc5c5\ub370\uc774\ud2b8",n.UPDATE_VICTIMS="\uc8fd\uc778 \ubc94\uc8c4\uc790 \ubaa9\ub85d \uc5c5\ub370\uc774\ud2b8",n.ADD_USER_POSTING="\uc720\uc800 \uac8c\uc2dc\ubb3c \uc0c1\ud0dc \ucd94\uac00",n.DELETE_USER_POSTING="\uc720\uc800 \uac8c\uc2dc\ubb3c \uc0c1\ud0dc \uc81c\uac70",n.FETCH_RANKING="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc694\uccad",n.FETCH_RANKING_SUCCESS="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc131\uacf5",n.FETCH_RANKING_FAILURE="\ub7ad\ud0b9 \ub370\uc774\ud130 \uc77d\uae30 \uc2e4\ud328",n.FETCH_COMMUNITY="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc694\uccad",n.FETCH_COMMUNITY_SUCCESS="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc131\uacf5",n.FETCH_COMMUNITY_FAILURE="\uac8c\uc2dc\ubb3c \ub370\uc774\ud130 \uc77d\uae30 \uc2e4\ud328",n.ADD_POST="\uac8c\uc2dc\ubb3c \uc791\uc131",n.DELETE_POST="\uac8c\uc2dc\ubb3c \uc0ad\uc81c"}(i||(i={}));var j,x,h,g,O,m,v,y,E={loading:!1,error:null,data:[]},w={loading:!1,error:null,data:[]},k=Object(d.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.SIGN_IN:return e.payload;case i.SIGN_OUT:return null;case i.UPDATE_KILLED_COUNT:return Object(f.a)(Object(f.a)({},n),{},{killedCount:e.payload});case i.UPDATE_VICTIMS:return Object(f.a)(Object(f.a)({},n),{},{victims:e.payload});case i.ADD_USER_POSTING:return Object(f.a)(Object(f.a)({},n),{},{postings:[].concat(Object(b.a)(n.postings),[e.payload])});case i.DELETE_USER_POSTING:return Object(f.a)(Object(f.a)({},n),{},{postings:n.postings.filter((function(n){return n!==e.payload}))});default:return n}},community:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.FETCH_COMMUNITY:return{loading:!0,error:null,data:[]};case i.FETCH_COMMUNITY_SUCCESS:return{loading:!1,error:null,data:e.payload};case i.FETCH_COMMUNITY_FAILURE:return{loading:!1,error:e.payload,data:[]};case i.ADD_POST:return{loading:!1,error:null,data:[e.payload].concat(Object(b.a)(n.data))};case i.DELETE_POST:return{loading:!1,error:null,data:n.data.filter((function(n){return n.id!==e.payload}))};default:return n}},ranking:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.FETCH_RANKING:return{loading:!0,error:null,data:[]};case i.FETCH_RANKING_SUCCESS:return{loading:!1,error:null,data:e.payload};case i.FETCH_RANKING_FAILURE:return{loading:!1,error:e.payload,data:[]};default:return n}}}),T=Object(d.d)(k,{},Object(d.a)(p.a)),S=t(3),I=t(4),N=t(1),C=I.b.div(j||(j=Object(S.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  width: 250px;\n  height: 250px;\n  line-height: 250px;\n  text-align: center;\n  border-radius: 10%;\n  margin: 20px;\n  p {\n    font-size: 30px;\n    color: #fff;\n    text-shadow: 2px 5px 5px #000;\n  }\n"])),(function(n){return"url(".concat(n.img,")")})),_=function(n){var e=n.text,t=n.img;return Object(N.jsx)(C,{img:t,children:Object(N.jsx)("p",{children:e})})},D=I.b.div(x||(x=Object(S.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]))),A=function(){return Object(N.jsxs)(D,{children:[Object(N.jsx)(s.b,{to:"/DEATH-NOTE/killing-start",children:Object(N.jsx)(_,{text:"Do Your Job",img:"https://www.firstpost.com/wp-content/uploads/2017/08/13245470_1129092717162553_622982228854157952_n-Copy-2.jpg"})}),Object(N.jsx)(s.b,{to:"/DEATH-NOTE/community",children:Object(N.jsx)(_,{text:"Community",img:"https://c4.wallpaperflare.com/wallpaper/791/198/515/death-note-kira-1920x1200-anime-death-note-hd-art-wallpaper-preview.jpg"})}),Object(N.jsxs)(s.b,{to:"/DEATH-NOTE/ranking",children:[" ",Object(N.jsx)(_,{text:"Ranking",img:"https://c4.wallpaperflare.com/wallpaper/162/325/134/art-kira-death-note-detective-wallpaper-preview.jpg"})]})]})},U=t(8),z=t.n(U),R=t(15),H=t(10),P=I.b.li(h||(h=Object(S.a)(["\n  position: relative;\n  margin: 5px;\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    background-color: red;\n    width: 100%;\n    height: 5px;\n    border-radius: 10px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n  }\n  &::before {\n    transform: translateY(-50%) rotate(45deg);\n  }\n  &::after {\n    transform: translateY(-50%) rotate(-45deg);\n  }\n  img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n  }\n"]))),F=function(n){var e=n.name,t=n.img;return Object(N.jsx)(P,{children:Object(N.jsx)("img",{src:t,alt:e})})},G=I.b.ul(g||(g=Object(S.a)(["\n  border: 3px solid #aaa;\n  width: 80%;\n  height: 100px;\n  margin: 20px 0 0;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  overflow: auto;\n  p {\n    color: #fff;\n    font-size: 20px;\n    margin-left: 20px;\n  }\n"]))),M=function(n){var e=n.deads;return Object(N.jsxs)(G,{children:[0===e.length&&Object(N.jsx)("p",{children:"Kill Criminals for Justice..."}),0!==e.length&&e.map((function(n){var e=n.name,t=n.img;return Object(N.jsx)(F,{name:e,img:t},e)}))]})},Y=function(){var n=Object(R.a)(z.a.mark((function n(){var e,t,r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://randomuser.me/api/?inc=name,location,picture");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=t.results[0],n.abrupt("return",{address:"".concat(r.location.city,", ").concat(r.location.state),name:"".concat(r.name.first," ").concat(r.name.last),img:r.picture.large});case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),K=I.b.div(O||(O=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    font-size: 30px;\n    color: red;\n  }\n"]))),L=function(){return Object(N.jsx)(K,{children:Object(N.jsx)("span",{children:"You just killed an innocent person!"})})},B=I.b.div(m||(m=Object(S.a)(["\n  position: relative;\n  width: 80%;\n  flex: 1;\n  margin-top: 20px;\n  background-color: rgb(94, 10, 10);\n  user-select: none;\n"]))),q=I.b.div(v||(v=Object(S.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  img {\n    width: 200px;\n    height: 200px;\n  }\n  div {\n    h2 {\n      font-size: 36px;\n      color: #fff;\n      margin: 20px 0 0;\n    }\n    span {\n      display: block;\n      font-size: 16px;\n      color: #ccc;\n      margin: 5px;\n    }\n    address {\n      font-size: 20px;\n      color: #dedede;\n    }\n  }\n  p {\n    margin-top: 30px;\n    font-size: 22px;\n    color: #fff;\n  }\n"]))),J=function(n){var e=n.criminal,t=n.mistake,r=n.crime;return Object(N.jsxs)(B,{children:[t&&Object(N.jsx)(L,{}),e&&Object(N.jsxs)(q,{children:[Object(N.jsx)("img",{src:e.img,alt:e.name}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:e.name}),Object(N.jsx)("span",{children:"from"}),Object(N.jsx)("address",{children:e.address})]}),Object(N.jsx)("p",{children:r})]})]})};!function(n){n.MURDER="murder",n.KIDNAPPING="kidnapping",n.ROBBERY="robbery"}(y||(y={}));var V,W,Q,X=[y.MURDER,y.KIDNAPPING,y.ROBBERY],Z=function(n,e){return n+Math.floor(Math.random()*e)},$=function(){var n=Z(0,X.length);switch(X[n]){case y.MURDER:return function(){var n=Z(5,10),e=["farmers","carpenters","librarians","football referees","software developers","pharmacists","firefighters"],t=e[Z(0,e.length)];return"killed ".concat(n," ").concat(t," for no reason...")}();case y.KIDNAPPING:return function(){var n=Z(4,12),e=["youtuber","child monk","princess","genius kid"],t=e[Z(0,e.length)];return"kidnapped ".concat(8===n||11===n?"an":"a"," ").concat(n,"-year-old ").concat(t," to get people's attention...")}();case y.ROBBERY:return function(){var n=Z(5,50),e=["bank","jewelry store","convenience store","chinese restaurant","waxing shop","vegan bakery","laundry shop"],t=e[Z(0,e.length)];return"robbed a ".concat(t," for ").concat(n," million dollars")}();default:return"do something really bad"}},nn=I.b.form(V||(V=Object(S.a)(["\n  background-color: #111;\n  width: 80%;\n  height: 100px;\n  position: relative;\n  margin: 20px 0;\n\n  input {\n    background-color: transparent;\n    resize: none;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 20px;\n    color: #fff;\n    font-size: 24px;\n    border: none;\n    outline: none;\n  }\n  div {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n  }\n  button {\n    &:first-of-type {\n      margin-right: 10px;\n    }\n    background-color: #333;\n    border: 2px solid #777;\n    color: #fff;\n    font-size: 20px;\n    padding: 8px 20px;\n    cursor: pointer;\n  }\n"]))),en=function(n){var e=n.onSubmit,t=n.onChange,r=n.onSkip,i=n.text;return Object(N.jsxs)(nn,{onSubmit:e,children:[Object(N.jsx)("input",{placeholder:"Write Criminal's Name...",onChange:t,value:i}),Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{type:"button",onClick:r,children:"Skip"}),Object(N.jsx)("button",{type:"submit",children:"Done"})]})]})},tn=I.b.h1(W||(W=Object(S.a)(["\n  position: fixed;\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 50px;\n"]))),rn=function(n){var e=n.onFinish,t=Object(c.useState)(30),r=Object(H.a)(t,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var n;return 0!==i?n=setInterval((function(){o((function(n){return n-1}))}),1e3):i<=0&&(console.log(i),e()),function(){clearInterval(n)}}),[i]),Object(N.jsx)(tn,{children:i})},cn=I.b.div(Q||(Q=Object(S.a)(["\n  position: absolute;\n  top: 80px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-around;\n  align-items: center;\n"]))),on=function(){var n=Object(c.useState)(""),e=Object(H.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)([]),o=Object(H.a)(i,2),a=o[0],s=o[1],u=Object(c.useState)(),d=Object(H.a)(u,2),p=d[0],f=d[1],j=Object(c.useState)(!1),x=Object(H.a)(j,2),h=x[0],g=x[1],O=Object(c.useState)(""),m=Object(H.a)(O,2),v=m[0],y=m[1],E=Object(c.useState)(!1),w=Object(H.a)(E,2),k=w[0],T=w[1],S=Object(l.g)(),I=function(){var n=Object(R.a)(z.a.mark((function n(){var e,t;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y();case 2:e=n.sent,f(e),t=$(),y(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(n){s((function(e){return[].concat(Object(b.a)(e),[n])}))};return Object(c.useEffect)((function(){I()}),[]),Object(c.useEffect)((function(){var n;return h&&(n=setTimeout((function(){g(!1)}),2e3)),function(){clearTimeout(n)}}),[h]),Object(c.useEffect)((function(){k&&S.push({pathname:"/DEATH-NOTE/killing-score",state:{deads:a}})}),[k]),Object(N.jsxs)(cn,{children:[Object(N.jsx)(rn,{onFinish:function(){T(!0)}}),Object(N.jsx)(J,{criminal:p,mistake:h,crime:v}),Object(N.jsx)(M,{deads:a}),Object(N.jsx)(en,{onSubmit:function(n){n.preventDefault(),p&&p.name===t?(C({name:p.name,img:p.img}),I()):g(!0),r("")},onChange:function(n){r(n.target.value)},onSkip:I,text:t})]})},an=t(36);t(54),t(57);an.a.initializeApp({apiKey:"AIzaSyBVTUjQ_WJeo5_xJ-hDDG8fmJPoupH-Dkg",authDomain:"death-note-77961.firebaseapp.com",projectId:"death-note-77961",storageBucket:"death-note-77961.appspot.com",messagingSenderId:"531988946556",appId:"1:531988946556:web:d970aa680edd089b6a73f9"});var sn,ln,un,dn,pn,bn,fn,jn,xn,hn,gn,On,mn,vn,yn,En=an.a,wn=En.firestore(),kn=function(n,e){return function(){var t=Object(R.a)(z.a.mark((function t(r){var c,o,a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wn.collection("users").where("email","==",e).get();case 2:if((o=t.sent).empty){t.next=7;break}o.forEach((function(n){c=Object(f.a)({id:n.id},n.data())})),t.next=11;break;case 7:return t.next=9,wn.collection("users").add({username:n,email:e,killedCount:0,victims:[],postings:[]});case 9:a=t.sent,c={id:a.id,username:n,email:e,killedCount:0,victims:[],postings:[]};case 11:window.sessionStorage.setItem("username",c.username),window.sessionStorage.setItem("email",c.email),r({type:i.SIGN_IN,payload:c});case 14:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Tn=function(){return function(n){window.sessionStorage.removeItem("user"),n({type:i.SIGN_OUT})}},Sn=function(n){return function(e){wn.collection("users").doc(n).delete(),window.sessionStorage.removeItem("user"),e({type:i.SIGN_OUT})}},In=function(n,e){return function(){var t=Object(R.a)(z.a.mark((function t(r){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{wn.collection("users").doc(n).update({killedCount:e}),r({type:i.UPDATE_KILLED_COUNT,payload:e})}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Nn=function(n,e){return function(){var t=Object(R.a)(z.a.mark((function t(r){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{wn.collection("users").doc(n).update({victims:e}),r({type:i.UPDATE_VICTIMS,payload:e})}catch(c){console.log(c)}case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Cn=function(){return function(){var n=Object(R.a)(z.a.mark((function n(e){var t,r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:i.FETCH_COMMUNITY}),n.prev=1,n.next=4,wn.collection("posts").orderBy("writtenDate","desc").get();case 4:t=n.sent,r=t.docs.map((function(n){return Object(f.a)(Object(f.a)({},n.data()),{},{id:n.id})})),e({type:i.FETCH_COMMUNITY_SUCCESS,payload:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e({type:i.FETCH_COMMUNITY_FAILURE,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},_n=function(n,e,t,r){return function(){var c=Object(R.a)(z.a.mark((function c(o){var a,s,l;return z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a={writtenDate:new Date,writtenUserName:n,writtenUserId:e,content:t},c.next=4,wn.collection("posts").add(a);case 4:s=c.sent,wn.collection("users").doc(e).update({postings:[].concat(Object(b.a)(r),[s.id])}),l=Object(f.a)(Object(f.a)({},a),{},{id:s.id}),o({type:i.ADD_POST,payload:l}),o({type:i.ADD_USER_POSTING,payload:s.id}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(n){return c.apply(this,arguments)}}()},Dn=function(n,e,t){return function(r){try{wn.collection("posts").doc(n).delete(),wn.collection("users").doc(e).update({postings:t}),r({type:i.DELETE_USER_POSTING,payload:n}),r({type:i.DELETE_POST,payload:n})}catch(c){console.log(c)}}},An=function(){return function(){var n=Object(R.a)(z.a.mark((function n(e){var t,r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:i.FETCH_RANKING}),n.prev=1,n.next=4,wn.collection("users").orderBy("killedCount","desc").get();case 4:t=n.sent,r=t.docs.map((function(n){return Object(f.a)(Object(f.a)({},n.data()),{},{id:n.id})})),e({type:i.FETCH_RANKING_SUCCESS,payload:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e({type:i.FETCH_RANKING_FAILURE,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},Un=function(){var n=Object(u.b)();return Object(d.b)(r,n)},zn=u.c,Rn=I.b.form(sn||(sn=Object(S.a)(["\n  margin-bottom: 40px;\n  & > * {\n    display: block;\n    margin: 0 auto;\n    box-sizing: border-box;\n    width: 80%;\n    max-width: 600px;\n  }\n  textarea {\n    resize: none;\n    height: 180px;\n    font-size: 24px;\n    padding: 20px;\n    letter-spacing: 2px;\n    line-height: 1.5;\n  }\n  button {\n    cursor: pointer;\n    font-size: 20px;\n    padding: 10px 0;\n  }\n"]))),Hn=function(){var n=Object(c.useState)(""),e=Object(H.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)(null),o=Object(H.a)(i,2),a=o[0],s=o[1],l=zn((function(n){return n.auth})),u=Un().addPost;return Object(c.useEffect)((function(){var n;return a&&(n=setTimeout((function(){s(null)}),2e3)),function(){return clearTimeout(n)}}),[a]),Object(N.jsxs)(Rn,{onSubmit:function(n){n.preventDefault(),t.trim().length<5?s("Write at least 5 letters."):(u(l.username,l.id,t,l.postings),r(""))},children:[a&&Object(N.jsx)("span",{children:a}),Object(N.jsx)("textarea",{value:t,onChange:function(n){return r(n.target.value)}}),Object(N.jsx)("button",{children:"Post"})]})},Pn=I.b.div(ln||(ln=Object(S.a)(["\n  position: relative;\n  margin: 30px auto 0;\n  padding: 30px 20px 20px;\n  width: 80%;\n  max-width: 600px;\n  background-color: #333;\n  span {\n    display: block;\n    font-size: 26px;\n    margin-left: 5px;\n  }\n  p {\n    background-color: #222;\n    color: #fff;\n    word-wrap: break-word;\n    font-size: 20px;\n    letter-spacing: 2px;\n    line-break: 1.4;\n    margin-top: 20px;\n    padding: 20px;\n  }\n  button {\n    font-size: 24px;\n    font-family: monospace;\n    color: #fff;\n    background: none;\n    border: 2px solid #fff;\n    cursor: pointer;\n    position: absolute;\n    top: 24px;\n    right: 24px;\n  }\n"]))),Fn=function(n){var e=n.post,t=Object(c.useState)(!1),r=Object(H.a)(t,2),i=r[0],o=r[1],a=zn((function(n){return n.auth})),s=Un().deletePost;Object(c.useEffect)((function(){a&&o(e.writtenUserId===a.id)}),[a]);return Object(N.jsxs)(Pn,{children:[i&&Object(N.jsx)("button",{onClick:function(){s(e.id,a.id,a.postings.filter((function(n){return n!==e.id})))},children:"Delete"}),Object(N.jsx)("span",{children:e.writtenUserName}),Object(N.jsx)("p",{children:e.content})]})},Gn=function(n){var e=n.posts;return Object(N.jsx)(N.Fragment,{children:e.map((function(n){return Object(N.jsx)(Fn,{post:n},n.id)}))})},Mn=I.b.div(un||(un=Object(S.a)(["\n  color: #fff;\n  & > div > p,\n  h2 {\n    text-align: center;\n    padding: 50px;\n  }\n  h2 {\n    font-size: 50px;\n  }\n  & > div > p {\n    font-size: 30px;\n  }\n"]))),Yn=function(){var n=zn((function(n){return n})),e=n.community,t=n.auth,r=e.loading,i=e.error,o=e.data,a=Un().fetchCommunity;return Object(c.useEffect)((function(){a()}),[]),Object(N.jsxs)(Mn,{children:[Object(N.jsx)("h2",{children:"Community"}),t&&Object(N.jsx)(Hn,{}),Object(N.jsxs)("div",{children:[r&&Object(N.jsx)("p",{children:"loading..."}),i&&Object(N.jsx)("p",{children:i}),!r&&!o.length&&Object(N.jsx)("p",{children:"No post..."}),!r&&0!==o.length&&Object(N.jsx)(Gn,{posts:o})]})]})},Kn=I.b.li(dn||(dn=Object(S.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  text-align: center;\n  margin: 10px;\n  img {\n    border-radius: 50%;\n    width: 80px;\n    height: 80px;\n    margin-bottom: 10px;\n  }\n  span {\n    color: red;\n    font-size: 18px;\n  }\n"]))),Ln=function(n){var e=n.victim;return Object(N.jsxs)(Kn,{children:[Object(N.jsx)("img",{src:e.img,alt:e.name}),Object(N.jsx)("span",{children:e.name})]})},Bn=I.b.ul(pn||(pn=Object(S.a)(["\n  background-color: #555;\n  color: #fff;\n  padding: 10px;\n  text-align: center;\n  border-radius: 20px;\n  border: 3px solid #777;\n  position: absolute;\n  top: 100%;\n  z-index: 100;\n  h3 {\n    font-size: 20px;\n  }\n  div {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    p {\n      font-size: 20px;\n      color: #000;\n      padding: 30px;\n    }\n  }\n"]))),qn=function(n){var e=n.victims;return Object(N.jsxs)(Bn,{children:[Object(N.jsx)("h3",{children:"Criminals punished by this Kira"}),Object(N.jsxs)("div",{children:[0===e.length&&Object(N.jsx)("p",{children:"Not punished yet"}),e.map((function(n){return Object(N.jsx)(Ln,{victim:n},n.name)}))]})]})},Jn=I.b.div(bn||(bn=Object(S.a)(["\n  background-color: ",";\n  border: ",";\n  color: ",";\n  border-radius: 20px;\n  box-sizing: content-box;\n  position: relative;\n  padding: 20px;\n  margin: 30px 20px;\n  display: flex;\n  & > span {\n    background-color: #222;\n    color: #ccc;\n    display: block;\n    width: 50px;\n    height: 50px;\n    font-size: 20px;\n    text-align: center;\n    line-height: 50px;\n  }\n  & > div {\n    margin-left: 30px;\n    h3 {\n      font-size: 24px;\n      margin-bottom: 10px;\n    }\n    span {\n      font-size: 18px;\n      display: block;\n      margin-bottom: 10px;\n    }\n  }\n"])),(function(n){return n.isIdSame?"#888":"#555"}),(function(n){return n.isIdSame?"5px solid #ddd":"none"}),(function(n){return n.isIdSame?"#222":"#ccc"})),Vn=function(n){var e=n.user,t=n.idx,r=Object(c.useState)(!1),i=Object(H.a)(r,2),o=i[0],a=i[1],s=Object(c.useState)(!1),l=Object(H.a)(s,2),u=l[0],d=l[1],p=zn((function(n){return n.auth})),b=function(){a((function(n){return!n}))};return Object(c.useEffect)((function(){p&&d(e.id===p.id)}),[p]),Object(N.jsxs)(Jn,{isIdSame:u,children:[Object(N.jsx)("span",{children:t}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Name : ".concat(e.username)}),Object(N.jsx)("span",{children:"Highest Score : ".concat(e.killedCount)}),Object(N.jsx)("span",{onMouseOver:b,onMouseLeave:b,children:"Punished criminals : ".concat(e.victims.length)})]}),o&&Object(N.jsx)(qn,{victims:e.victims})]})},Wn=function(n){var e=n.users;return Object(N.jsx)(N.Fragment,{children:e.map((function(n,e){return Object(N.jsx)(Vn,{user:n,idx:e+1},n.id)}))})},Qn=I.b.div(fn||(fn=Object(S.a)(["\n  color: #fff;\n  h2,\n  p {\n    padding: 50px;\n    text-align: center;\n  }\n  h2 {\n    font-size: 50px;\n  }\n  p {\n    font-size: 30px;\n  }\n"]))),Xn=function(){var n=zn((function(n){return n})),e=n.ranking,t=n.auth,r=e.loading,i=e.error,o=e.data,a=Un().fetchRanking;return Object(c.useEffect)((function(){a()}),[]),Object(c.useEffect)((function(){a()}),[t]),Object(N.jsxs)(Qn,{children:[Object(N.jsx)("h2",{children:"Ranking"}),r&&Object(N.jsx)("p",{children:"loading..."}),i&&Object(N.jsx)("p",{children:i}),!r&&!o.length&&Object(N.jsx)("p",{children:"No user..."}),!r&&0!==o.length&&Object(N.jsx)(Wn,{users:o})]})},Zn=new En.auth.GoogleAuthProvider,$n=function(){var n=Object(R.a)(z.a.mark((function n(){var e;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,En.auth().signInWithPopup(Zn);case 2:return e=n.sent,n.abrupt("return",e.user);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ne=I.b.header(jn||(jn=Object(S.a)(["\n  background-color: #333;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 30px;\n  height: 80px;\n  a {\n    color: inherit;\n    text-decoration: none;\n    h1 {\n      font-size: 30px;\n      color: #fff;\n    }\n  }\n  button {\n    background-color: #fff;\n    border: 3px solid #000;\n    border-radius: 30px;\n    width: 100px;\n    padding: 5px 0;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  span {\n    cursor: pointer;\n    font-size: 24px;\n    color: #fff;\n  }\n  & > div {\n    position: relative;\n    width: 240px;\n    text-align: center;\n    div {\n      background-color: #222;\n      border-radius: 30px;\n      border: 4px solid #555;\n      position: absolute;\n      top: 40px;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      padding: 20px 0;\n      button:first-of-type {\n        margin-right: 20px;\n      }\n    }\n  }\n"]))),ee=function(){var n=zn((function(n){return n.auth})),e=Un(),t=e.signIn,r=e.signOut,i=e.deleteAccount,o=Object(c.useState)(!1),a=Object(H.a)(o,2),l=a[0],u=a[1];Object(c.useEffect)((function(){var n=window.sessionStorage.getItem("username"),e=window.sessionStorage.getItem("email");n&&e&&t(n,e)}),[]);var d=function(){var n=Object(R.a)(z.a.mark((function n(){var e;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$n();case 2:(e=n.sent)&&t(e.displayName,e.email);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(ne,{children:[Object(N.jsx)(s.b,{to:"/DEATH-NOTE",children:Object(N.jsx)("h1",{children:"DEATH NOTE"})}),!n&&Object(N.jsx)("button",{onClick:d,children:"Sign In"}),n&&Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{onClick:function(){u((function(n){return!n}))},children:n.username}),l&&Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{onClick:r,children:"Sign Out"}),Object(N.jsx)("button",{onClick:i.bind(null,n.id),children:"Delete Account"})]})]})]})})},te=Object(I.a)(xn||(xn=Object(S.a)(["\n/* -------------------------------- Reset CSS ------------------------------- */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  /* ----------------------------- Global Styling ----------------------------- */\n  body,\n  *,\n  *::before,\n  *::after {\n    font-family: 'Special Elite', cursive, serif;\n  }\n\n  body {\n    background-color: #202020;\n    color: #aaa;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n"]))),re=I.b.div(hn||(hn=Object(S.a)(["\n  background-color: #444;\n  color: #fff;\n  margin: 50px;\n  padding: 30px;\n  h1 {\n    font-size: 40px;\n    text-align: center;\n    margin-bottom: 50px;\n  }\n  ul {\n    padding: 0 30px;\n    li {\n      font-size: 24px;\n      margin-bottom: 20px;\n      text-shadow: 1px 2px 5px rgba(200, 200, 200, 0.2);\n    }\n  }\n"]))),ie=function(){return Object(N.jsxs)(re,{children:[Object(N.jsx)("h1",{children:"Instruction"}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"- You will see a screen displays criminals' information."}),Object(N.jsx)("li",{children:"- To punish them, write their names. It's case-sensitive."}),Object(N.jsx)("li",{children:"- If you face with a name you cannot type, skip and punish next one."}),Object(N.jsx)("li",{children:"- If you write a wrong name, there will be a screen blocking for 2 seconds."}),Object(N.jsx)("li",{children:"- You have 30 seconds. Let's see how many criminals you can punish."})]})]})},ce=Object(I.b)(s.b)(gn||(gn=Object(S.a)(["\n  background-color: #222;\n  border: 4px solid #ccc;\n  border-radius: 20px;\n  display: block;\n  width: 200px;\n  padding: 10px 20px;\n  text-align: center;\n  margin: 0 auto;\n  font-size: 24px;\n  color: #eee;\n  text-decoration: none;\n"]))),oe=function(){return Object(N.jsx)(ce,{to:"/DEATH-NOTE/killing",children:"Start Working"})},ae=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ie,{}),Object(N.jsx)(oe,{})]})},se=I.b.div(On||(On=Object(S.a)(["\n  p {\n    font-size: 30px;\n    margin-bottom: 40px;\n    span {\n      font-size: 24px;\n      margin-bottom: 5px;\n      display: block;\n    }\n    b {\n      color: gold;\n    }\n  }\n"]))),le=function(n){var e=n.deads;return Object(N.jsxs)(se,{children:[!e.length&&Object(N.jsx)("p",{children:"You did nothing for justice... Shame on you!"}),1===e.length&&Object(N.jsxs)("p",{children:["You punished ",Object(N.jsx)("b",{children:"1"})," criminal for justice!"]}),e.length>1&&Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{children:"Well done."}),"You punished ",Object(N.jsx)("b",{children:e.length})," criminals for justice!"]})]})},ue=I.b.ul(mn||(mn=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  border: 4px solid #aaa;\n  padding: 20px 10px;\n  margin-bottom: 60px;\n"]))),de=function(n){var e=n.deads;return Object(N.jsxs)(ue,{children:[0===e.length&&Object(N.jsx)("p",{children:"No criminal punished"}),0!==e.length&&e.map((function(n){return Object(N.jsx)(Ln,{victim:n},n.name)}))]})},pe=I.b.div(vn||(vn=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  a {\n    padding: 10px 20px;\n    margin: 30px;\n    font-size: 20px;\n    text-decoration: none;\n    background-color: #000;\n    color: #fff;\n    border-radius: 10px;\n    border: 2px solid #fff;\n  }\n"]))),be=function(){var n=zn((function(n){return n.auth}));return Object(N.jsxs)(pe,{children:[Object(N.jsx)(s.b,{to:"/DEATH-NOTE/killing-start",children:"Retry"}),n&&Object(N.jsx)(s.b,{to:"/DEATH-NOTE/ranking",children:"Ranking"})]})},fe=I.b.div(yn||(yn=Object(S.a)(["\n  text-align: center;\n  margin: 30px;\n  color: #fff;\n  h1 {\n    font-size: 40px;\n    margin-bottom: 50px;\n  }\n  strong {\n    font-size: 30px;\n    color: yellow;\n    display: block;\n    margin-bottom: 10px;\n  }\n"]))),je=function(){var n=zn((function(n){return n.auth})),e=Un(),t=e.updateKilledCount,r=e.updateVictims,i=Object(c.useState)(!1),o=Object(H.a)(i,2),a=o[0],s=o[1],u=Object(l.h)().state.deads;Object(c.useEffect)((function(){n&&(d(),n&&u.length>n.killedCount&&(t(n.id,u.length),s(!0)))}),[n]);var d=function(){var e=u.filter((function(e){return!n.victims.includes(e)}));if(e.length>=1){var t,i=(t=n.victims).concat.apply(t,Object(b.a)(e));r(n.id,i)}};return Object(N.jsxs)(fe,{children:[Object(N.jsx)("h1",{children:"Score"}),a&&Object(N.jsx)("strong",{children:"New Record!"}),Object(N.jsx)(le,{deads:u}),Object(N.jsx)(de,{deads:u}),Object(N.jsx)(be,{})]})},xe=function(){return Object(N.jsxs)(u.a,{store:T,children:[Object(N.jsx)(te,{}),Object(N.jsx)(ee,{}),Object(N.jsxs)(l.d,{children:[Object(N.jsx)(l.b,{path:"/DEATH-NOTE",exact:!0,component:A}),Object(N.jsx)(l.b,{path:"/DEATH-NOTE/killing",component:on}),Object(N.jsx)(l.b,{path:"/DEATH-NOTE/killing-start",component:ae}),Object(N.jsx)(l.b,{path:"/DEATH-NOTE/killing-score",component:je}),Object(N.jsx)(l.b,{path:"/DEATH-NOTE/community",component:Yn}),Object(N.jsx)(l.b,{path:"/DEATH-NOTE/ranking",component:Xn}),Object(N.jsx)(l.a,{to:"/DEATH-NOTE"})]})]})};a.a.render(Object(N.jsx)(s.a,{children:Object(N.jsx)(xe,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.3f37d12f.chunk.js.map