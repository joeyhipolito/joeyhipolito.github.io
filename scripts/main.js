(function() {
  var width, height, canvas, ctx, pos, circles, golden = 1.61803398875;

  // main
  init();
  addEventListeners();

  function init () {
    width = window.innerWidth;
    height = window.innerHeight;
  
    canvas = document.getElementById('m-revolution');
    canvas.height = height;
    canvas.width = width;
    
    ctx = canvas.getContext('2d');

    drawCircles();
    
  }

  function drawCircles () {

    var x = Math.floor(width / 2);
    var y = Math.floor(height / 2);
    pos = {x: x, originX: x, y: y, originY: y};

    var outerCircle = new Circle(pos, y, 'rgba(255,255,255,0.2)');
    var innerCircle = new Circle(pos, Math.floor(y / golden), 'rgba(255,255,255,0.2)');
    outerCircle.draw();
    innerCircle.draw();
  }

  function Circle (pos, rad, color) {
    var _this = this;
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);

      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function resize () {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.height = height;
    canvas.width = width;

    drawCircles();
  }

  function addEventListeners () {
    window.addEventListener('resize', resize);
  }

})();