function setup(){
    createCanvas(600,600,P2D);
    background(255);
    casaDificil(width/2,height/2,300,100);
    stroke(255,0,0);
    strokeWeight(5);
    point(width/2,height/2);
}
function casaDificil(x,y,w,h){
    let cx = x-w*0.5;
    let cy = y-h*0.25;
    rect(cx,cy,w,h);
    line(cx+20,cy-50,cx+w*0.91,cy-50);
    line(cx,cy,cx+w*0.064,cy-50);
    line(cx+300,cy,cx+w*0.91,cy-50);
    line(cx+20,cy-50,cx+w*0.15,cy);
    line(cx+45,cy+100,cx+w*0.15,cy);
}

function casa(){
    rect(100,100,300,100);
    line(120,50,370,50);
    line(100,100,120,50);
    line(400,100,370,50);
    line(120,50,150,100);
    line(150,200,150,100);
}

function draw(){
    
}