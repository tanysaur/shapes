var Shape = require('./Shapes.js');
var Triangle = require('./Triangle.js');
var Square = require('./Square.js');
var Pentagon = require('./Pentagon.js');

var shp = new Shape();
var tri = new Triangle();
var sqr = new Square();
var pent = new Pentagon();

var shapesArray = [Shape, Triangle, Square, Pentagon];
var shapesStringArray = ["Shape", "Triangle", "Square", "Pentagon"];
var newShapesArray = [shp, tri, sqr, pent];
var newShapesStringArray = ["shp", "tri", "sqr", "pent"];


for (var i = 0; i < newShapesArray.length; i++){
	console.log("\nTest this: " + newShapesStringArray[i]);
	console.log(newShapesStringArray[i] + " " + newShapesArray[i].get_type);
	
	for (var j = 0; j < shapesArray.length; j++){
		console.log("Is " + newShapesStringArray[i] + " instance of " + shapesStringArray[j] + "? ");
		console.log(newShapesArray[i] instanceof shapesArray[j]);
	}
}


