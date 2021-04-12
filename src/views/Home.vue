<template>
  <div class="view view-home">
    <h1>
      <em>Vue + Huevos</em>
      <br/>
      Vuevos 🤠
    </h1>
    <p>This project describes how to make a fried egg
      across various rendering Web APIs.</p>
    <p>It uses Vue framework to navigate from one concept to another.
      Each fried egg (and its code) is encapsulated and available 
      in its own component.</p>
    <image-gallery :images="images" />
    <p>
      <a class="btn" href="http://github.com/mikatalk/vuevos">Get the code and contribute.</a>
    </p>
  </div>
</template>

<script>
import ImageGallery from '../components/ImageGallery.vue';

export default {
  name: 'Vuevos',
  components: {
    'image-gallery': ImageGallery,
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
  padding: 2rem 1rem;
  .image-gallery {
    margin: 2rem auto;
  }
  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 2rem 2rem;
    em {
      font-size: 1.6rem;
      opacity: 0.8;
      font-weight: 100;
    }
  }
}
</style>
