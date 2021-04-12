<template>
  <div class="view view-webgl-2d">
    <h1>Make an Egg using WebGL 2D</h1>
    <h2>And signed distance functions</h2>
    <section class="square-container">
      <egg-webgl-2d /> 
    </section>
    
    <section>
      <h3>Coming soon</h3>
    </section>

    <section class="square-container">
      <egg-webgl-2d /> 
    </section>
  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggWebGL2D from './../eggs/EggWebGL2D.vue';
import { highlightJS } from './../utils/prism.js';

export default {
  name: 'WebGL2D',
  components: { 'egg-webgl-2d': EggWebGL2D },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-webgl-2d {
}
</style>
