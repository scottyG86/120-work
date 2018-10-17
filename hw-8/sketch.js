let particle = {};//declares particle object and subparts
particle.posX = 0
particle.posY = 0
particle.domain = 0
particle.colorR = 256
particle.colorG = 0
particle.colorB = 0

function setup()
{
  createCanvas(windowWidth,windowHeight);
  //frameRate(24);
}
function draw()
{
  background('black')
  translate((windowWidth*.5),0);//sets the origin to the top center
  while(particle.posY<windowHeight)//keeps particle inside window on y axis
  {
    for(let i=0;i<2000;i++)//amount of layers drawn in a single color
    {
      for(let i=0;i<1;i++)//amount of particles in a layer(bigger numbers = lag)
        {
         particle.posX = random(windowWidth);//randomly places particle in layer
         noStroke();
         fill(color(particle.colorR,particle.colorG,particle.colorB));
         ellipse(particle.posX,particle.posY,10);//places particle on right side of center
         ellipse(-particle.posX,particle.posY,10);//places an exact mirror of the particle above on the left side
        }
      particle.posY+=.4;//determines layer height
    }
      if(particle.colorG<256&&particle.colorR==256&&particle.colorB==0)//this big group of if/else if statements is to change color by increasing a color value then decreasing the next value(Red starts at max in this case, green goes up,Red goes down,Blue goes up,Green goes down,Red goes up, Blue goes down)
        {
          particle.colorG++;
        }
      else if(particle.colorG==256&&particle.colorB==0&&particle.colorR>0)
        {
          particle.colorR--;
        }
      else if(particle.colorB<256&&particle.colorG==256&&particle.colorR==0)
        {
          particle.colorB++;
        }
      else if(particle.colorB==256&&particle.colorR==0&&particle.colorG>0)
        {
          particle.colorG--;
        }
      else if(particle.colorR<256&&particle.colorB==256&&particle.colorG==0)
        {
          particle.colorR++;
        }
      else if(particle.colorR==256&&particle.colorG==0&&particle.colorB>0)
        {
          particle.colorB--;
        }

  }
  particle.posY = 0;//resests the Y pos to allow the while loop to start again

}
