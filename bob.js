class Bob{
    constructor(x,y,radius){
     var ball_options ={
         isStatic:true,
         restitution: 1.0,
         friction:1.4,
         density:2.5
     }
 
    this.ball = Bodies.circle(x,y,radius, ball_options);
    this.radius=radius;
     World.add(world,this.ball);
     
    }
 display(){
     push ()
 translate(this.ball.position.x,this.ball.position.y);
 rotate (this.ball.angle)
    ellipseMode(RADIUS)
    fill ("red")
    stroke ("yellow")
    strokeWeight (4)
     ellipse(0,0,this.radius);
     pop ()
 }
 display2(){
    this.ball.position.x = mouseX;
    this.ball.position.y = mouseY
    push ()
    translate(this.ball.position.x,this.ball.position.y);
    rotate (this.ball.angle)
       ellipseMode(RADIUS)
       
        ellipse(0,0,this.radius);
        pop ()
    


 }
 }