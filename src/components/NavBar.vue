<template>
  <div class="nav-bar" >
    <router-link to="/">Home</router-link> |
    <router-link to="/html-css">CSS</router-link> |
    <router-link to="/svg-path">SVG Path</router-link> |
    <router-link to="/svg-filters">SVG Filters</router-link> |
    <router-link to="/canvas-2d">Canvas</router-link> |
    <router-link to="/webgl-2d">WebGL 2D</router-link> |
    <router-link to="/webgl-3d">WebGL 3D</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss">
.nav-bar {
  padding: 10px 30px;
  font-weight: 100;
  a {
    font-size: 0.8rem;
    font-weight: 100;
    color: #2c3e50;
    text-decoration: none;

    &:hover,
    &.router-link-exact-active {
      text-decoration: underline;
      font-weight: 400;
      color: hotpink;
    }
  }
}
</style>
