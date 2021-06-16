class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
       
        this.r=r;
        this.y=y;
        this.x=x;

        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body);

       
        }
        display()
        {
            var paperpos=this.body.position;

            push()
            translate(paperpos.x,paperpos.y);
          rectMode(CENTER)

            fill(255)
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);

            
            pop()
        }
}