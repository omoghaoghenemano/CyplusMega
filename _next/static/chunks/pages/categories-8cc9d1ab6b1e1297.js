(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{6058:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories",function(){return n(4490)}])},4490:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return B}});var t=n(5893),r=n(7294),s=n(7357),l=n(3946),o=n(1163),c=n(3776),a=n(5185),d=n(8257),u=n(1248),x=n(9569),f=n(6753),h=n(7720),v=n(122),p=n(6242),j=n(5861),m=n(3321),g=n(7533),y=n(3264),Z=n(525),w=(0,y.Z)(v.Z)((0,Z.Z)({textDecoration:"none",color:"black",cursor:"pointer","&:hover":{color:"blue"}})),S=(0,y.Z)(p.Z)((0,Z.Z)({cursor:"pointer","&:hover":{boxShadow:" 0px 2px 12px -1px #565454;"}})),_=(0,y.Z)(j.Z)((0,Z.Z)({fontSize:"1.2rem",fontWeight:"bold",marginBottom:"10px",fontFamily:"serif"})),b=(0,y.Z)(j.Z)((0,Z.Z)({fontSize:"1.1rem",fontWeight:"bold",marginBottom:"10px",textAlign:"center",fontFamily:"serif"})),C=(0,y.Z)(j.Z)((0,Z.Z)({fontSize:"1rem",color:"grey",fontFamily:"serif",marginLeft:"21px"})),k=(0,y.Z)(j.Z)((0,Z.Z)({color:"red",fontFamily:"serif",fontSize:"1.1rem"})),E=(0,y.Z)(m.Z)((0,Z.Z)({background:"#F68B1E",marginBottom:"10px",color:"white","&:hover":{background:"#F68B1E"}})),F=(0,y.Z)(g.ZP)((0,Z.Z)({width:"19rem",flexShrink:0,"& .MuiDrawer-paper":{width:"85%",boxSizing:"border-box",height:"100%",position:"static",marginLeft:"2.5%",overflowY:"scroll",borderRadius:"12px"}})),D=(0,y.Z)(j.Z)((0,Z.Z)({width:"50%",fontFamily:"serif",fontSize:"0.9rem",marginLeft:"10px"})),N=function(e){var i,n=e.lessvalue,r=e.showall,s=((0,u.I0)(),(0,u.v9)((function(e){return e.appstate})));return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(F,{variant:"permanent",anchor:"left",children:[(0,t.jsx)(h.Z,{}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"10%"},children:[null===n||void 0===n?void 0:n.map((function(e,i){return(0,t.jsx)(w,{children:(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",alignSelf:"self-end"},children:(0,t.jsx)(D,{style:{fontFamily:"serif",fontSize:"0.9rem"},children:null===e||void 0===e?void 0:e.type})})},Math.random())})),(0,t.jsxs)(w,{children:[" ",(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center",alignItems:"center"},children:(0,t.jsxs)(D,{sx:{textDecoration:"underline"},children:[" ","Show all (",r,")"]})})]})]}),(0,t.jsx)(h.Z,{}),(0,t.jsx)(D,{children:" Location"}),(0,t.jsx)(w,{children:(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center",alignItems:"center"},children:(0,t.jsx)(D,{children:" Nigeria "})})}),(0,t.jsx)(h.Z,{}),(0,t.jsx)(D,{children:" Types of Services"}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"center",alignItems:"center"},children:(0,t.jsx)("div",{children:null===(i=s.services)||void 0===i?void 0:i.map((function(e,i){return(0,t.jsx)(w,{children:(0,t.jsx)(D,{children:e.title})},Math.random())}))})}),(0,t.jsx)(h.Z,{})]})})},z=n(1811);function T(){var e,i,n,h=(0,o.useRouter)().query,v=(0,r.useState)(1),p=(v[0],v[1],(0,r.useContext)(c.Z).AuthState),j=((0,r.useContext)(a.Z).AuthDispatcher,null===(e=p.categorydata)||void 0===e?void 0:e.slice(0,5)),m=(null===(i=p.categorydata)||void 0===i?void 0:i.length)-5,g=(0,u.I0)(),y=(0,u.v9)((function(e){return e.appstate})),Z=(0,r.useState)(),w=(Z[0],Z[1],(0,r.useState)([])),F=w[0],D=w[1],T=h.services;console.log("the handle is ",T);var I=(0,x.DE)(f.c,g).storeservices;return(0,r.useEffect)((function(){y.services.length<=0?d.Z.get("/api/company/categories").then((function(e){var i=e.data.filter((function(e){return(null===e||void 0===e?void 0:e.categories_id)==T}));I(i),D(i),console.log("the services data is ",F),console.log("fecthing the response data",e.data)})).catch((function(e){})):d.Z.get("/api/company/categories").then((function(e){var i=e.data.filter((function(e){return(null===e||void 0===e?void 0:e.categories_id)==T}));I(i),D(i),console.log("the services data is ",F),console.log("fecthing the response data",e.data)})).catch((function(e){})),console.log("the service data is",F)}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{display:"flex",top:"12%",left:"-2.5%",position:"absolute"},children:[(0,t.jsx)("div",{className:"listitem__mainlist",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"Home"})})}),(0,t.jsx)("div",{className:"listitem",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"Services"})})})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(s.Z,{sx:{display:"flex",marginTop:"7%"},children:[(0,t.jsx)("div",{style:{position:"relative"},children:(0,t.jsx)(N,{lessvalue:j,showall:m})}),(0,t.jsx)(s.Z,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",marginRight:"22px",p:1,borderRadius:"12px"},children:(0,t.jsx)("div",{className:"product__gridval",children:null===(n=y.services)||void 0===n?void 0:n.map((function(e,i){return(0,t.jsxs)(S,{sx:{width:"270px"},onClick:function(){console.log("you clicked on me",e.services_id)},children:[(0,t.jsx)("img",{src:null===e||void 0===e?void 0:e.image,style:{height:"150px",width:"90%",display:"flex",justifyContent:"center",marginLeft:"10px",marginTop:"10px",borderRadius:"10px"}}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"end",justifyItems:"end",justifyContent:"center"},children:[(0,t.jsx)(_,{children:null===e||void 0===e?void 0:e.title}),(0,t.jsx)(l.Z,{children:(0,t.jsx)(z.Z,{})})]}),(0,t.jsxs)(C,{children:[null===e||void 0===e?void 0:e.about.slice(0,30),"..."]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,t.jsx)(b,{children:"Price: "}),(0,t.jsxs)(k,{children:["$",null===e||void 0===e?void 0:e.price]})]}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(E,{size:"small",variant:"contained",children:"Make an Offer"})})]},e.services_id)}))})})]}),(0,t.jsx)("div",{style:{marginTop:"40%"}})]})]})}var I=n(5593);function B(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,t.jsx)(I.default,{children:(0,t.jsx)(T,{})})}}},function(e){e.O(0,[705,541,593,774,888,179],(function(){return i=6058,e(e.s=i);var i}));var i=e.O();_N_E=i}]);