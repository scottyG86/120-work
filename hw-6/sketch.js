let = posX;
let = posY;
let = red
let = green
let = blue
function setup()
{
  createCanvas(720,480);

  posX = width/2;
  posY = width/2;
}

function draw()
{
  fill('rgb(red,green,blue)')
  ellipse(posX,posY, 1)

  posX = floor(random((posY+posX)*.01));
  posY = floor(random((posX+posY)*.01));

  blue = constrain(abs(blue - green),0,256)
  green = constrain(abs(green - red),0,256)
  red = constrain(abs(random(256)*3),0,256)
}
