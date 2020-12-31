class Chain{
   constructor(bodyA,bodyB){
      var options ={
       
     pointA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     length:10
     

      }
      this.body=Matter.Constraint.create(options)
      World.add(world,this.body)

   }
drawing(){

    line (this.body.pointA.x,this.body.pointA.y,
        this.body.bodyB.position.x,this.body.bodyB.position.y)
}

}