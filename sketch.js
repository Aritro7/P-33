var bgImg, bgImg2, bgImg3, animation, ani;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);  
}

function preload(){
  bgImg=loadImage("snow1.jpg");
  ani=loadImage("snow3.jpg");
  animation=loadAnimation("snow4.webp");
}

function draw() {
  background(bgImg);
  ani.addAnimation(animation);
  drawSprites();
}