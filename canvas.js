var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;
let dotColor = "#000000"
let dotAmount = 100;
let dots = [];
  
    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Redraw everything after resizing the window
      drawDots(); 
    }
    resizeCanvas();

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // ------- Populate the canvas with the dot objects
    for(i=0 ; i<dotAmount ; i++)
    {
      dots[i] = new Object();
      dots[i].posX = getRandomInt(0, window.innerWidth);
      dots[i].posY = getRandomInt(0, canvas.height);
      dots[i].vector2 = [getRandomInt(-1, 2), getRandomInt(-1, 2)];
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
        ctx.strokeStyle = dotColor;
        ctx.arc(dots[i].posX, dots[i].posY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = dotColor;
        ctx.fill();
        ctx.stroke();

        if(dots[i].vector2[0] == 0 && dots[i].vector2[1] == 0)
        {
          dots[i].vector2 = [1, 1];
        }

        dots[i].posX += dots[i].vector2[0];
        dots[i].posY += dots[i].vector2[1];

        }
      }
    }

    setInterval(drawDots, 6);