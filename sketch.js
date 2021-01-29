var background, backgrounImage;
var net, netImage; 
var boy, boyImage;
var robot, robotImage; 
function preload(){
  backgroundImage = loadImage("tennis court.png");
  netImage = loadImage("tennis net.png");
  boyImage = loadImage("boy.png");
  robotImage = loadImage("robot.png");
}

function setup() {
  createCanvas(2000,2000);
  background = createSprite(695, 267, 960, 960);
  background.addImage(backgroundImage); 
  net = createSprite(700, 210, 10, 10);
  net.addImage(netImage); 
  net.scale = 0.45; 
  boy = createSprite(698, 300, 10, 10);
  boy.addImage(boyImage);
  boy.scale = 0.2; 
  robot = createSprite(700, 140, 10, 10);
  robot.addImage(robotImage);
  robot.scale = 0.1;


}

function draw() { 
  drawSprites();
}