let rot = 1; //Variables are declared here.
let posY = 0;
let posX = 0;
let xShift = -200;
let angle = 0;

function setup() //Setup
{
  createCanvas(720,480);
  translate(width*.5, height*.5);
  background('white');

}

function draw()
{
  if(posY > height+100)// Creates infinite screen effect( it goes a little farther than the screen to hide ellipses at the edge of the screen)
      {
        posY = 0;
      }
  if(posX > width+100)
  {
    xShift += 20;
    posX = xShift;
    if(xShift > width)//xShift determines the amount that the X value changes as to prevent repeating lines
    {
      xShift = -200;
    }
  }



  push();//Runs all of the steps to create the art
    translate(posX,posY);// Translate is used to move so that the rotate step isn't super complicated
    noStroke();// adds to the abstract effect
    rotate(angle);// rotates the ellipse to create a more random effect
    fill(color(random(255),mouseX(),mouseY());// randomizes color
    ellipse(0 , 0, 10, 90);// draws ellipse
    posY = posY + 2; // Shifts value of Y position
    posX = posX + 1;// Shifts value of X position
    rot = rot + random(1); // part 1 of creating value to be rotated( random is there to mess around with)
    angle = radians(rot); // Part 2 of creating value to be rotated
  pop();
}
