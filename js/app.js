(function(e){function t(t){for(var a,s,o=t[0],i=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);g&&g(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r={app:0},l=[];function o(e){return i.p+"js/"+({"canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d":"canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d","canvas-2d":"canvas-2d",css:"css",svg:"svg","svg-path":"svg-path","webgl-2d~webgl-3d":"webgl-2d~webgl-3d","webgl-2d":"webgl-2d","webgl-3d":"webgl-3d"}[e]||e)+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d":1,"canvas-2d":1,css:1,svg:1,"svg-path":1,"webgl-2d":1,"webgl-3d":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({"canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d":"canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d","canvas-2d":"canvas-2d",css:"css",svg:"svg","svg-path":"svg-path","webgl-2d~webgl-3d":"webgl-2d~webgl-3d","webgl-2d":"webgl-2d","webgl-3d":"webgl-3d"}[e]||e)+".css",r=i.p+a,l=document.getElementsByTagName("link"),o=0;o<l.length;o++){var c=l[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var a=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete s[e],g.parentNode.removeChild(g),n(l)},g.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(g)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var g=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"358f":function(e,t,n){},"4bc7":function(e,t,n){"use strict";n("6bbb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vuevos"}},["/"!=e.$route.path?n("nav-bar",{attrs:{"show-logo":!1}}):e._e(),n("router-view"),n("footer",[n("nav-bar"),n("p",{staticClass:"copyright"},[e._v(" Copyright © "+e._s(e.getYear)+" "),n("a",{attrs:{href:"https://www.michael-iriarte.com/"}},[e._v("@michael_iriarte")])])],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"splash-blur-back"}),n("div",{staticClass:"links"},[e.showLogo?n("span",[n("router-link",{attrs:{to:"/"}},[n("vuevos-icon",{attrs:{width:30,height:30}})],1),n("br"),n("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),e._v(" | ")],1):n("span",[n("router-link",{attrs:{to:"/"}},[n("vuevos-icon",{attrs:{width:30,height:30}})],1),e._v(" | ")],1),n("router-link",{attrs:{to:"/html-css"}},[e._v("CSS")]),e._v(" | "),n("router-link",{attrs:{to:"/svg-path"}},[e._v("SVG Path")]),e._v(" | "),n("router-link",{attrs:{to:"/svg-filters"}},[e._v("SVG Filters")]),e._v(" | "),n("router-link",{attrs:{to:"/canvas-2d"}},[e._v("Canvas")]),e._v(" | "),n("router-link",{attrs:{to:"/webgl-2d"}},[e._v("WebGL 2D")]),e._v(" | "),n("router-link",{attrs:{to:"/webgl-3d"}},[e._v("WebGL 3D")])],1)])},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"vuevos-icon",attrs:{width:e.width+"px",height:e.height+"px",viewBox:"0 0 44 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("title",[e._v("Vuevos.com")]),n("defs",[n("filter",{attrs:{id:"shadow"}},[n("feDropShadow",{attrs:{dx:"0",dy:"0",stdDeviation:"0.3"}})],1)]),n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",[n("path",{attrs:{filter:"url(#shadow)",d:"M22.5,26.6780822 L32.4790419,9 L39,9 L22.5,38 L6,9 L12.5209581,9 L22.5,26.6780822 Z",fill:"#FBF0F0"}}),n("path",{attrs:{filter:"url(#shadow)",d:"M33,9 L22.5,28 L12,9 L19.5,9 L23,16 L26.5,9 L33,9 Z",fill:"#FFD700"}})])])])},c=[],u=(n("a9e3"),{name:"VuevosIcon",props:{width:{type:Number,default:80},height:{type:Number,default:50}}}),d=u,g=(n("a3af"),n("2877")),v=Object(g["a"])(d,i,c,!1,null,null,null),p=v.exports,b={name:"NavBar",props:{showLogo:{type:Boolean,default:!0}},components:{"vuevos-icon":p}},h=b,f=(n("ed6b"),Object(g["a"])(h,l,o,!1,null,null,null)),m=f.exports,w={name:"App",components:{"nav-bar":m},computed:{getYear:function(){return(new Date).getFullYear()}}},_=w,y=(n("5c0b"),Object(g["a"])(_,s,r,!1,null,null,null)),k=y.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view view-home"},[n("title-box",[n("em",[e._v("Vue + Huevos")]),n("br"),n("span",{staticClass:"centered-vertically"},[n("vuevos-icon"),e._v(" Vuevos "),n("vuevos-icon")],1)]),n("section",{staticClass:"content"},[n("p",[e._v("This project describes how to make a fried egg across various rendering Web APIs.")]),n("p",[e._v("It uses Vue framework to navigate from one concept to another. Each fried egg (and its code) is encapsulated and available in its own component.")]),n("image-gallery",{attrs:{images:e.images}}),e._m(0)],1)],1)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{staticClass:"btn",attrs:{href:"http://github.com/mikatalk/vuevos"}},[e._v("Get the code and contribute.")])])}],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"image-gallery"},e._l(e.images,(function(t,a){var s=t.title,r=t.url,l=t.link;return n("li",{key:a,style:{"background-image":"url("+r+")"},on:{click:function(t){return e.$router.push(l)}}},[n("h4",[e._v(e._s(s))])])})),0)},P=[],E={name:"ImageGallery",props:{images:{type:Array,default:function(){return[]}}}},j=E,O=(n("4bc7"),Object(g["a"])(j,S,P,!1,null,null,null)),D=O.exports,G=n("72e3"),V={name:"Vuevos",components:{"image-gallery":D,"vuevos-icon":p,"title-box":G["a"]},data:function(){return{images:[{title:"HTML/CSS",url:"/thumbnails/egg-css.png",link:"/html-css"},{title:"SVG Path",url:"/thumbnails/egg-svg-path.png",link:"/svg-path"},{title:"SVG Filters",url:"/thumbnails/egg-svg-filters.png",link:"/svg-filters"},{title:"Canvas 2D",url:"/thumbnails/egg-canvas-2d.png",link:"/canvas-2d"},{title:"WEBGL 2D",url:"/thumbnails/egg-webgl-2d.png",link:"/webgl-2d"},{title:"WEBGL 3D",url:"/thumbnails/egg-webgl-3d.png",link:"/webgl-3d"}]}}},B=V,T=(n("21bb"),Object(g["a"])(B,x,L,!1,null,null,null)),F=T.exports;a["a"].use(C["a"]);var $=[{path:"/",name:"Vuevos",component:F},{path:"*",redirect:"/"},{path:"/html-css",name:"CSS",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("css")]).then(n.bind(null,"b021"))}},{path:"/svg-filters",name:"SVGFilters",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("svg")]).then(n.bind(null,"91be"))}},{path:"/svg-path",name:"SVGPath",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("svg-path")]).then(n.bind(null,"6f96"))}},{path:"/canvas-2d",name:"Canvas2D",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("canvas-2d")]).then(n.bind(null,"627a"))}},{path:"/webgl-3d",name:"WebGL3D",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("webgl-2d~webgl-3d"),n.e("webgl-3d")]).then(n.bind(null,"5f5f"))}},{path:"/webgl-2d",name:"WebGL2D",component:function(){return Promise.all([n.e("canvas-2d~css~svg~svg-path~webgl-2d~webgl-3d"),n.e("webgl-2d~webgl-3d"),n.e("webgl-2d")]).then(n.bind(null,"d5d5"))}}],A=new C["a"]({mode:"history",base:"/",routes:$,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),N=A,M=n("2f62");a["a"].use(M["a"]);var W=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("ea06");a["a"].config.productionTip=!1;new a["a"]({router:N,store:W,render:function(e){return e(k)}}).$mount("#vuevos")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6bbb":function(e,t,n){},"72e3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-box splash-blur"},[n("div",{staticClass:"splash-blur-bg"}),n("h1",{staticClass:"splash-blur-content"},[e._t("default")],2)])},s=[],r={name:"TitleBox"},l=r,o=(n("884e"),n("2877")),i=Object(o["a"])(l,a,s,!1,null,null,null);t["a"]=i.exports},"884e":function(e,t,n){"use strict";n("b95d")},"9c0c":function(e,t,n){},a3af:function(e,t,n){"use strict";n("358f")},b95d:function(e,t,n){},d5a8:function(e,t,n){},ed6b:function(e,t,n){"use strict";n("d5a8")}});
//# sourceMappingURL=app.js.map