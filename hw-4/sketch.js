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
      stroke('rgb(38,66,9)');
      line(50,0,150,-200);//left
      line(150,-200,200,-70);
      line(-50,0,-150,-200);//right
      line(-150,-200,-200,-70);
    pop();//end back legs

    push();//body
    //body code
      fill('rgb(73,115,32)');
      ellipse(0,0,300,200);
    pop();//body end

    push();//2 front legs both sides
      strokeWeight(20);
      stroke('rgb(58,102,14)');
      //isolated so that I can rotate legs and see both sets
        push();//left
          rotate(30);
          line(-60,90,150,200);
          line(150,200,10,270);
        pop();

        push();//right
          rotate(-30);
          line(60,90,-150,200);
          line(-150,200,-10,270);
        pop();
    pop();//end front legs

    push();//4 eyes
      translate(0,-10);
      fill('rgb(145,22,9)');
      ellipse(20,20,10,10);
      ellipse(60,-10,10,10);
      ellipse(-20,20,10,10);
      ellipse(-60,-10,10,10);
    pop();//end eyes

    push();//mouth with teeth
      fill('rgb(51,34,34)')
      ellipse(0,50,70,50);
        push();
          translate(0,15);
          fill('rgb(248,251,114)');
          triangle(0,15,8,40,20,15);
        pop();

        push();
          translate(0,15);
          fill('rgb(248,251,114)');
          triangle(0,15,-8,40,-20,15);
        pop();

        push();
          translate(2,80);
          scale(0.5,-0.5);
          fill('rgb(248,251,114)');
          triangle(8,15,-2,40,-12,15);
        pop();
      noFill();
      strokeWeight(10);
      stroke('rgb(47,64,0)');
      ellipse(0,50,70,50);
    pop();

  pop();//end character
}
