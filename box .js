class  Box{

    constructor(x,y,width,height){

        var opction={
            'restitution':0.2,
            'freaction':0.5,
            'dencity':5.0,
            isStatic:false,
        
        }
        this.x=x;
        this.y=y;
        this.visibility=255;
        this.body=Bodies.rectangle(x,y,width,height,opction);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    display(){
    if(this.body.speed<3){

        var pos=this.body.position;

        push()
        transelate(pos.x,pos.y);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.height,this.width);
        pop()
    }else{
        World.remove(world,this.body);
        push()
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop()
    }

    }
}