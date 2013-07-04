function hinge(){

  this.x = 0;
  this.y = 0;
  this.endx = 0;
  this.endy = 0;
  this.rot = 0;
  this.length = 40;

}

hinge.prototype.getEnd = function(){
  this.endx = Math.sin(this.rot) * this.length + this.x;
  this.endy = Math.cos(this.rot) * this.length + this.y;
}
