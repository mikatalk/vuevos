<template>
  <div class="view view-home">
    <title-box>
      <br/>
      <em>Vue + Huevos</em>
      <br/>
      <span class="centered-vertically">
        <vuevos-icon/>
        Vuevos 
        <vuevos-icon/>
      </span>
    </title-box>
    <section class="content">
      <p>This project describes how to make a fried egg
        across various rendering Web APIs.</p>
      <p>It uses Vue framework to navigate from one concept to another.
        Each fried egg (and its code) is encapsulated and available 
        in its own component.</p>
      <image-gallery :images="images" />
      <p>
        <a class="btn" href="http://github.com/mikatalk/vuevos">Get the code and contribute.</a>
      </p>
    </section>
  </div>
</template>

<script>
import ImageGallery from '../components/ImageGallery.vue';
import TitleBox from '../components/TitleBox.vue';
import VuevosIcon from '../components/VuevosIcon.vue';

export default {
  name: 'Vuevos',
  components: {
    'image-gallery': ImageGallery,
    'vuevos-icon': VuevosIcon,
    'title-box': TitleBox
  },
  data: () => ({
    images: [
      {
        title: 'HTML/CSS',
        url: '/thumbnails/egg-css.png',
        link: '/html-css',
      },
      {
        title: 'SVG Path',
        url: '/thumbnails/egg-svg-path.png',
        link: '/svg-path',
      },
      {
        title: 'SVG Filter',
        url: '/thumbnails/egg-svg-filters.png',
        link: '/svg-filters',
      },
      {
        title: 'Canvas 2D',
        url: '/thumbnails/egg-canvas-2d.png',
        link: '/canvas-2d',
      },
      {
        title: 'WEBGL 2D',
        url: '/thumbnails/egg-webgl-2d.png',
        link: '/webgl-2d',
      },
      {
        title: 'WEBGL 3D',
        url: '/thumbnails/egg-webgl-3d.png',
        link: '/webgl-3d',
      },
    ],
  }),
};
</script>

<style lang="scss">

.view.view-home {
  min-height: 50vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 0rem 2rem;
  padding: 4rem 1rem 0rem;
  .content {
    background: white;
  }
  .image-gallery {
    margin: 2rem auto;
  }
  .splash-blur-bg {
    filter: blur(30px);
  }
  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 auto 2rem;
    padding: 2rem 2rem;
    position: relative;
    em {
      font-size: 1.6rem;
      opacity: 0.8;
      font-weight: 100;
    }
    .centered-vertically {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      svg {
        width: 80px;
      }
    }
  }
}
</style>
