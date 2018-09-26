function setup()
{
  createCanvas(720,480);

}

function draw()
{
  let fr = frameRate();
  text( "frame rate: " + fr, 10, 20 );
  push();
  translate(360,240);

  background('green');


  let rot = 0;
  let posY = 0;

  stroke('rgb 200,50,0');
  strokeWeight(50)
  point(0 , posY);

  posY = posY + 1
  pop();
}
