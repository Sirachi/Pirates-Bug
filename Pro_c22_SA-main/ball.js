
class Ball{
    constructor(x, y, r) {
      var ball_features = {
          isStatic : false
      }    
  
      this.r = r;
      this.ball = Bodies.circle(x, y, r, ball_features);
      World.add(myWorld, this.ball);
    }
  
    display() {
      ellipseMode(CENTER)
      ellipse(this.ball.position.x,this.ball.position.y, this.r);
    }
  }
  