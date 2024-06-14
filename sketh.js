let cor;
let posicaoHorizontal;
let poicaoVertical;

function setup() {
  createCanvas(500, 500);
  background(240,120,30);
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal=150;
  posicaoVertical=150;
}

  function draw() {
  circle(posicaoHorizontal,posicaoVertical,150);
  fill(cor);
  
  if(mouseX<posicaoHorizontal){
    posicaoHorizontal--;
  
  }
  
    posicaoHorizontal++;
}