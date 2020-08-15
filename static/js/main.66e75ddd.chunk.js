(this["webpackJsonpgrocery-web"]=this["webpackJsonpgrocery-web"]||[]).push([[0],{61:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(57),l=a.n(s),o=a(11),c=a.n(o),u=a(3),i=a(27),m=a(26),d=a(55),p=a(17),h=function(){return r.a.createElement("div",{className:"spinner-border spinner-border-sm",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},f=function(e){var t=e.message;return(r.a.createElement("div",{className:"text-danger"},t))},b=function(e){var t=e.handleToggle,a=Object(n.useContext)(w).setUser,s=p.b().shape({username:p.c().min(2,"Username must be at least 2 characters").max(21,"Username must be less than 21 characters").required("Required"),email:p.c().email("Invalid email").required("Required"),password:p.c().min(10,"Password must be at least 10 characters").max(30,"Password must be less than 30 characters").required("Required"),verifyPassword:p.a().test("match","Passwords do not match.",(function(){return this.parent.password===this.parent.verifyPassword}))});function l(e,t){return o.apply(this,arguments)}function o(){return(o=Object(i.a)(c.a.mark((function e(t,n){var r,s,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setStatus,s=n.setSubmitting,e.prev=1,e.next=4,fetch("".concat("https://grocery-shopping-cart.herokuapp.com","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password,email:t.email})});case 4:return l=e.sent,e.next=7,l.json();case 7:o=e.sent,200===l.status&&a(o),400===l.status&&r({message:o.message}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),r({message:"Sign up failed."}),s(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var u=Object(d.a)({initialValues:{username:"",password:"",email:"",verifyPassword:""},validationSchema:s,onSubmit:l});return(r.a.createElement(g,{formik:u,handleSignUp:l,handleToggle:t}))},g=function(e){var t=e.formik,a=e.handleToggle;return(r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement("h1",null,"Sign Up"),t.status&&r.a.createElement(f,{message:t.status.message}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",type:"text",placeholder:"Username",className:"form-control",value:t.values.username,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.username&&t.errors.username&&r.a.createElement(f,{message:t.errors.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",className:"form-control",value:t.values.email,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.email&&t.errors.email&&r.a.createElement(f,{message:t.errors.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Password"),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",className:"form-control",value:t.values.password,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.password&&t.errors.password&&r.a.createElement(f,{message:t.errors.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"verifyPassword"},"Verify Password"),r.a.createElement("input",{name:"verifyPassword",type:"password",placeholder:"Verify Password",className:"form-control",value:t.values.verifyPassword,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.verifyPassword&&t.errors.verifyPassword&&r.a.createElement(f,{message:t.errors.verifyPassword})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:t.isSubmitting},t.isSubmitting?r.a.createElement(h,null):"Sign Up"),r.a.createElement("div",null,"Already a user?"," ",r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:a},"Sign up")))))},v=function(e){var t=e.handleToggle,a=Object(n.useContext)(w).setUser,s=p.b().shape({username:p.c().required("Required"),password:p.c().required("Required")});function l(){return(l=Object(i.a)(c.a.mark((function e(t,n){var r,s,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setStatus,s=n.setSubmitting,e.prev=1,r(null),e.next=5,fetch("".concat("https://grocery-shopping-cart.herokuapp.com","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return l=e.sent,e.next=8,l.json();case 8:o=e.sent,200===l.status&&a(o),400===l.status&&r({message:o.message}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),r({message:"Login failed."}),s(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var o=Object(d.a)({initialValues:{username:"",password:""},validationSchema:s,onSubmit:function(e,t){return l.apply(this,arguments)}});return(r.a.createElement(E,{formik:o,handleToggle:t}))},E=function(e){var t=e.formik,a=e.handleToggle;return(r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement("h1",null,"Login"),t.status&&r.a.createElement(f,{message:t.status.message}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",type:"text",placeholder:"Username",className:"form-control",value:t.values.username,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.username&&t.errors.username&&r.a.createElement(f,{message:t.errors.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",className:"form-control",value:t.values.password,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.password&&t.errors.password&&r.a.createElement(f,{message:t.errors.password})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:t.isSubmitting},t.isSubmitting?r.a.createElement(h,null):"Login"),r.a.createElement("div",null,"Don't have an account?"," ",r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:a},"Sign up")))))},y=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],s=t[1];function l(){s((function(e){return!e}))}return(r.a.createElement("div",null,a?r.a.createElement(v,{handleToggle:l}):r.a.createElement(b,{handleToggle:l})))},w=r.a.createContext(null),j=function(e){var t=e.children,a=Object(n.useState)({user:null,loading:!0}),s=Object(m.a)(a,2),l=s[0],o=s[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user_login_key");o(e?function(t){return Object(u.a)(Object(u.a)({},t),{},{user:JSON.parse(e),loading:!1})}:function(e){return Object(u.a)(Object(u.a)({},e),{},{loading:!1})})}),[]),l.loading?r.a.createElement(h,null):r.a.createElement(w.Provider,{value:{user:l.user,setUser:function(e){o((function(t){return Object(u.a)(Object(u.a)({},t),{},{user:e})})),e?localStorage.setItem("user_login_key",JSON.stringify(e)):localStorage.removeItem("user_login_key")}}},l.user?t:r.a.createElement(y,null))},O=function(e){var t=e.children;return(r.a.createElement("div",{className:"d-flex justify-content-center"},t))},N=function(){var e=Object(n.useContext)(w).user,t=Object(n.useState)({list:[],loading:!0,error:null}),a=Object(m.a)(t,2),s=a[0],l=a[1];function o(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://grocery-shopping-cart.herokuapp.com","/list"),{headers:{"Content-Type":"application/json",Authorization:e.token}});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,l((function(e){return Object(u.a)(Object(u.a)({},e),{},{list:n.list})})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),l((function(e){return Object(u.a)(Object(u.a)({},e),{},{error:"Unable to load data! :("})}));case 13:return t.prev=13,l((function(e){return Object(u.a)(Object(u.a)({},e),{},{loading:!1})})),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}function p(){l((function(e){return Object(u.a)(Object(u.a)({},e),{},{error:null,loading:!0})})),setTimeout((function(){o()}),500)}function b(){return(b=Object(i.a)(c.a.mark((function t(a,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://grocery-shopping-cart.herokuapp.com","/list/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:e.token}});case 3:return r=t.sent,t.next=6,r.json();case 6:if(200===r.status){t.next=8;break}throw f("Unhandled Exception");case 8:l((function(e){return Object(u.a)(Object(u.a)({},e),{},{list:e.list.filter((function(e){return e._id!==a}))})})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n();case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function g(){return(g=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://grocery-shopping-cart.herokuapp.com","/list"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:e.token}});case 2:if(200===t.sent.status){t.next=5;break}throw f("Unhandled Exception");case 5:l((function(e){return Object(u.a)(Object(u.a)({},e),{},{list:[]})}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){o()}),[]),s.error?r.a.createElement("div",null,r.a.createElement(f,{message:s.error}),r.a.createElement("div",{className:"d-flex justify-content-center mt-2 mb-2"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:p},"Retry"))):s.loading?r.a.createElement(h,null):r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("h3",{className:"d-inline-block mr-2"},"Grocery List"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:p},"Refresh")),r.a.createElement(k,{list:s.list,handleRemoveItem:function(e,t){return b.apply(this,arguments)},handleRemoveAll:function(){return g.apply(this,arguments)}}))},k=function(e){var t=e.list,a=e.handleRemoveItem,n=e.handleRemoveAll;return(r.a.createElement("div",null,0===t.length&&r.a.createElement("div",null,"Your list is empty!"),r.a.createElement("div",{className:"card"},r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e){return r.a.createElement(S,{key:e._id,id:e._id,name:e.name,handleRemoveItem:a})})))),t.length>0&&r.a.createElement(x,{handleRemoveAll:n})))},x=function(e){var t=e.handleRemoveAll;return(r.a.createElement("div",{className:"d-flex justify-content-end mt-3"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:t},"Clear List")))},S=function(e){var t=e.id,a=e.name,s=e.handleRemoveItem,l=Object(n.useState)(!1),o=Object(m.a)(l,2),c=o[0],u=o[1];return c?r.a.createElement("li",{className:"list-group-item"},r.a.createElement(h,null)):r.a.createElement(C,{id:t,name:a,handleRemoveItem:function(){u(!0),s(t,(function(){return u(!1)}))}})},C=function(e){var t=e.id,a=e.name,n=e.handleRemoveItem;return(r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,a),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:function(){return n(t)}},"Delete"))))},P=function(){return r.a.createElement(O,null,r.a.createElement(N,null))},T=function(e){var t=e.username,a=e.handleLogout;return(r.a.createElement("div",{className:"d-flex justify-content-end ml-3 mr-3"},r.a.createElement("div",{className:"pr-1"},t),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary",onClick:a},"Logout")))},R=function(){var e=Object(n.useContext)(w),t=e.user,a=e.setUser;return r.a.createElement(T,{username:t.user.username,handleLogout:function(){a(null)}})},U=function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(P,null))},B=function(){return r.a.createElement("div",{className:"mt-2"},r.a.createElement(j,null,r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.66e75ddd.chunk.js.map