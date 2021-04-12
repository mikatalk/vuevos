<template>
  <div class="view view-webgl-3d">
    <h1>Make an Egg using WebGL 3D</h1>
    <h2>And signed distance functions</h2>
    <section class="square-container">
      <egg-webgl-3d /> 
    </section>
    
    <section>
      <h3>Coming soon</h3>
    </section>

    <section class="square-container">
      <egg-webgl-3d /> 
    </section>
  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggWebGL3D from './../eggs/EggWebGL3D.vue';
import { highlightJS } from './../utils/prism.js';

export default {
  name: 'WebGL3D',
  components: { 'egg-webgl-3d': EggWebGL3D },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-webgl-3d {
}
</style>
