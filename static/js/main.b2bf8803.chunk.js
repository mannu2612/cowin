(this.webpackJsonpcowin=this.webpackJsonpcowin||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(8),s=n.n(a),l=(n(52),n(25)),r=(n(53),n(109)),o=n(98),d=n(110),j=n(112),b=n(114),h=n(111),u=n(113),p=n(103),f=n(104),O=n(108),x=n(107),m=n(101),v=n(105),g=n(106),S=n(5),y=Object(o.a)({table:{minWidth:650}});var _=function(e){var t=e.centers,n=y();return Object(S.jsx)(m.a,{component:p.a,children:Object(S.jsxs)(f.a,{className:n.table,"aria-label":"simple table",children:[Object(S.jsx)(v.a,{children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(x.a,{children:Object(S.jsx)("b",{children:"Name"})}),Object(S.jsx)(x.a,{align:"left",children:Object(S.jsx)("b",{children:"Address"})}),Object(S.jsx)(x.a,{align:"left",children:Object(S.jsx)("b",{children:"Pincode"})}),Object(S.jsx)(x.a,{align:"left",children:Object(S.jsx)("b",{children:"Free/Paid"})}),Object(S.jsx)(x.a,{align:"left",children:Object(S.jsx)("b",{children:"Availability"})}),Object(S.jsx)(x.a,{align:"left",children:Object(S.jsx)("b",{children:"Vaccine"})})]})}),Object(S.jsx)(O.a,{children:t.map((function(e){return Object(S.jsxs)(g.a,{children:[Object(S.jsx)(x.a,{component:"th",scope:"row",children:e.name}),Object(S.jsx)(x.a,{align:"left",children:e.address}),Object(S.jsx)(x.a,{align:"left",children:e.pincode}),Object(S.jsx)(x.a,{align:"left",children:e.fee_type}),Object(S.jsx)(x.a,{align:"left",children:e.sessions[0].available_capacity}),Object(S.jsx)(x.a,{align:"left",children:e.sessions[0].vaccine})]},e.name)}))}),0===t.length&&Object(S.jsx)(O.a,{children:Object(S.jsx)(g.a,{children:Object(S.jsx)(x.a,{align:"center",colSpan:6,children:"No slots available"})})})]})})},w=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var C=function(){var e=w(),t=i.a.useState([]),n=Object(l.a)(t,2),c=n[0],a=n[1],s=i.a.useState(null),o=Object(l.a)(s,2),f=o[0],O=o[1],x=i.a.useState(0),m=Object(l.a)(x,2),v=m[0],g=m[1],y=i.a.useState([]),C=Object(l.a)(y,2),N=C[0],F=C[1],I=i.a.useState(1),P=Object(l.a)(I,2),k=P[0],A=P[1],E=i.a.useState([]),B=Object(l.a)(E,2),D=B[0],T=B[1];i.a.useEffect((function(){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){return e.json()})).then((function(e){F(e.states)}))}),[]);var J=function(e){fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+e).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.districts)}))},L=function(e){V(e),O(null),f=setInterval((function(){return V(e)}),2e4),O(f)},V=function(e){var t="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(e,"&date=09-05-2021");fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.centers;(t=t.filter((function(e){var t=!1;return e.sessions.forEach((function(e){e.available_capacity>0&&18===e.min_age_limit&&(t=!0)})),t}))).length>0&&W("Vaccine available"),T(t)}))},W=function(e){var t=new SpeechSynthesisUtterance;t.text=e,window.speechSynthesis.speak(t)};return Object(S.jsx)("div",{className:e.root,children:Object(S.jsx)(r.a,{container:!0,spacing:3,children:Object(S.jsxs)(r.a,{item:!0,xs:12,children:[Object(S.jsxs)(p.a,{className:e.paper,children:[Object(S.jsxs)(d.a,{className:e.formControl,disabled:0!==v,children:[Object(S.jsx)(b.a,{id:"demo-simple-select-label",children:"Select State"}),Object(S.jsx)(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:k,onChange:function(e){var t=e.target.value;A(t),J(t)},children:N.map((function(e,t){return Object(S.jsx)(u.a,{value:e.state_id,children:e.state_name},e.state_id)}))})]}),Object(S.jsxs)(d.a,{className:e.formControl,disabled:0!==v,children:[Object(S.jsx)(b.a,{id:"demo-simple-select-district",children:"Select District"}),Object(S.jsx)(j.a,{labelId:"demo-simple-select-district",id:"demo-simple-select-district",value:v,onChange:function(e){var t=e.target.value;g(t),L(t)},children:c.map((function(e,t){return Object(S.jsx)(u.a,{value:e.district_id,children:e.district_name},e.district_id)}))})]}),Object(S.jsx)("p",{style:{color:"#17a2b8"},children:"App looks for availability of vaccines in selected district every 20 seconds. Please refresh the page to select another state/district"})]}),0!==v&&Object(S.jsx)(h.a,{}),Object(S.jsx)(p.a,{children:Object(S.jsx)(_,{centers:D})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(C,{}),document.getElementById("root")),N()}},[[58,1,2]]]);
//# sourceMappingURL=main.b2bf8803.chunk.js.map