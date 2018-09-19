function setup()
{
  //creates canvas
  createCanvas(720,480);
}
function draw()
{
  //sets background color
  background('black');
  push();//start character
  // centers character
    translate(360,240);
    push();//body start
    //body code
      fill('rgb(152,131,57)');
      rect(0,0,300,150);
    pop();//body end
  pop();//end character
}
