let rot = 91;
let posY = 240;
let angle = 0;

function setup()
{
createCanvas(720,480);

translate(width*.5, height*.5);

    background('green');
    text( "frame rate: " + fr, 10, 20 );
    text( "posY " + posY, 10, 40 );
    text( "rot " + rot, 10, 60  );
    text( "angle " + angle, 10, 80  );
}

function draw()
{
  if(posY > (100 + 240))
      {
        posY = 240;
        rot = rot + 1
        angle = radians(rot);


      }

  let fr = frameRate();
  push();

  pop();
  push();

    translate(360,posY);




    rotate(angle);
    fill('rgb(200,50,0)');
    ellipse(0 , 0, 10, 30);
    posY = posY + 1;


  pop();
}
