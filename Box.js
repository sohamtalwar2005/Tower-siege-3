class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("images/box.jpg");
    this.visiblity = 255;
  }
display(){
  if(this.body.speed<3){
    super.display();
  }
  else{
      World.remove(world,this.body);
      push();
      this.visibilty = this.visibilty-5;
      tint(255,this.visibilty);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
  }
}
score(){
  if(this.visiblity<0 && this.visiblity>-1000){
    score++;
  }
}
};
