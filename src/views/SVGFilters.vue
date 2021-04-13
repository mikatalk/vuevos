<template>
  <div class="view view-svg-filters">
    <title-box>Fry an Egg with SVG Filters</title-box>
    
    <section class="square-container">
      <egg-svg-filters /> 
    </section>
    
    <p>
      In this chapter we take a look into
      another great feature of SVGs.
      Filters in SVG are similar to the CSS API
      but with a XML syntax instead.
    </p>

    <p>
      You can learn more about filters in this great  
       <a class="link" href="https://tympanus.net/codrops/2019/01/15/svg-filters-101/">
        Codrops article</a>. Once you're back, let's take a look at the full code for this
        fried egg.
    </p>

    <pre>
      <code v-html="highlightSVG(snippet1)">
      </code>
    </pre>

    <p>
      In the previous chapter we used a
      <span class="code" v-html="highlightSVG('circle')"></span> element.
      for the yolk and a custom 
       <span class="code" v-html="highlightSVG('path')"></span> and
       for the egg white.
      This time we're using two circles, but instead
      we alter the shape of the egg white using a displacement filter.
    </p>

    <p>
      The first step is to define the filter in the 
      <span class="code" v-html="highlightSVG('defs')"></span> 
      section of the SVG. This is where we define elements, patterns and filters 
      ahead of time. We can later reffer to and reuse them multiple times.
    </p>

    <p>One thing to keep in mind is that these definitions 
      are global to the HTML DOM.
      This means that if one SVG defines 
      <span class="code" v-html="highlightSVG('defs')"></span> 
      any other SVG in the page has access to it.
    </p>

    <p>
      It can be useful if you want to update all the 
      patterns on multiple SVGs at once, but it can also create 
      issues when id names clash with one another. For this reason it's
      important to always use unique and specific
      <span class="code" v-html="highlightSVG('id')"></span> 
      attributes.
    </p>

    <p>
      Try chainging the fractal noise turbulence and frequency in  
      <span class="code" v-html="highlightSVG('<feTurbulence />')"></span> 
      or the scale of
      <span class="code" v-html="highlightSVG('<feDisplacementMap />')"></span>.
      You're one step away from making an omelette!
    </p>

    <p>
      As for the other examples the 
      <a class="link" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGFilters.vue">
      code is available here</a>
    </p>

    <section class="square-container">
      <egg-svg-filters /> 
    </section>

    <p>
      Of course this article is just skimming the surface
      about SVG filters. But we still have a long way to go!
      In the next chapter we will look into the 
      <router-link class="link" to="/canvas-2d">
      2D Canvas API
      </router-link>.
    </p>
  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-filters.html'
import EggSVGFilters from './../eggs/EggSVGFilters.vue';
import { highlightSVG } from './../utils/prism.js';
import TitleBox from './../components/TitleBox.vue';

export default {
  name: 'ViewSVG',
  components: {
    'egg-svg-filters': EggSVGFilters,
    'title-box': TitleBox
  },
  data: () => ({ snippet1 }),
  methods: { highlightSVG }
};
</script>

<style lang="scss">
.view.view-svg-filters {
}
</style>
