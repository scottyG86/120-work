function setup()
{
  //creates canvas
  createCanvas(720,480);
}
function draw()
{
  //my character is going to resemble a demon spider with 4 legs
  //sets background color
  background('black');
  push();//start character
  // centers character
    translate(360,240);

    push();//2 back legs both sides
      strokeWeight(20);
      fill('rgb(38,66,9)');
      line(0,0,150,200);//left
      line(150,200,200,230);
      line(-50,0,-150,-200);//right
      line(-150,-200,-200,-230);
    pop();//end back legs

    push();//body
    //body code
      fill('rgb(73,115,32)');
      ellipse(-150,50,300,200);
    pop();//body end

    push();//2 front legs both sides
      strokeWeight(20);
      fill('rgb(58,102,14)');
      //isolated so that I can rotate legs and see both sets
        push();//left
          rotate(30);
          line(50,0,150,200);
          line(150,200,150,270);
        pop();

        push();//right
          rotate(-30);
          line(-50,0,-150,-200);
          line(-150,-200,-150,-270);
        pop();
    pop();//end front legs

    push();//4 eyes
      fill('rgb(145,22,9)');
      ellipse(20,20,10,10);
      ellipse(40,60,10,10);
      ellipse(-20,-20,10,10);
      ellipse(-40,-60,10,10);
    pop();

  pop();//end character
}
