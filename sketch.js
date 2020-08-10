var player;
var canvas;
var plimg;
var distance;
var score;
var gameState;
var bunk1,bunk2,bunk3,bunk4;
var bnk1,bnk2,bnk3,bnk4;

function preload(){
  plaimg = loadImage("img.png");

  bnk1 = loadImage("bunker-md.png");
  bnk2 = loadImage("bunker.jpg");
  bnk3 = loadImage("bunker.jpg");
  bnk4 = loadImage("bunker.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);

  player = createSprite(displayWidth/1.5,displayHeight/3,25,25);
  player.addImage("player",plaimg);
  player.scale = 0.5;

  distance = 0;
  score = 0;
  gameState = 0;

  bunk1 = createSprite(displayWidth/10-100,displayWidth/2);
  bunk1.addImage("bunk1",bnk1);
  
  bunk2 = createSprite(displayWidth/10-800,displayWidth/2);
  bunk2.addImage("bunk2",bnk1);

  bunk3 = createSprite(displayWidth/10-1400,displayWidth/2);
  bunk3.addImage("bunk3",bnk1);

  bunk4 = createSprite(displayWidth/10-1900,displayWidth/2);
  bunk4.addImage("bunk4",bnk1);
}

function draw() {
  background("blue");  

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }

  if(keyDown(UP_ARROW)){
    player.y = player.y-15;
    distance = distance+1;
    score = score+1;
  }

  camera.x = player.x;

  drawSprites();
}