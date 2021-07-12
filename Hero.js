class Hero {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.5,
            'friction': 1.0,
            'density': 15
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
  
    display(outline) {
        imageMode(CENTER);
        image(ironmanimg, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
    }
  }