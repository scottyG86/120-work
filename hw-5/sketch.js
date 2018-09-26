let rot = 0;
let posY = 0;

function setup()
{
createCanvas(720,480);

}

function draw()
{
let fr = frameRate();
text( "frame rate: " + fr, 10, 20 );
text( "posY " + posY, 10, 40 );
translate(width*0.5,height*0.5);

background('green');




stroke('rgb 200,50,0');
strokeWeight(50)
point(0 , posY);

posY = posY + 1
pop();
}
