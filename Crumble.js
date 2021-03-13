class Crumble{
    constructor(x,y){ //properties
        var options = {
            
            isStatic : false,
            friction : 0.5,
            density : 1.2
            
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("paper.png")

        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
      
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("saffron")
        image(this.image,0,0,this.radius*1.3,this.radius*1.3);
        pop()
    }
}