
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,ground1,bob2,bob3,bob4,bob5
var string1,string2,string3,string4,string5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bob1=new Bob(400,400,30)
  ground1=new Ground(400,200,400,20)
  bob2=new Bob(460,400,30)
  bob3=new Bob(520,400,30)
  bob4=new Bob(340,400,30)
  bob5=new Bob(280,400,30)
  string1=new Chain({x:460,y:200},bob2.ball)
  string2=new Chain({x:520,y:200},bob3.ball)
  string3=new Chain({x:340,y:200},bob4.ball)
  string4=new Chain({x:400,y:200},bob1.ball)
  string5=new Chain({x:280,y:200},bob5.ball)
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  drawSprites();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 ground1.display();
 string1.drawing();
 string2.drawing();
 string3.drawing();
 string4.drawing();
 string5.drawing();
 keyPressed();
}

function keyPressed(){
  if(keyCode===UP_ARROW){

	Matter.Body.applyForce(body.bob5,body.bob5.position,{x:-2,y:2});
  
}


}

