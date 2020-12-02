var particles=[];
var plinkos=[];
var division=[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var division1,division2,division3,division4,division5,division6,division7;
//var divisionHeight=300;

function setup() {
  createCanvas(480,660);

  engine = Engine.create();
	world = engine.world;

  ground=new Ground(240,650,480,10);

  //division1=new Division(5,500,10,200);
 
  Engine.run(engine);
}

function draw() {
  background("black");
  for(var k=0; k < 480; k++){
    divisions.push(new Division(k,height-divisionHeight/2,10,disvisionHeight));
  }
  ground.display(); 
  //division1.display(); 
  drawSprites();
}