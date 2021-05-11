const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var snow=[]
var bg
function preload(){
bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,657);
  engine=Engine.create();
  world=engine.world;

  Engine.run(engine);



}

function draw() {
  background(bg); 

  Engine.update(engine);

  if(frameCount%10===0){
    snow.push(new Snow(random(20,780),0,60));
  }
  //display the paricles 
 for(var b=0;b<snow.length;b++){
   snow[b].display();
 }
  
}

