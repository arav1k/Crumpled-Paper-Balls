
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var leftWall
var RightWall

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball=new Ball(200,200,20,20)
  ground=new Ground(300,370,1000,20)
  leftWall=new Ground(500,310,20,100)
  RightWall=new Ground(700,310,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ball.display()
  ground.display()
  leftWall.display()
  RightWall.display()
  drawSprites();
  
}

function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:30,y:-50})

 
    }
}

