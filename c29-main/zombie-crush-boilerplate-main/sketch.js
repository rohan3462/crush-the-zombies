const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,gorund1;
var rope;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground =   new Ground(5,200,400,50);
 World.add(world,ground);
  ground1 = new Ground1(695,200,400,50);
 World.add(world,ground1);
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  ground1.show();
  

}
