$(document).ready(function() {
	"use strict";
	// Constructor object for list of questions
	var Bartender = function(questions) {
		this.questions = questions;
	};
	//  questions object made from Constructor ListofQuestions
	var questions = new Bartender(data.questions);
	console.log(questions.questions);
	// Constructor object for list of ingredents
	var Ingredient = function(ingredients) {
		this.ingredients = ingredients;
	};
	// ingredients object made frin Ingredient Constructor
	var ingredients = new Ingredient(data.ingredients);
	console.log(ingredients.ingredients.fruityIngredients);

	// Constructor object for list of all of the ingredients
	var Pantry = function(ingredients) {
		this.ingredients = Object.keys(ingredients);
		this.allofTheIngredients = function(ingredients) {
			var arrayOfIngredents = [];
			$.each(ingredients, function(index, value) {
				$.each(value, function(index,value) {
					arrayOfIngredents.push(value);
				});
			});
			return arrayOfIngredents;
		};
	};
	var pantry = new Pantry(data.ingredients);
	console.log(pantry.ingredients);
	console.log(pantry.allofTheIngredients(data.ingredients));
 
});















