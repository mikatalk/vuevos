<template>
  <ul class="image-gallery">
    <li
      v-for="({title,url,link}, i) of images"
      :key="i"
      :style="{
        'background-image': `url(${url})`
      }"
      @click="$router.push(link)">
      <h4>{{title}}</h4>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    images: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss">
ul.image-gallery {
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  li {
    cursor: pointer;
    min-width: 80px;
    min-height: 80px;
    max-width: 220px;
    max-height: 220px;
    width: calc(33vw - 50px);
    height: calc(33vw - 50px);
    @media only screen and (max-width: 600px) {
      width: calc(50vw - 50px);
      height: calc(50vw - 50px);
    }
    position: relative;
    display: flex;
    background-repeat: no-repeat;
    background-origin: center;
    background-size: cover;
    margin: 10px 10px 15px;
    h4 {
      font-size: 1.4rem;
      @media only screen and (max-width: 900px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
      position: absolute;
      left: -5px;
      bottom: -5px;
      text-align: center;
      max-width: 100%;
      width: auto;
      padding: 0 10px;
      margin: 0 auto;
      background: deeppink;
      color: white;
      border-top: 1px solid white;
      border-right: 1px solid white;
      user-select: none;
    }
  }
}
</style>
