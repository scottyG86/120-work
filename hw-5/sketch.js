let rot = 91;
let posY = 240;
let angle = 0;

function setup()
{
createCanvas(720,480);

translate(width*.5, height*.5);
}

function draw()
{
  if(posY > (100 + 240))
      {
        posY = 240;
        angle = cos(rot)


      }

  let fr = frameRate();
  push();
    background('green');
    text( "frame rate: " + fr, 10, 20 );
    text( "posY " + posY, 10, 40 );
    text( "rot " + rot, 10, 60  );
    text( "angle " + angle, 10, 80  );
  pop();
  push();

    translate(360,posY);





    fill('rgb(200,50,0)');
    ellipse(0 , 0, 10, 30);
  rotate(angle);
    posY = posY + 1;


  pop();
}
