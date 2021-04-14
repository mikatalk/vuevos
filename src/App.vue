<template>
  <div id="vuevos">
    <nav-bar v-if="$route.path != '/'" />
    <router-view/>
    <footer>
      <nav-bar />
      <p class="copyright">
        Copyright © {{getYear}} 
        <a href="https://www.michael-iriarte.com/">@michael_iriarte</a>
      </p>
      </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  },
  computed: {
    getYear () {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
$code-font-size: 0.9rem;
$max-width: 760px;
html,
body {
  margin: 0;
  padding: 0;
}
body {
  font-size: 20px;
  font-family: apple-system, BlinkMacSystemFont, SegoeUI, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(/header-bg-transparent.png) repeat-x center top transparent;
  // background: url(/header-bg.png) repeat-x center top transparent;
}
html {
  background: url(/footer-bg.png) repeat-x center bottom transparent;
}
#vuevos {
  margin: 0 10px;
  padding: 0 10px;
  font-size: 20px;
  max-width: $max-width;
  margin: 0 auto;
  p {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  a.link {
    color: deeppink;
    display: inline-block;
  }
  a.btn {
    color: deeppink;
    border: 2px solid deeppink;
    padding: 10px;
    margin-top: 50px;
    display: inline-block;
    width: auto;
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
    max-width: $max-width;
    margin: 2rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    font-size: $code-font-size;
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
    // font-size: $code-font-size;
  }

  .square-container {
    position: relative;
    $size: min(450px, 90vmin);
    width: $size;
    height: $size;
    margin: 0 auto;
  }

  footer {
    .nav-bar {
      margin: 60px 0 160px;
    }
    .copyright {
      color: #2c3e50;
      margin: 0;
      padding: 5px 0;
      font-size: 0.6rem;
      font-weight: 500;
      a {
        font-size: 0.75rem;
        color: deeppink;
        text-decoration: none;
        padding: 0 10px;
        display: block;
      }
    }
  }
}


</style>
