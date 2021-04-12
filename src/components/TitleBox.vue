<template>
  <div class="title-box splash-blur">
    <div class="splash-blur-bg">
    </div>
    <h1 class="splash-blur-content">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleBox',
};
</script>

<style lang="scss">
.title-box {
  position: relative;
  z-index: 0;
  h1 {
    font-weight: 200;
  }
  .splash-blur-bg {
    z-index: 1;
    display: block;
    position: absolute;
    background: white;
    filter: blur(10px);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .splash-blur-content {
    z-index: 2;
    position: relative;
    padding: 10px;
  }
}
</style>
