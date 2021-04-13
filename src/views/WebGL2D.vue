<template>
  <div class="view view-webgl-2d">
    <title-box>Make an Egg using WebGL 2D
    <em>And signed distance functions</em>
    </title-box>
    <section class="square-container">
      <egg-webgl-2d /> 
    </section>
    
    <p>
      Got tired of the CPU yet, maybe the CPU got tired of your script?
      Time to move up to the WebGL and unleash the power of the GPU!
    </p>

    <p>
      One common mis-conception about WebGL is that it's for 3D only.
      In a way it is true as the 3D rendering pipeline is part of the 
      core architecture of WebGL with it vertex and fragment shaders. 
      But it's also very powerful at rendering 2D layers, 
      stacked and blended on top of each others.
    </p>

    <p>
      Because the WebGL API is pretty low level and boilerplate code
      can become cumbersome. We will try to avoid confusion by using the
      popular framework 
      <a class="link" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggSVGFilters.vue">
      Three.js</a> and try focusing essentialy on the fragment shader.
    </p>

    <p>
      Have you ever stumbled upon 
      <a class="link" href="https://www.shadertoy.com/">
        ShaderToy</a> website
      and wondered how the heck it worked? 
      This site uses WebGL to render a 3D quad on the screen. 
      From there it focuses only on the fragment shader to draw
      on a 2D canvas.
    </p>

    <p>
      You may think it's an odd way to overcomplicate graphics rendering for a 2D output,
      and you would probably be right. 
    </p>

    <p>
      But let's look at it from this perspective:
      A quad is two triangles. If you can draw on triangles you can draw on anything in 3D.
      This is a great way to get started with WebGL by putting aside some of the complexity 
      of 3D and OpenGL in general while getting comfortable with using its shader language GLSL. 
    </p>

    <pre>
      <code v-html="highlightJS(`const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);
// Create quad
const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
const material = new THREE.ShaderMaterial({...});
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);`)">
      </code>
    </pre>

    <p>
      ThreeJS allows us to get the ball rolling real quick! 
      We create a camera, a scene and a renderer.
      Then we add a quad to the scene.
    </p>

    <p>
      Note that the quad mesh is composed of a Plane geometry and a Shader material.
      We use
      <span class="code" v-html="highlightJS('THREE.ShaderMaterial')"></span> because it allows us to define our own shaders.
    </p>

    <p>
      Since we're just interested in modifying the rendered pixel and not
      affect the actual geometry at all we
      use a boilerplate vertex shader:
    </p>

    <pre>
      <code v-html="highlightJS(`varying vec2 vUv;
void main()  {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`)">
      </code>
    </pre>

    <p>The vertex shader has two jobs: Calculating the position of
       the pixel on the quad and sending the UV variable to the 
       fragment shader using varying variables (shared variables 
       across fragment and vertex shaders).
    </p>
  
    <p>
      Fragment shaders are executed over 
      every pixel of your fried egg. The reason they are so powerful is 
      because they are executed in parallel in your GPU.
    </p>

    <p>
      Running an execution in parallel makes you think about your code
      from a different perspective and because of its architecture the variable
      types and data strutures are different than what you may be used to in JS land. 
    </p>

    <pre>
      <code v-html="highlightJS(`varying vec2 vUv;

float draw_circle_gradient(vec2 coord, float radius) {
  return smoothstep(0.0, length(coord), radius);
}

float draw_circle(vec2 coord, float radius) {
  return step(length(coord), radius);
}

void main()  {
  vec3 pink = vec3(1, 0.41, 0.71);
  vec3 white = vec3(1,1,1);
  vec3 yellow = vec3(1,0.84,0);
  vec3 yellowDark = vec3(0.98,0.82,0);

  vec2 p = - 1.0 + 2.0 * vUv;
  float circle = draw_circle_gradient(p+vec2(0., 0.25), 0.35);
  circle = mix(circle, draw_circle_gradient(p +vec2(0.35, -0.1), 0.35), 0.5);
  circle = mix(circle, draw_circle_gradient(p +vec2(-0.3, -0.2), 0.35), 0.5);
  vec3 color = pink;
  float eggWhite = smoothstep(0.5,0.51,circle);
  if (eggWhite > 0.0) {
    color = white;
  }
  float yolkOutline = draw_circle(p+vec2(0., 0.1), 0.35);
  if (yolkOutline > 0.0) {
    color = yellowDark;
  }
  float yolk = draw_circle(p+vec2(0., 0.1), 0.3);
  if (yolk > 0.0) {
    color = yellow;
  }
  gl_FragColor = vec4(color, 1.0);
}`)">
      </code>
    </pre>

    <p>Fragment shaders output is defined by the 
      <span class="code" v-html="highlightJS('main')"></span> 
      function which role is to set the RGBA (red, green, blue, alpha) values of the pixel 
      inside a variable called
      <span class="code" v-html="highlightJS('gl_FragColor')"></span>.
    </p>
    
    <section class="square-container">
      <egg-webgl-2d /> 
    </section>


    <p>
      This is of course just the tip of the iceberg. If you want to learn more, I strongly recommend 
      checking out the 
      <a class="link" href="https://thebookofshaders.com/">
        Book of Shaders
      </a> 
      and even take it a step further and dig into signed distance functions as exlpained by 
      <a class="link" href="https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm">
        Inigo Quilez
      </a> in his incredibly useful articles.
    </p>

    <p>
      As we took a detour to look into a very specific use of WebGL, let's next
      continue frying eggs in 
      <router-link class="link" to="/canvas-3d">
      3D using WebGL
      </router-link>.
    </p>

    <p>
      <a class="btn" href="https://github.com/mikatalk/vuevos/blob/main/src/eggs/EggWebGL2D.vue">
      Get the code and contribute.
      </a>
    </p>

  </div>
</template>


<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/svg-path-1.html'
import EggWebGL2D from './../eggs/EggWebGL2D.vue';
import { highlightJS } from './../utils/prism.js';
import TitleBox from './../components/TitleBox.vue';

export default {
  name: 'WebGL2D',
  components: {
    'egg-webgl-2d': EggWebGL2D,
    'title-box': TitleBox
  },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-webgl-2d {
}
</style>
