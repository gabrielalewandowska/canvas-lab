var app = function () {
  var size = 2;
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  var smBtn = document.getElementById("btn-small");
  smBtn.addEventListener("click", function(){
    size = 2;
  })

  var mdBtn = document.getElementById("btn-medium");
  mdBtn.addEventListener("click", function(){
    size = 7;
  })

  var lgBtn = document.getElementById("btn-large");
  lgBtn.addEventListener("click", function(){
    size = 14;
  })
  
  var changeColour = function () {
  context.fillStyle = this.value;
  }

  var colourPicker = document.querySelector("#input-colour");
  colourPicker.addEventListener("change",changeColour);



  var thinDraw = function(x, y, size) {
    console.log("hey")
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2, true);
    context.fill();
}

var mouseMoveFunction = function(event2){
  thinDraw(event2.x, event2.y, size);
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
