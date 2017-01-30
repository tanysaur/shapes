// Create Triangle and Square constructors. The triangles should set the properties side1, side2, and side3 for its side lengths. Do the same for Square.
// Imported Shape constructor
var Shape = require('./Shapes.js')

// New construtor with Shape inheritance
function Square(all_sides){
	console.log(all_sides);
}

// Square taking inheritance from Shape & resetting its constructor back to itself
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// This file becomes importable by other files
module.exports = Square;
