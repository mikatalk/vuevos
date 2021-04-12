(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["svg-path"],{"6f96":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view view-svg"},[s("h1",[e._v("Create a Fried Egg using SVG Paths")]),s("section",{staticClass:"square-container"},[s("egg-svg-path")],1),s("p",[e._v(" Scalable Vector Graphics, aka SVG is a XML based standard developed by the World Wide Web Consortium (W3C) for sharing graphics contents on the Web. ")]),s("p",[e._v(" SVGs are great for responsive design elements as vector graphics can scale and adapt to a wider range of resolutions which is a great asset when you deal with different client devices and screen sizes. ")]),s("p",[e._v(" Without getting too deep into the topic, it is worth mentionning that SVG allow for all range of responsive behaviors defined by the "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("viewbox"))}}),e._v(" and "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("aspect-ratio"))}}),e._v(" attributes. Learn more about it "),s("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio"}},[e._v(" here")]),e._v(". ")]),s("p",[e._v(" But let's not forget why we came here for and let's start frying that egg! Checkout the full code below: ")]),s("pre",[e._v("      "),s("code",{domProps:{innerHTML:e._s(e.highlightSVG(e.snippet1))}},[e._v("\n      ")]),e._v("\n    ")]),s("p",[e._v(" First thing we define a view box that allows us to work with a defined viewport unit of 100 by 100. ")]),s("p",[e._v(" We can later rely on these units without worrying about the size the SVG file is rendered at. That's pretty convenient if you ask me! ")]),s("p",[e._v(" The easiest parts are the background and the egg yolk. We use the built-in "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("rect"))}}),e._v(" and "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("circle"))}}),e._v(" elements. ")]),s("p",[e._v(" Drawing the egg white however requires a less primitive shape. For that level of customization we use the "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("path"))}}),e._v(" element which allows us greater control over the shape. ")]),e._m(0),s("p",[e._v(" For more information regarding the path element and the meaning of the "),s("span",{staticClass:"code",domProps:{innerHTML:e._s(e.highlightSVG("d"))}}),e._v(" attribute, refer to the "),s("a",{staticClass:"link",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths"}},[e._v(" MDN Path documentation")]),e._v(". ")]),s("section",{staticClass:"square-container"},[s("egg-svg-path")],1),e._m(1),s("p",[e._v(" If you were not already familiar with SVG, you should by now get a pretty good idea of its potential. On the next chapter we will explore how to make an egg with this time a more advanced SVG feature: "),s("router-link",{attrs:{to:"/svg-filters"}},[e._v(" SVG filters ")]),e._v(". ")],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Let's take a closer look at the gibberish looking part below: "),s("pre",[e._v("        "),s("code",[e._v("d='M35,17 C48,4 71,17 75,31 C79,45 73,59 75,71 C77,83 64,94 52,90 C40,86 29,78 26,67 C19,45 23,30 35,17 Z\n")])]),e._v(" It simply translates to the following commands "),s("pre",[e._v("        "),s("code",[e._v("Move to {x:35, y:17}\nBézier Curve To {x:48, y:4}\n  via control points {x:71, y:17} and {x:75, y:31}\nBézier Curve To {x:79, y:45}\n  via control points {x:173, y:59} and {x:75, y:71}\netc...")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" SVG are also easy to integrate with templating syntaxes and HTML. Check out the "),s("a",{attrs:{href:"https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGPath.vue"}},[e._v(" full example code here")])])}],o=s("e770"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"egg-svg-path",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[s("rect",{attrs:{width:"100",height:"100",fill:"hotpink"}}),s("path",{attrs:{d:"M35,17 C48,4 71,17 75,31 C79,45 73,59 75,71 C77,83 64,94 52,90 C40,86 29,78 26,67 C19,45 23,30 35,17 Z","stroke-width":"3",stroke:"whitesmoke",fill:"white"}}),s("circle",{attrs:{cx:"50",cy:"50",r:"13","stroke-width":"3",stroke:"#fad300",fill:"gold"}})])},r=[],h=s("2877"),l={},c=Object(h["a"])(l,n,r,!1,null,null,null),g=c.exports,p=s("5a37"),d={name:"ViewSVG",components:{"egg-svg-path":g},data:function(){return{snippet1:o["a"]}},methods:{highlightSVG:p["c"]}},v=d,u=(s("819e"),Object(h["a"])(v,a,i,!1,null,null,null));t["default"]=u.exports},"819e":function(e,t,s){"use strict";s("ea6a")},e770:function(e,t,s){"use strict";t["a"]='<svg xmlns="http://www.w3.org/2000/svg" \n  viewBox="0 0 100 100">\n  <rect width="100" height="100" fill="hotpink"/>\n  \n  <path d="M35,17 C48,4 71,17 75,31 C79,45 73,59 75,71 C77,83 64,94 52,90 C40,86 29,78 26,67 C19,45 23,30 35,17 Z" \n    stroke-width="3" stroke="whitesmoke" fill="white">\n  </path>\n  \n  <circle\n    cx="50.5" cy="49.5" r="13"\n    stroke-width="3" stroke="#fad300" fill="gold"\n    >\n  </circle>\n</svg>'},ea6a:function(e,t,s){}}]);
//# sourceMappingURL=svg-path.js.map