
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var world,body;
var offsetX,offsetY


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof1 = new Roof(400,150,10,300)
bobObj1=new Bob(300,400,40);
bobObj2=new Bob(340,400,40);
bobObj3=new Bob(380,400,40)
bobObj4=new Bob(420,400,40)
bobObj5=new Bob(460,400,40)

rope1=new Rope(bobObj1.body,roof1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display()
roof1.display();
rope1.display();
  drawSprites();
 
}



