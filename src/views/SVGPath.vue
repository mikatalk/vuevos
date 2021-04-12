<template>
  <div class="view view-svg">
    <h1>Create a Fried Egg using SVG Paths</h1>
    <section class="square-container">
      <egg-svg-path /> 
    </section>
    
    <p>
    Scalable Vector Graphics, aka SVG is a XML based standard 
    developed by the World Wide Web Consortium (W3C) for sharing graphics contents on the Web.
    </p>

    <p>
    SVGs are great for responsive design elements. Trying zooming in and see how the lines remain sharp! 
    That's because it uses Vector graphics and
    can scale to a wider range of resolutions.
    And that is definitely a great asset when you deal with
    different client devices and screen sizes.
    </p>
    
    <p>
      Without getting too deep into the topic, it is worth mentionning that SVG 
      allow for all range of responsive behaviors defined by the 
      <span class="code" v-html="highlightSVG('viewbox')"></span> and
      <span class="code" v-html="highlightSVG('aspect-ratio')"></span>
      attributes. Learn more about it 
      <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio">
        here</a>.
    </p>

    <p>
      But let's not forget why we came here for and let's start frying that egg!
      Checkout the full code below:
    </p>

    <pre>
      <code v-html="highlightSVG(snippet1)">
      </code>
    </pre>

    <p>
      First thing we define a view box that allows us to work with a defined
      viewport unit of 100 by 100. 
    </p>
    <p>
      We can later rely on these units 
      without worrying about the size the SVG file is rendered at.
      That's pretty convenient if you ask me!
    </p>

    <p>
      The easiest parts are the background and the egg yolk.
      We use the built-in 
      <span class="code" v-html="highlightSVG('rect')"></span> and
      <span class="code" v-html="highlightSVG('circle')"></span> elements.
    </p>

    <p>
      Drawing the egg white however requires a less primitive shape.
      For that level of customization we use the  
      <span class="code" v-html="highlightSVG('path')"></span> element
      which allows us greater control over the shape.
    </p>
    
    <p>
      Let's take a closer look at the gibberish looking part below: 
      <pre>
        <code>d='M35,17 C48,4 71,17 75,31 C79,45 73,59 75,71 C77,83 64,94 52,90 C40,86 29,78 26,67 C19,45 23,30 35,17 Z
</code></pre>
      It simply translates to the following commands
      <pre>
        <code>Move to {x:35, y:17}
Bézier Curve To {x:48, y:4}
  via control points {x:71, y:17} and {x:75, y:31}
Bézier Curve To {x:79, y:45}
  via control points {x:173, y:59} and {x:75, y:71}
etc...</code></pre>
    </p>
      
    <p>
      For more information regarding the path element and the meaning of the 
      <span class="code" v-html="highlightJS('d')"></span> attribute,
      refer to the
      <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">
        MDN Path documentation</a>.
    </p>

    
    <section class="square-container">
      <egg-svg-path /> 
    </section>

    <p>
      SVG are also easy to integrate with templating syntaxes and HTML. Check out the
      <a class="link" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGPath.vue">
      full example code here</a>
    </p>

    <p>
      If you were not already familiar with SVG, you should by now get 
      a pretty good idea of its potential. On the next chapter we will 
      explore how to make an egg with this time a more advanced SVG feature: 
      <router-link class="link" to="/svg-filters">
      SVG filters
      </router-link>.
    </p>


  </div>
</template>

<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggSVGPath from './../eggs/EggSVGPath.vue';
import { highlightSVG, highlightJS  } from './../utils/prism.js';

export default {
  name: 'ViewSVG',
  components: { 'egg-svg-path': EggSVGPath },
  data: () => ({ snippet1 }),
  methods: { highlightSVG, highlightJS }
};
</script>

<style lang="scss">
.view.view-svg {
  
  
}
</style>
