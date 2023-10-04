let posX, posY, diam, rad;
let esp;
let margen;
let piso;
let acel;
let pelotas = [];
let cantidadPelotas = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  esp = 50;
  margen = 40;
  piso = windowHeight - margen - esp / 2;

    for (let i = 0; i < cantidadPelotas; i++) {
        posX = random(width);
        posY = random(height);
        diam = random(10, 50);
        rad = diam / 2;
        acel = 0.98;
        pelota = new Walker(posX, posY, diam, rad, acel);
    pelotas.push(pelota);
  }
}

function draw() {
  background(255, 150, 70);

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].actualizar();
    pelotas[i].mostrar();
  }

  noStroke();
  fill(100, 50, 0);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

class Walker {
  constructor(_posX, _posY, _diam, _rad, _acel) {
    this.posX = _posX;
    this.posY = _posY;
    this.diam = _diam;
    this.rad = _rad;
    this.acel = _acel;
    this.vel = 0;
  }

  actualizar() {
    this.vel += this.acel;
    this.posY += this.vel;

    if (this.posY >= piso - this.rad) {
      this.vel *= -1;
      this.posY += this.vel;
    }
  }

  mostrar() {
    noStroke();
    fill(255, 100, 0);
    circle(this.posX, this.posY, 20);
  }
}