var Shape = require('./Shapes.js')

function Pentagon(type){
	this.type = type;
}

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;
