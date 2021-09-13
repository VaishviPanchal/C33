class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.visibility=255;
    this.image2 = loadImage("sprites/smoke.png");
  }
// position[[x1,y1],[x2,y2],[x3,y3], ...... ,[xn,yn]] ===> console.log(position[1][0])
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var position = [this.body.position.x,this.body.position.y]
    if(this.body.velocity.x > 6 && this.body.position.x>230){
      this.trajectory.push(position);
    }
   
    for(var index = 0 ; index <= this.trajectory.length-1; index+=1 ){
      push();
      tint(255,this.visibility)
      this.visibility=this.visibility-0.05
      image(this.image2,this.trajectory[index][0],this.trajectory[index][1])
      pop();
    }


    if(gameState === "onSling"){
      this.trajectory = [];
    }
  }
}
