function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  cyclopes (1,1,1,"cyan")

}

function cyclopes (x,y,size,eyeColor) {
translate(x,y)
scale(size)

  //legs
  fill("rgb(68,68,156)")
  rect(150,200,10,80)
  rect(240,200, 10,80)
  fill("rgb(0,0,0)")
  ellipse(155,280,30)
  ellipse(245,280,30)
  //arms
  
  fill("rgb(210,180,140)")
  rect(50,140,80,10)
  rect(270,140,80,10)
  ellipse(60,145,30)
  ellipse(350,145,30)
  fill("rgb(158,81,81)")
  rect(100,130,30)
  rect(270,130,30)
  
  //body
  fill("rgb(158,81,81)")
  ellipse(200,150,150)
  
  if (mouseX >= 150 && mouseX<= 250) {
    //open eye
    fill("tan")
    ellipse(200,120,70)
    
    fill("white")
    ellipse(200,120,60)
    
    fill(eyeColor)
    ellipse(200,120,30)
    
    fill("black")
    ellipse(200,120,10) 
    
    
  }
  
    else {
      //closed eye
      push()
      stroke("tan")
      strokeWeight(9)
      line(170,120,230,120)
      pop()
      line(170,120,230,120)
    }
      
    
}
