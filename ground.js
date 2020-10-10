class Ground {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        } 
        this.object=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.object);
        this.width=width;
        this.height=height
    
    display(); {
        push();
        rectMode (CENTER);
        rect (this.length, this.widt);
        translate(this.object.position.x, this.object.position.y);
    }
}

}
