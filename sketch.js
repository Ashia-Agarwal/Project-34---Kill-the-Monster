const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundimg, ironmanimg, villainimg;
var ground, hero, fly, villain;
var ba1, ba2, ba3, ba4, ba5, bb1, bb2, bb3, bc1;

function preload() {
  backgroundimg = loadImage("images/background.jpg");
  ironmanimg = loadImage("images/iron man flying.jpeg");
  villainimg = loadImage("images/villain.jpg");
}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  ba1 = new Block(700, 500, 25, 50);
  ba2 = new Block(725, 500, 25, 50);
  ba3 = new Block(750, 500, 25, 50);
  ba4 = new Block(775, 500, 25, 50);
  ba5 = new Block(800, 500, 25, 50);
  bb1 = new Block(725, 450, 25, 50);
  bb2 = new Block(750, 450, 25, 50);
  bb3 = new Block(775, 450, 25, 50);
  bc1 = new Block(750, 400, 25, 50);
  ground = new Ground(500, 600, 1000, 10, "white");
  hero = new Hero(150, 100, 50);
  fly = new Fly(hero.body, {'x': 225, 'y': 40});
  villain = new Monster(700, 100, 50);
}

function draw() {
  background(backgroundimg);
  ground.display();
  hero.display();
  fly.display();
  villain.display();
  ba1.display();
  ba2.display();
  ba3.display();
  ba4.display();
  ba5.display();
  bb1.display();
  bb2.display();
  bb3.display();
  bc1.display();
  Engine.update(engine);
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  fly.fly();
}