class Link {
    constructor(bodyA,bodyB) {
        var lastlink = bodyA.bodies.length -2;
        this.link = constraint.create({
            bodyA:bodyA.bodyA.bodies[lastlink],
            pointA : { 0:x , 0: y } ,
            bodyB : bodyB.bodyA,
            pointB: {0:x , 0: y},
            length :10 ,
            stiffness:0.8,



        });

        World.add(world,this.link);
        
    }
}