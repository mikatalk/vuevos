<template>
  <div class="view view-canvas-2d">
    <title-box>Make an Egg using Canvas 2D API</title-box>

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
import TitleBox from './../components/TitleBox.vue';

export default {
  name: 'ViewSVG',
  components: {
    'egg-canvas-2d': EggCanvas2D,
    'title-box': TitleBox
  },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-canvas-2d {
}
</style>
