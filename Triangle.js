// Create Triangle and Square constructors. The triangles should set the properties side1, side2, and side3 for its side lengths. Do the same for Square.
var Shape = require('./Shapes.js')

// New Shape constructor taking inheritance from Shape
function Triangle(side1, side2, side3){
	console.log("Sides: " + side1 + side2 + side3);
} 

// Triangle taking inheritance from Shape & resetting its constructor back to itself
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// This file becomes importable by other files
module.exports = Triangle;