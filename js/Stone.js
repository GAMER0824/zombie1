class Stone{
    constructor(x,y,radius){
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world, this.body)

        this.r = radius
     }  
   display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    fill("white")
    ellipse(0,0,this.r,this.r)
    pop()

   
    }
}