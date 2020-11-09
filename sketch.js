
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var canvas, pendelum1,pendelum2,pendelum3,pendelum4,pendelum5;
var string1, string2, string3, string4, string, Mouse, create


function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	
	let options = {
		mouse: canvasmouse
	};


	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	pendelum1 = new Pendelum(windowWidth/2 - 100);
	

	Engine.run(engine);

  
}


function draw() {
  background(255);
  Engine.update(engine);
	pendelum1.display();

  
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(pendelum1.body, {x: mousex, y: mousey})

}


