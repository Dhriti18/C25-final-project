
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
binImage=loadImage("dustbingreen.png")	;
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Bin=new Wall(525,410,130,140);
Ground1=new Ground(200,490,800,10);
wall1=new Wall(460,420,10,100);
wall2=new Wall(590,420,10,100);
wall3=new Wall(525,480,140,10);
paper2=new Circle(100,479,70);
console.log(paper2);
	Engine.run(engine);
  
}


function draw() {
 
  //rectMode(CENTER);
  imageMode(CENTER);

  background("pink");
  Ground1.display();
  Bin.display();
  paper2.display();
 wall1.display();
 wall2.display();
 wall3.display();

 image(binImage,525,410,130,140);

  drawSprites();
 
}function keyPressed(){
if(keyCode===UP_ARROW){

  Matter.Body.applyForce(paper2.body, paper2.body.position, {x:170,y:-170});

}

}



