var bullet ,bulletImg1, wall, wallImg, start, startImg;
var damage, damageReview;
var gameStates;
var ONE, TWO;
var randSpeed, randWeight;
var pow, powImg;
var thickness;
var gun, gunImg;
var bg, bgImg;
var indication, red, green;
function preload() {
  // bulletImg = createImg("bullet.gif", "bullet Gif", "", () =>{
  //   bulletImg.size(0,0);
  // });
  bulletImg = loadImage("bulletImg.png");
  startImg = loadImage("startImg.png");
  gunImg = loadImage("gunImg.png");
  bgImg = loadImage("bgImg.png");
  wallImg = loadImage("wallImg.png");
  red = loadImage("redImg.png");
  green = loadImage("greenImg.png");
}
function setup() {
  createCanvas(800,800);
  background("white");
  bg = createSprite(360,200,800,800);
  bg.addImage("bgImg", bgImg);
  bg.depth=1;
  bullet = createSprite(240, 386, 50, 50);
  bullet.addImage("bulletImg", bulletImg);
  bullet.setCollider("circle",0, 0, 10);
  bullet.depth=2;
  wall = createSprite(656, 300, 20,20);
  wall.visible= false;
  wall.setCollider("rectangle", 0, 0, 100,80);
  start = createSprite(80,40,20,20);
  start.addImage("startImg", startImg);
  start.scale=0.4;
  start.setCollider("rectangle" , 0, 0, 280, 100);
  randSpeed = Math.round(random(10,100));
  randWeight = Math.round(random(1000,3000));
  gameState=ONE;
  damageReview = "Damage on Review....";
  gun = createSprite(140, 400, 20, 20);
  gun.addImage("gunImg", gunImg);
  gun.scale=0.3;
  thickness = Math.round(random(1000,3000));
  indication = createSprite(410,114,40,40);
  indication.scale=0.1;
  indication.visible=false;
}

function draw() {
  drawSprites();
  image(wallImg, bg.width-400, bg.height-450,thickness/10,400);
  textFont("Fantasy");
  textSize(20);
  textStyle(NORMAL);
  text("Damage of wall : " + damage, 20,100);  
  text("Damage Review : " + damageReview, 20, 120);
  fill = "black";
  text("Thickness of the wall :" + thickness/10, bg.width/2, 100 );
  imageMode(CENTER);
  conditions();
  //image(bulletImg, bullet.x, bullet.y, 20,20);
  //bulletImg.size(200, AUTO);
  //bulletImg.position(bullet.x, bullet.y);
  if(gameState===ONE) {
     damage =  "Testing on Progress.....";
     if(gameState===ONE && mousePressedOver(start)) {
       reset();
     }
   }
   if(touching(bullet, wall)) {
     damage = (0.5*randWeight*randSpeed*randSpeed/((thickness/100)*(thickness/100)*(thickness/100)));
     indication.visible=true;
}
  
}
function conditions() {
  if(mousePressedOver(start)) {
      gameState=TWO;
      bullet.velocityX = randSpeed/10;
      //bullet.x= ((wall.width/2 + bullet.width/2) - ((wall.x)))*(-1);
   }
   else{
     gameState=ONE;
   }
   if(gameState===TWO) {
     if(bullet.x - wall.x < bullet.width/2 + wall.width/2 && wall.x - bullet.x < bullet.width/2 + wall.width/2) {
       bullet.velocityX=0;
       if(damage<120) {
        damageReview = " TEST IS EXELLENT - APPROVED"
        indication.addImage("greenImg", green);
       }
       if(damage>120 && damage<200) {
        damageReview = " TEST RAN GOOD - APPROVED"
        indication.addImage("greenImg", green);
       }
       if(damage>200) {
        damageReview = " TEST IS BAD - REJECTED"
        indication.addImage("redImg", red);       }
  }
 }
}
function algorithm() {
  //algorithm
  bullet.x - wall.x < bullet.width/2 + wall.width/2 && wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
  bullet.y - wall.y < bullet.height/2 + wall.height/2 && wall.y - bullet.y < bullet.height/2 + wall.height/2;
}
function reset() {
  damage =  "Testing on Progress........";
  damageReview = "Damage on calculation....... ";
  bullet.x = 200;
  bullet.y = 400;
}
