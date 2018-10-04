let posX = 0;
let posY = 0;
let red = 0;
let green = 0;
let blue = 0;
let xShift = 0;
let yShift = 0;
function setup()
{
  createCanvas(1920,1080);
}

function draw()
{
  let i = 0;
  while(i<100)
  {
  noStroke();
  fill(color(red,green,blue));
  ellipse(posX,posY, 10, 1);

  posX = floor(random(height*.01+constrain(xShift,0,width)));
  posY = floor(random(height*.01+constrain(yShift,0,height)));

  ellipse(posX,posY, 1, 10);

  xShift++;
  yShift++;

  blue = constrain(abs(blue - green),0,256);
  green = constrain(abs(green - red),0,256);
  red = constrain(abs(random(256)),0,256);
  i++;
}




}
