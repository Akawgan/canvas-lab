var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
  
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
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.arc(canvas.width / 2 - 5, 75, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.stroke();
    }