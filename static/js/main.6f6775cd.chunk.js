(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,n=c(11),a=c.n(n),r=c(12),i=c(2),o=c(9),l=c.n(o),j=c(1),d=c.n(j),b=(c(18),c(3),c(0)),h=function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"header__content",children:[Object(b.jsxs)("nav",{className:"header__nav nav",children:[Object(b.jsx)("a",{href:"#",className:"nav__link",children:Object(b.jsx)("img",{src:"images/LOGO.png",alt:"Logo"})}),Object(b.jsx)("a",{href:"#",className:"nav__link",children:"home"}),Object(b.jsx)("a",{href:"#",className:"nav__link",children:"Phones"}),Object(b.jsx)("a",{href:"#",className:"nav__link",children:"tablets"}),Object(b.jsx)("a",{href:"#",className:"nav__link",children:"accessories"})]}),Object(b.jsxs)("div",{className:" header__favorites-card-buttons favorites-card-buttons favorites card ",children:[Object(b.jsx)("a",{href:"http://",className:"favorites-card-buttons--link",children:Object(b.jsx)("img",{className:"favorites-card-buttons--icon",src:"images/icons/HeartLike.svg",alt:"Favorites"})}),Object(b.jsx)("a",{href:"http://",className:"favorites-card-buttons--link",children:Object(b.jsx)("img",{className:"favorites-card-buttons--icon",src:"images/icons/ShoppingbagCart.svg",alt:"Shopping bag"})})]})]})})},u=c(10),m=function(e){var t=e.product;return Object(b.jsxs)("div",{className:"product-card",children:[Object(b.jsx)("img",{src:t.image,alt:"Phone",className:"product-card__phone-img"}),Object(b.jsx)("h2",{className:"product-card__title",children:t.name}),Object(b.jsx)("p",{className:"product-card__price",children:"".concat(t.price,"$")}),Object(b.jsx)("p",{className:"product-card__price product-card__price--discount",children:"".concat(t.fullPrice,"$")}),Object(b.jsxs)("dl",{className:"product-card__description-phone description-phone",children:[Object(b.jsx)("dt",{className:"description-phone--title",children:"Screen"}),Object(b.jsx)("dd",{className:"description-phone--value",children:"5.8\u201d OLED"}),Object(b.jsx)("dt",{className:"description-phone--title",children:"Capacity"}),Object(b.jsx)("dd",{className:"description-phone--value",children:"64 GB"}),Object(b.jsx)("dt",{className:"description-phone--title",children:"RAM"}),Object(b.jsx)("dd",{className:"description-phone--value",children:"4 GB"})]}),Object(b.jsxs)("div",{className:"product-card__container",children:[Object(b.jsx)("button",{className:"product-card__add-to-card",type:"button",children:"Add to cart"}),Object(b.jsx)("a",{href:"http://",className:"product-card__add-to-favorites add-to-favorites",children:Object(b.jsx)("img",{className:"add-to-favorites__icon",src:"images/icons/HeartLike.svg",alt:"icon"})})]})]},t.id)},p=function(e){var t=e.phones,c=Object(j.useState)([]),s=Object(i.a)(c,2),n=s[0],a=s[1],r=Object(j.useState)(0),o=Object(i.a)(r,2),l=o[0],d=o[1];return Object(j.useEffect)((function(){a(t)}),[t]),Object(b.jsxs)("div",{className:"products-slider",children:[Object(b.jsxs)("div",{className:"products-slider__container-buttons",children:[Object(b.jsx)("button",{className:"products-slider__buttons",type:"button",onClick:function(){d((function(e){var t=e+288;return t>0?0:t}))},children:Object(b.jsx)("img",{src:"images/icons/ArrowLeft.svg",alt:""})}),Object(b.jsx)("button",{className:"products-slider__buttons",type:"button",onClick:function(){d((function(e){var t=e-288;return t<-(288*n.length-1136)?e:t}))},children:Object(b.jsx)("img",{src:"images/icons/ArrowRight.svg",alt:""})})]}),Object(b.jsx)("div",{className:"products-slider__container-products",children:n.map((function(e){return Object(b.jsx)("div",{style:{transition:"500ms",transform:"translateX(".concat(l,"px)")},children:Object(b.jsx)(m,{product:e})},e.id)}))})]})},O=c(7),g=c.n(O),_=1040,f=d.a.memo((function(e){var t=e.children,c=Object(j.useState)(t),s=Object(i.a)(c,2),n=s[0],a=s[1],r=Object(j.useState)(0),o=Object(i.a)(r,2),l=o[0],d=o[1],h=Object(j.useState)(0),u=Object(i.a)(h,2),m=u[0],p=u[1],O=Object(j.useRef)(null);function f(){d((function(e){var t=e-_;return t<-1040*(n.length-1)?(p(0),0):(p((function(e){return Math.min(e+1,n.length-1)})),t)})),x()}function x(){O.current&&clearInterval(O.current),O.current=window.setInterval((function(){f()}),5e3)}return Object(j.useEffect)((function(){x()}),[]),Object(j.useEffect)((function(){a((function(e){return e.map((function(e){return Object(j.cloneElement)(e,{key:e.key,style:{transition:"500ms",transform:"translateX(".concat(l,"px)")}})}))}))}),[l]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",className:"preview-slider__button",onClick:function(){d((function(e){var t=e+_,c=-1040*(n.length-1);return t>0?(p(n.length-1),c):(p((function(e){return Math.max(e-1,0)})),t)})),x()},children:Object(b.jsx)("img",{src:"images/icons/ArrowLeft.svg",alt:""})}),Object(b.jsxs)("div",{className:"preview-slider__container",children:[Object(b.jsx)("div",{className:"preview-slider__picture picture",children:n}),Object(b.jsx)("div",{className:"preview-slider__pagination pagination",children:n.map((function(e,t){return Object(b.jsx)("button",{type:"button",className:g()("pagination__indicator",{"pagination__indicator--active":t===m}),onClick:function(){return function(e){p(e),d(-1040*e),x()}(t)}},"paginationit".concat(e.key))}))})]}),Object(b.jsx)("button",{type:"button",className:"preview-slider__button",onClick:f,children:Object(b.jsx)("img",{src:"images/icons/ArrowRight.svg",alt:""})})]})})),x=function(e){var t=e.phones,c=Object(u.a)(t).sort((function(e,t){return+e.fullPrice-+t.fullPrice})),s=Object(u.a)(t).sort((function(e,t){return+e.year-+t.year}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsx)("div",{className:"home-page__preview-slider preview-slider",children:Object(b.jsx)(f,{children:[{imgUrl:"images/BannerHomePage.png",id:"01"},{imgUrl:"images/BannerHomePage.png",id:"02"},{imgUrl:"images/BannerHomePage.png",id:"03"}].map((function(e,t){return Object(b.jsx)("img",{className:"picture-".concat(t),src:e.imgUrl,alt:"Banner"},e.id)}))})}),Object(b.jsxs)("div",{className:"home-page__hot-prices hot-prices",children:[Object(b.jsx)("h1",{className:"hot-prices__title",children:"Hot prices"}),Object(b.jsx)(p,{phones:c})]}),Object(b.jsxs)("div",{className:"home-page__shop-by-category shop-by-category",children:[Object(b.jsx)("h2",{className:"shop-by-category__title",children:"Shop by category"}),Object(b.jsxs)("div",{className:"shop-by-category__container",children:[Object(b.jsxs)("div",{className:"shop-by-category__category category",children:[Object(b.jsx)("a",{href:"http://",className:"category__link",children:Object(b.jsx)("img",{src:"images/preview-category-phone.png",alt:"Phone Category",className:"category__img"})}),Object(b.jsx)("h3",{className:"category__title",children:"Mobile phones"}),Object(b.jsx)("p",{className:"category__description",children:"95 models"})]}),Object(b.jsxs)("div",{className:"shop-by-category__category category",children:[Object(b.jsx)("a",{href:"http://",className:"category__link",children:Object(b.jsx)("img",{src:"images/preview-category-tablets.png",alt:"Phone Category",className:"category__img"})}),Object(b.jsx)("h3",{className:"category__title",children:"Tablets"}),Object(b.jsx)("p",{className:"category__description",children:"24 models"})]}),Object(b.jsxs)("div",{className:"shop-by-category__category category",children:[Object(b.jsx)("a",{href:"http://",className:"category__link",children:Object(b.jsx)("img",{src:"images/preview-category-accessories.png",alt:"Phone Category",className:"category__img"})}),Object(b.jsx)("h3",{className:"category__title",children:"Accessories"}),Object(b.jsx)("p",{className:"category__description",children:"100 models"})]})]})]}),Object(b.jsxs)("div",{className:"home-page__brand-new brand-new",children:[Object(b.jsx)("h1",{className:"brand-new__title",children:"Brand new models"}),Object(b.jsx)(p,{phones:s})]})]})})},v=function(e){var t=e.text,c=e.link;return Object(b.jsx)(b.Fragment,{children:"Home"===t?Object(b.jsx)("a",{className:"breadcrumb-item__link",href:c,children:Object(b.jsx)("img",{src:"images/icons/Home.svg",alt:"Home icon"})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("a",{className:"breadcrumb-item__link",href:c,children:[Object(b.jsx)("img",{src:"images/icons/ArrowRight.svg",alt:"Arrow right"}),t]})})})},N=function(e){var t=e.items;return Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsx)("ol",{className:"breadcrumb__breadcrumb-list",children:t.map((function(e){return Object(b.jsx)("li",{className:"breadcrumb__breadcrumb-item breadcrumb-item",children:Object(b.jsx)(v,{text:e.text,link:e.link})},e.text)}))})})},y=function(e){var t=e.products;return Object(b.jsx)("ul",{className:"products-list",children:t.map((function(e){return Object(b.jsx)("li",{className:"products-list__item",children:Object(b.jsx)(m,{product:e})},e.id)}))})},k=c(5),w=function(e){var t=e.options,c=e.defaultOption,n=e.onChange,a=Object(j.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],d=Object(j.useState)(c),h=Object(i.a)(d,2),u=h[0],m=h[1];return Object(b.jsxs)("div",{className:"custom-select",onClick:function(){l(!o)},children:[Object(b.jsx)("div",{className:"selected-option",children:u}),o&&Object(b.jsx)("ul",{className:g()("options",{"options--opened":o}),children:t.map((function(e){return Object(b.jsx)("li",{onClick:function(){return function(e){m(e),l(!1),n&&(s.AGE===e||s.NAME===e||s.PRICE===e?n((function(t){return Object(k.a)(Object(k.a)({},t),{},{sortBy:e})})):n((function(t){return Object(k.a)(Object(k.a)({},t),{},{itemsShow:e})})))}(e)},children:e},e)}))})]})};!function(e){e.AGE="age",e.NAME="name",e.PRICE="price"}(s||(s={}));var C=function(e){var t=e.phones,c=Object(j.useState)({sortBy:"age",itemsShow:"16"}),n=Object(i.a)(c,2),a=n[0],r=n[1];var o=function(e){var t=[];switch(a.sortBy){case s.AGE:t=e.sort((function(e,t){return e.year-t.year}));break;case s.NAME:t=e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case s.PRICE:t=e.sort((function(e,t){return e.price-t.price}))}switch(a.itemsShow){case"4":t=t.filter((function(e,t){return t<4}));break;case"8":t=t.filter((function(e,t){return t<8}));break;case"16":t=t.filter((function(e,t){return t<16}));break;default:return t}return t}(t);return Object(b.jsxs)("div",{className:"phones-page",children:[Object(b.jsx)(N,{items:[{text:"Home",link:"/"},{text:"Phones",link:"/phones"}]}),Object(b.jsx)("h1",{className:"phones-page__title",children:"Mobile phones"}),Object(b.jsx)("p",{className:"phones-page__amount-phone-text",children:"95 models"}),Object(b.jsxs)("div",{className:"phones-page__filter filter",children:[Object(b.jsxs)("div",{className:"filter__container",children:[Object(b.jsx)("h2",{className:"filter__title",children:"Sort by"}),Object(b.jsx)(w,{options:["age","name","price"],defaultOption:"Select an option",onChange:r})]}),Object(b.jsxs)("div",{className:"filter__container",children:[Object(b.jsx)("h2",{className:"filter__title",children:"Items on page"}),Object(b.jsx)(w,{options:["4","8","16","all"],defaultOption:"Select an option",onChange:r})]})]}),Object(b.jsx)(y,{products:o})]})},S=function(){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsx)("a",{href:"http://",className:"footer__link",children:Object(b.jsx)("img",{src:"images/LOGO.PNG",alt:"Logo"})}),Object(b.jsxs)("div",{className:"footer__container",children:[Object(b.jsx)("a",{href:"http://",className:"footer__link",children:"Github"}),Object(b.jsx)("a",{href:"http://",className:"footer__link",children:"Contacts"}),Object(b.jsx)("a",{href:"http://",className:"footer__link",children:"rights"})]}),Object(b.jsx)("button",{className:"footer__backtotop-button",type:"button",children:Object(b.jsx)("img",{src:"images/icons/ArrowUp.svg",alt:"Back to top"})})]})},E="https://mate-academy.github.io/react_phone-catalog";function A(e){return new Promise((function(t){setTimeout(t,e)}))}var P=function(e){return function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(c.body=JSON.stringify(t),c.headers={"Content-Type":"application/json; charset=UTF-8"}),A(300).then((function(){return fetch(E+e,c)})).then((function(e){var t;if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return null!==(t=e.headers.get("content-type"))&&void 0!==t&&t.includes("application/json")?e.json():new Error("Content-type is not supported")}))}(e)},B=function(){return P("/_new/products.json")},G=function(){var e=Object(j.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];function n(){return(n=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(j.useEffect)((function(){!function(){n.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(x,{phones:c}),Object(b.jsx)(C,{phones:c}),Object(b.jsx)(S,{})]})};a.a.render(Object(b.jsx)(G,{}),document.getElementById("root"))},3:function(e,t,c){}},[[20,1,2]]]);
//# sourceMappingURL=main.6f6775cd.chunk.js.map