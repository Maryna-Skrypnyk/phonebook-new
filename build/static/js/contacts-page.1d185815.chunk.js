"use strict";(self.webpackChunkphonebook_new=self.webpackChunkphonebook_new||[]).push([[141],{6601:function(e,t,n){n.d(t,{Z:function(){return i}});var a="PageWrapper_PageWrapper__PZ9Ik",r=n(3329),i=function(e){var t=e.children;return(0,r.jsx)("div",{className:a,children:t})}},5185:function(e,t,n){n.r(t),n.d(t,{default:function(){return ke}});var a=n(885),r=n(2791),i=n(5407),c=n(1354),l=n(6601),o=n(4549),s=n(9434),u=n(4443),m=n(4165),d=n(5861),p=n(1044);p.Z.defaults.baseURL="https://".concat("633db86a7e19b1782914cdf4",".mockapi.io/");var h,f,b,x,v=n(6916),C=function(e){return e.contacts.items},j=function(e){return e.contacts.filter},y=function(e){return e.contacts.isLoading},_=(0,v.P1)([C,j],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)})).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}))})),g=n(2506),w=n(2773),O=n(7942),N=n(5985),Z=function(e,t){return N.Am[t](e,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},E="FormContactAdd_form__7fqgZ",F="FormContactAdd_label__BoD5M",I="FormContactAdd_input__sQGlR",k="FormContactAdd_errorName__u+sAz",P="FormContactAdd_errorNumber__YH59O",z=n(3329),B=(0,c.Z)((function(e){var t=e.saveContact,n=e.localization.localizedContent,a=n.isContact,r=n.contentBtnAdd,i=n.namePlaceholder,c=n.phoneNumber,l=n.required,o=n.minCharacterName,h=n.maxCharacterName,f=n.notSpaces,b=n.notValid,x=n.minCharacterNumber,v=n.maxCharacterNumber,y=(0,s.v9)(C),_=(0,s.v9)(j),N=(0,s.I0)(),B=O.Ry({name:O.Z_().trim(f).min(2,o).max(12,h).required(l),number:O.Z_().trim(f).matches(/^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/,b).min(8,x).max(18,v).required(l)});return(0,z.jsx)(g.J9,{initialValues:{name:"",number:""},validationSchema:B,onSubmit:function(e,n){var r=e.name,l=e.number,o=n.resetForm;y.find((function(e){return e.name===r}))?Z("".concat(i,' "').concat(r,'" ').concat(a),"warn"):y.find((function(e){return e.number===l}))?Z("".concat(c,' "').concat(l,'" ').concat(a),"warn"):(N(function(e){var t=e.name,n=e.number;return function(){var e=(0,d.Z)((0,m.Z)().mark((function e(a){var r,i,c;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t,number:n},a((0,u.md)()),e.prev=2,e.next=5,p.Z.post("/contacts",r);case 5:i=e.sent,c=i.data,console.log(c),a((0,u.ff)(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),a((0,u.xZ)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}({name:r,number:l})),o({name:"",number:""}),t(),_.length>0&&N((0,u.M6)("")))},validateOnBlur:!1,children:(0,z.jsxs)(g.l0,{className:E,children:[(0,z.jsx)("label",{htmlFor:"name",className:F,children:i}),(0,z.jsx)(g.gN,{id:"name",name:"name",type:"text",className:I,placeholder:i,autoFocus:!0}),(0,z.jsx)(g.Bc,{component:"span",name:"name",className:k}),(0,z.jsx)("label",{htmlFor:"number",className:F,children:c}),(0,z.jsx)(g.gN,{id:"number",name:"number",type:"tel",className:I,placeholder:c}),(0,z.jsx)(g.Bc,{component:"span",name:"number",className:P}),(0,z.jsx)(w.Z,{type:"submit",btnClass:"button","aria-label":"Add contact",children:r})]})})})),M=n(7124),A=n(2984),S="FormContactEdit_form__R0-aG",L="FormContactEdit_label__JT34b",D="FormContactEdit_input__oxejE",V="FormContactEdit_errorName__Xyayi",q="FormContactEdit_errorNumber__rZrn7",R=(0,c.Z)((function(e){var t=e.saveContact,n=e.localization,a=e.id,r=n.localizedContent,i=r.isContact,c=r.contentBtnEdit,l=r.namePlaceholder,o=r.phoneNumber,h=r.required,f=r.minCharacterName,b=r.maxCharacterName,x=r.notSpaces,v=r.notValid,j=r.minCharacterNumber,y=r.maxCharacterNumber,_=(0,s.v9)(C),N=(0,s.I0)(),E=_.find((function(e){return e.id===a})),F=O.Ry({name:O.Z_().trim(x).min(2,f).max(12,b).required(h),number:O.Z_().trim(x).matches(/^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/,v).min(8,j).max(18,y).required(h)});return(0,z.jsx)(g.J9,{initialValues:{name:E.name,number:E.number},validationSchema:F,onSubmit:function(e,n){var r=e.name,c=e.number,s=n.resetForm,h=_.filter((function(e){return e.id!==a}));h.find((function(e){return e.name===r}))?Z("".concat(l,' "').concat(r,'" ').concat(i),"warn"):h.find((function(e){return e.number===c}))?Z("".concat(o,' "').concat(c,'" ').concat(i),"warn"):(N(function(e,t){var n=t.name,a=t.number;return function(){var t=(0,d.Z)((0,m.Z)().mark((function t(r){var i,c,l;return(0,m.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={name:n,number:a},r((0,u.IC)()),t.prev=2,t.next=5,p.Z.put("/contacts/".concat(e),i);case 5:c=t.sent,l=c.data,r((0,u.Cy)(l)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r((0,u.G4)(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(E.id,{name:r,number:c})),s({name:"",number:""}),t())},validateOnBlur:!1,children:(0,z.jsxs)(g.l0,{className:S,children:[(0,z.jsx)("label",{htmlFor:"name",className:L,children:l}),(0,z.jsx)(g.gN,{id:"name",name:"name",type:"text",className:D,placeholder:l,autoFocus:!0}),(0,z.jsx)(g.Bc,{component:"span",name:"name",className:V}),(0,z.jsx)("label",{htmlFor:"number",className:L,children:o}),(0,z.jsx)(g.gN,{id:"number",name:"number",type:"tel",className:D,placeholder:o}),(0,z.jsx)(g.Bc,{component:"span",name:"number",className:q}),(0,z.jsx)(w.Z,{type:"submit",btnClass:"button","aria-label":"Add contact",children:c})]})})})),T=n(6074),H=n(2900),U=["title","titleId"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function J(e,t){var n=e.title,a=e.titleId,i=G(e,U);return r.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,h||(h=r.createElement("polygon",{fill:"#F6AB0E",points:"29,5 29,2 19,2 19,5 9,5 9,11 39,11 39,5"})),f||(f=r.createElement("polygon",{points:"8.291,11 11.3,42 36.7,42 39.709,11"})),b||(b=r.createElement("rect",{width:36,height:6,x:6,y:8,fill:"#3dd9eb"})),x||(x=r.createElement("rect",{width:30,height:3,x:9,y:8,fill:"#00b3d7"})))}var Y,$,Q,K,X,ee,te=r.forwardRef(J),ne=(n.p,["title","titleId"]);function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ae.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,a=e.titleId,i=re(e,ne);return r.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,Y||(Y=r.createElement("path",{fill:"#c94f60",d:"M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718 C43.139,10.526,43.139,9.625,42.583,9.067"})),$||($=r.createElement("path",{fill:"#f0f0f0",d:"M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"})),Q||(Q=r.createElement("path",{d:"M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z"})),K||(K=r.createElement("linearGradient",{id:"YoPixpDbHWOyk~b005eF1a",x1:35.612,x2:35.612,y1:7.494,y2:17.921,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{offset:0,stopColor:"#dedede"}),r.createElement("stop",{offset:1,stopColor:"#d6d6d6"}))),X||(X=r.createElement("path",{fill:"url(#YoPixpDbHWOyk~b005eF1a)",d:"M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"})),ee||(ee=r.createElement("path",{fill:"#787878",d:"M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"})))}var ce,le,oe=r.forwardRef(ie),se=(n.p,n(1925)),ue="ContactItem_contactItem__ZG7gz",me="ContactItem_contact__0q0mn",de="ContactItem_contactName__-VQ6O",pe="ContactItem_iconDelete__BK4bE",he="ContactItem_iconEdit__Ek0Wi",fe="ContactItem_buttons__2J6dV",be=function(e){var t=e.onDeleteContact,n=e.id,i=e.name,c=e.number,l=(0,r.useState)(!1),s=(0,a.Z)(l,2),u=s[0],m=s[1],d=function(){m(!u)};return(0,z.jsxs)(H.E.li,{className:ue,initial:{x:-50,opacity:0},animate:{x:0},exit:{x:50,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!1},transition:{ease:"easeOut",duration:.3},children:[(0,z.jsxs)("p",{className:me,children:[(0,z.jsxs)("span",{className:de,children:[i,":"]})," ",c]}),(0,z.jsxs)("div",{className:fe,children:[(0,z.jsx)(T.Z,{onClick:d,"aria-label":"Update contact",btnClass:"btnDeleteContact",children:(0,z.jsx)(oe,{width:"30",height:"30",className:he})}),(0,z.jsx)(T.Z,{onClick:t,"aria-label":"Delete contact",btnClass:"btnDeleteContact",children:(0,z.jsx)(te,{width:"30",height:"30",className:pe})})]}),(0,z.jsx)(o.M,{children:u&&(0,z.jsxs)(M.Z,{onClose:d,children:[(0,z.jsx)(R,{id:n,saveContact:d}),(0,z.jsx)(T.Z,{onClick:d,btnClass:"btnCloseModal","aria-label":"Close modal add contacts",children:(0,z.jsx)(se.r,{width:"32",height:"32",fill:"currentColor"})})]})})]})},xe="ContactList_contactList__8vp2H",ve="ContactList_notice__IjD3t",Ce=(0,c.Z)((function(e){var t=e.localization.localizedContent,n=t.noContacts,a=t.noFilterContacts,i=(0,s.v9)(C),c=(0,s.v9)(_),l=(0,s.v9)(y),m=(0,s.I0)();(0,r.useEffect)((function(){return m((function(e){e((0,u.$0)()),p.Z.get("/contacts").then((function(t){var n=t.data;return e((0,u.v2)(n))})).catch((function(t){return e((0,u.I7)(t))}))}))}),[m]);var d=function(e){return m((t=e,function(e){e((0,u.us)());try{p.Z.delete("contacts/".concat(t)),e((0,u.uv)(t))}catch(n){e((0,u.EF)(n))}}));var t};return(0,z.jsxs)(z.Fragment,{children:[l&&(0,z.jsx)(A.Z,{}),0===c.length&&0!==i.length&&(0,z.jsx)(H.E.p,{className:ve,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a}),0===i.length&&(0,z.jsx)(H.E.p,{className:ve,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n}),(0,z.jsx)("ul",{className:xe,children:(0,z.jsx)(o.M,{children:null===c||void 0===c?void 0:c.map((function(e){var t=e.name,n=e.number,a=e.id;return(0,z.jsx)(be,{id:a,name:t,number:n,onDeleteContact:function(){return d(a)}},a)}))})})]})})),je=n(2810),ye="Filter_filter__WVAej",_e="Filter_label__M4T-Z",ge="Filter_input__mZBb0",we=(0,c.Z)((function(e){var t=e.localization,n=(0,je.Z)(),a=t.localizedContent,r=a.titleFilter,i=a.filterPlaceholder,c=(0,s.v9)(j),l=(0,s.v9)(C),o=(0,s.I0)();return(0,z.jsx)(z.Fragment,{children:l.length>0&&(0,z.jsxs)(H.E.div,{className:ye,initial:{opacity:0},exit:{opacity:0},transition:{ease:"easeOut",duration:.5},whileInView:{opacity:1},viewport:{once:!1},children:[(0,z.jsx)("label",{htmlFor:n,className:_e,children:r}),(0,z.jsx)(H.E.input,{id:n,type:"text",name:"name",value:c,onChange:function(e){return o((0,u.M6)(e.target.value))},placeholder:i,className:ge,initial:{scale:0},exit:{scale:0},transition:{ease:"easeOut",duration:.5},animate:{scale:1}})]})})})),Oe=n(5079),Ne=["title","titleId"];function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ze.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Fe(e,t){var n=e.title,a=e.titleId,i=Ee(e,Ne);return r.createElement("svg",Ze({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,ce||(ce=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),le||(le=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var Ie=r.forwardRef(Fe),ke=(n.p,(0,c.Z)((function(e){var t=e.localization.localizedContent,n=t.primaryTitle,c=t.secondaryTitle,s=t.contentBtnAdd,u=(0,r.useState)(!1),m=(0,a.Z)(u,2),d=m[0],p=m[1],h=function(){p(!d)};return(0,z.jsxs)(l.Z,{children:[(0,z.jsx)(i.Z,{primaryTitle:n,titleClass:"primaryTitle"}),(0,z.jsxs)(Oe.Z,{onClick:h,btnClass:"btnAddContact","aria-label":"Add contact",children:[(0,z.jsx)(Ie,{width:"30",height:"30",fill:"currentColor"}),s]}),(0,z.jsx)(o.M,{children:d&&(0,z.jsxs)(M.Z,{onClose:h,children:[(0,z.jsx)(B,{saveContact:h}),(0,z.jsx)(T.Z,{onClick:h,btnClass:"btnCloseModal","aria-label":"Close modal add contacts",children:(0,z.jsx)(se.r,{width:"32",height:"32",fill:"currentColor"})})]})}),(0,z.jsx)(i.Z,{secondaryTitle:c,titleClass:"secondaryTitle"}),(0,z.jsx)(we,{}),(0,z.jsx)(Ce,{})]})})))}}]);
//# sourceMappingURL=contacts-page.1d185815.chunk.js.map