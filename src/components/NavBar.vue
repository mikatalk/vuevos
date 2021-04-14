<template>
  <div class="nav-bar" >
    <div class="splash-blur-back">
    </div>
    <div class="links">
      <router-link to="/">
        <vuevos-icon :width="30" :height="30"/>
      </router-link>
      <br/>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/html-css">CSS</router-link> |
      <router-link to="/svg-path">SVG Path</router-link> |
      <router-link to="/svg-filters">SVG Filters</router-link> |
      <router-link to="/canvas-2d">Canvas</router-link> |
      <router-link to="/webgl-2d">WebGL 2D</router-link> |
      <router-link to="/webgl-3d">WebGL 3D</router-link>
    </div>
  </div>
</template>

<script>
import VuevosIcon from './VuevosIcon.vue';

export default {
  name: 'NavBar',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  components: {
    'vuevos-icon': VuevosIcon
  },
};
</script>

<style lang="scss">
.nav-bar {
  padding: 10px 30px;
  font-weight: 100;
  position: relative;
  a {
    font-size: 0.86rem;
    font-weight: 500;
    color: #2c3e50;
    text-decoration: none;
    min-height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover,
    &.router-link-exact-active {
      text-decoration: underline;
      font-weight: 400;
      color: hotpink;
    }
  }

  .splash-blur-back {
    z-index: 1;
    display: block;
    position: absolute;
    background: white;
    filter: blur(10px);
    top: -20px;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .links {
    z-index: 2;
    position: relative;
  }
}
</style>
