function setup()
{
  createCanvas(720,480);
  background('black')
}
function draw()
{
  push();
  translate(360,240);
  rotate(-30);
  fill('rgb(15,13,111)')
  rect(-100,-50,100,50);
  pop();
}
