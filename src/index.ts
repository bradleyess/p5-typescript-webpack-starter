import * as p5 from "p5"

new p5((sketch: p5) => {
  sketch.setup = () => sketch.createCanvas(800, 800)

  sketch.draw = () => {
    sketch.background(0, 0, 0)
  }
})
