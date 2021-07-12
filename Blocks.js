class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 10
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height= height;
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}