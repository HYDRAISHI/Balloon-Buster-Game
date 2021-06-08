var balloon_1, balloon_1_image;
var balloon_2, balloon_2_image;
var balloon_3, balloon_3_image;
var balloon_4, balloon_4_image;
var bg, bg_image;
var bow, bow_image;
var arrow, arrow_image
var rand_balloon ;
var score;
var score_display;
var balloon_1Group;
var balloon_2Group;
var balloon_3Group;
var balloon_4Group;

var arrowGroup;

function preload(){
 //load your images here 
 balloon_4_image = loadImage("red_balloon0.png");
 balloon_3_image = loadImage("pink_balloon0.png"); 
 balloon_1_image = loadImage("blue_balloon0.png");
 balloon_2_image = loadImage("green_balloon0.png");

 bg_image = loadImage("background0.png");
 

  
 bow_image = loadImage("bow0.png");
 
 arrow_image = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
    
  bow = createSprite(580,200,10,50);
  bow.addImage("bow0.png", bow_image);
  
  
  bg = createSprite(0,0,600,600);
  bg.addImage("background0.png", bg_image);
  bg.velocityX = -4;
  bg.scale = 3;
  bg.depth = 1;
  bg.x = bg.width/2  
  
  score = 0;
  
  balloon_1Group = new Group();
  balloon_2Group = new Group();
  balloon_3Group = new Group();
  balloon_4Group = new Group();
  
  arrowGroup = new Group();
}

function red_balloon(){
  
  balloon_4 = createSprite(50,150 ,20,20);
  balloon_4.addImage("red_balloon0.png", balloon_4_image);
  balloon_4.scale = 0.1;
  balloon_4.depth = 3
  balloon_4.velocityX = 3;
  balloon_4.lifetime = 183;
  balloon_4Group.add(balloon_4);
  
}

function blue_balloon(){
  
  balloon_1 = createSprite(190,190,20,20);
  balloon_1.addImage("blue_balloon0.png", balloon_1_image);
  balloon_1.scale = 0.1; 
  balloon_1.depth = 3;
  balloon_1.velocityX = 3;
  balloon_1.lifetime = 137;
  balloon_1Group.add(balloon_1);
  
}

function green_balloon(){
  
  balloon_2 = createSprite(120,230,20,20);
  balloon_2.addImage("green_balloon0.png", balloon_2_image);
  balloon_2.scale = 0.1;  
  balloon_2.depth = 3;
  balloon_2.velocityX = 3;
  balloon_2.lifetime = 160;
  balloon_2Group.add(balloon_2);
  
}

function pink_balloon(){
  
  balloon_3 = createSprite(260,270,20,20);
  balloon_3.addImage("pink_balloon0.png", balloon_3_image);
  balloon_3.scale = 1;
  balloon_3.depth = 3;
  balloon_3.velocityX = 3;
  balloon_3.lifetime = 113 ;
  balloon_3Group.add(balloon_3);
  
}


 
function draw() {
  background("white");
  
  bow.y = World.mouseY
  
  if(keyDown("space") && frameCount % 5 === 0){
    
    drawArrow();
    arrow.velocityX = -3
    arrow.y = bow.y
    
  }
  
    rand_balloon = Math.round(random (1,4));
  
if(frameCount % 80 ==   0){
  
  if(rand_balloon === 1){
    red_balloon();
  }
  
  else if(rand_balloon === 2){
    blue_balloon();
  }
  
  else if(rand_balloon === 3){
    green_balloon();
  }
  
  else{
    pink_balloon();
  }
  
}  
       
  if (bg.x<0  ){
    
    bg.x = bg.width/2.8;
    
  }
  
  bow.depth = 3;
    
  drawSprites();
  
  fill("black");
  text("Score : " + score, 470, 30);
  
  if(arrowGroup.isTouching(balloon_1Group)){
    
    balloon_1Group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    
  }
  
    if(arrowGroup.isTouching(balloon_2Group)){
    
    balloon_2Group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    
  }
  
    if(arrowGroup.isTouching(balloon_3Group)){
    
    balloon_3Group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    
  }
  
    if(arrowGroup.isTouching(balloon_4Group)){
    
    balloon_4Group.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
    
  }
}

function drawArrow() {
  
  arrow = createSprite(610,500,2,10);
  arrow.addImage("arrow0.png", arrow_image); 
  arrow.scale = 0.2;
  arrow.velocityX = -5;
  arrow.lifetime = 122;
  arrowGroup.add(arrow);
  
}