var backgroundImage, bow, bowImage, RB, red_balloonImage, GB, green_balloonImage,
    blue_balloonImage, BB, PB, pink_balloonImage, arrow, arrowImage, backgroun, score, ReB;


function preload(){
  //load your images here 
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png")
  red_balloonImage = loadImage("red_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
   //add code here
  backgroun=createSprite(0,0,600,600);
  backgroun.addImage(backgroundImage);
  backgroun.scale=2.5
  
  bow=createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale=1 
  
  ReB = new Group();
  GeB = new Group();
  PeB = new Group();
  BeB = new Group();
  AG = new Group();
  
  score = 0;
}

function draw() {
//add code here
  
  backgroun.velocityX=-3;
  if(backgroun.x<0){
    backgroun.x=backgroun.width/2
    
  }
  bow.y = World.mouseY;
  if(frameCount % 80 === 0){
    rand = Math.round(random(0, 3))
    if(rand == 0){
      spawnGB();
    }else if(rand == 1){
      spawnRB();
    }else if(rand == 2){
      spawnPB();
    }else if(rand == 3){
      spawnBB();    
    } 
    console.log("The magic number is: " + rand + '.')
  }
  if(keyDown("space")){
    spawnA();
  }
  
  
  
  drawSprites();
  
  //score = 0
  
  //score = 0
  if(AG.isTouching(ReB)) {
    AG.destroyEach();
    ReB.destroyEach(); 
    score = score += 1;
    console.log("You popped a red Ballon!")
  }else if(AG.isTouching(GeB)) {
    AG.destroyEach();
    GeB.destroyEach();
    score = score += 3;
    console.log("You popped a green Ballon!")
  } else if(AG.isTouching(PeB)) {
    AG.destroyEach();
    PeB.destroyEach();
    score = score += 2;
    console.log("You popped a Pink ballon!")
  } else if(AG.isTouching(BeB)) {
    AG.destroyEach()
    BeB.destroyEach()
    console.log("You popped a Blue ballon")
    score = score += 4;
  }
  
  text("score: " + score, 500, 50)
  
}

function spawnGB(){
  GB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  GB.addImage(green_balloonImage);
  GB.velocityX = 3;
  GB.lifetime = 150;
  GB.scale = 0.1;
  
  GeB.add(GB)
}

function spawnPB(){
  PB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  PB.addImage(pink_balloonImage);
  PB.velocityX = 3;
  PB.lifetime = 150;
  PB.scale = 1;
  PeB.add(PB)
}

function spawnBB(){
  BB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  BB.addImage(blue_balloonImage);
  BB.velocityX = 3;
  BB.lifetime = 150;
  BB.scale = 0.1;
  BeB.add(BB)
}

function spawnRB(){
  RB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  RB.addImage(red_balloonImage);
  RB.velocityX = 3;
  RB.lifetime = 150;
  RB.scale = 0.1;
  ReB.add(RB)
}

function spawnA(){
  arrow = createSprite(bow.x, bow.y, 10, 10)
  arrow.addImage(arrowImage);
  arrow.velocityX = -3;
  arrow.lifetime = 150;
  arrow.scale = 0.4;
  AG.add(arrow);
}