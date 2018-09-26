let rot = 0;
let posY = 0;

function setup()
{
createCanvas(720,480);
background('green');

}

function draw()
{


  let fr = frameRate();
  text( "frame rate: " + fr, 10, 20 );
  text( "posY " + posY, 10, 40 );
  translate(0,posY);





  stroke('rgb 200,50,0');
  ellipse(0 , 0, 1);

  posY = posY + 1

  if(posY > 100)
  {
    posY = 0;

  }
}
