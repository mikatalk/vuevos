<template>
  <div class="view view-webgl-3d">
    <title-box>Make an Egg using WebGL 3D
      <!-- <em>And primitive geometries</em> -->
    </title-box> 
    <section class="square-container">
      <egg-webgl-3d /> 
    </section>
    
    <p>
      As we are getting to the end of our egg frying journey.
      It's time to top it off with some 3D!
    </p>

    <p>
      As we did in the previous chapter
      <router-link class="link" to="/canvas-2d">
      WebGL 2D
      </router-link>
      we are going to use <c>Three.js</c> and start
      once again with creating a scene with a pink background color.
      Then just like before we add a camera, except this time we use
      <c>THREE.PerspectiveCamera</c>.
    </p>
    <p>
      What this means in short is that when using the <c>Orthographic</c> camera, 
      objects appear smaller as they get farther from the camera. Similar to how
      your eyes work in the real world.

    </p>

    <pre>
      <code v-html="highlightJS(`const camera = new THREE.PerspectiveCamera(20, 1, 1, 10000);
camera.position.y = 140;
camera.position.z = 200;
camera.lookAt(scene.position);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xff69b4);
`)">
      </code>
    </pre>

    <p>
      With our scene and camera set up, let's keep things simple
      here and use the 
      Three built-in primitive geometries (circle and sphere).
    </p>

    <p>
      Of course we could open up Blender and try modelling a more 
      realistic looking egg geometry, add textures, lights, 
      environment maps and shadows but that would go beyond the scope
      of this article.
    </p>

    <p>
      So for now we can create the egg white using a simple
      <c>CircleGeometry</c>. <br/>
      By default the circle is facing vertically so we rotate it 90°
      (or half of PI in radians)
      along the X axis so that it is aligned with the floor.
    </p>

 <pre>
      <code v-html="highlightJS(`const eggWhite = new THREE.Mesh(
  new THREE.CircleGeometry(30, 40),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
eggWhite.rotation.x = -Math.PI/2;
scene.add(eggWhite);`)">
      </code>
    </pre>

    <p>
      Next the yolk is created using the  <c>SphereGeometry</c>. <br/>
      Add a basic material with a yellow color and add the
      mesh to the scene.

 <pre>
      <code v-html="highlightJS(`const eggYolk = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xffd700 })
);
scene.add(eggYolk);`)">
      </code>
    </pre>
    
    <p>
      Your egg is now ready for the kitchen.
      In the last step we create a renderer 
      and call <c>renderer.render(scene, camera)</c>.
    </p>

    <pre>
      <code v-html="highlightJS(`const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);`)">
      </code>
    </pre>

    <p>
      Look! The egg is sizzling! Yummy!
    </p>

    <section class="square-container">
      <egg-webgl-3d /> 
    </section>

    <p>
      And this conclude our series of little gourmet experiments.
      I hope you enjoyed the adventure and that it will help you
      in deciding what pipeline to use in different situations.
    </p>

    <p>
      <a class="btn" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggWebGL3D.vue">
      Get the code and contribute.
      </a>
    </p>

  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggWebGL3D from './../eggs/EggWebGL3D.vue';
import { highlightJS } from './../utils/prism.js';
import TitleBox from './../components/TitleBox.vue';
import Code from './../components/Code.vue';

export default {
  name: 'WebGL3D',
  components: {
    'egg-webgl-3d': EggWebGL3D,
    'title-box': TitleBox,
    'c': Code
  },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-webgl-3d {
}
</style>
