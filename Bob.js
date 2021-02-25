class Bob {
    constructor(x, y, r) {
      var options = {
          isStatic : true,
          'restitution': 0.3,
          'friction': 0.5,
          'density': 1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0, 50, 50);
      pop();
    }
  };