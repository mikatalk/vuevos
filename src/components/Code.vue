<template>
  <span class="inline-code" 
    v-if="$slots.default.length"
    v-html="highlightJS($slots.default[0].text)"
    >
  </span>
</template>

<script>
import { highlightJS } from './../utils/prism.js';

export default {
  name: 'Code',
  methods: { highlightJS }
};
</script>

<style lang="scss">
.inline-code {
  background: #fff4f9;
  display: inline-block;
  border-radius: 10px;
  padding: 0rem 0.5rem;
  line-height: 1.4;
  border: 1px solid deeppink;
}
</style>
