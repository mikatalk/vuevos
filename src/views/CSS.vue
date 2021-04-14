<template>
  <div class="view view-css">
    <title-box>Make an Egg in HTML/CSS</title-box>
    
    <section class="square-container">
      <egg-css />
    </section>
    
    <section>
      <p>
        We begin this journey with the basics, HTML and CSS. 
      </p>

      <p>
        First we create the layout, which is just a pink container with two 
        children, the egg white and the yolk.
      </p>


      <pre>
        <code v-html="highlightJS(snippetCSS1)">
        </code>
      </pre>

      <p>
        We have these two rectangles (yolk and white) 
        inside our main egg container (the pink background).
        It does not quite look like an egg yet. 
        Let's apply some CSS rules to change the shape of each containers.
      </p>

      <p> 
        We first set the <c>width</c> and <c>height</c> of each containers, then we use the
        <c>border-radius: 50%</c> 
        property to round the corners and make it more like a circle shape.
      </p>
      <p>
        Finally we set the background colors respectively and add a 
        small border around it to look like a shadow. See the full code below:
      </p>
      <p>
        Below is the full CSS code. 
        Be aware that it is not exactly valid CSS syntax.
        Instead it uses SCSS (Sassy CSS) formatting which
        enables features such as code nesting, mixins, variables and even built-in utilities such as 
        <c>random(n)</c> 
        which we use here to make the egg a bit different every time we process the SCSS into CSS 
        using our favorite tools.
      </p>

      <pre>
        <code v-html="highlightJS(snippetCSS2)">
        </code>
      </pre>

      <section class="square-container">
        <egg-css />
      </section>

      <p>
        Congratulations if you are new to programming and made it this far. 
        Keep in mind this is more of a hack than a common technique 
        but it remains fun to explore.
      </p>
      <!-- <p>
        You can access the 
        <a class="link" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggCSS.vue">
        full code here</a>
      </p> -->
      <p>
        Or checkout the next experiment where we look into the 
        <router-link class="link" to="/svg-path">
        SVG path API
        </router-link>.
      </p>

      <p>
        <a class="btn" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggCSS.vue">
        Get the code and contribute.
        </a>
      </p>
    </section>
  </div>
</template>

<script>
import EggCSS from './../eggs/EggCSS';
import snippetCSS1 from 'raw-loader!./../tutorials-snippets/css-1.html'
import snippetCSS2 from 'raw-loader!./../tutorials-snippets/css-2.html'
import { highlightCSS, highlightJS } from './../utils/prism.js';
import TitleBox from './../components/TitleBox.vue';
import Code from './../components/Code.vue';

export default {
  name: 'CSS',
  data: () => ({
    snippetCSS1,
    snippetCSS2,
  }),
  components: {
    'egg-css': EggCSS,
    'title-box': TitleBox,
    'c': Code
  },
  methods: {
    highlightCSS,
    highlightJS
  }
};
</script>

<style lang="scss">
.view.view-css {
}
</style>
