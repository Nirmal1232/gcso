var car,wall;

var speed,weight;



function setup() {
  createCanvas(1600,400);
  var car = createSprite(59, 200, 50, 50);
 car.velocityX=speed;

  wall = createSprite(1500,200,60,height/2);
 
  speed.random(55,90);
  weight.random(400,1500);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  car.display();
  wall.display();

}














