(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["svg"],{"0c92":function(e,t,s){"use strict";s("d67a")},"91be":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view view-svg-filters"},[s("title-box",[e._v("Fry an Egg with SVG Filters")]),s("section",{staticClass:"square-container"},[s("egg-svg-filters")],1),s("p",[e._v(" In this chapter we take a look into another great feature of SVGs. Filters in SVG are similar to the CSS API but with a XML syntax instead. ")]),e._m(0),s("pre",[e._v("    "),s("code",{domProps:{innerHTML:e._s(e.highlightSVG(e.snippet1))}},[e._v("\n    ")]),e._v("\n  ")]),s("p",[e._v(" In the previous chapter we used a "),s("c",[e._v("circle")]),e._v(" element. for the yolk and a custom "),s("c",[e._v("path")]),e._v(" and for the egg white. This time we're using two circles, but instead we alter the shape of the egg white using a displacement filter. ")],1),s("p",[e._v(" The first step is to define the filter in the "),s("c",[e._v("defs")]),e._v(" section of the SVG. This is where we define elements, patterns and filters ahead of time. We can later reffer to and reuse them multiple times. ")],1),s("p",[e._v("One thing to keep in mind is that these definitions are global to the HTML DOM. This means that if one SVG defines "),s("c",[e._v("defs")]),e._v(" any other SVG in the page has access to it. ")],1),s("p",[e._v(" It can be useful if you want to update all the patterns on multiple SVGs at once, but it can also create issues when id names clash with one another. For this reason it's important to always use unique and specific "),s("c",[e._v("id")]),e._v(" attributes. ")],1),s("p",[e._v(" Try chainging the fractal noise turbulence and frequency in "),s("c",[e._v("feTurbulence")]),e._v(" or the scale of "),s("c",[e._v("feDisplacementMap")]),e._v(". You're one step away from making an omelette! ")],1),e._m(1),s("section",{staticClass:"square-container"},[s("egg-svg-filters")],1),s("p",[e._v(" Of course this article is just skimming the surface about SVG filters. But we still have a long way to go! In the next chapter we will look into the "),s("router-link",{staticClass:"link",attrs:{to:"/canvas-2d"}},[e._v(" 2D Canvas API ")]),e._v(". ")],1),e._m(2)],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" You can learn more about filters in this great "),s("a",{staticClass:"link",attrs:{href:"https://tympanus.net/codrops/2019/01/15/svg-filters-101/"}},[e._v(" Codrops article")]),e._v(". Once you're back, let's take a look at the full code for this fried egg. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" As for the other examples the "),s("a",{staticClass:"link",attrs:{href:"https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGFilters.vue"}},[e._v(" code is available here")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("a",{staticClass:"btn",attrs:{href:"https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGFilters.vue"}},[e._v(" Get the code and contribute. ")])])}],r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <defs>\n    <filter id="blur-filter">\n      <feTurbulence type="fractalNoise" baseFrequency=".02"/>\n      <feDisplacementMap in="SourceGraphic" scale="25"/>\n      <feComposite in="SourceGraphic" operator="atop"/>\n    </filter>\n  </defs>\n  \n  <rect width="100%" height="100%" fill="hotpink"/>\n  <circle cx="50" cy="50" r="40" stroke-width="3"\n    stroke="whitesmoke" fill="white"\n    filter="url(#blur-filter)"/>\n  <circle cx="50" cy="50" r="15" stroke-width="3"\n    stroke="#fad300" fill="gold"/>\n</svg>',n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"egg-svg-filters",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[s("defs",[s("filter",{attrs:{id:"blur-filter"}},[s("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:".02"}}),s("feDisplacementMap",{attrs:{in:"SourceGraphic",scale:"25"}}),s("feComposite",{attrs:{in:"SourceGraphic",operator:"atop"}})],1)]),s("rect",{attrs:{width:"100%",height:"100%",fill:"hotpink"}}),s("circle",{attrs:{cx:"50",cy:"50",r:"40","stroke-width":"3",stroke:"whitesmoke",fill:"white",filter:"url(#blur-filter)"}}),s("circle",{attrs:{cx:"50",cy:"50",r:"15","stroke-width":"3",stroke:"#fad300",fill:"gold"}})])},l=[],o=s("2877"),c={},h=Object(o["a"])(c,n,l,!1,null,null,null),f=h.exports,u=s("5a37"),p=s("72e3"),v=s("1cf6"),g={name:"ViewSVG",components:{"egg-svg-filters":f,"title-box":p["a"],c:v["a"]},data:function(){return{snippet1:r}},methods:{highlightSVG:u["c"]}},d=g,m=(s("0c92"),Object(o["a"])(d,i,a,!1,null,null,null));t["default"]=m.exports},d67a:function(e,t,s){}}]);
//# sourceMappingURL=svg.js.map