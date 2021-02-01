
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var hammer1
var stone1
var rubber1
var sand1
var sand2
var sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12,sand13;
var iron1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
    ground1 = new Ground (400,height,800,20);
    hammer1 = new hammer (200,300);
    stone1 = new stone (600,500,50,50)
    rubber1 = new rubber (400,400,180)
    sand1 = new sand (200,200,20);
    sand2 = new sand (200,200,20);
    sand3 = new sand (200,200,20);
    sand4 = new sand (200,200,20);
    sand5 = new sand (200,200,20);
    sand6 = new sand (200,200,20);
    sand7 = new sand (200,200,20);
    sand8 = new sand (200,200,20);
    sand9 = new sand (200,200,20);
    sand10 = new sand (200,200,20);
    sand11 = new sand (200,200,20);
    sand12 = new sand (200,200,20);
    sand13 = new sand (200,200,20);
    iron1 = new iron (700,0,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand13.display();
  sand12.display();
   iron1.display();
  drawSprites();
 
}



