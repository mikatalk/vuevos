<template>
  <svg class="vuevos-icon"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Vuevos.com</title>
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="0.3"/>
      </filter>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g>
        <path filter="url(#shadow)" d="M22.5,26.6780822 L32.4790419,9 L39,9 L22.5,38 L6,9 L12.5209581,9 L22.5,26.6780822 Z" fill="#FBF0F0"></path>
        <path filter="url(#shadow)" d="M33,9 L22.5,28 L12,9 L19.5,9 L23,16 L26.5,9 L33,9 Z" fill="#FFD700"></path>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'VuevosIcon',
  props: {
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 50
    }
  }
};
</script>

<style lang="scss">
.inline-code {
  background: #fff4f9;
  display: inline-block;
  border-radius: 10px;
  padding: 0rem 0.5rem;
  border: 1px solid deeppink;
}
</style>
