let mySong, level, amplitude, size, numOfParticles, numOfBands, bgrnd,imgX,imgY;//declares varibales
let snow = [];//declares object array

function preload()//preload function
{
//  mySong = loadSound('Media/In Conclusion.mp3');// song to be preloaded
  mySong = loadSound('Media/Rezzolution.mp3');// another song
  bgrnd = loadImage('Media/Creative Coding Final Background.png');// image to be preloaded
  logo = loadImage('Media/Final Project Logo.png') // middle logo
}
function setup()//setup
{
  numOfBands = 50// sets the number of Frequency bands 50 is the max before it starts to lag
  numOfParticles = 200;//setting the number of snow particles
  createCanvas(windowWidth,windowHeight);//canvas
//  amplitude = new p5.Amplitude();//getting amplitude of song
  fft = new p5.FFT();//creating a new fft object
  mySong.setVolume(1);//sets volume of song
  mySong.play();//plays song
  console.log('winW'+windowWidth);//for debugging
  console.log('winH'+windowHeight);//for debugging
  for(let i = 0; i<numOfParticles; i++)//loop for creating snow objects
  {
    snow.push(new Snow());//populates snow array
    console.log('snow:'+i)//for debugging
    frameRate(60);//for debugging
  }
  imgX = windowWidth*.5 - 150// setting position of logo
  imgY = windowHeight*.5 - 250// setting position of logo
}
function draw()//draw
{
  //noStroke();//nostroke
  background(bgrnd);//background
  //level = amplitude.getLevel();
  fft.analyze();//analyzes sound
  //size = map(2*level,0,4,200,500);
  image(logo,imgX-(fft.getEnergy(101)*.5),imgY-(fft.getEnergy(101)*.5),(661*.5)+fft.getEnergy(101),(543*.5)+fft.getEnergy(101));// creates middle logo
  for(var i = 0; i < numOfBands; i++)//creates bands
  {
  fill(color(256,256,256,90))// colors bands
  rect((windowWidth/numOfBands*i),windowHeight,windowWidth/numOfBands,-fft.getEnergy((windowWidth/numOfBands)*i))// creates individual bands
  }

  if(snow.length<numOfParticles)//to keep consistent snow
  {
    for(let i = 0; i<numOfParticles; i++)//loop for creating snow objects
    {
      snow.push(new Snow());//populates snow array
      console.log('snow:'+i)//for debugging
    }
  }
  for(let idx = 0; idx<snow.length; idx++)//loop for creating snow
  {
    push;
    snow[idx].go(idx);//go is my master method for creating snow
    pop;
    //snow[i].display(i);
  }
}





////////////////////////////
////Frequency Band Class////
////////////////////////////

class Snow//class
{
  constructor()//constructor
  {
    this.xPos = random(-10000);//declaring the start of the snow
    this.yPos = random(windowHeight);//declaring the height the snow starts at
    this.deltaX = random(4);// determines the speed of the "wind" pushing the snow
    this.deltaY = random(2);// determines how fast the snow falls
  }
  go(idx)// master method for snow
  {
    this.move()// move method
    this.display(idx)// display method
    this.killSnow(idx)// killSnow method
  }

  move()// move method
  {
    this.xPos = this.xPos + 3 + this.deltaX;// adds the base speed "3" to the "wind"
    this.yPos = this.yPos + .1 + this.deltaY;// adds the base speed ".1" to the "gravity"
  }

  display(idx)// display method
  {
    noStroke();// I just like nostroke
    fill(color(256,256,256,70))// colors the snow transperent white
    ellipse(this.xPos,this.yPos,7);// draws the snow
    console.log('snow:'+idx+'mk 2');//for debugging
    console.log('x'+idx+' '+this.xPos);//for debugging
    console.log('y'+idx+' '+this.yPos);//for debugging
  }

  killSnow(idx)// killSnow method
  {
    if(this.xPos >= windowWidth|| this.yPos >= windowHeight)// checks for snow leaving screen
    {
      snow.splice(idx,1);// removes the current snow particle from the array.
    }
  }
}
