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
  fill('rgb(111, 63, 13)')
  rect(-100,-50,50,100);
  pop();

}
