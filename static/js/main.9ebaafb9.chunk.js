(this["webpackJsonpwiki-treasure-hunt"]=this["webpackJsonpwiki-treasure-hunt"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(120),i=n(0),r=n(46),s=n.n(r),a=n(114),l=n(119),j=n(121),h=n(11),u=n(41),b=n(124),d=n(117),O=n(118),p=n(125),m=n(83),x=n(123),f=n(24),g=n(80),w=n(115),v=n(75),y=n(6),C=n(112),k=n.p+"static/media/background.a281c325.mp4",F=function(e){Object.assign({},e);return Object(o.jsx)(C.a,{position:"absolute",zIndex:"-5",height:"full",width:"full",overflow:"hidden",children:Object(o.jsxs)("video",{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",autoPlay:"autoPlay",loop:"loop",filter:"brightness(.5)",muted:!0,children:[Object(o.jsx)("source",{src:k,type:"video/mp4"}),"Your browser does not support the video tag."]})})},S=n(122),P={home:{component:function(e){Object.assign({},e);var t=Object(h.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F,{}),Object(o.jsxs)(a.a,{textAlign:"center",alignItems:"center",justifyContent:"center",fontSize:"36px",fontWeight:"bold",direction:"column",flexGrow:"1",children:[Object(o.jsx)(w.a,{color:"white",children:"Are you ready for an adventure?"}),Object(o.jsx)(g.a,{color:"white",variant:"outline",mt:"10",onClick:function(){return t.push(P.hunts.path)},children:"Load Hunt"})]})]})},path:"/wiki-treasure-hunt",displayName:"Home"},hunts:{component:function(e){Object.assign({},e);return Object(o.jsx)(S.a,{minChildWidth:"120px",spacing:"40px",children:H.map((function(e){return Object(o.jsx)(C.a,{h:"80px",children:e.name})}))})},path:"/wiki-treasure-hunt/hunts",displayName:"Hunts"},howToPlay:{component:function(e){Object.assign({},e);return Object(o.jsx)(o.Fragment,{})},path:"/wiki-treasure-hunt/how-to-play",displayName:"How To Play"}},H=Object.entries(P).map((function(e){var t=Object(y.a)(e,2),n=t[0],o=t[1];return Object(v.a)({name:n},o)})),N=function(e){var t=e.isOpen,n=e.onClose,c=(Object(m.a)(e,["isOpen","onClose"]),Object(h.f)());return Object(o.jsx)(x.a,{placement:"left",onClose:n,isOpen:t,children:Object(o.jsx)(f.f,{children:Object(o.jsxs)(x.b,{children:[Object(o.jsxs)(f.e,{children:[Object(o.jsx)(g.a,{variant:"ghost",onClick:function(){n(),c.push(P.home.path)},children:"Home"}),Object(o.jsx)(f.c,{onClose:n})]}),Object(o.jsx)(f.b,{children:Object(o.jsx)(a.a,{direction:"column",children:H.filter((function(e){return"home"!==e.name})).map((function(e){return Object(o.jsx)(u.b,{to:e.path,onClick:n,children:Object(o.jsx)(w.a,{fontSize:"xl",children:e.displayName})})}))})})]})})})},W=function(){var e=Object(b.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(a.a,{children:[Object(o.jsx)(d.a,{"aria-label":"Menu Button",variant:"ghost",fontSize:"lg",color:"white",icon:Object(o.jsx)(p.a,{}),onClick:n}),Object(o.jsx)(O.a,{})]}),Object(o.jsx)(N,{onClose:c,isOpen:t})]})},z=Object(l.a)({useSystemColorMode:!1,styles:{global:{"img, video":{maxWidth:"none"}}}}),B=function(){return Object(o.jsx)(j.a,{theme:z,children:Object(o.jsx)(u.a,{children:Object(o.jsx)(h.c,{children:H.map((function(e){return console.log(JSON.stringify(e,null,4)),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(a.a,{height:"100vh",direction:"column",children:[Object(o.jsx)(W,{}),Object(o.jsx)(h.a,{exact:"home"===e.name,path:e.path,component:e.component})]})})}(e)}))})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(o.jsxs)(i.StrictMode,{children:[Object(o.jsx)(c.a,{}),Object(o.jsx)(B,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),I()}},[[100,1,2]]]);
//# sourceMappingURL=main.9ebaafb9.chunk.js.map