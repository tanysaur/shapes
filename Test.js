// Import all required constructors for testing
var Shape = require('./Shapes.js');
var Triangle = require('./Triangle.js');
var Square = require('./Square.js');
var Pentagon = require('./Pentagon.js');

// Instantiate new shapes from the constructors imported
var shp = new Shape();
var tri = new Triangle(1, 2, 3);
var sqr = new Square(5);
var pent = new Pentagon();

var shapesArray = [Shape, Triangle, Square, Pentagon];
var shapesStringArray = ["Shape", "Triangle", "Square", "Pentagon"];
var newShapesArray = [shp, tri, sqr, pent];
var newShapesStringArray = ["shp", "tri", "sqr", "pent"];

// Test to check if the newly created constructors inherited the Shape constrctor's properties and the specified shape itself (i.e. square, triangle, pentagon)
for (var i = 0; i < newShapesArray.length; i++){
	console.log("\nTest this: " + newShapesStringArray[i]);
	console.log(newShapesStringArray[i] + " get_type: " + newShapesArray[i].get_type);
	
	for (var j = 0; j < shapesArray.length; j++){
		console.log("Is " + newShapesStringArray[i] + " instance of " + shapesStringArray[j] + "? ");
		console.log(newShapesArray[i] instanceof shapesArray[j]);
	}
}


