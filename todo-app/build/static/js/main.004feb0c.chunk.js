(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(15),l=n.n(s),i=(n(28),n(10)),r=n(7),o=n(4),d=n(0);function u(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),r=i[0],u=i[1],b=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(a),j=Object(c.useRef)(null),m=Object(c.useRef)(null);var O=Object(d.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editTask(e.id,r),u(""),s(!1)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("label",{className:"todo-label",htmlFor:e.id,children:["Hi enter a new name for ",e.name]}),Object(d.jsx)("input",{id:e.id,className:"todo-text",type:"text",value:r,onChange:function(e){u(e.target.value)},ref:j})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn todo-cancel",onClick:function(){return s(!1)},children:["Cancel",Object(d.jsxs)("span",{className:"visually-hidden",children:["renaming ",e.name]})]}),Object(d.jsxs)("button",{type:"submit",className:"btn btn__primary todo-edit",children:["Save",Object(d.jsxs)("span",{className:"visually-hidden",children:["new name for ",e.name]})]})]})]}),h=Object(d.jsxs)("div",{className:"stack-small",children:[Object(d.jsxs)("div",{className:"c-cb",children:[Object(d.jsx)("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),Object(d.jsx)("label",{className:"todo-label",htmlFor:e.id,children:e.name})]}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},ref:m,children:["Edit ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)},children:["Delete ",Object(d.jsx)("span",{className:"visually-hidden",children:e.name})]})]})]});return Object(c.useEffect)((function(){!b&&a?j.current.focus():m.current.focus()}),[a,b]),Object(d.jsx)("li",{className:"todo ",children:a?O:h})}var b=function(e){return Object(d.jsxs)("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)},children:[Object(d.jsx)("span",{className:"visually-hidden",children:"Show "}),Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("span",{className:"visually-hidden",children:" tasks"})]})},j=n(20),m=n(11);n(30);var O=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],l=function(){var e=Object(c.useState)(new Date),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(d.jsx)(j.a,{value:n})};return Object(d.jsxs)(d.Fragment,{children:["   ",Object(d.jsx)(l,{style:{margin:"auto",width:"40%"}}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTask(a),s("")},required:!0,children:[Object(d.jsx)("h2",{className:"label-wrapper",children:Object(d.jsx)("label",{htmlFor:"new-todo-input",className:"label__lg",children:"What needs to be done?"})}),Object(d.jsx)("input",{type:"text",id:Math.ceil(1e3*Math.random()),className:"input input__lg",name:"text",autoComplete:"off",value:a,onChange:function(e){s(e.target.value)}}),Object(d.jsxs)("div",{class:"button__wrap",children:[Object(d.jsx)("button",{className:"button btn btn__primary btn__lg",type:"submit",children:"ADD"}),Object(d.jsx)("div",{class:"button__shadow"})]})]})]})},h={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(h);var f=function(e){var t=Object(c.useState)(e.tasks),n=Object(o.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)("All"),j=Object(o.a)(l,2),f=j[0],x=j[1];function v(e){var t=a.map((function(t){return e===t.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}));s(t)}var g=a.filter(h[f]).map((function(e){return Object(d.jsx)(u,{id:e.id,name:e.name,completed:e.completed,toggleTaskCompleted:v,deleteTask:_,editTask:C},e.id)})),k=p.map((function(e){return Object(d.jsx)(b,{name:e,isPressed:e===f,setFilter:x},e)})),N=g.length>1?"tasks":"task",y="".concat(g.length," ").concat(N," remaining");function _(e){var t=a.filter((function(t){return e!==t.id}));s(t)}function C(e,t){var n=a.map((function(n){return e===n.id?Object(r.a)(Object(r.a)({},n),{},{name:t}):n}));s(n)}return Object(d.jsxs)("div",{className:"todoapp stack-large",children:[g.length>0?Object(d.jsx)("h1",{children:y}):Object(d.jsx)("h1",{children:"You don't have anything to do"}),Object(d.jsx)(O,{addTask:function(e){if(0!==e.length){var t={id:"todo-"+Object(m.a)(),name:e,completed:!1};s([].concat(Object(i.a)(a),[t]))}}}),Object(d.jsx)("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading",children:g}),k]})},x=n(42);l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(f,{tasks:[]})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.004feb0c.chunk.js.map