  let squareArr = [];
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
        console.log(width/squareSize);
        console.log(height/squareSize);
        console.log(squareArr);
        frameRate(24);
    }
  function draw()
    {
        background('rgb(68,34,34)');
        drawSquares();
    }
  function drawSquares()
  {
    for(let i = 0; i < height/squareSize+1; i++)
      {
        for(let i = 0; i < squareArr.length; i++)
          {
            fill(color(random(255),random(100),random(100)));
            noStroke();
            rect(squareArr[i].xPos+-random(10),squareY,squareArr[i].width,squareArr[i].height);
          }
          squareY+=squareSize;
          if(squareY>height)
          {
            squareY = 0+-random(10);
          }
      }
  }
  function populate()
    {
        squareArr.push({xPos: squareArr.length*squareSize, width: squareSize, height: squareSize});
    }
