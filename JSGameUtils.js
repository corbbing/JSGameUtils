//
//The Hinge Object
//
//A simple hinge for animation and drawing;
//

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

hinge.prototype.draw = function(){
  
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.endx, this.endy);
  ctx.restore();
  
}

