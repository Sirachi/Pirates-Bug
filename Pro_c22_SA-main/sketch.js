const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld, myEngine;
var balls = [];
var backgroundImg;
var boat1;
var boats = [];

function preload() {
  backgroundImg = loadImage("background.gif");
}

function setup() {
  createCanvas(1200, 600);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  angleMode(DEGREES);
  angle = 15;
  ground1 = new Ground(400, 790, 800, 10);
  tower = new Tower(160, 350, 160, 300);
  canon = new Canon(180, 130, 180, 250, angle);
}

function draw() {
  background(backgroundImg);
  Engine.update(myEngine);
  ground1.display();
  tower.display();
  canon.display();
  showBoats();
  showCanonBalls();
}

function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    balls[balls.length - 1].fireCannonBall();
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    console.log("hi");
    var canonBall = new CanonBall(200, 120, 40);
    canonBall.trajectory = [];
    balls.push(canonBall);
  }
}

function showCanonBalls() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
  }
}

function showBoats() {
  if (boats.length > 0) {
    if (
      boats[boats.length - 1] === undefined ||
      boats[boats.length - 1].boat.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      boat1 = new Boat(1150, 450, 170, 170, position);
      boats.push(boat1);
    }

    for (var i = 0; i < boats.length; i++) {
      if (boats[i]) {
        Matter.Body.setVelocity(boats[i].boat, { x: -0.9, y: 0 });
        boats[i].display();
      }
    }
  } else {
    boat1 = new Boat(1150, 450, 170, 170);
    boats.push(boat1);
  }
}
