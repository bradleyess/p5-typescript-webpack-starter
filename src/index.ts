import * as P5 from "p5"

new P5((p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.background(0)
  }

  p5.draw = () => {}
})
