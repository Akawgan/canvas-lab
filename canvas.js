var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;
  
    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Redraw everything after resizing the window
      drawStuff(); 
    }
    resizeCanvas();
  
    function drawStuff() {
      // Do drawing here

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

        let vector2D = [getRandomInt(-1, 2), getRandomInt(-1, 2)]
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.arc(canvas.width / 2 - 5 + x, canvas.height / 2 - 5 + y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.stroke();

        x += vector2D[0];
        y += vector2D[1];

        
    }

    setInterval(drawStuff, 6);