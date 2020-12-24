const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	Dustbin1= new Dustbin(600,680,200,20);
	Dustbin2=new Dustbin(500,615,20,150);
    Dustbin3=new Dustbin(700,615,20,150);

   
	paper= new Paper (100,600,50);
    
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
 paper.display();
 ground.display();
 Dustbin1.display();
 Dustbin2.display();
 Dustbin3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:380,y:-380});
	}


}


