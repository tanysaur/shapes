var Shape = require('./Shapes.js')

function Square(type){
	this.type = type;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

module.exports = Square;
