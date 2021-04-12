<template>
  <div class="egg-webgl-3d">
    <canvas />
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'EggWebGL3',
  mounted () {
    const container = this.$el;
    const size = container.getBoundingClientRect().width;
    const scale = size / 100;
    const canvas = container.querySelector('canvas');
    // make it a square by applying the width as the height
    canvas.width = size;
    canvas.height = size;
    
    // const camera = new THREE.OrthographicCamera(-size/2, size/2, size/2, -size/2, 0, 1);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xff69b4);
   

    const camera = new THREE.PerspectiveCamera(20, 1, 1, 10000);
    camera.position.y = 140;
    camera.position.z = 200;
    camera.lookAt(scene.position);

    const eggWhite = new THREE.Mesh(
      new THREE.CircleGeometry(30, 40),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    // rotate it along x axis to align it with the floor
    eggWhite.rotation.x = -Math.PI/2;
    scene.add(eggWhite);

    const eggYolk = new THREE.Mesh(
      new THREE.SphereGeometry(10, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd700 })
    );
    scene.add(eggYolk);

    const renderer = new THREE.WebGLRenderer({
      canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.render(scene, camera);

  },
  beforeDestroy () {
    const el = this.$el;
    while (el && el.lastChild) {
      el.removeChild(el.lastChild);
    }
  }
};
</script>

<style lang="scss">
.egg-webgl-3d {
  canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }  
}
</style>
