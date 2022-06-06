
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var rightSide;
var leftSide;

function preload()
{
	



}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.
	var ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	
	ball= Bodies.circle(220,10,10,ball_options);
	World.add(world,ball);

	groundObj= new Ground(width/2,670,width,20);
	leftSide= new Ground(1100,600,20,120);
	rightSide= new Ground(1000,600,10,120);
	
	Engine.run(engine);

	}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(ball.position.x,ball.position.y,20);
	
	groundObj.show();
	leftSide.show();
	rightSide.show();

	
	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.aplyForce(ball,{x:0,y:0}, {x:0.05,y:0});
		Matter.Body.aplyForce(ball,{x:0,y:0}, {x:0, y:-0.05})

	}



}


