(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={card:"Card_card__gD9xj",card__title:"Card_card__title__1aMv_","card__price-tag":"Card_card__price-tag__3Ib7R",card__description:"Card_card__description__3JhAq"}},,,function(t,e,n){t.exports={"pagination-list":"Pagination_pagination-list__2-Lsw","pagination-list__link":"Pagination_pagination-list__link__3jh-h"}},,function(t,e,n){t.exports={form:"FilterByTitle_form__3r0PF",form__field:"FilterByTitle_form__field__EUYw-"}},,function(t,e,n){t.exports={button:"Button_button__2MIOw"}},function(t,e,n){t.exports={grid:"Grid_grid__9YPYf"}},function(t,e,n){t.exports={container:"Container_container__2MQv2"}},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(11),i=n.n(a),s=(n(20),n(15)),o=n(3),u=n.n(o),l=n(7),j=n(2),d=(n(22),function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://localhost:3000","/products"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),p=n(12),_=n.n(p),b=n(0),f=function(t){var e=t.type,n=t.content,c=t.onClick;return Object(b.jsx)("button",{type:"submit"===e?"submit":"button",className:_.a.button,onClick:c,children:n})},O=n(5),x=n.n(O),h=function(t){var e=t.product;return Object(b.jsxs)("li",{className:x.a.card,children:[Object(b.jsx)("h2",{className:x.a.card__title,children:e.title}),Object(b.jsx)("p",{className:x.a["card__price-tag"],children:"$".concat(e.price)}),Object(b.jsx)("p",{className:x.a.card__description,children:e.description}),Object(b.jsx)(f,{type:"button",content:"Edit"}),Object(b.jsx)(f,{type:"button",content:"Delete"}),Object(b.jsx)(f,{type:"button",content:"Add to cart"})]})},m=n(13),g=n.n(m),v=function(t){return Object(b.jsx)("div",{className:g.a.grid,children:t.children})},y=function(t){var e=t.products;return t.loadingStatus?Object(b.jsx)("p",{children:"Loading products..."}):Object(b.jsx)("ul",{children:Object(b.jsx)(v,{children:e.map((function(t){return Object(b.jsx)(h,{product:t},t.id)}))})})},N=n(14),k=n.n(N),C=function(t){return Object(b.jsx)("div",{className:k.a.container,children:t.children})},w=n(8),S=n.n(w),P=function(t){for(var e=t.productsPerPage,n=t.productsNumber,c=t.onPaginationListItem,r=Math.ceil(n/e),a=[],i=1;i<=r;i++)a.push(i);return Object(b.jsx)("ul",{className:S.a["pagination-list"],children:a.map((function(t){return Object(b.jsx)("li",{className:S.a["pagination-list__item"],children:Object(b.jsx)("a",{href:"!#",className:S.a["pagination-list__link"],onClick:function(){return c(t)},children:t})},t)}))})},F=n(10),L=n.n(F),E=function(t){var e=t.onFilter,n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),u=o[0],l=o[1];return Object(b.jsxs)("form",{className:L.a.form,onSubmit:function(t){t.preventDefault(),a&&l(!0),e(a)},children:[u&&Object(b.jsx)(f,{type:"button",content:"Clear Filter",onClick:function(){i(""),e(""),l(!1)}}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value)},className:L.a.form__field,placeholder:"Enter the product title"}),Object(b.jsx)(f,{type:"submit",content:"Filter"})]})},I=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),o=i[0],p=i[1],_=Object(c.useState)(!1),f=Object(j.a)(_,2),O=f[0],x=f[1],h=Object(c.useState)(1),m=Object(j.a)(h,2),g=m[0],v=m[1],N=Object(c.useState)(10),k=Object(j.a)(N,1)[0];Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.next=3,d();case 3:e=t.sent,x(!1),r(e),p(e);case 7:case"end":return t.stop()}}),t)})))()}),[]);var w=g*k-k,S=g*k,F=o.slice(w,S);return Object(b.jsxs)(C,{children:[Object(b.jsx)(E,{onFilter:function(t){var e=Object(s.a)(n).filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));p(e)}}),Object(b.jsx)(y,{products:F,loadingStatus:O}),Object(b.jsx)(P,{productsPerPage:k,productsNumber:o.length,onPaginationListItem:function(t){v(t)}})]})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.84f50ec0.chunk.js.map