class Canon {
  constructor(x, y, w, h, a) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.a = a;
    this.canonBaseImg = loadImage("cannonBase.png");
    
    this.canonHeadImg = loadImage("canon.png");
  }

  display() {
    if (keyIsDown(RIGHT_ARROW) && this.a < 70){
      this.a += 1;
    }
    if (keyIsDown(LEFT_ARROW) && this.a > -30){
      this.a -= 1;
    }
    push();
    translate(this.x, this.y);
    rotate(this.a);
    imageMode(CENTER);
    image(this.canonHeadImg, 0, 0, this.w, this.h);
    pop();
    push();
    imageMode(CENTER);
    image(this.canonBaseImg, 180, 110, 230, 230);
    pop();
  }
}
