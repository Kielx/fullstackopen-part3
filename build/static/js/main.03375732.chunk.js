(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{27:function(e,t,n){e.exports=n(53)},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),o=n(8),s=n.n(o),u=n(6),l=n.n(u),i=(n(49),n(25)),m=n(14),d=n(26),f=n(13),p=n.n(f),b=n(24),h={create:function(){var e=Object(b.a)(p.a.mark((function e(t,n,a,r,c){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("/api/persons",t);case 3:o=e.sent,a(n.concat(o.data)),r("success","".concat(c.name," with phone number ").concat(c.phone," was successfully created")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r("error","Data provided is invalid");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),delPerson:function(e,t,n,a){var r,c;Object.values(t).forEach((function(t){t._id===e&&(r=t.name,c=t.phone)})),window.confirm("Do you really want to delete ".concat(r,"?"))&&l.a.delete("".concat("/api/persons","/").concat(e)).then((function(o,s){200===o.status&&"OK"===o.statusText&&(s=t.filter((function(t){return t._id!==e})),n(s),a("success","".concat(r," with phone number ").concat(c," was successfully deleted!")))})).catch((function(e,t){a("error","Selected user does not exist!"),l.a.get("".concat("/api/persons")).then((function(e){n(e.data)}))}))},patchPersonNumber:function(e,t,n,a,r,c){l.a.patch("http://localhost:3001/persons/".concat(r.id),{phone:a}).then((function(o){var s=e.indexOf(r),u=Object(d.a)(e);u[s]=o.data,t(u),n("".concat(c," phone number was updated to ").concat(a," successfully!")),setTimeout((function(){n("")}),5e3)}))}},v=function(e){var t=e.persons,n=e.filteredPersons,a=e.setPersons,r=e.displayMessage,o=n.map((function(e){return c.a.createElement("div",{key:e._id},c.a.createElement("li",{id:e._id},e.name," ",e.phone),c.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){h.delPerson(e._id,t,a,r)}},"Delete"))}));return c.a.createElement("ul",null,o)},w=function(e){var t=e.val,n=e.changeHandler,a=e.name;return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:a},a),c.a.createElement("input",{id:a,value:t,onChange:n}))};function E(e){var t=e.newName,n=e.newPhoneNumber,a=e.setNewName,r=e.setNewPhoneNumber,o=e.handleNewNameAdd;return c.a.createElement("form",null,c.a.createElement(w,{val:t,changeHandler:function(e){a(e.target.value)},name:"Name:"}),c.a.createElement(w,{val:n,changeHandler:function(e){r(e.target.value)},name:"Phone number:"}),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:o},"Add new phonebook record"))}var O=function(e){var t=e.filter,n=e.setFilter;return c.a.createElement(w,{val:t,changeHandler:function(e){n(e.target.value)},name:"Filter results"})},j=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(r.useState)(""),u=Object(a.a)(s,2),d=u[0],f=u[1],p=Object(r.useState)(""),b=Object(a.a)(p,2),w=b[0],j=b[1],N=Object(r.useState)(""),y=Object(a.a)(N,2),g=y[0],P=y[1],k=Object(r.useState)(""),S=Object(a.a)(k,2),x=S[0],C=S[1],T=Object(r.useState)(""),_=Object(a.a)(T,2),D=_[0],F=_[1],H=Object(r.useState)(""),A=Object(a.a)(H,2),L=A[0],I=A[1],J=Object(r.useState)(!1),M=Object(a.a)(J,2),B=M[0],K=M[1],q=function(e,t){var n="";switch(e){case"error":n=F,F(t),I("");break;case"success":n=I,I(t),F("");break;default:throw new Error("Invalid message type")}B&&clearTimeout(B);var a=setTimeout((function(){n(""),K(!1)}),5e3);K(a)},z=function(){f(""),j("")};return Object(r.useEffect)((function(){l.a.get("/api/persons").then((function(e){o(e.data)}))}),[]),Object(r.useEffect)((function(){n?function(){var e=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())}));C(e)}():C("")}),[g,n]),c.a.createElement("div",null,c.a.createElement(O,{filter:g,setFilter:P}),c.a.createElement("h2",null,"Phonebook"),c.a.createElement(E,{newName:d,newPhoneNumber:w,setNewName:f,setNewPhoneNumber:j,handleNewNameAdd:function(e){var t;e.preventDefault();var a=!1;if(n.forEach((function(e){Object.values(e).includes(d)&&(a=!0,t=e)})),a&&window.confirm("The name ".concat(t.name," already exists, do you want to update the phone number for selected person?")))h.patchPersonNumber(n,o,I,w,t,d),z();else{var r={name:d,phone:w};h.create(r,n,o,q,r),z()}}}),c.a.createElement("h2",null,"Numbers"),L?c.a.createElement(m.a,{variant:"success"},L):null,D?c.a.createElement(m.a,{variant:"danger"},D):null,"object"===typeof x?c.a.createElement(v,{persons:n,filteredPersons:x,setPersons:o,displayMessage:q}):c.a.createElement(i.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))};s.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.03375732.chunk.js.map