(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(6),s=n.n(o),a=n(7),r=n(5),d=(n(12),n(13),n(0)),u=function(t){var e=t.submit,n=t.todo,c=t.setTodo;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("p",{className:"header-text",children:"TODO"}),Object(d.jsxs)("form",{onSubmit:e,className:"form",children:[Object(d.jsx)("input",{type:"text",className:"todo-form",placeholder:"Create a new todo...",value:n,onChange:function(t){c(t.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"todo-btn",children:"+"})]})]})},l=(n(15),function(t){var e=t.items,n=t.deleteItem,c=t.editTodo,i=t.handleCheck;return Object(d.jsx)("div",{className:"container",children:e.map((function(t){return Object(d.jsxs)("div",{className:"todo-list",children:[Object(d.jsx)("input",{className:"input-checkbox",type:"checkbox",onChange:function(){i(t.id)}}),Object(d.jsx)("span",{className:"input-text",children:t.text}),Object(d.jsx)("button",{className:"edit-btn",onClick:function(){return c(t.id)},children:"gg"}),Object(d.jsx)("button",{className:"delete-btn",onClick:function(){return n(t.id)},children:"x"})]},t.id)}))})}),j=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),s=Object(r.a)(o,2),j=s[0],b=s[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{todo:n,setTodo:i,submit:function(t){t.preventDefault();var e={id:Date.now(),text:n,completed:!1};""!==n&&(b([].concat(Object(a.a)(j),[e])),i(""))}}),Object(d.jsx)(l,{items:j,deleteItem:function(t){var e=j.filter((function(e){return e.id!==t}));b(e)},editTodo:function(t){var e=j.filter((function(e){return e.id!==t})),n=j.find((function(e){return e.id===t}));i(n.text),b(e)},handleCheck:function(t){var e=j.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));b(e)}})]})};n(16);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1cd531f1.chunk.js.map