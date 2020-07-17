let noiseScale=1.10;
canvasSize =700;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(100);
  drawText()
  drawGrid();
}


function drawGrid(){
  stroke(0);
  strokeWeight(2);
  for (let x=-50; x < width; x+=20) {
    let noiseVal = noise((noiseScale*0.1)*millis()/30, (noiseScale*0.10)*millis()/40);
    stroke(0);
    line(x+noiseVal/50, 0, x+noiseVal*50, height+0);
  } 
}

function drawText(){
  fill(100);
  textFont("Hind");
  textSize(100);
  textAlign(CENTER, CENTER);
  textLeading(100);
  text("Dev Cleverton", width/2+10, height/2-40, 10 );
}
