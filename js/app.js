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
 
	// listens for user to push a button then checks what they pushed
	$('li').on('click', 'button', function() {
		validateInput($(this).html());
	});

	// determines what the user has pushed
	function validateInput(input) {
		if (input == 'No') {
			$('.chocies').empty();
			$('.question').text('Good luck bucko')
		} else {
			nextQuestion(input);
		}
	};

	function nextQuestion(input) {
		var currentQuestion = determineCurrentQuestion($('.question').html());
		console.log(currentQuestion);
		if (currentQuestion < data.questions.length) {
			generateQuestion(currentQuestion);
		} else {

		}
	}

	function determineCurrentQuestion(input) {
		for (var i = 0; i < data.questions.length; i++) {
			if (data.questions[i] == input) {
				console.log(data.questions[i]);
				return i;
			}
		}
		console.log('no match')
		return 0;
	}

	function generateQuestion(currentQuestion) {
		$('.question').text(data.questions[currentQuestion]);
		$('.chocies').empty();
		$.each(data.ingredients[currentQuestion], function(index, value) {
			$('.chocies').append('<li><button>' + value + '</button></li>');
		});
	}

});















