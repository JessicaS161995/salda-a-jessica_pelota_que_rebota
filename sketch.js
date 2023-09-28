let posX, posY, diam, rad; 
let espesor = 34;
let margen = 50;

let piso;
let velo = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  piso = windowHeight - margen - espesor / 2;
  frameRate(10);
  diam = 50;
  rad = diam / 2;

}

function draw() {
  background(0, 200, 175, 70);
  noStroke();


  posY+= velo;
  
  if (posY > piso - rad) {
    velo *= -1;
  }
  
  fill(255);
  circle(posX, posY, 50);
  
  fill(255, 0, 0);
  rect(windowHeight * 0.5, windowHeight - margen, windowWidth * 0.8, espesor);
}
