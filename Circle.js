class Circle{
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,



    }
    this.body=Bodies.circle(x,y,r/2,options);
    this.x=x;
    this.y=y;
    this.r=r;
    World.add(world, this.body);
        this.image=loadImage("paper.png");
        
        
        }
        
        display(){
            var paperoes=this.body.position;
            push ();
         translate (paperoes.x,paperoes.y);
      imageMode(CENTER);
         strokeWeight(4);
         fill (255,0,255);

        image(this.image,0,0,this.r,this.r);
            pop ();
    
}}
