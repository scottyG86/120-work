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

    push();//2 back legs
    strokeWeight(20);
    fill('rgb(58,102,14)');
    line(0,0,150,200);
    line(150,200,200,230);
    line(-50,0,-150,-200);
    line(-150,-200,-200,-230);
    pop();
  pop();//end character
}
