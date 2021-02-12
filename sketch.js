var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0);  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  translate(200,200);

  push();
  rotate(scAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

 
  push();
  rotate(mnAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();


  push();
  rotate(hrAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  

  push();
  strokeWeight(10);
  rotate(-90);
  noFill();
  stroke(255,0,0);
  arc(0, 0, 294, 294, PI, scAngle);
  stroke(0,255,0);
  arc(0, 0, 272, 272, PI, mnAngle);
  stroke(0,0,255);
  arc(0, 0, 250, 250, PI, hrAngle);
  pop();
  


  drawSprites();
}