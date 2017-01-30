// Create a Shape constructor. It should have a property called type. Attach a function, called get_type, such that any Shape will be able to call it. Just fill it in with a return statement for now.

function Shape(type){
	this.type = type;
}

Shape.prototype.get_type = function(type){
	return this.constructor;
}

module.exports = Shape;
