class Monster {
    constructor(x, y, radius) {
        var options = {'frictionair': 1};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
  
    display(outline) {
        imageMode(CENTER);
        image(villainimg, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
    }
  }