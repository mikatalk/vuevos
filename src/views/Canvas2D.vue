<template>
  <div class="view view-canvas-2d">
    <title-box>Make an Egg using Canvas 2D API</title-box>

    <section class="square-container">
      <egg-canvas-2d /> 
    </section>

    <p>
      We've looked into making a fried egg with HTML, CSS, SVG. 
      Easy stuff you say? This time we get our hands dirty and
      go all the way with Javascript!
    </p>
    
    <p>
      For that we use the
      <span class="code" v-html="highlightJS('<canvas />')"></span>
      element that exposes a 2D rendering engine to Javascript.
    </p>

    <pre>
      <code v-html="highlightJS(snippet1)">
      </code>
    </pre>

    <p>
      All we do is query the canvas element and use it
      to request the '2D' rendering context.
      We save this reference for later as we will need it 
      to execute drawing commands.
    </p>

    <pre>
      <code v-html="highlightJS(`const size = container.getBoundingClientRect().width;
const scale = size / 100;
// make it a square by applying the width as the height
canvas.width = size;
canvas.height = size;`)">
      </code>
    </pre>

    <p>
      This config step seems a bit more involved but it
      is in a way similar to setting the viewbox 
      in a SVG as seen in a 
      <router-link class="link" to="/canvas-2d">
      previous chapter 
      </router-link>. 
    </p>

    <p>
      We get the size of the parent container and set it to the canvas. 
      Be aware this operation does not set the computed on screen size
      of the canvas, instead it sets the pixel density of the rendered image.
    </p>

    <p>
      For example, a canvas could have a width attribute value
      of 500 units, but a 250px width in CSS. 
      In this case your canvas would have
      a pixel density of 2 per pixel and probably well suited for retina displays.
    </p>

    <p>
      This type of situation can be handled by checking the value of 
      <span class="code" v-html="highlightJS('window.devicePixelRatio')"></span>.
      Now keep in mind the higher it is, the more pixel there are to render and
      it can quickly have an impact on performance. With great power comes great responsibility.
      Note how we define a scale ratio using 100 as a base, 
      we will come back to it shortly.
    </p>

    <p>
      The rest of the code is fairly straightforward. Each time we 
      want to make a draw operation, we set the main settings first: 
      <br/>
      <span class="code" v-html="highlightJS('fillStyle')"></span> 
       - background color, 
      <br/>
      <span class="code" v-html="highlightJS('stroke')"></span> 
       - border color,
      <br/>
      <span class="code" v-html="highlightJS('lineWidth ')"></span> 
       - border size etc...
      With these we can draw a pink rectangle for the background, 
      and a yellow circle for the yolk.
    </p>

    <p>
      Now remember the earlier chapter on 
      <router-link class="link" to="/svg-path">
      SVG Paths 
      </router-link>?
      We used a string of commands to define our egg path.
      Here we do the exact same thing but instead do it with 
      Javascript variables:
    </p>

    <pre>
      <code v-html="highlightJS(`// Our path was draw in a 100x100 square but now,
// we're drawing to a scaled canvas
// so we need to adjust our scale
context.save();
context.scale(scale, scale);
// Let's start drawing the path
context.moveTo(35,20);
context.bezierCurveTo(48,7, 76,17, 79,31);
context.bezierCurveTo(83,45, 81,56, 84,68);
context.bezierCurveTo(86,80, 68,94, 57,90);
context.bezierCurveTo(45,86, 27,87, 23,77);
context.bezierCurveTo(17,55, 23,33, 35,20);
context.fill();
context.stroke();
// We're done drawing, let's reset the scale for later
context.restore();`)">
      </code>
    </pre>

    <p>
      The only caveat we need to deal here is that our path string 
      (or coordinates) were generated under a 100 by 100 unit viewport.
      That is why before executing the drawing commands, we scale the entire
      context using the scale ratio calculated earlier.
    </p>

    <p>
      Before scaling the context, we save its initial state.
      Once we're done with drawing operations, we can restore 
      the context to before the scale alteration.
    </p>

    <p>
      We used the bezierCurveTo command here. Alternatively we could
      also have drawn the same shape with a single drawing command and
      using the same string as we did previously in SVG.
    </p>

    <pre>
      <code v-html="highlightJS(`const path = new Path2D('M35,20 C48,7 76,17 79,31 C83,45 81,56 84,68 C86,80 68,94 57,90 C45,86 27,87 23,77 C17,55 23,33 35,20 Z');
context.fill(path);
context.stroke(path);`)">
      </code>
    </pre>

    <p>
      As you can see, canvas unleashes the power of Javascript and we can 
      have much more dynamic drawings compared to our HTML/CSS and SVG eggs.
      The drawback however is that we now have
      to put more effort in managing the responsive behavior of our canvas 
      and its resolution.
    </p>

    <section class="square-container">
      <egg-canvas-2d /> 
    </section>

    <p>
      At some point you may evolve into an egg frying degenerate and might 
      even start cooking hundreds of them, every 16 milliseconds.
      That's when you start looking for more dedicated tools and tap into the power
      of the GPU. This is what we cover in the next section about 
      <router-link class="link" to="/webgl-2d">
      2D drawing in WebGL
      </router-link>
    </p>

  </div>
</template>



<script>
import snippet1 from 'raw-loader!./../tutorials-snippets/canvas-2d-1.html'
import EggCanvas2D from './../eggs/EggCanvas2D.vue';
import { highlightJS } from './../utils/prism.js';
import TitleBox from './../components/TitleBox.vue';

export default {
  name: 'ViewSVG',
  components: {
    'egg-canvas-2d': EggCanvas2D,
    'title-box': TitleBox
  },
  data: () => ({ snippet1 }),
  methods: { highlightJS }
};
</script>

<style lang="scss">
.view.view-canvas-2d {
}
</style>
