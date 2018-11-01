  let squareArr = [];// declares varibales
  let squareSize = 40;
  let squareY = 0;

  function setup()
    {
        createCanvas(1920, 1080);
        while(squareArr.length<width/squareSize)
          {
            populate();
          }
        console.log("array:"+squareArr.length);
        console.log(width/squareSize);// for debugging
        console.log(height/squareSize);
        console.log(squareArr);
        frameRate(24);
    }
  function draw()
    {
        background('rgb(68,34,34)');
        drawSquares();
    }
  function drawSquares()//function1
  {
    for(let i = 0; i < height/squareSize+1; i++)//loop to make sure all Y layers are filled
      {
        for(let i = 0; i < squareArr.length; i++)// loop to make sure all X layers are filled
          {
            fill(color(random(255),random(100),random(100)));// gives a red primary to all the squares
            noStroke();
            rect(squareArr[i].xPos+-random(10),squareY,squareArr[i].width,squareArr[i].height);//uses array data to draw a square
          }
          squareY+=squareSize;// for Y layers
          if(squareY>height)// resets Y layers so that sketch is always changing
          {
            squareY = 0+-random(10);
          }
      }
  }
  function populate()//populates array with square data and X position
    {
        squareArr.push({xPos: squareArr.length*squareSize, width: squareSize, height: squareSize});
    }
