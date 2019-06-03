let pos;

function setup() {
  createCanvas(400, 400);
  pos = createVector(0,240);
}

function draw() {
  background(0,200,255);
  if(keyIsPressed) {
   if(key == 'a') {
     pos.x -= 1;
   }
    if(key == 'd') {
      pos.x += 1;
    }
    if(key == 'w') {
  
    }
    if(key == 's') {
      
    }
  }
  rect(pos.x,pos.y,40,40);
  for(let i = 0;i < 10;i++) {
   for(let j = 0;j < 3;j++) {
     rect(i*40,j*40+280,40,40);
   }
  }
}
