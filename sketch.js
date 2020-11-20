const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.constraint;


var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var ball;
var string;




function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

 //making ball
  ball=new Ball(55,250,40);

  //making ground
  ground=new Ground(400,50,800,20);

  //making string
  string=new Strung(ball.body,{x:50,x:350});

  b1=new Box(400,300,50,50);
  b2=new Box(400,300,50,50);
  b3=new Box(400,300,50,50);
  b4=new Box(400,300,50,50);
  b5=new Box(400,300,50,50);
  b6=new Box(400,300,50,50);
  b7=new Box(400,300,50,50);
  b8=new Box(400,300,50,50);
  b9=new Box(400,300,50,50);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  ball.display();
  b1.display();
  

  
}



function mouseDragged(){

  Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseRellised(){

  string.fly();
}
function keyPressed(){

  if(keyCode===32){

    ball.attack(this.string);
  }

}