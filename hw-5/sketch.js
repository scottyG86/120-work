let rot = 1;
let posY = 240;
let posX = 360;
let xShift = -200;

let angle = 0;

function setup()
{
createCanvas(720,480);

translate(width*.5, height*.5);

    background('white');

}

function draw()
{
  let fr = frameRate();
  //text( "frame rate: " + fr, 10, 20 );
  //text( "posY " + posY, 10, 40 );
  //text( "rot " + rot, 10, 60  );
  //text( "angle " + angle, 10, 80  );

  if(posY > height)
      {
        posY = 0;





      }
  if(posX > width)
  {
    xShift += 20;
    posX = xShift;
    if(xShift > width)
    {
      xShift = -200;
    }
  }



  push();

    translate(posX,posY);



    noStroke();
    rotate(angle);
    fill(color(random(255),random(255),random(255)));
    ellipse(0 , 0, 10, 90);
    posY = posY + 2;
    posX = posX + 1;
    rot = rot + random(1);
    angle = radians(rot);


  pop();
}
