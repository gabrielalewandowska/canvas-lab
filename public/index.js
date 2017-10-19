var app = function () {
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  var thinDraw = function(x, y) {
    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI * 2, true);
    context.fill();
}

canvas.addEventListener("mouseover", function(event) {
    if(event.buttons ===  0){
      thinDraw(event.x, event.y);
    }
})









}

window.addEventListener("load", app);
