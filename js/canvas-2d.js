(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["canvas-2d"],{"280b":function(e,t,n){"use strict";n("f594")},"56a2":function(e,t,n){"use strict";n("d091")},"627a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view view-canvas-2d"},[n("h1",[e._v("Make an Egg using Canvas 2D API")]),n("section",{staticClass:"square-container"},[n("egg-canvas-2d")],1),e._m(0),n("section",{staticClass:"square-container"},[n("egg-canvas-2d")],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("Coming soon")])])}],s=n("e770"),r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"egg-canvas-2d"},[n("canvas")])}],c=(n("cb29"),{name:"EggCanvas2D",mounted:function(){var e=this.$el,t=e.getBoundingClientRect().width,n=t/100,i=e.querySelector("canvas");i.width=t,i.height=t;var a=i.getContext("2d");a.fillStyle="hotpink",a.fillRect(0,0,t,t),a.fillStyle="white",a.strokeStyle="whitesmoke",a.lineWidth=.6*n,a.beginPath(),a.save(),a.scale(n,n),a.moveTo(35,20),a.bezierCurveTo(48,7,76,17,79,31),a.bezierCurveTo(83,45,81,56,84,68),a.bezierCurveTo(86,80,68,94,57,90),a.bezierCurveTo(45,86,27,87,23,77),a.bezierCurveTo(17,55,23,33,35,20),a.fill(),a.stroke(),a.restore(),a.fillStyle="gold",a.strokeStyle="#fad300",a.lineWidth=2*n,a.beginPath(),a.arc(t/2,t/2,15*n,0,2*Math.PI,!0),a.fill(),a.stroke()}}),o=c,u=(n("280b"),n("2877")),v=Object(u["a"])(o,r,l,!1,null,null,null),h=v.exports,d=n("5a37"),f={name:"ViewSVG",components:{"egg-canvas-2d":h},data:function(){return{snippet1:s["a"]}},methods:{highlightJS:d["b"]}},g=f,w=(n("56a2"),Object(u["a"])(g,i,a,!1,null,null,null));t["default"]=w.exports},"81d5":function(e,t,n){"use strict";var i=n("7b0b"),a=n("23cb"),s=n("50c4");e.exports=function(e){var t=i(this),n=s(t.length),r=arguments.length,l=a(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,o=void 0===c?n:a(c,n);while(o>l)t[l++]=e;return t}},cb29:function(e,t,n){var i=n("23e7"),a=n("81d5"),s=n("44d2");i({target:"Array",proto:!0},{fill:a}),s("fill")},d091:function(e,t,n){},e770:function(e,t,n){"use strict";t["a"]='<svg xmlns="http://www.w3.org/2000/svg" \n  viewBox="0 0 100 100">\n  <rect width="100" height="100" fill="hotpink"/>\n  \n  <path d="M35,17 C48,4 71,17 75,31 C79,45 73,59 75,71 C77,83 64,94 52,90 C40,86 29,78 26,67 C19,45 23,30 35,17 Z" \n    stroke-width="3" stroke="whitesmoke" fill="white">\n  </path>\n  \n  <circle\n    cx="50.5" cy="49.5" r="13"\n    stroke-width="3" stroke="#fad300" fill="gold"\n    >\n  </circle>\n</svg>'},f594:function(e,t,n){}}]);
//# sourceMappingURL=canvas-2d.js.map