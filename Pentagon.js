// Imported Shape constructor
var Shape = require('./Shapes.js')

// New construtor with Shape inheritance
function Pentagon(type){
	this.type = type;
}

// Pentagon taking inheritance from Shape & resetting its constructor back to itself
Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

// This file becomes importable by other files
module.exports = Pentagon;
