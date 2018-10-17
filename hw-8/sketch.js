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
  background('black')
  //frameRate(24);
}
function draw()
{
  background('black')
  translate((windowWidth*.5),0);
  while(particle.posY<windowHeight)
  {
    for(let i=0;i<2000;i++)
    {
      for(let i=0;i<1;i++)
        {
         particle.posX = random(windowWidth);
         noStroke();
         fill(color(particle.colorR,particle.colorG,particle.colorB));
         ellipse(particle.posX,particle.posY,10);
         ellipse(-particle.posX,particle.posY,10);
        }
      particle.posY+=.4;
    }
      if(particle.colorG<256&&particle.colorR==256&&particle.colorB==0)
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
  particle.posY = 0;

}
