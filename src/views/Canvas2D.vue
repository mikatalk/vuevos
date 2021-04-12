<template>
  <div class="view view-canvas-2d">
    <h1>Make an Egg using Canvas 2D API</h1>

    <section class="square-container">
      <egg-canvas-2d /> 
    </section>
    
    <section>
      <h3>Coming soon</h3>
    </section>

    <section class="square-container">
      <egg-canvas-2d /> 
    </section>
  </div>
</template>



<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggCanvas2D from './../eggs/EggCanvas2D.vue';
import { highlightJS } from './../utils/prism.js';

export default {
  name: 'ViewSVG',
  components: { 'egg-canvas-2d': EggCanvas2D },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-canvas-2d {
}
</style>
