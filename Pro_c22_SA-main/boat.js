
class Boat {
    constructor(x, y, w, h,boatPos) {

    var boat_features = {
            restiution: 0.8,
            density: 1,
            friction: 1
    }
      this.w = w;
      this.h = h;
      this.x = x;
      this.y = y;
      this.boatPos=boatPos
      this.boat = Bodies.rectangle(this.x, this.y, this.w, this.h, boat_features);
      World.add(myWorld, this.boat);

      this.boatImg = loadImage("boat.png");
    }
  
    display() {
    
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.boatImg, 0, this.boatPos, this.w, this.h);
      pop();
    //   Matter.Body.setStatic(this.boat, false);
    //   Matter.Body.setVelocity(this.boat, {
    //   x: -0.9, y: 0});
    }
  }
  


   