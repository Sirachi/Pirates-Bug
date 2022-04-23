
class CanonBall {
    constructor(x, y, r) {
      var canonBall_features = {
          isStatic : true
      }    
  
      this.r = r;
      this.canonBall = Bodies.circle(x, y, r, canonBall_features);
      this.CanonBallImg = loadImage('cannonball.png');
      World.add(myWorld, this.canonBall);
      this.trajectory = [];
    }
  
    display() {
      push()
      imageMode(CENTER)
      image(this.CanonBallImg, this.canonBall.position.x,this.canonBall.position.y, this.r, this.r);
      pop()

      if (this.canonBall.velocity.x > 0 && this.canonBall.position.x > 10){
        this.trajectory.push([this.canonBall.position.x, this.canonBall.position.y]);
      }

      for (var i = 0; i < this.trajectory.length;  i++){
        image(this.CanonBallImg, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }

      
    }

    fireCannonBall() {
        var newAngle = canon.a - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.canonBall, false);
        Matter.Body.setVelocity(this.canonBall, {
        x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
}


