function setup()
{
  createCanvas(720,480);
  background('black')
  translate(360,240);
}
function draw()
{
  push();
  rotate(-30);
  fill('rgb(111, 63, 13)')
  rect(-100,-50,100,50);
  pop();
}
