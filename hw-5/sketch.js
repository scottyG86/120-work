let rot = 0;
let posY = 0;

function setup()
{
createCanvas(720,480);

}

function draw()
{
  background('green');

let fr = frameRate();
text( "frame rate: " + fr, 10, 20 );
text( "posY " + posY, 10, 40 );
translate(width*0.5,height*0.5);





stroke('rgb 200,50,0');
ellipse(0 , posY, 1);

posY = posY + 1
}
