(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),o=c(8),s=c.n(o),a=c(10),r=c(7),l=(c(15),c(16),c(9)),d=c(1),u=function(e){var t=e.submit,c=e.todo,n=e.setTodo;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("p",{className:"header-text",children:"TODO"}),Object(d.jsxs)("form",{onSubmit:t,className:"form",children:[Object(d.jsx)("input",{type:"text",className:"todo-form",placeholder:"Create a new todo...",value:c,onChange:function(e){n(e.target.value)}}),Object(d.jsx)(l.a,{onClick:t,className:"todo-btn"})]})]})},j=(c(18),c(6)),f=function(e){var t=e.items,c=e.deleteItem,n=e.editTodo,i=e.handleCheck;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("p",{className:"list-text",children:"What are we doing today ?"}),t.map((function(e){return Object(d.jsxs)("div",{className:"todo-list",children:[Object(d.jsx)("input",{type:"checkbox",checked:e.completed,className:"input-checkbox",onChange:function(){i(e.id)}}),Object(d.jsx)("span",{className:e.completed?"active":"input-text",children:e.text}),Object(d.jsx)(j.a,{className:"edit-btn",onClick:function(){return n(e.id)}}),Object(d.jsx)(j.b,{className:"delete-btn",onClick:function(){return c(e.id)}})]},e.id)}))]})},m=(c(19),function(e){var t=e.items,c=e.completed,n=e.active,i=t.length;return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("p",{children:[i," Items left"]}),Object(d.jsx)("span",{className:"opt",onClick:n,children:"Active"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"opt",onClick:c,children:"Completed"})]})}),b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),l=s[0],j=s[1];Object(n.useEffect)((function(){var e=localStorage.getItem("list"),t=JSON.parse(e);t&&j(t)}),[]),Object(n.useEffect)((function(){var e=JSON.stringify(l);localStorage.setItem("list",e)}),[l]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{todo:c,setTodo:i,submit:function(e){e.preventDefault();var t={id:Date.now(),text:c,completed:!1};""!==c&&(j([].concat(Object(a.a)(l),[t])),i(""))}}),Object(d.jsx)(f,{items:l,deleteItem:function(e){var t=l.filter((function(t){return t.id!==e}));j(t)},editTodo:function(e){var t=l.filter((function(t){return t.id!==e})),c=l.find((function(t){return t.id===e}));i(c.text),j(t)},handleCheck:function(e){var t=l.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));j(t)}}),Object(d.jsx)(m,{items:l,completed:function(e){var t=l.filter((function(e){return!0===e.completed}));j(t)},active:function(e){var t=l.filter((function(e){return!1===e.completed}));j(t)}})]})};c(20);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a66aa55c.chunk.js.map