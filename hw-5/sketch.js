function setup()
{
  createCanvas(720,480);
}

function draw()
{
  background('black');

  let red = 0;
  let green = 0;
  let blue = 0;
  let posX = 0;
  let posY = 0;

  fill('rgb(red,green,blue)');
  ellipse( posX, posY, 5, 5);

  if(red=<256)
  {
    red = red + 1
  }
  else if (red=>256)
  {
    red = red - 1
  }

  if(green=<256)
  {
    green = green + 3
  }
  else if (green=>256)
  {
    green = green - 3
  }

  if(blue=<256)
  {
    blue = blue + 5
  }
  else if (blue=>256)
  {
    blue = blue - 5
  }
}
