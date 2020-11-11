var fixedRect,movingRext;


function setup() {
  createCanvas(1200,800);
  
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRext=createSprite(400,200,80,30);
  movingRext.shapeColor="green";

  fixedRect.debug=true;
  movingRext.debug=true;
}

function draw() {
  background(0,0,0);
  movingRext.x=World.mouseX
  movingRext.y=World.mouseY
if(movingRext.x - fixedRect.x < fixedRect.width/2 + movingRext.width/2
  &&fixedRect.x -movingRext.x  < fixedRect.width/2 + movingRext.width/2
  &&movingRext.y - fixedRect.y < fixedRect.height/2 + movingRext.height/2
  &&fixedRect.y -movingRext.y < fixedRect.width/2 + movingRext.width/2 ){



  movingRext.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRext.shapeColor="green";
  fixedRect.shapeColor="green";
}





  drawSprites();
}