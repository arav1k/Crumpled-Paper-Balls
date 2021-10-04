class Ball
{

constructor(a,b,c)
{
this.x=a
this.y=b
this.radius=c



var options={
    isStatic:false,
    restitution:0.1,
    density:1,
    friction:2
}
this.body=Bodies.circle(a,b,c,options)
World.add(world,this.body)
}


display()
{
    var bodyPosition=this.body.position
    push()
    translate(bodyPosition.x,bodyPosition.y)
fill ('gray')
stroke('blue')
strokeWeight(5)
ellipse(0,0,this.radius+40,this.radius+40)
pop()
}

}