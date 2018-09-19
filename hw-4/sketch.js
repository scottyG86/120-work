function setup()
{
  //creates canvas
  createCanvas(720,480);
}
function draw()
{
  //my character is going to resemble a demon spider
  //sets background color
  background('black');
  push();//start character
  // centers character
    translate(360,240);
    push();//body start
    //body code
      fill('rgb(73,115,32)');
      ellipse(-150,50,300,200);
    pop();//body end

    push();

    pop();
  pop();//end character
}
