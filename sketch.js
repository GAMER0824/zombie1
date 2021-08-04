const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var wall_right
var wall_left
var bridge
var jointPoint
var jointLink
var stones = []



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 8, width * 2, 20, "green")
  wall_left = new Base(150, height / 2 + 50, 600, 100, "brown")
  wall_right = new Base(width - 150, height / 2 + 50, 600, 100, "brown")
  bridge = new Bridge(17, { x: width / 2 - 350, y: height / 2 })
  jointPoint = new Base(width - 450, height / 2 + 10, 40, 20)
  Composite.add(bridge.body, jointPoint)
  jointLink = new link(bridge, jointPoint)

  for (var i = 0; i <= 10; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 100);
    var stone = new Stone(x, y, 40);
    stones.push(stone);
  }


}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display()
  wall_left.display()
  wall_right.display()
  bridge.show()
  
  for (var stone of stones) {
    stone.display();
  }
  //jointPoint.display()

}
