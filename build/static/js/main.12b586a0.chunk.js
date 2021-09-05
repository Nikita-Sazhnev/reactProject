(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports={myModal:"MyModal_myModal__2h8q5",myModalContent:"MyModal_myModalContent__oRxSL",active:"MyModal_active__3Azo7"}},18:function(e,t,n){e.exports={loader:"MyLoader_loader__-1ZsY",rotate:"MyLoader_rotate__1EXwU",loaderWraper:"MyLoader_loaderWraper__1TAES"}},30:function(e,t,n){e.exports={myInp:"MyInput_myInp__1gGur"}},31:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__2LuSg"}},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),o=n(14),s=n(8),i=n.n(s),u=n(12),l=n(4),j=n(27),b=n(28),d=n(29),O=n.n(d),p=function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,null,[{key:"getAll",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),f=function(e,t){return Object(r.useMemo)((function(){return t?function(e,t){return e.sort((function(e,n){return"number"===typeof e[t]&&"number"===typeof n[t]?e[t]-n[t]:String(e[t]).localeCompare(String(n[t]))})),e}(Object(o.a)(e),t):e}),[t,e])},v=n(2),h=n(30),x=n.n(h),m=n(0),y=function(e){return Object(m.jsx)("input",Object(v.a)({className:x.a.myInp},e))},_=n(32),g=n(31),C=n.n(g),M=["children"],w=function(e){var t=e.children,n=Object(_.a)(e,M);return Object(m.jsx)("button",Object(v.a)(Object(v.a)({},n),{},{className:C.a.myBtn,children:t}))},N=function(e){var t=e.create,n=Object(r.useState)({title:"",body:""}),c=Object(l.a)(n,2),a=c[0],o=c[1];return Object(m.jsxs)("form",{children:[Object(m.jsx)(y,{value:a.title,type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){return o(Object(v.a)(Object(v.a)({},a),{},{title:e.target.value}))}}),Object(m.jsx)(y,{value:a.body,onChange:function(e){return o(Object(v.a)(Object(v.a)({},a),{},{body:e.target.value}))},type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(m.jsx)(w,{onClick:function(e){e.preventDefault();var n=Object(v.a)(Object(v.a)({},a),{},{id:Date.now()});t(n),o({title:"",body:""})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},k=function(e){var t=e.remove,n=e.post;e.number;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"post",children:[Object(m.jsxs)("div",{className:"post_content",children:[Object(m.jsxs)("strong",{children:[" ",n.id,". ",n.title]}),Object(m.jsx)("div",{children:n.body})]}),Object(m.jsx)("div",{className:"post_btns",children:Object(m.jsx)(w,{onClick:function(){return t(n)},children:"X"})})]})})},S=n(64),L=n(63),A=function(e){var t=e.posts,n=e.remove;return t.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{textAlign:"center"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432"}),Object(m.jsx)(S.a,{children:t.map((function(e,t){return Object(m.jsx)(L.a,{timeout:500,classNames:"post",children:Object(m.jsx)(k,{remove:n,number:t+1,post:e})},e.id)}))})]}):Object(m.jsx)("h2",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})},I=function(e){var t=e.options,n=e.defaultValue,r=e.value,c=e.onChange;return Object(m.jsxs)("select",{value:r,onChange:function(e){return c(e.target.value)},children:[Object(m.jsx)("option",{disabled:!0,children:n}),t.map((function(e){return Object(m.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},q=function(e){var t=e.filter,n=e.setFilter;return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{value:t.query,placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(e){return n(Object(v.a)(Object(v.a)({},t),{},{query:e.target.value}))}}),Object(m.jsx)("hr",{style:{marginTop:"15px"}}),Object(m.jsx)(I,{defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",value:t.sort,onChange:function(e){return n(Object(v.a)(Object(v.a)({},t),{},{sort:e}))},options:[{value:"id",name:"ID"},{value:"title",name:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"},{value:"body",name:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}]})]})},B=n(15),E=n.n(B),V=function(e){var t=e.children,n=e.visible,r=e.setVisible,c=[E.a.myModal];return n&&c.push(E.a.active),Object(m.jsx)("div",{onClick:function(e){return r(!1)},className:c.join(" "),children:Object(m.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:E.a.myModalContent,children:t})})},D=n(18),T=n.n(D),W=function(){return Object(m.jsx)("div",{className:T.a.loaderWraper,children:Object(m.jsx)("div",{className:T.a.loader})})};n(60);var F=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({sort:"",query:""}),s=Object(l.a)(a,2),j=s[0],b=s[1],d=Object(r.useState)(!1),O=Object(l.a)(d,2),v=O[0],h=O[1],x=Object(r.useState)(!1),y=Object(l.a)(x,2),_=y[0],g=y[1],C=function(e,t,n){var c=f(e,t);return Object(r.useMemo)((function(){return c.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())||e.body.toLowerCase().includes(n.toLowerCase())}))}),[n,c])}(n,j.sort,j.query),M=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,p.getAll();case 3:t=e.sent,c(t),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return M()}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(w,{style:{marginTop:20},onClick:function(e){return h(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u041f\u043e\u0441\u0442"}),Object(m.jsx)(V,{visible:v,setVisible:h,children:Object(m.jsx)(N,{create:function(e){c([].concat(Object(o.a)(n),[e])),h(!1)}})}),Object(m.jsx)(q,{filter:j,setFilter:b}),_?Object(m.jsx)(W,{}):Object(m.jsx)(A,{remove:function(e){return c(n.filter((function(t){return t.id!==e.id})))},posts:C})]})};a.a.render(Object(m.jsx)(F,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.12b586a0.chunk.js.map