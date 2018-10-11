Scotty Graham

https://scottyg86.github.io/120-work/hw-7/


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
Line by line:

`let ball = {};` Creates the ball object

`ball.width = 40;` Sets the ball width

`ball.x = 10;` Sets the ball X position

`ball.y = 10;` Sets the ball Y position

`ball.delta_x = 1;` Handles bouncing in the X axis

`ball.delta_y = 1;` Handles bouncing in the y axis

`ball.scale_x = 1;` Handles the speed and minor changes to direction on the X axis

`ball.scale_y = 1;`Handles the speed and minor changes to direction on the Y axis

The setup is a very simple `createCanvas` & `background` so I won't spend too much time here.

`ball.x += ball.delta_x * ball.scale_x;`&`ball.y += ball.delta_y * ball.scale_y;` change the position of the ball by multiplying the delta(bounce) and the scale(speed/direction) and then add that to the current position to create a new position.

`if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}`&
`if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}` Deals with the bounce by multiplying the exsiting delta by -1 to invert the direction traveled on the corresponding axis.

`fill(255);`&
`ellipse(ball.x, ball.y, ball.width, ball.width);` Draws the ball at the positions and size stated beforehand.

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->

I altered the sketch because it was a tad bit too uniform for me.

What I added was a random color generator and added some chaos(variable) to the placement of the balls by offsetting and rotating the grid origin.
