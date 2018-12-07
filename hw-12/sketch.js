let ball = [];//defines object array
let numberOfBalls;//defines number of balls as a variable


function setup()
{
      background('green');
    numberOfBalls = 70;// number of balls to be created
    createCanvas(windowWidth,windowHeight);
    for (let i = 0; i < numberOfBalls; i++)//populates array
    {
        ball.push( new Ball() );
    }
    frameRate(60);
}

function draw()
{
    if(ball.length<numberOfBalls)//this is so that if one ball dies another takes its place
    {
      for (let i = 0; i < numberOfBalls-ball.length; i++)
      {
          ball.push( new Ball() );
      }
    }

    for (let i = 0; i < ball.length; i++)//creates the balls
    {
        ball[i].go(ball,i);
    }
}
//////////////////////////////
/////////Ball Class////////
//////////////////////////////

class Ball
{
  constructor()//beautiful constructor.
  {
    this.gravity = 1;
    this.size = random(40,100);
    this.speed;
    this.pX = floor(random(windowWidth));
    this.pY = floor(random(windowHeight));
    this.deltaPX = random(-7,7);
    this.deltaPY = 0;
    this.timeAlive = 0;
    this.maxTime = random(2.0,12);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  go(otherBalls, idx)//I like having one thing to call in my draw function so this is the frame by frame eventes that take place
  {
    //this.size()
    this.edgeCheck();
    this.move();
    this.display();
    this.ballCheck(otherBalls, idx);
    this.killBalls(idx);
  }

  move()//moves the balls down according to "gravity" and sideways according to random number given when constructed
  {

    this.pX = this.pX + this.deltaPX;
    this.pX = constrain(this.pX,0,width);
    this.deltaPY += this.gravity;
    this.pY+=this.deltaPY;
    this.pY = constrain(this.pY,0,height)
    console.log(this.pY);
    console.log(this.deltaPY);
  }

  edgeCheck()//this is so that the balls stay on screen
  {
    if(this.pX >= width && this.pX <=0)
    {
      this.deltaPX=(this.deltaPX*.5)*-1
    }

    if(this.pY >= height)
    {
      this.deltaPY=(this.deltaPY)*-1
    }

  }

  display()// this handles the drawing of the balls
  {
      noStroke();
      fill(color(this.r,this.g,this.b));
      ellipse(this.pX,this.pY,this.size);
  }

  killBalls(idx)// this method kills the balls according to a random time given when constructed
  {
    this.timeAlive++;
    if(this.timeAlive>= this.maxTime * frameRate())
    {
      ball.splice(idx,1);
      this.deltaPY = 0;
      this.pY = floor(random(windowHeight))
    }
  }

  ballCheck(otherBalls,idx)//this is to check for collision of balls. if there is a collision it kills the balls.
  {
    for(let i = 0; i < otherBalls.length; i++)
          {
            if(i != idx)
            {
                let d = dist(this.pX,this.pY, otherBalls[i].pX,otherBalls[i].pY)
                let combinedS = (this.size) + (otherBalls[i].size);
                if(d <= combinedS)
                {
                  this.killBalls(idx);
                }
            }
          }
    }
}
