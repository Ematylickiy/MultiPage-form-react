(this["webpackJsonpform-react"]=this["webpackJsonpform-react"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(15),n=a.n(r),l=a(5),i=a(2),o=(a(22),a(4)),j=a(0);var d=function(e){var t=e.to,a=e.textLink,c=void 0===a?"Back":a,s=e.textBtn,r=void 0===s?"Next":s;return Object(j.jsxs)("div",{className:"wrap-actions-steps",children:[Object(j.jsx)(l.b,{to:t,className:"btn btn-secondary",children:c}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:r})]})},m=function(e,t,a,c){e.preventDefault();var s=new FormData(e.target);t.map((function(e){return localStorage.setItem(e,s.get(e))})),a(c)},b=function(e){var t=e.path,a=e.to,s=void 0===a?"/":a,r=e.textLink,n=void 0===r?"Back":r,l=e.textBtn,b=void 0===l?"Next":l,u=Object(i.f)(),h=function(e){return u.push(e)},p=Object(c.useState)(""),x=Object(o.a)(p,2),O=x[0],f=x[1],N=Object(c.useState)(""),v=Object(o.a)(N,2),g=v[0],k=v[1];Object(c.useEffect)((function(){f(localStorage.getItem("First name")),k(localStorage.getItem("Last name"))}),[]);var y=["First name","Last name"];return Object(j.jsxs)("div",{className:"wrap-page-step1",children:[Object(j.jsx)("h2",{className:"text-center p-2",children:"Personal information"}),Object(j.jsxs)("form",{onSubmit:function(e){return m(e,y,h,t)},className:"needs-validation",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"First name"}),Object(j.jsx)("input",{className:"form-control",required:!0,autoComplete:"off",name:"First name",value:O||"",onChange:function(e){return f(e.target.value)}})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Last name"}),Object(j.jsx)("input",{className:"form-control",required:!0,autoComplete:"off",name:"Last name",value:g||"",onChange:function(e){return k(e.target.value)}})]}),Object(j.jsx)(d,{to:s,textLink:n,textBtn:b})]})]})},u=function(e){var t=e.path,a=e.to,s=void 0===a?"/step1":a,r=e.textLink,n=void 0===r?"Back":r,l=e.textBtn,b=void 0===l?"Next":l,u=Object(i.f)(),h=function(e){return u.push(e)},p=Object(c.useState)(""),x=Object(o.a)(p,2),O=x[0],f=x[1],N=Object(c.useState)(""),v=Object(o.a)(N,2),g=v[0],k=v[1];Object(c.useEffect)((function(){f(localStorage.getItem("placeOfBirth")),k(localStorage.getItem("dateOfBirth"))}),[]);var y=["gender","dateOfBirth","placeOfBirth"];return Object(j.jsxs)("div",{className:"wrap-page-step1",children:[Object(j.jsx)("h2",{className:"text-center p-2",children:"Personal information"}),Object(j.jsxs)("form",{onSubmit:function(e){return m(e,y,h,t)},children:[Object(j.jsx)("div",{className:"field mx-auto",style:{width:"170px"},children:["Male","Female"].map((function(e){return Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"gender",id:e,value:e,required:!0}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]},e)}))}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Date of birth"}),Object(j.jsx)("input",{max:"2005-01-01",required:!0,className:"form-control",name:"dateOfBirth",type:"date",value:g||"",onChange:function(e){return k(e.target.value)}})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Place of Birth"}),Object(j.jsx)("input",{required:!0,className:"form-control",name:"placeOfBirth",autoComplete:"off",value:O||"",onChange:function(e){return f(e.target.value)}})]}),Object(j.jsx)(d,{to:s,textLink:n,textBtn:b})]})]})},h=function(e){var t=e.path,a=e.to,s=void 0===a?"/step2":a,r=e.textLink,n=void 0===r?"Back":r,l=e.textBtn,b=void 0===l?"Next":l,u=Object(i.f)(),h=function(e){return u.push(e)},p=Object(c.useState)(""),x=Object(o.a)(p,2),O=x[0],f=x[1],N=Object(c.useState)(""),v=Object(o.a)(N,2),g=v[0],k=v[1],y=Object(c.useState)(""),S=Object(o.a)(y,2),B=S[0],I=S[1],C=Object(c.useState)(""),D=Object(o.a)(C,2),L=D[0],F=D[1],P=Object(c.useState)(""),q=Object(o.a)(P,2),w=q[0],T=q[1],E=Object(c.useState)(!1),V=Object(o.a)(E,2),_=V[0],U=V[1],A=["typeDocument","passportNum","dateOfIssue","dateValid","ussuedBy"];return Object(c.useEffect)((function(){f(localStorage.getItem("passportNum")),k(localStorage.getItem("dateOfIssue")),I(localStorage.getItem("dateValid")),F(localStorage.getItem("ussuedBy"))}),[]),Object(j.jsxs)("div",{className:"wrap-page-step1",children:[Object(j.jsx)("h2",{className:"text-center p-2",children:"Document information"}),Object(j.jsxs)("form",{onSubmit:function(e){var a=new FormData(e.target);m(e,A,h,t),"other"===a.get("typeDocument")&&localStorage.setItem("typeDocument",w)},children:[Object(j.jsx)("div",{className:"field ",children:Object(j.jsxs)("div",{className:"field mx-auto",children:[Object(j.jsx)("p",{className:"form-label",children:"Type of document:"}),Object(j.jsxs)("div",{className:"border-field",onChange:function(e){return"other"===e.target.value?U(!0):U(!1)},children:[["Ordinary passport","Diplomatic passport","ID Card"].map((function(e){return Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"typeDocument",id:e,value:e,required:!0}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]},e)})),Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"typeDocument",id:"otherDoc",value:"other"}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"other",children:"Other:"}),Object(j.jsx)("input",{required:_,type:"text",className:"form-control",value:w||"",onChange:function(e){return T(e.target.value)}})]})]})]})}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Number of document"}),Object(j.jsx)("input",{required:!0,className:"form-control",name:"passportNum",autoComplete:"off",value:O||"",onChange:function(e){f(e.target.value)}})]}),Object(j.jsxs)("div",{className:"dateValid",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Date of issue"}),Object(j.jsx)("input",{required:!0,max:"2021-01-01",className:"form-control",name:"dateOfIssue",type:"date",value:g||"",onChange:function(e){k(e.target.value)}})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Valid until"}),Object(j.jsx)("input",{required:!0,className:"form-control",name:"dateValid",type:"date",value:B||"",onChange:function(e){I(e.target.value)}})]})]}),Object(j.jsx)("div",{className:g>B?"invalid-feedback":"valid-feedback",children:"Please enter correct date."}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Ussued by"}),Object(j.jsx)("input",{required:!0,className:"form-control",name:"ussuedBy",autoComplete:"off",value:L||"",onChange:function(e){F(e.target.value)}})]}),Object(j.jsx)(d,{to:s,textLink:n,textBtn:b})]})]})},p=function(){var e=Object(i.g)().pathname,t=parseInt(e.slice(1).replace(/[^\d]/g,""));return Object(j.jsx)("div",{className:"steps mt-4 mb-4",children:["Step 1","Step 2","Step 3","Step 4","Finish"].map((function(e,a){return Object(j.jsxs)("div",{className:"step ".concat(t===a+1?"is-active":"","\n                                    ").concat(t>a+1?"is-completed":""),children:[Object(j.jsxs)("div",{className:"step__marker",children:[" ",a+1," "]}),Object(j.jsxs)("div",{className:"step__title mt-1",children:[" ",e," "]})]},a)}))})};var x=function(){var e=Object(i.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center p-3",children:"Application for Schengen Visa"}),Object(j.jsx)("button",{className:"btn btn-primary btn-lg",onClick:function(){return t="/step1",e.push(t);var t},children:"Let's start!"})]})};var O=function(){var e=Object(i.f)(),t=function(t){return e.push(t)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center p-3",children:"Check all information"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title ",children:"Personal information:"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"p-3 mb-2 bg-light text-dark",children:[Object(j.jsxs)("p",{className:"card-text",children:["First name: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("First name")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Last name: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("Last name")})]}),Object(j.jsx)(l.b,{to:"/step1/edit",className:"btn btn-outline-primary",children:"Edit"})]}),Object(j.jsxs)("div",{className:"p-3 mb-2 bg-light text-dark",children:[Object(j.jsxs)("p",{className:"card-text",children:["Gender: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("gender")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Date of birth: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("dateOfBirth")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Place of birth: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("placeOfBirth")})]}),Object(j.jsx)(l.b,{to:"/step2/edit",className:"btn btn-outline-primary",children:"Edit"})]})]})})}),Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title ",children:"Document information:"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"p-3 mb-2 bg-light text-dark",children:[Object(j.jsxs)("p",{className:"card-text",children:["Type of document: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("typeDocument")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Number of document: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("passportNum")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Date of issue: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("dateOfIssue")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Valid until: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("dateValid")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Ussued by: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("ussuedBy")})]}),Object(j.jsx)(l.b,{to:"/step3/edit",className:"btn btn-outline-primary",children:"Edit"})]})]})})}),Object(j.jsx)("div",{className:"col-sm-4",children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title ",children:"Trip information:"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"p-3 mb-2 bg-light text-dark",children:[Object(j.jsxs)("p",{className:"card-text",children:["Country of trip: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("countryTrip")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Trip purpose: ",Object(j.jsx)("span",{className:"bold",children:localStorage.getItem("tripPurpose")})]}),Object(j.jsxs)("p",{className:"card-text",children:["Duration of stay: ",Object(j.jsxs)("span",{className:"bold",children:[localStorage.getItem("duration")," days"]})]}),Object(j.jsx)(l.b,{to:"/step4/edit",className:"btn btn-outline-primary",children:"Edit"})]})]})})})]}),Object(j.jsx)("button",{onClick:function(){localStorage.clear(),t("/succeed"),setTimeout((function(){return t("/")}),1e3)},className:"btn btn-primary btn-lg",children:"Submit"})]})};var f=function(e){var t=e.path,a=e.to,s=void 0===a?"/step3":a,r=e.textLink,n=void 0===r?"Back":r,l=e.textBtn,b=void 0===l?"Next":l,u=Object(i.f)(),h=function(e){return u.push(e)},p=Object(c.useState)(""),x=Object(o.a)(p,2),O=x[0],f=x[1],N=Object(c.useState)(""),v=Object(o.a)(N,2),g=v[0],k=v[1],y=Object(c.useState)("valid-feedback"),S=Object(o.a)(y,2),B=S[0],I=S[1],C=Object(c.useState)(!1),D=Object(o.a)(C,2),L=D[0],F=D[1],P=["countryTrip","tripPurpose","duration"];return Object(c.useEffect)((function(){k(localStorage.getItem("duration"))}),[]),Object(j.jsxs)("div",{className:"wrap-page-step1",children:[Object(j.jsx)("h2",{className:"text-center p-2",children:"Trip information"}),Object(j.jsxs)("form",{onSubmit:function(e){var a=new FormData(e.target);if(e.preventDefault(),"\u0421hoose a country"===a.get("countryTrip"))return I("invalid-feedback");m(e,P,h,t),"other"===a.get("tripPurpose")&&localStorage.setItem("tripPurpose",O)},children:[Object(j.jsx)("label",{className:"form-label",children:"Country of trip"}),Object(j.jsxs)("select",{name:"countryTrip",className:"form-select","aria-label":"Default select example",onChange:function(e){"\u0421hoose a country"!==e.target.value&&I("valid-feedback")},children:[Object(j.jsx)("option",{children:"\u0421hoose a country"}),["Poland","Lithuania","Latvia","USA","Estonia","Spain"].map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))]}),Object(j.jsx)("div",{className:B,children:"Please choose correct country."}),Object(j.jsx)("div",{className:"field",children:Object(j.jsxs)("div",{className:"field mx-auto",children:[Object(j.jsx)("p",{className:"form-label",children:"Trip purpose:"}),Object(j.jsxs)("div",{className:"border-field",onChange:function(e){return"other"===e.target.value?F(!0):F(!1)},children:[["Work","Rest","Treatment","Education","Transit"].map((function(e){return Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"tripPurpose",id:e,value:e,required:!0}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]},e)})),Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"tripPurpose",id:"other",value:"other"}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"other",children:"Other:"}),Object(j.jsx)("input",{required:L,type:"text",className:"form-control",value:O,onChange:function(e){return f(e.target.value)}})]})]})]})}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{className:"form-label",children:"Duration of stay (no more 180 days)"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{required:!0,className:"form-control width-inp",autoComplete:"off",value:g||"",name:"duration",onChange:function(e){return k(e.target.value)},type:"number",max:"180"}),Object(j.jsx)("span",{children:" days"})]})]}),Object(j.jsx)(d,{to:s,textLink:n,textBtn:b})]})]})};var N=function(){return Object(j.jsxs)("div",{className:"succedPage",children:[Object(j.jsx)("h1",{className:"text-center p-4 text-success text-uppercase",children:"application submitted successfully!"}),Object(j.jsx)("img",{src:"https://static.tildacdn.com/tild6261-3462-4565-b566-366332323264/__.png",width:"100px",alt:""})]})};var v=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(p,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:x}),Object(j.jsx)(i.a,{exact:!0,path:"/step1",children:Object(j.jsx)(b,{path:"/step2"})}),Object(j.jsx)(i.a,{exact:!0,path:"/step2",children:Object(j.jsx)(u,{path:"/step3"})}),Object(j.jsx)(i.a,{exact:!0,path:"/step3",children:Object(j.jsx)(h,{path:"/step4"})}),Object(j.jsx)(i.a,{exact:!0,path:"/step4",children:Object(j.jsx)(f,{path:"/step5"})}),Object(j.jsx)(i.a,{path:"/step5",component:O}),Object(j.jsx)(i.a,{path:"/succeed",component:N}),Object(j.jsx)(i.a,{path:"/step1/edit",children:Object(j.jsx)(b,{path:"/step5",to:"/step5",textLink:"Cancel",textBtn:"Ok"})}),Object(j.jsx)(i.a,{path:"/step2/edit",children:Object(j.jsx)(u,{path:"/step5",to:"/step5",textLink:"Cancel",textBtn:"Ok"})}),Object(j.jsx)(i.a,{path:"/step3/edit",children:Object(j.jsx)(h,{path:"/step5",to:"/step5",textLink:"Cancel",textBtn:"Ok"})}),Object(j.jsx)(i.a,{path:"/step4/edit",children:Object(j.jsx)(f,{path:"/step5",to:"/step5",textLink:"Cancel",textBtn:"Ok"})})]})]})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.91aaf062.chunk.js.map