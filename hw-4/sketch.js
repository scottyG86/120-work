function setup()
{
  createCanvas(720,480);
  background('black');
}
function draw()
{
  push();
  translate(360,240);
  rotate(-70);
  fill('rgb(149,98,0)');
  rect(-100,-50,100,50);
  pop();

}
