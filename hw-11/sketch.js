let balls = [];
let numberOfBalls;

function setup()
{
    numberOfBalls = 20;
    createCanvas(windowWidth,windowHeight);
    for (let i = 0; i < numberOfBalls; i++)
    {
        balls.push( new Ball() );
    }
}

function draw()
{
    background('black')
    for (var i = 0; i < balls.length; i++)
    {
        balls[i].go();
    }
}
///////////////////////////////
////////Ball Class//////////
///////////////////////////////
class Ball
{
    constructor()
    {
        this.posX = random(windowWidth);
        this.posY = random(windowHeight);
        this.size = 20
    }

    go()
    {
      this.ballSize();
      this.display();
    }
    ballSize()
    {
        if(this.size<300)
        {
          this.size += random(10);
        }
        else if(this.size>=300)
        {
          this.size = 0;
        }
    }

    display()
    {
            strokeWeight(15);
            stroke(color(random(100,200),random(100,200),random(100,200)));
            ellipse(this.posX,this.posY,this.size);
    }
}
