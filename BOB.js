class bob{
    constructor(x ,y ,radius) {
        var options = {
        isStatic:false,
        restitution:1.0,
        friction:0.5,
        density:2.5
}

     this.x=x;
     this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,radius/2,options);

    World.add(world,this.body);
    }
      display(){
var pos= this.body.position;
        push();
       translate(pos.x,pos.y)
       rectMode(CENTER);
       fill("pink");
       ellipse(0, 0, this.radius,this.radius);
    pop();

      }
    }
