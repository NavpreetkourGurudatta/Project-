class Paper{
  constructor(x,y){
     var options = {
         isStatic:false,
         restitution:0.3,
         friction : 0.5,
         density : 1.2
     } 
     this.body = Bodies.circle(x,y,20,options);
     this.r = 20;
    this.image = loadImage("paper.png")
     World.add(world,this.body) 
  }
display(){
  var pos = this.body.position;
  fill("purple") 
  imageMode(CENTER);
   image(this.image, 0, 0, this.width, this.height);
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,this.r,this.r);
}

}