(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{13:function(t,e,n){t.exports={"pagination-list":"Pagination_pagination-list__2-Lsw","pagination-list__link":"Pagination_pagination-list__link__3jh-h"}},16:function(t,e,n){t.exports={"create-view-link":"MainView_create-view-link__39UQf"}},19:function(t,e,n){t.exports={form:"FilterByTitle_form__3r0PF",form__field:"FilterByTitle_form__field__EUYw-"}},21:function(t,e,n){t.exports={container:"Container_container__2MQv2"}},22:function(t,e,n){t.exports={button:"Button_button__2MIOw"}},25:function(t,e,n){t.exports={grid:"Grid_grid__9YPYf"}},31:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(20),i=n.n(a),s=n(7),o=(n(31),n(3)),u=n(21),j=n.n(u),l=n(0),b=function(t){return Object(l.jsx)("div",{className:j.a.container,children:t.children})},d=n(2),p=r.a.createContext(null),O=function(t){var e=t.children,n=Object(c.useState)([]),r=Object(d.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){localStorage.setItem("products",JSON.stringify(a))}),[a.length]),a?Object(l.jsx)(p.Provider,{value:{cart:a,setCart:i},children:e}):Object(l.jsx)("p",{children:"Loading..."})},f=p,h=n(4),x=n.n(h),_=n(8),m="http://localhost:3000",v=function(){var t=Object(_.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m,"/products"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(_.a)(x.a.mark((function t(e){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m,"/products"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(c=t.sent,n.ok){t.next=8;break}throw new Error(c.message||"Could not add the product");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(_.a)(x.a.mark((function t(e,n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m,"/products/").concat(e),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(_.a)(x.a.mark((function t(e){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m,"/products/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=n(16),S=n.n(C),k=n(22),N=n.n(k),P=function(t){var e=t.type,n=t.content,c=t.onClick,r=t.disabled;return Object(l.jsx)("button",{type:"submit"===e?"submit":"button",className:N.a.button,onClick:c,disabled:r,children:n})},F=n(26),E=n(9),I=n.n(E),L=function(t){var e=Object(c.useContext)(f),n=t.product,r=Object(c.useState)(!1),a=Object(d.a)(r,2),i=a[0],o=a[1];return Object(l.jsxs)("li",{className:I.a.card,children:[Object(l.jsx)("h2",{className:I.a.card__title,children:n.title}),Object(l.jsx)("p",{className:I.a["card__price-tag"],children:"$".concat(n.price)}),Object(l.jsx)("p",{className:I.a.card__description,children:n.description}),Object(l.jsxs)("form",{action:"",className:I.a.card__form,children:[Object(l.jsx)(s.b,{to:{pathname:"/edit_view/".concat(n.id),state:n},className:I.a.card__link,children:Object(l.jsx)(P,{type:"button",content:"Edit"})}),Object(l.jsx)(P,{type:"submit",content:"Delete",onClick:function(){return t=n.id,void w(t);var t}}),Object(l.jsx)(P,{type:"button",content:"Add to cart",disabled:i,onClick:function(){return t={id:n.id,title:n.title,description:n.description,price:n.price,quantity:1},null===e||void 0===e||e.setCart((function(e){return[].concat(Object(F.a)(e),[t])})),void o(!0);var t}})]})]})},J=n(25),T=n.n(J),A=function(t){return Object(l.jsx)("div",{className:T.a.grid,children:t.children})},D=function(t){var e=t.products;return t.loadingStatus?Object(l.jsx)("p",{children:"Loading products..."}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:Object(l.jsx)(A,{children:e.map((function(t){return Object(l.jsx)(L,{product:t},t.id)}))})})})},M=n(13),B=n.n(M),V=function(t){for(var e=t.productsPerPage,n=t.productsNumber,c=t.onPaginationListItem,r=Math.ceil(n/e),a=[],i=1;i<=r;i++)a.push(i);return Object(l.jsx)("ul",{className:B.a["pagination-list"],children:a.map((function(t){return Object(l.jsx)("li",{className:B.a["pagination-list__item"],children:Object(l.jsx)("button",{type:"button",className:B.a["pagination-list__link"],onClick:function(){return c(t)},children:t})},t)}))})},q=n(19),U=n.n(q),Y=function(t){var e=t.onFilter,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!1),o=Object(d.a)(s,2),u=o[0],j=o[1];return Object(l.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault(),a&&(j(!0),e(a))},children:[u&&Object(l.jsx)(P,{type:"button",content:"Clear Filter",onClick:function(){i(""),e(""),j(!1)}}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value)},className:U.a.form__field,placeholder:"Enter the product title"}),Object(l.jsx)(P,{type:"submit",content:"Filter"})]})},G=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),o=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),p=b[0],O=b[1],f=Object(c.useState)(1),h=Object(d.a)(f,2),m=h[0],g=h[1];Object(c.useEffect)((function(){Object(_.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.next=3,v();case 3:e=t.sent,O(!1),r(e),u(e);case 7:case"end":return t.stop()}}),t)})))()}),[n.length]);var y=10*m-10,w=10*m,C=o.slice(y,w);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,{to:"/create_view",className:S.a["create-view-link"],children:Object(l.jsx)(P,{type:"button",content:"Create View"})}),Object(l.jsx)(s.b,{to:"/cart_view",className:S.a["create-view-link"],children:Object(l.jsx)(P,{type:"button",content:"Cart"})}),Object(l.jsx)(Y,{onFilter:function(t){var e=n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));u(e),g(1)}}),Object(l.jsx)(D,{products:C,loadingStatus:p}),o.length>10&&Object(l.jsx)(V,{productsPerPage:10,productsNumber:o.length,onPaginationListItem:function(t){g(t)}})]})},Q=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),i=Object(d.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),p=b[0],O=b[1],f=Object(c.useState)(!1),h=Object(d.a)(f,2),x=h[0],_=h[1],m=Object(o.h)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{when:x,message:function(){return"Are you sure you want to leave? All your entered data will be lost."}}),Object(l.jsx)("h1",{children:"Create View"}),Object(l.jsxs)("form",{action:"#",onSubmit:function(t){t.preventDefault(),g({title:n,price:s,description:p}),m.push("/main_view")},onFocus:function(){_(!0)},children:[Object(l.jsx)("input",{type:"text",value:n,onChange:function(t){r(t.target.value)}}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(t){u(+t.target.value)}}),Object(l.jsx)("input",{type:"text",value:p,onChange:function(t){O(t.target.value)}}),Object(l.jsx)(P,{type:"submit",content:"Save",onClick:function(){return _(!1)}})]})]})},R=function(){var t=Object(o.i)().state,e=Object(c.useState)(t.title),n=Object(d.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(t.price),s=Object(d.a)(i,2),u=s[0],j=s[1],b=Object(c.useState)(t.description),p=Object(d.a)(b,2),O=p[0],f=p[1],h=Object(c.useState)(!1),x=Object(d.a)(h,2),_=x[0],m=x[1],v=Object(o.h)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{when:_,message:function(){return"Are you sure you want to leave? All your entered data will be lost."}}),Object(l.jsx)("h1",{children:"Edit View"}),Object(l.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),y(t.id,{title:r,price:u,description:O}),v.replace("/")},onFocus:function(){m(!0)},children:[Object(l.jsx)("input",{type:"text",value:r,onChange:function(t){a(t.target.value)}}),Object(l.jsx)("input",{type:"text",value:u,onChange:function(t){j(+t.target.value)}}),Object(l.jsx)("input",{type:"text",value:O,onChange:function(t){f(t.target.value)}}),Object(l.jsx)(P,{type:"submit",content:"Save",onClick:function(){return m(!1)}})]})]})},H=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("products")||"[]");r(t)}),[]),n.length?Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:t.title}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)("p",{children:t.price}),Object(l.jsx)("p",{children:t.quantity})]},t.id)}))}):Object(l.jsx)("p",{children:"No products in the cart..."})},$=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"Page not found..."}),Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)(P,{type:"button",content:"Home"})})]})},z=function(){return Object(l.jsx)(b,{children:Object(l.jsx)(O,{children:Object(l.jsxs)(o.e,{children:[Object(l.jsx)(o.c,{path:"/",exact:!0,children:Object(l.jsx)(o.b,{to:"main_view"})}),Object(l.jsx)(o.c,{path:"/main_view",children:Object(l.jsx)(G,{})}),Object(l.jsx)(o.c,{path:"/create_view",children:Object(l.jsx)(Q,{})}),Object(l.jsx)(o.c,{path:"/edit_view/:productId",children:Object(l.jsx)(R,{})}),Object(l.jsx)(o.c,{path:"/cart_view",children:Object(l.jsx)(H,{})}),Object(l.jsx)(o.c,{path:"*",children:Object(l.jsx)($,{})})]})})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(z,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={card:"Card_card__gD9xj",card__link:"Card_card__link__2y7cP",card__title:"Card_card__title__1aMv_","card__price-tag":"Card_card__price-tag__3Ib7R",card__description:"Card_card__description__3JhAq",card__form:"Card_card__form__REGkh"}}},[[42,1,2]]]);
//# sourceMappingURL=main.23d23381.chunk.js.map