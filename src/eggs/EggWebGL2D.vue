<template>
  <div class="egg-webgl-2d">
    <canvas />
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'EggWebGL2D',
  mounted () {
    const container = this.$el;
    const size = container.getBoundingClientRect().width;
    const scale = size / 100;
    const canvas = container.querySelector('canvas');
    // make it a square by applying the width as the height
    canvas.width = size;
    canvas.height = size;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry( 2, 2 );

    const uniforms = {
      time: { value: 1.0 }
    };

    const material = new THREE.ShaderMaterial( {
      uniforms: uniforms,
      vertexShader: `
      varying vec2 vUv;
      void main()  {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
      `,
      fragmentShader: `
      varying vec2 vUv;
      uniform float time;
      
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
      }

      `
    } );

    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

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
.egg-webgl-2d {
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
