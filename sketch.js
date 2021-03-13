
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var left;
var right;
var down;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	
	//left = createSprite(1000,547,20,270);
	//left.shapeColor = "blue";
	

	//right = createSprite(1198,547,20,270);
	//right.shapeColor = "blue";

	//down = createSprite(1100,670,210,20);
	//down.shapeColor = "blue";
	
	
	
	
	
	
	
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(990,450);
	crumble = new Crumble(220,580);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  crumble.display();


  drawSprites();
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumble.body,crumble.body.position, {x:380, y:-760 });
	}
}




