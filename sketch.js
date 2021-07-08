
function setup() {

  createCanvas(1250,570);
 
}

function draw() 
{
  
  if (keyIsDown(UP_ARROW))
  {
    background('red');
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    background('orange');
  }
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background('yellow');
  }
  if (keyIsDown(LEFT_ARROW))
  {
    background('green');
  }
}




