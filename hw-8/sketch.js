let particle = {};
particle.posX = 0
particle.posY = 0
particle.allColorR = 0
particle.allColorG = 0
particle.allColorB = 0

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background('black')
}
function draw()
{
  while(posY<1024)
  {
     particle.posX = random(700);
     noStroke();
     fill(rgba(particle.allColorR,particle.allColorG,particle.allColorB,.5));
     ellipse(posX,posY,10);
  }
}
