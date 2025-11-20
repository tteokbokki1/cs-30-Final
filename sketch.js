// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup(){

  createCanvas(500,500);

  a = 5;
}

function draw(){
  background(0,0,0);

  fill(255,255,255);
  text("M for Stickman, F for Flower",10,30);

  if (a === 5) {


    ellipseMode (CENTER);

    ellipse (150,60,50,50);
    point (140,60);
    point (160,60);

    rectMode (CENTER);

    rect (150,135,50,100);

    line (125,85,100,160);
    line (175,85,200,160);
    line (130,185,130,250);
    line (130,250,125,250);
    line (170,185,170,250);
    line (170,250,175,250);
  }
}