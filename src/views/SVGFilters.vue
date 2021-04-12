<template>
  <div class="view view-svg-filters">
    <title-box>Fry an Egg with SVG Filters</title-box>
    
    <section class="square-container">
      <egg-svg-filters /> 
    </section>
    
    <section>
      <h3>Coming soon</h3>
    </section>

    <section class="square-container">
      <egg-svg-filters /> 
    </section>
  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
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
