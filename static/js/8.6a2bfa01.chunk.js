(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[8],{215:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return r}));var t=n(294),i=n(238),c=function(e){return(a=Object(t.a)(Number(e),new Date,{locale:i.a})).charAt(0).toUpperCase()+a.slice(1);var a},r=function(e){return e?"".concat(e,"kg"):""}},217:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));n(0);var t=n(270),i=n(195),c=n(242),r=n(184),s=n(77),l=n(5);function d(e){var a=e.children,n=e.action,i=e.title;return Object(l.jsxs)(t.a,{children:[i&&Object(l.jsx)(o,{title:i,action:n}),a]})}function o(e){var a=e.title,n=e.action,t=j();return Object(l.jsxs)(c.a,{container:!0,spacing:2,className:t.root,children:[Object(l.jsx)(c.a,{item:!0,xs:10,children:Object(l.jsx)(s.a,{className:t.title,variant:"h3",color:"textSecondary",children:a})}),n&&Object(l.jsx)(c.a,{item:!0,xs:2,className:t.endAlign,children:n}),Object(l.jsx)(c.a,{item:!0,xs:12,children:Object(l.jsx)(i.a,{})})]})}var j=Object(r.a)((function(e){return{root:{marginBottom:e.spacing(2)},title:{paddingBottom:e.spacing(1)},endAlign:{textAlign:"end"}}}))},295:function(e,a,n){"use strict";n.r(a);var t=n(104),i=n(0),c=n(263),r=n.n(c),s=n(187),l=n(51),d=n(199),o=n(242),j=n(293),u=n(28),m=n(41),b=n(299),h=n(270),x=n(190),O=n(282),g=n(192),v=n(232),p=n.n(v),k=n(77),f=n(215),N=n(5);function y(e){var a=e.animal,n=S();return Object(N.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(N.jsxs)(x.a,{className:n.item,color:"secondary",component:u.c,to:"/animal/".concat(a.id),children:[Object(N.jsx)(O.a,{className:n.avatar,children:Object(N.jsx)(b.a,{alt:"Animal picture",src:a.imageUrl?a.imageUrl:"https://eu.ui-avatars.com/api/?name=".concat(a.name)})}),Object(N.jsxs)(g.a,{children:[Object(N.jsxs)(h.a,{children:[Object(N.jsx)(k.a,{variant:"subtitle1",display:"inline",color:"textPrimary",children:"Dog ".concat(a.name)}),Object(N.jsx)(k.a,{variant:"body1",color:"textSecondary",display:"inline",children:" - ".concat(Object(f.a)(a.details.birthDate))}),Object(N.jsx)(k.a,{variant:"subtitle2",color:"textSecondary",children:"check-in date"})]}),Object(N.jsx)(h.a,{pt:1,children:Object(N.jsx)(k.a,{component:"span",variant:"body2",color:"textPrimary",children:"1.6kg black male Puddle, born in ".concat(Object(j.a)(new Date(+a.details.birthDate),"yyyy-MM-dd"))})})]})]})})}var S=p()((function(e){return{item:{alignItems:"flex-start",backgroundColor:Object(m.b)(e.palette.background.paper,.4),borderRadius:4,transition:e.transitions.create(["box-shadow","transform"],{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),"&:hover":{transform:"translateY(-2px)",boxShadow:"0 4px 8px rgba(0, 0, 0, .2)"}},avatar:{paddingTop:e.spacing(1)}}}));function w(e){var a=e.animals;return Object(N.jsx)(o.a,{container:!0,component:"ul",spacing:2,children:a.map((function(e){return Object(N.jsx)(y,{animal:e},e.id)}))})}var A=n(14),L=n(284),T=n(285),D=n(289),B=n(288),C=n(286),E=n(287);function F(e){var a=e.animals,n=Object(A.g)(),t=U();return Object(N.jsx)(L.a,{children:Object(N.jsxs)(T.a,{className:t.table,size:"small","aria-label":"animals",children:[Object(N.jsx)(C.a,{children:Object(N.jsxs)(E.a,{className:t.headRow,children:[Object(N.jsx)(B.a,{align:"center",className:t.head}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Specie"}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Name"}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Breed"}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Weight, kg"}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Age"}),Object(N.jsx)(B.a,{align:"center",className:t.head,children:"Checked in"})]})}),Object(N.jsx)(D.a,{children:a.map((function(e){var a;return Object(N.jsxs)(E.a,{hover:!0,onClick:function(){return a=e.id,void n.push("/animal/".concat(a));var a},className:t.row,children:[Object(N.jsx)(B.a,{align:"center",children:Object(N.jsx)(b.a,{alt:"Animal picture",src:e.imageUrl?e.imageUrl:"https://eu.ui-avatars.com/api/?name=".concat(e.name)})}),Object(N.jsx)(B.a,{align:"center",children:"Dog"}),Object(N.jsx)(B.a,{align:"center",children:e.name}),Object(N.jsx)(B.a,{align:"center",children:"Puddle"}),Object(N.jsx)(B.a,{align:"center",children:null===(a=e.details)||void 0===a?void 0:a.weight}),Object(N.jsx)(B.a,{align:"center",children:Object(f.a)(e.details.birthDate)}),Object(N.jsx)(B.a,{align:"center",children:"check-in date"})]},e.id)}))})]})})}var I,U=p()((function(e){return{headRow:{backgroundColor:Object(m.b)(e.palette.primary.dark,.75)},head:{color:e.palette.text.secondary},table:{width:"100%",backgroundColor:Object(m.b)(e.palette.background.paper,.4)},row:{cursor:"pointer",textDecoration:"none"}}})),P=n(262),q=n.n(P),G=n(261),R=n.n(G),z=n(298),J=n(290);function M(e){var a=e.value,n=e.onChange;return Object(N.jsxs)(z.a,{size:"small",exclusive:!0,value:a,onChange:function(e,a){return n(a)},"aria-label":"view selector",children:[Object(N.jsx)(J.a,{value:I.LIST,"aria-label":I.LIST,children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(J.a,{value:I.TABLE,"aria-label":I.TABLE,children:Object(N.jsx)(q.a,{})})]})}!function(e){e.LIST="list",e.TABLE="table"}(I||(I={}));var Q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:190,source:{body:"query GetAnimalsList {\n    animals {\n        id\n        name\n        imageUrl\n        status\n        details {\n            gender\n            birthDate\n            weight\n        }\n    }\n}\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function W(e){var a=e.viewType,n=Object(l.useQuery)(Q),t=n.loading,i=n.error,c=n.data;return t?Object(N.jsx)(d.a,{animation:"wave",height:"70vh"}):i?Object(N.jsx)("p",{children:"Error!"}):(null===c||void 0===c?void 0:c.animals.length)?a===I.TABLE?Object(N.jsx)(F,{animals:c.animals}):Object(N.jsx)(w,{animals:c.animals}):Object(N.jsx)("p",{children:"No data"})}var Y=n(217);a.default=function(){var e=r()(),a=Object(i.useState)(I.LIST),n=Object(t.a)(a,2),c=n[0],l=n[1],d=Object(s.a)(e.breakpoints.down("sm"));return Object(i.useEffect)((function(){d&&c===I.TABLE&&l(I.LIST)}),[d,c]),Object(N.jsx)(Y.a,{title:"Animals List",action:!d&&Object(N.jsx)(M,{value:c,onChange:function(){l(c===I.TABLE?I.LIST:I.TABLE)}}),children:Object(N.jsx)(W,{viewType:c})})}}}]);
//# sourceMappingURL=8.6a2bfa01.chunk.js.map