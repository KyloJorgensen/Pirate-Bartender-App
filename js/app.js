$(document).ready(function() {
	"use strict";
	var data = { 
		"questions": [
	        "Do ye like yer drinks strong?",
	        "Do ye like it with a salty tang?",
	        "Are ye a lubber who likes it bitter?",
	        "Would ye like a bit of sweetness with yer poison?",
	        "Are ye one for a fruity finish?"
	    ],
	    "ingredients": {
	        "strong": [
	            "glug of rum",
	            "slug of whisky",
	            "splash of gin"
	        ],
	        "salty": [
	            "olive on a stick",
	            "salt-dusted rim",
	            "rasher of bacon"
	        ],
	        "bitter": [
	            "shake of bitters",
	            "splash of tonic",
	            "twist of lemon peel"
	        ],
	        "sweet": [
	            "sugar cube",
	            "spoonful of honey",
	            "splash of cola"
	        ],
	        "fruity": [
	            "slice of orange",
	            "dash of cassis",
	            "cherry on top"
	        ]
	    }
	};

	var ListOfQuestions = function(questions) {
		this.questions = questions;
	};
	var questions = new ListOfQuestions(data.questions);
	console.log(questions.questions);

	var ListOfIngredients = function(ingredients) {
		this.ingredients = ingredients;
	};
	var ingredients = new ListOfIngredients(data.ingredients);
	console.log(ingredients.ingredients.fruity);

	var ListOfAllIngredients = function(ingredients) {
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
	var pantry = new ListOfAllIngredients(data.ingredients);
	console.log(pantry.ingredients);
	console.log(pantry.allofTheIngredients(data.ingredients));
});















