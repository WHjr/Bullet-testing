var bullet, wall;
var speed, weight, thickness;
var def;



function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 80, 20);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  def = (0.5*weight*speed*speed)/22500;

}

function draw() {
  background(255,255,255);  

  hasCollided(bullet,wall);

  drawSprites();
}

function hasCollided(bullet,wall){
  if(wall.x-bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = "red";
    }
    else {
      wall.shapeColor = "green"
    }
  }
}
