function Dog(){
    stomach = [];
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}