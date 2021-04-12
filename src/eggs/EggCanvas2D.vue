<template>
  <div class="egg-canvas-2d">
    <canvas />
  </div>
</template>

<script>
export default {
  name: 'EggCanvas2D',
  mounted () {
    const container = this.$el;
    const size = container.getBoundingClientRect().width;
    const scale = size / 100;
    const canvas = container.querySelector('canvas');
    // make it a square by applying the width as the height
    canvas.width = size;
    canvas.height = size;
    // Get the 2D context for the canvas
    const context = canvas.getContext('2d');
    // set the can vas background color:
    context.fillStyle = 'hotpink';
    context.fillRect(0, 0, size, size)
    
    context.fillStyle = 'white';
    context.strokeStyle = 'whitesmoke';
    context.lineWidth = scale * 0.6;

    // Get this string from any SVG path (i.e. from Sketch) 
    // M35,20
    // C48,7 76,17 79,31
    // C83,45 81,56 84,68
    // C86,80 68,94 57,90
    // C45,86 27,87 23,77
    // C17,55 23,33 35,20
    // Z

    context.beginPath();
    // Our path was draw in a 100x100 square but now,
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

    /**
    // Alternatively draw the same as a Path2D directly from path string
    const path = new Path2D('M35,20 C48,7 76,17 79,31 C83,45 81,56 84,68 C86,80 68,94 57,90 C45,86 27,87 23,77 C17,55 23,33 35,20 Z');
    context.fill(path);
    context.stroke(path);
    **/
    // We're done drawing, let's reset the scale for later
    context.restore();

    // Last to draw the yolk we, just want to draw a circle in the center,
    // maybe add a little randomness so it's not perfectly centered
    context.fillStyle = 'gold';
    context.strokeStyle = '#fad300';
    context.lineWidth = scale * 2;
    context.beginPath();
    context.arc(
      size / 2,// + Math.random() * 20 * scale,
      size / 2,// + Math.random() * 20 * scale,
      15 * scale,
      0, // startAngle
      Math.PI * 2, // endAngle
      true // counterclockwise
    );
    context.fill();
    context.stroke();
  }
};
</script>

<style lang="scss">
.egg-canvas-2d {
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
