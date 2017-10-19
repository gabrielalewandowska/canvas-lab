var app = function () {
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  var changeColour = function () {
  context.fillStyle = this.value;
  }

  var colourPicker = document.querySelector("#input-colour");
  colourPicker.addEventListener("change",changeColour);



  var thinDraw = function(x, y) {
    console.log("hey")
    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI * 2, true);
    context.fill();
}

var mouseMoveFunction = function(event2){
  thinDraw(event2.x, event2.y);
}

var isDrawing = false;

canvas.addEventListener("mousedown", function(event1) {
  isDrawing = true;
  canvas.addEventListener("mousemove", function(event2){
    if(isDrawing) mouseMoveFunction(event2);
  })
})

canvas.addEventListener("mouseup", function(){
  isDrawing = false;
})







}

window.addEventListener("load", app);
