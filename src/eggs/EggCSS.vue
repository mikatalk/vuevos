<template>
  <div class="egg-css">
    <div class="white"></div>
    <div class="yolk"></div>
  </div>
</template>

<script>
export default {
  name: 'EggCSS'
};
</script>

<style lang="scss">
.egg-css {
  position: relative;
  background: hotpink;
  width: 100%;
  height: 100%;
  .white {
    position: absolute;
    background: white;
    width: 45% + random(20);
    height: 50% + random(20);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg + random(180));
    border-radius: 50%;
    border: 2vmin solid darken(white, 4%);
  }
  .yolk {
    position: absolute;
    background: gold;
    width: 25%;
    height: 25%;
    top: 48% + random(4);
    left: 48% + random(4);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2vmin solid darken(gold, 1%);
  }
}
</style>
