function setup()
{
  createCanvas(720,480);
  translate(360,240);
}

function draw()
{
  background('green');


  let rot = 0;
  let posY = 0;

  fill('rgb 256,0,256');
  ellipse( posX, posY, 5);

  posX = (posY * 3)+.7;
}
