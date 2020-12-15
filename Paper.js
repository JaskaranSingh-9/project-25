class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
         
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
        this.image = loadImage("paper.png");
        
   }
   display(){
    
         
          push();
          translate(this.body.position.x, this.body.position.y);
          
          
          ellipseMode(RADIUS);
         fill ("lightgrey")
         strokeWeight (0)
          ellipse(0, 0, this.radius);
         imageMode(CENTER);
         image(this.image, 0,0, 40, 40);
         
         pop();
      }
}
