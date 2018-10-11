

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.rot = 0;
ball.rot_bool = false;
ball.color_R = 255;
ball.color_G = 0;
ball.color_B = 0;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
    translate(ball.x,ball.y);
    rotate(ball.rot);


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
  /*  if (ball.rot_bool == false) {
        rotate(ball.rot);
    }
    else if (ball.rot_bool == true) {
        rotate(-1 * ball.rot);
    }
    */

    noStroke();
    fill(color(ball.color_R,ball.color_G,ball.color_B));
    ellipse(10, 10, ball.width, ball.width);

  /*  if (ball.rot_bool == false) {
        rotate(-1 * ball.rot);
        ball.rot_bool = true;

    }
    else if (ball.rot_bool == true) {
        rotate(ball.rot);
        ball.rot_bool = false;
    }
*/
      ball.rot = random(170);
      ball.color_R = random(256);
      ball.color_G = random(256);
      ball.color_B = random(256);
  }

  function mousePressed() {
      ball.scale_x = map(mouseX, 0, width, 0.5, 10);
      ball.scale_y = map(mouseY, 0, height, 0.5, 10);
  }
