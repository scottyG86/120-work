let rot = 91;
let posY = 240;

function setup()
{
createCanvas(720,480);

translate(width*.5, height*.5);
}

function draw()
{


  let fr = frameRate();
  push();
    background('green');
    text( "frame rate: " + fr, 10, 20 );
    text( "posY " + posY, 10, 40 );
    text( "rot " + rot, 10, 60  );
  pop();
  push();
    translate(360,posY);





    fill('rgb(200,50,0)');
    ellipse(0 , 0, 1);

    posY = posY + 1;

    if(posY > 100 + 240)
    {
      posY = 240;
      rotate(radians(rot));
      rot= rot + 1;
    }
  pop();
}
