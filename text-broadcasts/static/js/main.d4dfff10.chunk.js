(this.webpackJsonpchechnyatoday=this.webpackJsonpchechnyatoday||[]).push([[0],{135:function(e,t,a){e.exports={button:"dropdownMenu_button__LO0GI"}},136:function(e,t,a){e.exports=a.p+"static/media/more_horiz-24px.d644ed95.svg"},137:function(e,t,a){e.exports=a.p+"static/media/data_usage-24px.4d007d82.svg"},139:function(e,t,a){e.exports={backpostsLoader:"backpostsLoader_backpostsLoader__37r16"}},140:function(e,t,a){e.exports={mainEvents:"mainEvents_mainEvents__223-Y",mainEventsOpened:"mainEvents_mainEventsOpened__31mIv"}},141:function(e,t,a){e.exports={button:"mainEventsButton_button__7n6UQ"}},142:function(e,t,a){e.exports=a.p+"static/media/burger.9212ce7d.svg"},143:function(e,t,a){e.exports={button:"CreatorButton_button__EZd5Z"}},148:function(e,t,a){e.exports=a(274)},153:function(e,t,a){},24:function(e,t,a){e.exports={background:"postEditor_background__XYxSW",postCreator:"postEditor_postCreator__1Yjjt",importantPostCreator:"postEditor_importantPostCreator__1Tyrc",title:"postEditor_title__2s-ee",content:"postEditor_content__1ehGY",time:"postEditor_time__2m1Pj",handlers:"postEditor_handlers__2ppc1",buttons:"postEditor_buttons__3UvAQ",loader:"postEditor_loader__16JH7",cancel:"postEditor_cancel__1HQ8T",edit:"postEditor_edit__Q-IXF"}},25:function(e,t,a){e.exports={buttonsGroup:"PostsSliceButtons_buttonsGroup__1bZnX",text:"PostsSliceButtons_text__2sLvA",button:"PostsSliceButtons_button__2DsDI",endButton:"PostsSliceButtons_endButton__3tMoZ",activeButton:"PostsSliceButtons_activeButton__1cI88"}},26:function(e,t,a){e.exports={postCreator:"postCreator_postCreator__32FZ6",importantPostCreator:"postCreator_importantPostCreator__1tC4P",title:"postCreator_title__1mayZ",content:"postCreator_content__2pvRc",time:"postCreator_time__1-lUP",handlers:"postCreator_handlers__3VYCd",buttons:"postCreator_buttons__2CH3b",loader:"postCreator_loader__3bRf8",cancel:"postCreator_cancel__3uSTW",add:"postCreator_add__Yi3iX"}},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=(a(153),a(9)),s=a(2),i=a(3),u=a(19),d=a.n(u),m=a(53),p=a.n(m),b=a(69),f=a.n(b),_=a(134),v=a.n(_);var E=function(e){var t=e.opened,a=e.handleClick,n=e.children;return!1===t?null:r.a.createElement(v.a,{onOutsideClick:a},r.a.createElement("div",{className:f.a.dropdown},n))};var O=function(e){var t=e.children,a=e.action;return r.a.createElement("div",{className:f.a.dropdownItem,onClick:a},t)},j=a(135),h=a.n(j),g=a(136),C=a.n(g);var y=function(e){var t=e.handlePopup,a=e.handleEditor,c=Object(n.useState)(!1),o=Object(i.a)(c,2),l=o[0],s=o[1],u=function(e){e.stopPropagation(),s(!l)};return r.a.createElement("div",null,r.a.createElement("button",{className:h.a.button,onClick:u},r.a.createElement("img",{src:C.a,alt:"icon"})),r.a.createElement(E,{opened:l,handleClick:u},r.a.createElement(O,{action:function(e){e.stopPropagation(),a(),s(!l)}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement(O,{action:function(e){e.stopPropagation(),t(),s(!l)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))};function N(e,t,a){return fetch("https://api.intocode.ru:5005/api"+e,{method:t,headers:{"x-auth-token":localStorage.getItem("token"),Accept:"application/json","Content-Type":"application/json"},withCredentials:!0,body:JSON.stringify(a)}).then((function(e){return e.json()}))}function w(e,t){return N(e,"post",t)}function S(e,t){return N(e,"delete",t)}function k(e,t){return N(e,"get",t)}function x(e,t){return N(e,"PATCH",t)}function P(){return function(e){e({type:"onlines/load/started"}),N("/onlines").then((function(t){e({type:"onlines/load/succeed",payload:t})}))}}function B(e){return function(t){t({type:"posts/load/started",payload:e}),N("/onlines/".concat(e)).then((function(e){t({type:"posts/load/succeed",payload:e})}))}}var D=a(43),I=a.n(D);var H=function(e){var t=e.isOpened,a=e.text,c=e.action,o=e.cancel;return Object(n.useEffect)((function(){t?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")})),t?r.a.createElement("div",{className:I.a.background,onClick:o},r.a.createElement("div",{className:I.a.popup},r.a.createElement("div",{className:I.a.text},a),r.a.createElement("div",{className:I.a.buttons},r.a.createElement("button",{className:I.a.cancel,onClick:o},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement("button",{className:I.a.add,onClick:c},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))):null},A=a(33),T=a.n(A),J=a(36),z=a(8),Z=a(71),M=a.n(Z),R=a(137),F=a.n(R),L=a(14),K=a.n(L);var Q=function(e){var t,a=e.size;return r.a.createElement("img",{src:F.a,className:K()(M.a.loader,(t={},Object(z.a)(t,M.a.large,"large"===a),Object(z.a)(t,M.a.small,"small"===a),t)),alt:"loading"})},X=a(70),Y=a.n(X),G=a(11),V=a(37),W=a.n(V);var U=function(e){var t=e.isOpened,a=e.online,c=e.cancel,o=Object(s.b)(),l=Object(s.c)((function(e){return e.onlines.editing})),u=Y()(a.introtext),m=u.contentBlocks,p=u.entityMap,b=G.ContentState.createFromBlockArray(m,p),f=G.EditorState.createWithContent(b),_=Object(n.useState)(a.title),v=Object(i.a)(_,2),E=v[0],O=v[1],j=Object(n.useState)(f),h=Object(i.a)(j,2),g=h[0],C=h[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),w=N[0],S=N[1];return Object(n.useEffect)((function(){t?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")})),!l&&w&&(c(),S(!1)),t?r.a.createElement("div",{className:T.a.background},r.a.createElement("div",{className:T.a.onlineEditor},r.a.createElement("div",{className:T.a.time},d()(a.startedDate).format("HH:mm")),r.a.createElement("div",null,r.a.createElement("textarea",{className:T.a.title,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:E,onChange:function(e){return O(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(J.Editor,{editorState:g,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442",toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){return C(e)}})),r.a.createElement("div",{className:T.a.buttons},r.a.createElement("div",null,r.a.createElement("button",{className:T.a.cancel,onClick:c},"\u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("div",null,r.a.createElement("button",{className:T.a.edit,onClick:function(){S(!0),o(function(e,t,a){return function(n){n({type:"online/edit/started"}),x("/onlines/".concat(e),{title:t,introtext:a}).then((function(e){n({type:"online/edit/succeed",payload:e})}))}}(a._id,E,W()(Object(G.convertToRaw)(g.getCurrentContent()))))},disabled:l},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("div",{className:T.a.loader},l&&r.a.createElement(Q,{size:"small"})))))):null};var q=function(e){var t=e.online,a=e.isAdmin,c=Object(s.b)(),o=Object(l.g)(),u=Object(n.useState)(!1),m=Object(i.a)(u,2),b=m[0],f=m[1],_=function(){return f(!b)},v=Object(n.useState)(!1),E=Object(i.a)(v,2),O=E[0],j=E[1],h=function(){return j(!O)};return r.a.createElement("div",null,r.a.createElement("div",{className:p.a.online,onClick:function(){a?o.push("/admin/"+t._id):o.push("/"+t._id)}},r.a.createElement("div",{className:p.a.time},d()(t.startedDate).format("HH:mm"),a?r.a.createElement(y,{handlePopup:_,handleEditor:h}):null),r.a.createElement("div",{className:p.a.title},t.title),r.a.createElement("div",{className:p.a.content,dangerouslySetInnerHTML:{__html:t.introtext}})),r.a.createElement(H,{isOpened:b,cancel:_,action:function(e){var a;e.stopPropagation(),c((a=t._id,t.title,t.introtext,function(e){e({type:"online/delete/started"}),S("/onlines/".concat(a)).then((function(t){e({type:"online/delete/succeed",payload:a})}))}))},text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),r.a.createElement(U,{online:t,isOpened:O,cancel:h}))},$=a(28),ee=a.n($);var te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.onlines.items})),a=Object(s.c)((function(e){return e.onlines.loading}));return Object(n.useEffect)((function(){e(P())}),[e]),a?r.a.createElement("div",{className:ee.a.loader},r.a.createElement(Q,{size:"large"})):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(q,{online:e,key:e._id})})))},ae=a(13),ne=a(88),re=a.n(ne),ce=a(138);function oe(){return(oe=Object(ce.a)(re.a.mark((function e(t){var a,n,r;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.split(/\?.+/),console.log(a),e.next=4,fetch("https://graph.facebook.com/v8.0/instagram_oembed?url=".concat(a[0],"&access_token=1260168264328153|06JlTbK02xcTpl4flpOpCaZu9sc"));case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.html);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=function(e){switch(function(e){var t=document.createElement("a");switch(t.href=e,t.hostname){case"t.me":return"telegram";case"www.facebook.com":return"facebook";case"www.instagram.com":return"instagram";case"youtu.be":return"youtube";default:return}}(e)){case"telegram":return function(e){var t=document.createElement("a");t.href=e;var a=document.createElement("script");return a.async=!0,a.src="https://telegram.org/js/telegram-widget.js?11",a.setAttribute("data-telegram-post",t.pathname),a}(e);case"facebook":return function(e){var t=encodeURIComponent(e.split(/(\S+\d)/)[1]);console.log(e.split(/(\S+\d)/)[1]),console.log(t);var a=document.createElement("iframe");return a.src="https://www.facebook.com/plugins/post.php?href="+t+"&show_text=true&width=552&appId=1260168264328153&height=292",a.width="552",a.height="290",a.scrolling="no",a.frameBorder="0",a.allow="encrypted-media",a.setAttribute("allowTransparency","true"),a.style="border:none;overflow:hidden;",a}(e);case"instagram":return function(e){return oe.apply(this,arguments)}(e);case"youtube":return function(e){var t=document.createElement("a");t.href=e,console.log(t.pathname.split(/%/));var a=document.createElement("iframe");return a.src="https://www.youtube.com/embed/"+t.pathname.split(/%/)[0],a.allow="accelerometer",a.frameBorder="0",a.width="560",a.height="315",a}(e);default:return e}};var se=a(46),ie=a.n(se),ue=a(24),de=a.n(ue),me=a(54),pe=a.n(me);var be=function(e){var t=e.defaultValue,a=e.onSwitchedOn,c=e.onSwitchedOff,o=Object(n.useState)(t),l=Object(i.a)(o,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){u(t)}),[t]),r.a.createElement("div",{className:pe.a.switcher},r.a.createElement("div",{onClick:function(){s?c():a(),u(!s)},className:K()(pe.a.backgroundOff,Object(z.a)({},pe.a.backgroundOn,s))},r.a.createElement("div",{className:pe.a.round})))};var fe=function(e){var t=e.item,a=e.isOpened,c=e.cancel,o=Object(s.b)(),l=Object(s.c)((function(e){return e.posts.editing})),u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=(m[0],m[1],Y()(t.content)),b=p.contentBlocks,f=p.entityMap,_=G.ContentState.createFromBlockArray(b,f),v=G.EditorState.createWithContent(_),E=Object(n.useState)(t.title),O=Object(i.a)(E,2),j=O[0],h=O[1],g=Object(n.useState)(v),C=Object(i.a)(g,2),y=C[0],N=C[1],w=Object(n.useState)(!1),S=Object(i.a)(w,2);S[0],S[1],Object(n.useEffect)((function(){a?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")}));var k=Object(n.useState)(!1),P=Object(i.a)(k,2),B=P[0],D=P[1],I=function(){return D(!B)};return a?r.a.createElement("div",{className:de.a.background},r.a.createElement("div",{className:K()(de.a.postCreator,Object(z.a)({},de.a.importantPostCreator,B))},r.a.createElement("div",{className:de.a.time},d()(t.createdDate).format("HH:mm")),r.a.createElement("div",null,r.a.createElement("textarea",{className:de.a.title,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:j,onChange:function(e){return h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(J.Editor,{editorState:y,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442",toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){return N(e)}})),r.a.createElement("div",{className:de.a.handlers},r.a.createElement("div",{className:de.a.importance},r.a.createElement(be,{defaultValue:B,onSwitchedOff:I,onSwitchedOn:I})),r.a.createElement("div",{className:de.a.buttons},r.a.createElement("div",null,r.a.createElement("button",{className:de.a.cancel,onClick:c},"\u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("div",null,r.a.createElement("button",{className:de.a.edit,onClick:function(){return o(function(e,t,a,n){return function(r){r({type:"post/edit/started"}),x("/post/".concat(e),{title:t,content:a,important:n}).then((function(e){r({type:"post/edit/succeed",payload:e})}))}}(t._id,j,W()(Object(G.convertToRaw)(y.getCurrentContent())),B))},disabled:l},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("div",{className:de.a.loader},l&&r.a.createElement(Q,{size:"small"}))))))):null};var _e=function(e){var t=e.item,a=e.isAdmin,c=Object(s.b)(),o=Object(n.useRef)(null),l=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=e.content.split(/(https:\S+)/),a=document.createElement("div");return t.forEach((function(e){if(0===e.indexOf("https")){var t=le(e),n=document.createElement("script");n.async=!0,n.src="//www.instagram.com/embed.js",t instanceof Promise?t.then((function(e){a.innerHTML=e,a.append(n)})):a.append(le(e))}else a.insertAdjacentHTML("beforeend",e)})),c(a),function(){a.remove()}}),[e]),r}(t);Object(n.useEffect)((function(){null!==l&&o.current.append(l)}),[l]);var u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=m[0],b=m[1],f=function(e){b(!p)},_=Object(n.useState)(!1),v=Object(i.a)(_,2),E=v[0],O=v[1],j=function(){return O(!E)};return r.a.createElement("div",{id:t._id,className:K()(ie.a.card,Object(z.a)({},ie.a.importantCard,t.important))},r.a.createElement("div",{className:ie.a.time},d()(t.createdDate).format("HH:mm"),a?r.a.createElement(y,{handlePopup:f,handleEditor:j}):null),r.a.createElement("div",{className:ie.a.title},t.title),r.a.createElement("div",{className:ie.a.content,ref:o}),r.a.createElement(H,{isOpened:p,cancel:f,action:function(e){var a;e.stopPropagation(),c((a=t._id,function(e){e({type:"post/delete/started"}),S("/post/".concat(a)).then((function(t){e({type:"post/delete/succeed",payload:a})}))}))},text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),r.a.createElement(fe,{item:t,isOpened:E,cancel:j}))},ve=a(25),Ee=a.n(ve);var Oe=function(){var e=Object(l.h)().id,t=Object(s.c)((function(t){var a=t.onlines;return a.postsCount.hasOwnProperty(e)?a.postsCount[e]:-1})),a=Object(s.b)(),n=function(t){a(function(e,t){var a=JSON.parse(localStorage.getItem("postsCount"))||{};return a[e]=t,localStorage.setItem("postsCount",JSON.stringify(a)),{type:"posts/count/set",payload:{id:e,count:t}}}(e,t))};return r.a.createElement("div",{className:Ee.a.buttonsGroup},r.a.createElement("span",{className:Ee.a.text},"\u0412\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement("button",{onClick:function(){return n(10)},className:K()(Ee.a.button,Object(z.a)({},Ee.a.activeButton,10===t))},"10"),r.a.createElement("button",{onClick:function(){return n(30)},className:K()(Ee.a.button,Object(z.a)({},Ee.a.activeButton,30===t))},"30"),r.a.createElement("button",{onClick:function(){return n(50)},className:K()(Ee.a.button,Object(z.a)({},Ee.a.activeButton,50===t))},"50"),r.a.createElement("button",{onClick:function(){return n(-1)},className:K()("".concat(Ee.a.button," ").concat(Ee.a.endButton),Object(z.a)({},Ee.a.activeButton,-1===t))},"\u0432\u0441\u0435"))},je=a(72),he=a.n(je),ge=a(139),Ce=a.n(ge);var ye=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.posts.temp}));return console.log(t),0===t.length?null:r.a.createElement("div",{className:Ce.a.backpostsLoader,onClick:function(){return e({type:"backposts/append/succeed"})}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u0441\u0442\u044b")};var Ne=function(){var e=Object(s.b)(),t=Object(l.h)().id,a=Object(s.c)((function(e){var a=e.onlines;return!!a.reversed.hasOwnProperty(t)&&a.reversed[t]})),n=Object(s.c)((function(e){var a=e.onlines;return a.postsCount.hasOwnProperty(t)?a.postsCount[t]:-1})),c=Object(s.c)((function(e){var t=a?Object(ae.a)(e.posts.items).sort((function(e,t){return new Date(e.createdDate)-new Date(t.createdDate)})):Object(ae.a)(e.posts.items).sort((function(e,t){return new Date(t.createdDate)-new Date(e.createdDate)}));return-1!==n?t.slice(0,n):t})),o=function(){e(function(e){var t=JSON.parse(localStorage.getItem("reversed"))||{};return void 0!==t[e]?t[e]=!t[e]:t[e]=!0,localStorage.setItem("reversed",JSON.stringify(t)),{type:"posts/order/reversed",payload:e}}(t))},i=function(){o()};return r.a.createElement("div",{className:he.a.post},r.a.createElement("div",{className:he.a.handlers},r.a.createElement(Oe,null),r.a.createElement(be,{defaultValue:a,onSwitchedOn:i,onSwitchedOff:i})),r.a.createElement(ye,null),r.a.createElement("div",null,c.map((function(e){return e.separate?r.a.createElement("div",{className:he.a.newPostsBorder,key:e._id},e.content):r.a.createElement(_e,{item:e,key:e._id})}))))},we=a(55),Se=a.n(we);var ke=function(e){var t=e.item;return t.hasOwnProperty("title")?r.a.createElement("div",{className:Se.a.mainEvent,onClick:function(){document.getElementById(t._id).scrollIntoView({block:"center",behavior:"smooth"})}},r.a.createElement("div",{className:Se.a.time},r.a.createElement("div",{className:Se.a.checkpoint}),d()(t.createdDate).format("HH:mm")),r.a.createElement("div",{className:Se.a.text},t.title)):null},xe=a(140),Pe=a.n(xe);var Be=function(e){e.isOpened;var t=Object(l.h)().id,a=Object(s.c)((function(e){var a=e.onlines;return!!a.reversed.hasOwnProperty(t)&&a.reversed[t]})),n=Object(s.c)((function(e){var a=e.onlines;return a.postsCount.hasOwnProperty(t)?a.postsCount[t]:-1})),c=Object(s.c)((function(e){var t=a?Object(ae.a)(e.posts.items).sort((function(e,t){return new Date(e.createdDate)-new Date(t.createdDate)})):Object(ae.a)(e.posts.items).sort((function(e,t){return new Date(t.createdDate)-new Date(e.createdDate)}));return-1!==n?t.slice(0,n):t}));return r.a.createElement("div",{className:Pe.a.mainEvents},"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b",c.map((function(e){return r.a.createElement(ke,{item:e,key:e._id})})))},De=a(141),Ie=a.n(De),He=a(142),Ae=a.n(He);var Te=function(e){var t=e.handleMainEventsBar;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:Ie.a.button},r.a.createElement("img",{src:Ae.a,alt:"Main events"})))},Je=a(276);var ze=function(){var e=Object(l.h)().id,t=Object(s.b)();Object(n.useEffect)((function(){t(B(e))}),[t,e]),Object(n.useEffect)((function(){setInterval((function(){t(function(e){return function(t,a){var n=a().posts.items;N("/onlines/".concat(e)).then((function(e){var a=n[n.length-1].createdDate,r=e.filter((function(e){return new Date(e.createdDate)>new Date(a)}));t({type:"backposts/load/succeed",payload:r})}))}}(e))}),5e3)}),[t,e]);var a=Object(s.c)((function(t){var a=t.onlines;return!!a.mainEventsBarOpened.hasOwnProperty(e)&&a.mainEventsBarOpened[e]}));return Object(s.c)((function(e){return e.posts.loading}))?r.a.createElement("div",{className:ee.a.loader},r.a.createElement(Q,{size:"large"})):r.a.createElement("div",{className:ee.a.postsPage},r.a.createElement("div",{className:ee.a.posts},r.a.createElement(Ne,null)),r.a.createElement(Te,{handleMainEventsBar:function(){t(function(e){var t=JSON.parse(localStorage.getItem("mainEventsBarOpened"))||{};return void 0!==t[e]?t[e]=!t[e]:t[e]=!0,localStorage.setItem("mainEventsBarOpened",JSON.stringify(t)),{type:"main/events/handled",payload:e}}(e))}}),r.a.createElement(Je.a,{in:a,timeout:300,classNames:"transition",unmountOnExit:!0},r.a.createElement(Be,{isOpened:1})))},Ze=a(44),Me=a.n(Ze);var Re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.loading})),a=Object(s.c)((function(e){return e.auth.authorized})),c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],d=o[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),b=p[0],f=p[1],_=Object(n.useState)(""),v=Object(i.a)(_,2),E=v[0],O=v[1],j=Object(n.useState)(""),h=Object(i.a)(j,2),g=h[0],C=h[1],y=function(){e(function(e,t){return function(a){a({type:"auth/process/started"}),w("/auth",{login:e,password:t}).then((function(e){"success"===e.status?(e.hasOwnProperty("token")&&localStorage.setItem("token",e.token),a({type:"auth/process/succeed",payload:e})):a({type:"auth/process/failed",payload:e})}))}}(E,g)),f(!0)},N=function(e){13===e.keyCode&&y()},S=""===E||""===g;if(!t&&b){if(a)return r.a.createElement(l.a,{to:"/admin"});d(!0),f(!1)}return r.a.createElement("div",{className:Me.a.auth},r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:E,onChange:function(e){O(e.target.value)},className:Me.a.input,onKeyDown:N}),r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:g,onChange:function(e){C(e.target.value)},className:Me.a.input,onKeyDown:N}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:y,className:Me.a.button,disabled:t||S},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("div",{className:Me.a.loader},t&&b&&r.a.createElement(Q,{size:"small"})),r.a.createElement("div",{className:Me.a.error},u&&"\u043e\u0448\u0438\u0431\u043a\u0430"))};var Fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,null))},Le=(a(132),a(38)),Ke=a.n(Le),Qe=a(143),Xe=a.n(Qe);var Ye=function(e){var t=e.handleClick,a=e.text;return r.a.createElement("div",null,r.a.createElement("button",{className:Xe.a.button,onClick:t},a))};var Ge=function(){var e=Object(l.i)("/admin/add"),t=Object(s.c)((function(e){return e.onlines.creating})),a=Object(s.b)(),c=Object(n.useState)(e),o=Object(i.a)(c,2),u=o[0],m=o[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),f=b[0],_=b[1],v=Object(n.useState)(G.EditorState.createEmpty()),E=Object(i.a)(v,2),O=E[0],j=E[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),C=g[0],y=g[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),k=S[0],x=S[1],P=function(){x(!1),m(!u)},B=0===O.getCurrentContent().getPlainText().length;return!t&&C&&(_(""),j(G.EditorState.createEmpty()),y(!1)),u?r.a.createElement("div",{className:Ke.a.broadcastsCreator},r.a.createElement("div",{className:Ke.a.time},d()(new Date).format("HH:mm")),r.a.createElement("div",null,r.a.createElement("textarea",{className:Ke.a.title,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:f,onChange:function(e){return _(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(J.Editor,{editorRef:function(e){return!k&&(null===e||void 0===e?void 0:e.focus())},editorState:O,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442",toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){return j(e)},onBlur:function(){return x(!0)}})),r.a.createElement("div",{className:Ke.a.buttons},r.a.createElement("div",null,r.a.createElement("button",{className:Ke.a.cancel,onClick:P},"\u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("div",null,r.a.createElement("button",{className:Ke.a.add,onClick:function(){y(!0),a(function(e,t,a){return function(n){n({type:"online/create/started"}),w("/onlines",{title:e,introtext:t,photoId:a}).then((function(e){n({type:"online/create/succeed",payload:e})}))}}(f,W()(Object(G.convertToRaw)(O.getCurrentContent()))))},disabled:t||B},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("div",{className:Ke.a.loader},t&&r.a.createElement(Q,{size:"small"}))))):r.a.createElement(Ye,{handleClick:P,text:"\u041d\u043e\u0432\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u044f..."})};var Ve=function(e){var t=e.isAdmin,a=Object(s.b)();Object(n.useEffect)((function(){a(P())}),[a]);var c=Object(s.c)((function(e){return e.onlines.items}));return Object(s.c)((function(e){return e.onlines.loading}))?r.a.createElement("div",{className:ee.a.loader},r.a.createElement(Q,{size:"large"})):r.a.createElement("div",null,r.a.createElement(Ge,null),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(q,{online:e,key:e._id,isAdmin:t})}))))};var We=function(e){var t=e.isAdmin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,{isAdmin:t}))},Ue=a(26),qe=a.n(Ue);var $e=function(){var e=Object(l.h)().id,t=Object(s.b)(),a=Object(s.c)((function(e){return e.posts.creating})),c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],m=o[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),f=b[0],_=b[1],v=Object(n.useState)(G.EditorState.createEmpty()),E=Object(i.a)(v,2),O=E[0],j=E[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),C=g[0],y=g[1],N=Object(n.useRef)(null),S=Object(n.useState)(!1),k=Object(i.a)(S,2),x=k[0],P=k[1],B=function(){return P(!x)},D=Object(n.useState)(!1),I=Object(i.a)(D,2),H=I[0],A=I[1],T=function(){A(!1),m(!u)};return!a&&C&&(_(""),j(""),P(!1),y(!1)),u?r.a.createElement("div",{className:K()(qe.a.postCreator,Object(z.a)({},qe.a.importantPostCreator,x))},r.a.createElement("div",{className:qe.a.time},d()(new Date).format("HH:mm")),r.a.createElement("div",null,r.a.createElement("textarea",{ref:N,className:qe.a.title,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:f,onChange:function(e){return _(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(J.Editor,{editorRef:function(e){return!H&&(null===e||void 0===e?void 0:e.focus())},editorState:O,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442",toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){return j(e)},onBlur:function(){return A(!0)}})),r.a.createElement("div",{className:qe.a.handlers},r.a.createElement("div",{className:qe.a.importance},r.a.createElement(be,{defaultValue:x,onSwitchedOff:B,onSwitchedOn:B})),r.a.createElement("div",{className:qe.a.buttons},r.a.createElement("div",null,r.a.createElement("button",{className:qe.a.cancel,onClick:T},"\u041e\u0442\u043c\u0435\u043d\u0430")),r.a.createElement("div",null,r.a.createElement("button",{className:qe.a.add,onClick:function(){y(!0),t(function(e,t,a,n){return function(r){r({type:"post/create/started"}),w("/post/".concat(e),{title:t,content:a,important:n}).then((function(e){r({type:"post/create/succeed",payload:e})}))}}(e,f,W()(Object(G.convertToRaw)(O.getCurrentContent())),x))},disabled:a},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("div",{className:qe.a.loader},a&&r.a.createElement(Q,{size:"small"})))))):r.a.createElement(Ye,{handleClick:T,text:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442..."})};var et=function(e){var t=e.isAdmin,a=Object(l.h)().id,c=Object(s.b)();Object(n.useEffect)((function(){c(B(a))}),[c,a]);var o=Object(s.c)((function(e){return e.posts.items.sort((function(e,t){return new Date(t.createdDate)-new Date(e.createdDate)}))}));return Object(s.c)((function(e){return e.posts.loading}))?r.a.createElement("div",{className:ee.a.loader},r.a.createElement(Q,{size:"large"})):r.a.createElement("div",null,r.a.createElement($e,null),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(_e,{item:e,isAdmin:t,key:e._id})}))))};var tt=function(e){var t=e.path,a=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),l=o[0],s=o[1];return Object(n.useEffect)((function(){k("/autologin").then((function(e){"success"===e.status&&r(!0),s(!1)}))}),[r,s]),Object(n.useMemo)((function(){return[a,l]}),[a,l])}(),c=Object(i.a)(a,2),o=c[0];return c[1]?null:o?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{exact:!0,path:t},r.a.createElement(We,{isAdmin:o})),r.a.createElement(l.b,{exact:!0,path:"".concat(t,"/:id")},r.a.createElement(et,{isAdmin:o}))):r.a.createElement(l.a,{to:"/auth"})};var at=function(){return r.a.createElement("div",null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(te,null)),r.a.createElement(l.b,{path:"/auth"},r.a.createElement(Fe,null)),r.a.createElement(tt,{path:"/admin"}),r.a.createElement(l.b,{path:"/:id"},r.a.createElement(ze,null))))},nt=a(18);var rt=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(nt.a,null,r.a.createElement(at,null)))},ct=a(45),ot=a(1),lt={loading:!1,items:[],creating:!1,editing:!1,deleting:!1,reversed:null===localStorage.getItem("reversed")?{}:JSON.parse(localStorage.getItem("reversed")),postsCount:null===localStorage.getItem("postsCount")?{}:JSON.parse(localStorage.getItem("postsCount")),mainEventsBarOpened:null===localStorage.getItem("mainEventsBarOpened")?{}:JSON.parse(localStorage.getItem("mainEventsBarOpened"))};var st=a(144),it=a(146),ut={content:"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u0441\u0442\u044b",separate:!0,_id:"separate1",createdDate:new Date},dt={loading:!1,backLoading:!1,items:[],temp:[],creating:!1,deleting:!1,editing:!1};var mt={loading:!1,success:!1,error:!1,isAdmin:!1,fetching:!1,authorized:!1,jwt:localStorage.getItem("token")};var pt=Object(it.a)({diff:!0,collapsed:!0}),bt=Object(ct.c)({onlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts/order/reversed":var a=void 0!==e.reversed[t.payload]&&e.reversed[t.payload];return Object(ot.a)(Object(ot.a)({},e),{},{reversed:Object(ot.a)(Object(ot.a)({},e.reversed),{},Object(z.a)({},t.payload,!a))});case"posts/count/set":return Object(ot.a)(Object(ot.a)({},e),{},{postsCount:Object(ot.a)(Object(ot.a)({},e.postsCount),{},Object(z.a)({},t.payload.id,t.payload.count))});case"main/events/handled":var n=void 0!==e.mainEventsBarOpened[t.payload]&&e.mainEventsBarOpened[t.payload];return Object(ot.a)(Object(ot.a)({},e),{},{mainEventsBarOpened:Object(ot.a)(Object(ot.a)({},e.mainEventsBarOpened),{},Object(z.a)({},t.payload,!n))});case"onlines/load/started":return Object(ot.a)(Object(ot.a)({},e),{},{loading:!0});case"onlines/load/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:t.payload,loading:!1});case"online/create/started":return Object(ot.a)(Object(ot.a)({},e),{},{creating:!0});case"online/create/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:[t.payload].concat(Object(ae.a)(e.items)),creating:!1});case"online/delete/started":return Object(ot.a)(Object(ot.a)({},e),{},{deleting:!0});case"online/delete/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload})),deleting:!1});case"online/edit/started":return Object(ot.a)(Object(ot.a)({},e),{},{editing:!0});case"online/edit/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:e.items.map((function(e){return e._id===t.payload._id?t.payload:e})),editing:!1});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts/load/started":return Object(ot.a)(Object(ot.a)({},e),{},{items:[],loading:!0});case"posts/load/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:t.payload,loading:!1});case"post/create/started":return Object(ot.a)(Object(ot.a)({},e),{},{creating:!0});case"post/create/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:[t.payload].concat(Object(ae.a)(e.items)),creating:!1});case"post/delete/started":return Object(ot.a)(Object(ot.a)({},e),{},{deleting:!0});case"post/delete/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload})),deleting:!1});case"post/edit/started":return Object(ot.a)(Object(ot.a)({},e),{},{editing:!0});case"post/edit/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{items:e.items.map((function(e){return e._id===t.payload._id?t.payload:e})),editing:!1});case"backposts/load/started":return Object(ot.a)(Object(ot.a)({},e),{},{backLoading:!0});case"backposts/load/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{temp:t.payload,backLoading:!1});case"backposts/append/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{temp:[],items:[].concat(Object(ae.a)(e.items.filter((function(e){return!e.separate}))),[ut],Object(ae.a)(e.temp))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/process/started":return Object(ot.a)(Object(ot.a)({},e),{},{loading:!0});case"auth/process/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{jwt:t.payload,loading:!1,authorized:!0});case"auth/process/failed":return Object(ot.a)(Object(ot.a)({},e),{},{error:t.payload.error,loading:!1});case"autologin/receive/started":return Object(ot.a)(Object(ot.a)({},e),{},{fetching:!0});case"autologin/receive/succeed":return Object(ot.a)(Object(ot.a)({},e),{},{fetching:!1,isAdmin:"success"===t.payload.status});default:return e}}}),ft=Object(ct.d)(bt,Object(ct.a)(st.a,pt));a(273);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:ft},r.a.createElement(rt,null))),document.getElementById("root"))},28:function(e,t,a){e.exports={postsPage:"postsPage_postsPage__KG2DN",loader:"postsPage_loader__23Q-3",posts:"postsPage_posts__3avaI"}},33:function(e,t,a){e.exports={background:"onlineEditor_background__ZOprL",onlineEditor:"onlineEditor_onlineEditor__3apFc",onlineEditorCreator:"onlineEditor_onlineEditorCreator__Y7m__",title:"onlineEditor_title__1kQ6e",content:"onlineEditor_content__34c4y",time:"onlineEditor_time__PvrOY",buttons:"onlineEditor_buttons__1fKwj",loader:"onlineEditor_loader__lRFxB",cancel:"onlineEditor_cancel__prQgz",edit:"onlineEditor_edit__Pu3WC",add:"onlineEditor_add__asOjx"}},38:function(e,t,a){e.exports={broadcastsCreator:"onlineCreator_broadcastsCreator__Zqh17",title:"onlineCreator_title__fM-Nz",content:"onlineCreator_content__2EeZa",time:"onlineCreator_time__3a6FK",buttons:"onlineCreator_buttons__1iCfq",loader:"onlineCreator_loader__2nobn",cancel:"onlineCreator_cancel__1lxs4",add:"onlineCreator_add__X6GJu"}},43:function(e,t,a){e.exports={background:"popup_background__IfYZO",buttons:"popup_buttons__28bpo",popup:"popup_popup__VlIZv",cancel:"popup_cancel__14vDp",add:"popup_add__pHX8J"}},44:function(e,t,a){e.exports={auth:"auth_auth__IFtRK",input:"auth_input__ON05b",loader:"auth_loader__3w7FJ",error:"auth_error__2Xva7",button:"auth_button__1f-BD"}},46:function(e,t,a){e.exports={card:"post_card__EOpWs",importantCard:"post_importantCard__2pKST",time:"post_time__1U0Bf",title:"post_title__13sZN",content:"post_content__2Xnfq",contentDark:"post_contentDark__3NgZS"}},53:function(e,t,a){e.exports={online:"onlines_online__YbsxQ",time:"onlines_time__1z2Up",title:"onlines_title__252-k",content:"onlines_content__3ld87"}},54:function(e,t,a){e.exports={switcher:"button_switcher__3xLCH",backgroundOff:"button_backgroundOff__2WmDo",backgroundOn:"button_backgroundOn__3GKax",round:"button_round__2MCJw"}},55:function(e,t,a){e.exports={mainEvent:"mainEvent_mainEvent__3mryd",checkpoint:"mainEvent_checkpoint__2tZ63",text:"mainEvent_text__1bTXw",time:"mainEvent_time__-wPll"}},69:function(e,t,a){e.exports={dropdownItem:"dropdown_dropdownItem__1zTbg",dropdown:"dropdown_dropdown__2MQdq"}},71:function(e,t,a){e.exports={large:"loader_large__1BwFb",small:"loader_small__2VoRA",loader:"loader_loader__3_a-M",spin:"loader_spin__ZK37A"}},72:function(e,t,a){e.exports={handlers:"posts_handlers__37mXQ",post:"posts_post__qZoDJ",buttons:"posts_buttons__1RTHx",newPostsBorder:"posts_newPostsBorder__3jfl7"}}},[[148,1,2]]]);
//# sourceMappingURL=main.d4dfff10.chunk.js.map