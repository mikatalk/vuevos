<template>
  <div id="vuevos">
    <nav-bar v-if="$route.path != '/'" />
    <router-view/>
    <nav-bar v-if="$route.path != '/'" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
};
</script>

<style lang="scss">
html,
body,
#vuevos {
  font-family: apple-system, BlinkMacSystemFont, SegoeUI, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-size: 20px;
  max-width: 900px;
  margin: 0 auto;
  p {
    margin: 2rem;
    font-size: 1rem;
    line-height: 1.4;
  }

  a.link {
    color: deeppink;
  }
  a.btn {
    color: deeppink;
    border: 2px solid deeppink;
    padding: 10px;
    text-decoration: none;
    background-color: white;
    font-weight: 600;
    &:hover {
      color: white;
      background-color: deeppink;
    }
  }
  
  pre {
    border: 1px solid deeppink;
    background: #fff4f9;
    border-radius: 1rem;
    text-align: left;
    padding: 1rem;
    max-width: 800px;
    margin: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    code {
      display: block;
    }
  }
  .code {
    background: #fff4f9;
    display: inline-block;
    border-radius: 10px;
    padding: 0rem 0.5rem;
    border: 1px solid deeppink;
  }

  .square-container {
    position: relative;
    $size: min(450px, 90vmin);
    width: $size;
    height: $size;
    margin: 0 auto;
  }
}


</style>
