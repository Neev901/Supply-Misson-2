var helicopterIMG, helicopterSprite, packageSprite, packageIMG, red_box_1, red_box_2, red_box_3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	red_box_1=createSprite(350,615,10,100);
	red_box_1.shapeColor="red"

	red_box_2=createSprite(400,655,100,10);
	red_box_2.shapeColor="red"

	red_box_3=createSprite(450,615,10,100);
	red_box_3.shapeColor="red"
  	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBox_1= Bodies.rectangle(350,615,10,100,{isStatic:true})
	World.add(world, packageBox_1);
	packageBox_2= Bodies.rectangle(400,655,100,10,{isStatic:true})
	World.add(world, packageBox_2);
	packageBox_3= Bodies.rectangle(450,615,10,100,{isStatic:true})
	World.add(world, packageBox_3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



