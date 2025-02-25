var Mcanvas
const minW = 533
const minH = 300

let x
let y
let fonte

function setup() {
  const canvasW = Math.max(windowWidth - 500, minW)
  const canvasH = Math.max(750, minH)

  Mcanvas = createCanvas(canvasW, canvasH);
  Mcanvas.id("Mcanvas")

  x = random(width)
  x = int(x)

  y = random(750)
  y = int(y)
}

function windowResized() {
  const newW = Math.max(windowWidth - 500, minW)
  const newH = Math.max(750, minH)
  resizeCanvas(newW, newH)
}

function draw() {
  background(255);
  
  stroke(165, 2, 2)
  strokeWeight(10)
  noFill()
  rect(0, 0, width, height)

  //movimento da ball
  x = x + random(-5, 5)
  y = y + random(-5, 5)
  x = constrain(x, 0, width)
  y = constrain(y, 0, height)


  let distancia = dist(mouseX, mouseY, x, y)

  if(distancia > 200) {
    fill(13, 124, 227)
  } else if(distancia <= 200 && distancia > 50) {
    fill(56, 13, 227)
  } else if(distancia <= 50 && distancia > 10) {
    fill(160, 12, 214)
  } else if(distancia < 10) {
    fill(165, 2, 2)

    textSize(30)
    noStroke()
    text("Achou o Phantom Thieve", (width/2) - 180, 400)
    noLoop()
  }

  circle(mouseX, mouseY, distancia)
}