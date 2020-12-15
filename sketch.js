const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new Dustbin(720, 440, 100, 100);
  
  log = new Log(680, 350, 10, 70);
  log2 = new Log(760, 350, 10, 70);
  paper = new Paper(130, 360, 10);
  
  ground = new Ground(400, 390, 800, 10,
  {
    isStatic: true
  });
  
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
    
    
                
  
   
    
    paper.display();
    log.display();
    log2.display();
    dustbin.display();
    
    
    ground.display();

  
}


function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
