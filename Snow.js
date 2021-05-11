class Snow {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.0,
            density:0.1,
            friction:0.0
        }
        this.r=r
        this.body=Bodies.circle(x,y,this.r,options);
        var snowSelect = Math.round(random(1,2));
        switch(snowSelect){
         case 1:this.image=loadImage("snow4.webp");
         break;
         case 2:this.image=loadImage("snow5.webp");
         break;
         default:break;
        }
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
  }