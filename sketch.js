const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
 
  ground = Bodies.rectangle(300,590,600,20,options);
  World.add(world,ground);

  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ballOptions = {
    restitution : 2.0
  }
  ball = Bodies.circle(300,100,20,ballOptions);
  World.add(world,ball);
}

function draw() {
  background("lightgrey");  
  Engine.update(engine);
  fill("yellow");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}