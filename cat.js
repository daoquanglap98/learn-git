function Cat(){
    this.stomach = [];
    this.isDead = false;
};  

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
};

module.exports = Cat;