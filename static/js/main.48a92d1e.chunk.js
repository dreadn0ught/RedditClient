(this.webpackJsonpRedditApp=this.webpackJsonpRedditApp||[]).push([[0],[,,,,,,,,,,,,function(e,A,t){},function(e,A,t){},function(e,A,t){},function(e,A,t){},,function(e,A,t){"use strict";t.r(A);var n=t(0),c=t(1),a=t.n(c),r=t(5),i=t.n(r),s=(t(12),t(4)),o=(t(13),t(14),t.p+"static/media/logo.cd0bc7de.png");var d=function(e){var A=e.feedName,t=e.setFeedName;return Object(n.jsxs)("header",{className:"nav",children:[Object(n.jsx)("img",{id:"headerLogo",src:o,alt:"Reddit logo"}),Object(n.jsx)("h1",{id:"title",children:"Reddit Client"}),Object(n.jsxs)("div",{id:"feedTitle",children:[Object(n.jsx)("span",{children:"r/"}),Object(n.jsx)("input",{id:"feedInput",value:A,onChange:function(e){t(e.target.value)}})]})]})};t(15);var l=function(e){var A=e.url||null;return A?Object(n.jsx)("img",{className:"articlePicture",src:A,alt:"Article"}):Object(n.jsx)("div",{className:"articlePicture"})};var h=function(e){var A=1e3*e.date,t=new Date(A),c="",a=new Date,r=function(e,A){return e.getDay()===A.getDay()&&e.getMonth()===A.getMonth()&&e.getFullYear()===A.getFullYear()};return c=r(t,a)?"Today":r(t,function(e,A){return new Date(e.setDate(e.getDate()-A))}(a,1))?"Yesterday":t.toDateString(),Object(n.jsxs)("div",{className:"dateContainer",children:[c," "]})};var j=function(e){var A=e.article||{},t=A.title,c=void 0===t?"":t,a=A.img,r=void 0===a?"":a,i=A.votes,s=void 0===i?"":i,o=A.comments,d=void 0===o?"":o,j=A.link_to_article,u=void 0===j?"":j,M=A.author,g=void 0===M?"":M,m=A.date,b=void 0===m?"":m;return Object(n.jsxs)("div",{className:"article shadowBox",children:[Object(n.jsx)("h2",{children:Object(n.jsx)("a",{href:u,children:c})}),Object(n.jsx)("hr",{className:"articleDivider"}),Object(n.jsx)(l,{url:r}),Object(n.jsxs)("div",{className:"voting",children:[Object(n.jsx)("img",{className:"upArrow",src:"data:image/png;base64,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",alt:"UpVote Arrow"}),Object(n.jsxs)("aside",{className:"attribution",children:["Icon by ",Object(n.jsx)("a",{href:"https://freeicons.io/profile/3031",children:"AnjuP"})," on ",Object(n.jsx)("a",{href:"https://freeicons.io",children:"freeicons.io"})]}),Object(n.jsxs)("div",{className:"articleVotes",children:[s," "]})]}),Object(n.jsxs)("div",{className:"articleFooter",children:[Object(n.jsx)("div",{className:"articleAuthor",children:g}),Object(n.jsx)("div",{className:"articleDate",children:Object(n.jsx)(h,{date:b})}),Object(n.jsxs)("div",{className:"footerComments",children:[Object(n.jsx)("img",{className:"commentsLogo",src:"data:image/png;base64,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",alt:"Comments logo"}),Object(n.jsx)("div",{className:"articleComments",children:d}),Object(n.jsxs)("aside",{children:["Icon by ",Object(n.jsx)("a",{href:"https://freeicons.io/profile/3335",children:"MD Badsha Meah"})," on ",Object(n.jsx)("a",{href:"https://freeicons.io",children:"freeicons.io"})]})]})]})]})};var u=function(e){var A=e.feed||[];return Object(n.jsx)("main",{className:"feed",children:A.map((function(e){return Object(n.jsx)(j,{article:e},e.id)}))})},M=t(3),g=t.n(M),m=t(6),b={getFeed:function(){var e=Object(m.a)(g.a.mark((function e(A){var t,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,fetch("https://www.reddit.com/r/".concat(A,".json?limit=256$raw_json=1"));case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,console.log(n),!n.error){e.next=12;break}return console.log(n),e.abrupt("return",[]);case 12:return c=n.data.children.map((function(e,A){var t=e.data;return{id:A,title:t.title,img:"self"!==t.thumbnail?t.url:null,votes:t.ups-t.downs,comments:t.num_comments,link_to_article:"https://reddit.com/".concat(t.permalink),author:"u/".concat(t.author),date:t.created}})),e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};var R=function(){var e=Object(c.useState)("popular"),A=Object(s.a)(e,2),t=A[0],a=A[1],r=Object(c.useState)([{id:0,title:"Loading.."}]),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){b.getFeed(t).then((function(e){return l(e)}))}),[t]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{feedName:t,setFeedName:a}),Object(n.jsx)(u,{feed:o})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(A){var t=A.getCLS,n=A.getFID,c=A.getFCP,a=A.getLCP,r=A.getTTFB;t(e),n(e),c(e),a(e),r(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.48a92d1e.chunk.js.map