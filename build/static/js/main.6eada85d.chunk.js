(this["webpackJsonpfoodify-app"]=this["webpackJsonpfoodify-app"]||[]).push([[0],{26:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,c,r,s,i,o,l=n(0),d=n.n(l),u=n(27),b=n.n(u),j=n(3),m=n(6),h=n(31),p=n(8),x=n(7),O=x.a.nav(a||(a=Object(m.a)(["\n  background: #696969;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 12;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),g=Object(x.a)(p.b)(c||(c=Object(m.a)(["\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #FFFFFF;\n  }\n"]))),f=Object(x.a)(h.a)(r||(r=Object(m.a)(["\n  display: none;\n  color: #FFFFFF;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),y=x.a.div(s||(s=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\nwhite-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),v=x.a.nav(i||(i=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\nwidth: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),F=Object(x.a)(p.b)(o||(o=Object(m.a)(["\n  border-radius: 4px;\n  background: #a7a7be;\n  padding: 10px 22px;\n  color: #FFFFFF;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #b6b6c9;\n    color: #FFFFFF;\n  }\n"]))),S=n(1),N=function(e){var t=e.handleShowModal;return Object(S.jsxs)(O,{defaultActiveKey:"/",children:[Object(S.jsx)(f,{}),Object(S.jsxs)(y,{children:[Object(S.jsx)(g,{to:"/",activestyle:"true",children:"Random Dish"}),Object(S.jsx)(g,{to:"/events",activestyle:"true",children:"Favorites"})]}),Object(S.jsx)(v,{children:Object(S.jsx)(F,{onClick:t,to:"/AddRecipeModal",children:"Add custom dish"})})]})},w=n(2),M=function(e){var t=e.idMeal,n=e.strMeal,a=e.strInstructions,c=e.strArea,r=e.strCategory,s=e.strMealThumb,i=new Array({idMeal:t,strMeal:n,strInstructions:a,strArea:c,strCategory:r,strMealThumb:s});localStorage.setItem("recipes",JSON.stringify(i)),console.log(JSON.stringify(i))},C=function(e){var t={idMeal:e.idMeal,strMeal:e.strMeal,strInstructions:e.strInstructions,strArea:e.strArea,strCategory:e.strCategory,strMealThumb:e.strMealThumb},n=JSON.parse(localStorage.getItem("recipes"));n.push(t),localStorage.setItem("recipes",JSON.stringify(n)),console.log(JSON.stringify(n))},_=n(15),I=n.n(_),k=function(e,t){return e?e.length>300?(t(!0),"".concat(e.slice(0,300),"...")):e:""},A=function(e){var t=e.name,n=e.area,a=e.instruction,c=e.categoty,r=e.picture,s=Object(l.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],u=Object(l.useState)(!1),b=Object(j.a)(u,2),m=b[0],h=b[1],p=Object(l.useState)(!1),x=Object(j.a)(p,2),O=x[0],g=x[1],f=function(e){h(e)};Object(l.useEffect)((function(){d(k(a,f))}),[a]);var y=function(){O?(d(k(a,f)),g(!1)):(d(a),g(!0))};return Object(S.jsxs)("div",{className:"card_front",children:[Object(S.jsxs)("div",{className:"card_meal-info",children:[Object(S.jsx)("span",{className:"card_area",children:n}),Object(S.jsx)("span",{className:"card_category",children:c})]}),Object(S.jsx)("div",{className:"card_meal-picture",style:{backgroundImage:"url(".concat(r,")")}}),Object(S.jsx)("div",{className:"card_meal-text",children:Object(S.jsxs)("div",{className:"card_meal-main-text",children:[Object(S.jsx)("h2",{className:"card_heading",children:t}),Object(S.jsx)("p",{className:"card_instructions",children:o}),m&&Object(S.jsx)("span",{role:"presentation",className:"card_more-less-text",onClick:y,onKeyDown:y,children:O?"Less":"More"})]})})]})},T=(n(26),{box:{position:"relative",padding:"10px",display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"#FFFFFF"},dish_card:{width:"50%",height:"100%",left:"525px",top:"207px"},btn:{width:"192px",height:"45px",left:"723px",top:"712px",color:"gray",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"18px",lineHeight:"21px",backgroundColor:"white",marginLeft:"4px",border:"gray",borderRadius:"4px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)",boxSizing:"border-box"},btn_container:{marginTop:"10px",padding:"2px",display:"flex",justifyContent:"space-between",alignItems:"center"}});var L=function(){var e=Object(l.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){I.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){var t=e.data.meals[0];a(t)})).catch((function(e){console.log(e)}))}),[a]),Object(S.jsx)("div",{style:T.box,children:Object(S.jsxs)("div",{style:T.dish_card,children:[Object(S.jsx)(A,{name:n.strMeal,area:n.strArea,instruction:n.strInstructions,categoty:n.strCategory,picture:n.strMealThumb}),Object(S.jsxs)("div",{style:T.btn_container,children:[Object(S.jsx)("button",{style:T.btn,onClick:function(){console.log("\u041f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438"),I.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){var t=e.data.meals[0];a(t)})).catch((function(e){console.log(e)}))},children:"Skip"}),Object(S.jsx)("button",{style:T.btn,onClick:function(){console.log("\u041f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438"),localStorage.getItem("recipes")?C(n):M(n)},children:"Like"})]})]})},n.idMeal)},D=n(32),J={box:{position:"relative",padding:"10px",height:"100%",backgroundColor:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",listStyleType:"none"},container:{marginBottom:"20px",width:"70%"}};var R=function(){var e=Object(l.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("recipes"));a(Object(D.a)({},e))}),[a]),Object(S.jsx)("ul",{style:J.box,children:Object.entries(n).map((function(e,t){return console.log(e),Object(S.jsx)("li",{style:J.container,children:Object(S.jsx)(A,{name:e[1].strMeal,area:e[1].strArea,instruction:e[1].strInstructions,categoty:e[1].strCategory,picture:e[1].strMealThumb})},t)}))})},z=function(e){var t=e.labelName,n=e.name,a=e.value,c=e.handler,r=e.classList,s=void 0===r?"":r;return Object(S.jsxs)("label",{htmlFor:n,children:[t,Object(S.jsx)("input",{className:Array.isArray(s)?s.join(" "):s,type:"text",name:n,value:a,onChange:c})]})},E=(n(56),function(e){var t=e.handleDestroyModal,n=Object(l.useState)(""),a=Object(j.a)(n,2),c=a[0],r=a[1],s=Object(l.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],u=Object(l.useState)(""),b=Object(j.a)(u,2),m=b[0],h=b[1],p=Object(l.useState)(""),x=Object(j.a)(p,2),O=x[0],g=x[1],f=Object(l.useState)("Create"),y=Object(j.a)(f,2),v=y[0],F=y[1];return Object(S.jsx)("div",{className:"modal",children:Object(S.jsxs)("div",{className:"modal_wrapper",children:[Object(S.jsxs)("form",{className:"modal_form",children:[Object(S.jsx)(z,{labelName:"Dish name",name:"name",value:c,handler:function(e){r(e.currentTarget.value)},classList:"modal_text-input"}),Object(S.jsx)(z,{labelName:"Area of cuisine",name:"area",value:m,handler:function(e){h(e.currentTarget.value)},classList:"modal_text-input"}),Object(S.jsx)(z,{labelName:"Category",name:"category",value:O,handler:function(e){g(e.currentTarget.value)},classList:"modal_text-input"}),Object(S.jsxs)("label",{className:"modal_textarea-label",htmlFor:"instruction",children:["Instructions",Object(S.jsx)("textarea",{className:"modal_textarea",name:"instruction",value:o,onChange:function(e){d(e.currentTarget.value)}})]})]}),Object(S.jsxs)("div",{className:"modal_buttons-wrapper",children:[Object(S.jsx)("button",{className:"modal_cancel-button",onClick:t,children:"Cancel"}),Object(S.jsx)("button",{className:"modal_create-button",onClick:function(){var e={strArea:m||"Any",strCategory:O||"Any",strInstructions:o||"Default",strMeal:c||"Default",strMealThumb:""};localStorage.getItem("recipes")?C(e):M(e),F("Adding..."),setTimeout((function(){F("Create")}),150),setTimeout((function(){t()}),150)},children:v})]})]})})}),B=(n(57),document.querySelector("body"));var K=function(){var e=Object(l.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(S.jsxs)(p.a,{children:[Object(S.jsx)(N,{handleShowModal:function(){a(!0),B.classList.add("stop-scrolling")}}),Object(S.jsxs)(w.c,{children:[Object(S.jsx)(w.a,{path:"/",exact:!0,element:Object(S.jsx)(L,{})}),Object(S.jsx)(w.a,{path:"/events",element:Object(S.jsx)(R,{})}),Object(S.jsx)(w.a,{path:"/AddRecipeModal",element:n&&Object(S.jsx)(E,{handleDestroyModal:function(){a(!1),B.classList.remove("stop-scrolling")}})})]})]})};b.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.6eada85d.chunk.js.map