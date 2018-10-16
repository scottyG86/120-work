let dot = {};// dot is declared here along with all of its parts
dot.posX = 0;
dot.posY = 0;
dot.red = 0;
dot.green = 0;
dot.blue = 0;
dot.xShift = 0;
dot.yShift = 0;
function setup()
{
  createCanvas(1920,1080);
}

function draw()
{
  let i = 0;
  while(i<7)//this is to speed up the program 7x
  {
  noStroke();
  fill(color(dot.red,dot.green,dot.blue));// this creates the first dot in a pair
  ellipse(dot.posX,dot.posY, 10, 1);

  dot.posX = floor(random(height*.01+constrain(dot.xShift%1920,0,width)));
  dot.posY = floor(random(height*.01+constrain(dot.yShift/2,0,height)));// this declares the dot positions

  ellipse(dot.posX,dot.posY, 1, 10); //this Creates the second dot in a pair

  dot.xShift++;
  dot.yShift++;// this starts the dots in the corner and moves them out

  dot.blue = constrain(abs(dot.blue - dot.green),0,256);
  dot.green = constrain(abs(dot.green - dot.red),0,256);// random color
  dot.red = constrain(abs(random(256)),0,256);
  i++;
}

}
