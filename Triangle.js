
// Create Triangle and Square constructors. The triangles should set the properties side1, side2, and side3 for its side lengths. Do the same for Square.
var Shape = require('./Shapes.js')

function Triangle(type){
	this.type = type;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

module.exports = Triangle;

