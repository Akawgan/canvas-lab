var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;
let dotColor = "#808080";
let lineColor = "#808080";
let dotAmount = 150;
let dots = [];
let maxSpeed = 1;
let minSize = 1;
let maxSize = 2;
let minDistance = 100;
  
    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Redraw everything after resizing the window
      drawDots(); 
    }
    resizeCanvas();

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    // ------- Populate the canvas with the dot objects
    for(i=0 ; i<dotAmount ; i++)
    {
      dots[i] = new Object();
      dots[i].posX = getRandomFloat(0, window.innerWidth);
      dots[i].posY = getRandomFloat(0, canvas.height);
      dots[i].vector2 = [getRandomFloat(-maxSpeed, maxSpeed), getRandomFloat(-maxSpeed, maxSpeed)];
      dots[i].color = dotColor;
      dots[i].size = getRandomFloat(minSize, maxSize);

      // Give slow dots a different color
      if(dots[i].vector2[0] + dots[i].vector2[1] < .01)
      {
        dots[i].color = "#E9E9E9";
      }
    }

    let checkDistance = function(x1, y1, x2, y2)
    { 
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    function drawLines(dot, neighbours)
    {
      for (let i = 0; i < neighbours.length; i++) 
      {
        let distance = checkDistance(dot.posX, dot.posY, neighbours[i].posX, neighbours[i].posY);
        let opacity = 1 - distance / minDistance;

        if(distance < minDistance)
        {
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(125, 125, 125, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(dot.posX, dot.posY);
        ctx.lineTo(neighbours[i].posX, neighbours[i].posY);
        ctx.closePath();
        ctx.stroke();
        }
      }
    }
  
    function drawDots() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the dots
      for(i=0 ; i<dotAmount ; i++)
      {
        if(dots[i] != undefined)
        {
        ctx.beginPath();
        ctx.strokeStyle = dots[i].color;
        ctx.arc(dots[i].posX, dots[i].posY, dots[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = dots[i].color;
        ctx.fill();
        ctx.stroke();

        if(dots[i].vector2[0] == 0 && dots[i].vector2[1] == 0)
        {
          dots[i].vector2 = [1, 1];
        }

        dots[i].posX += dots[i].vector2[0];
        dots[i].posY += dots[i].vector2[1];

        if(dots[i].posX < 0 || dots[i].posX > canvas.width)
        {
          dots[i].vector2[0] *= -1;
        }
        if(dots[i].posY < 0 || dots[i].posY > canvas.height)
        {
          dots[i].vector2[1] *= -1;
        }

        // Connect to other dots
        drawLines(dots[i], dots);

        }
      }
    }

    setInterval(drawDots, 10);