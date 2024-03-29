const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon;
function preload(){
  polygon_img=loadImage("bola.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  stand1 = new Stand(450,400,700,10);
  polygon = Bodies.circle(50,200,80);

  World.add(world,polygon);
  
  slingShot = new SlingShot(polygon,{x:100,y:250});

  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(510,275,30,40);
  block9 = new Block(540,275,30,40);
  block10 = new Block(570,275,30,40);
  block11 = new Block(600,275,30,40);
  block12 = new Block(300,235,30,40);
  block13 = new Block(330,235,30,40);
  block14 = new Block(360,235,30,40);
  block15 = new Block(390,235,30,40);
  block16 = new Block(420,235,30,40);
  block17 = new Block(450,235,30,40);
  block18 = new Block(480,235,30,40);
  block19 = new Block(510,235,30,40);
  block20 = new Block(540,235,30,40);
  block21 = new Block(570,235,30,40);
  block22 = new Block(600,235,30,40);
  block23 = new Block(300,195,30,40);
  block24 = new Block(330,195,30,40);
  block25 = new Block(360,195,30,40);
  block26 = new Block(390,195,30,40);
  block27 = new Block(420,195,30,40);
  block28 = new Block(450,195,30,40);
  block29 = new Block(480,195,30,40);
  block30 = new Block(510,195,30,40);
  block31 = new Block(540,195,30,40);
  block32 = new Block(570,195,30,40);
  block33 = new Block(600,195,30,40);
  block34 = new Block(300,155,30,40);
  block35 = new Block(330,155,30,40);
  block36 = new Block(360,155,30,40);
  block37 = new Block(390,155,30,40);
  block38 = new Block(420,155,30,40);
  block39 = new Block(450,155,30,40);
  block40 = new Block(480,155,30,40);
  block41 = new Block(510,155,30,40);
  block42 = new Block(540,155,30,40);
  block43 = new Block(570,155,30,40);
  block44 = new Block(600,155,30,40);

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  imageMode(CENTER)
  image(polygon_img, polygon.position.x,polygon.position.y,100,100);
  text("MEU JOGO",400,300,200);
  stand1.display();
  slingShot.display();

  strokeWeight(2);
  stroke(15);
  fill("grey");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block26.display();
  block13.display();
  block14.display();
  block15.display();
  block23.display();
  block24.display();
  block25.display();
  block16.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
 

}
function mouseDragged() {
	Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(polygon, {x:50,y:200});
    slingShot.attach(polygon);
  }
}
