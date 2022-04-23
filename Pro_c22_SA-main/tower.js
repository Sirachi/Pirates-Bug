
class Tower {
    constructor(x, y, w, h) {
      var tower_features = {
          isStatic : true
      }    
  
      this.w = w;
      this.h = h;
      this.tower = Bodies.rectangle(x, y, w, h, tower_features);
      this.towerImg = loadImage('tower.png');
      World.add(myWorld, this.tower);
    }
  
    display() {
      push()
      imageMode(CENTER)
      image(this.towerImg, this.tower.position.x,this.tower.position.y, this.w, this.h);
      pop()
    }
}
  