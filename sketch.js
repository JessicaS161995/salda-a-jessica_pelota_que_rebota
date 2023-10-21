let posX, posY, diam, rad;
let esp;
let margen;
let piso;
let acel;


function setup() {
createCanvas(windowWidth, windowHeight);
posX = windowWidth / 2;
posY = windowHeight * 0.2;
rectMode(CENTER);
diam = random(10, 50);
rad = diam / 2;
esp = 50;
margen = 40;
piso = windowHeight - margen - esp / 2;
vel = 0;
acel = 0.98;
    // frameRate(3);
}


function draw() {

    background(10, 150, 70);

    actualizar();

    noStroke();
    fill(105, 25, 105);
    circle(posX, posY, 20);
    fill(200, 50, 30);
    rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function actualizar() {
    vel += acel;
    posY += vel;
    
    if (posY >= piso - rad) {
        print('ya');
        vel *= -1;
        posY += vel;
    }
}