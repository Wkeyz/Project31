class Plinko{
    constructor(x,y,r){
        var options= {
            isStatic:true,
restitution:0,
friction:0,
stiffness:10,
density:1.2

        }
        
        this.body = Bodies.circle(x,y,r,options);
        
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}