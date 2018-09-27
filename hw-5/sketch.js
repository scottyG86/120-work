let rot = 91;
let posY = 240;
let posX = 360;

let angle = 0;

function setup()
{
createCanvas(720,480);

translate(width*.5, height*.5);

    background('white');

}

function draw()
{
  frameRate(120);
  let fr = frameRate();
  text( "frame rate: " + fr, 10, 20 );
  text( "posY " + posY, 10, 40 );
  text( "rot " + rot, 10, 60  );
  text( "angle " + angle, 10, 80  );

  if(posY > 450)
      {
        posY = 0;





      }
  if(posX > 720)
  {
    posX = 0
  }


  push();

    translate(posX,posY);




    rotate(angle);
    fill(color(random(255),random(255),random(255)));
    ellipse(0 , 0, 10, 30);
    posY = posY + 2;
    posX = posX + 1;
    rot = rot + random(100);
    angle = radians(rot);


  pop();
}
