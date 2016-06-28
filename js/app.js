$(document).ready(function() {
	"use strict";

	$('body').on('click', '.fa-thumbs-o-down', function() {
		$(this).removeClass('fa-thumbs-o-down').addClass('fa-thumbs-o-up');
	})
	.on('click', '.fa-thumbs-o-up', function() {
		$(this).removeClass('fa-thumbs-o-up').addClass('fa-thumbs-o-down');
	})
	.on('click', '.mix-drink', function() {
		ben.createDrink()
	})
	.on('click', '.drink', function() {
		ben.generateQuestions();
	})
	.on('click', '.main-menu', function() {
		ben.mainMenu();
	});
});
	// Constructor object for list of questions
	var Bartender = function(questions) {
		this.questions = questions;
	};

	Bartender.prototype.generateQuestions = function() {
		$('.questions').empty();
		questions = this.questions;
		for (var i = 0; i < questions.length; i++) {
			$('.questions').append('<li><h1>' + questions[i].question + '</h1><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></li>');	
		};
		$('.questions').append('<li><button class="mix-drink">Mix Drink</button></li>')
	};

	Bartender.prototype.createDrink = function() {
		var ingredients = [],
		drink = '';
		questions = this.questions;
		$('.fa-thumbs-o-up').each(function() {
			for (var i = 0; i < questions.length; i++) {
				if (questions[i].question == $(this).parent().children('h1').html()) {
					var ingredient = new Ingredient(questions[i]);
					ingredient.prototype = Ingredient.prototype;
					ingredient.randomIngredient();
					ingredients.push(ingredient.ingredient);
				}
			}

		});

		for (var i = 0; i < ingredients.length; i++) {
			if (ingredients.length == 1 ) {
				drink += ingredients[i];
			} else if (i == ingredients.length - 1) {
				drink += 'with ' + ingredients[i];
			} else {
				drink += ingredients[i] + ', ';
			}
		}
		console.log(drink);
		this.generateDrink(drink)
	};

	Bartender.prototype.generateDrink = function(drink) {
		$('.questions').empty().append('<li><h1>' + drink + '</h1></li><li><button class="main-menu">Anything Else?</button></li>');
	};

	Bartender.prototype.mainMenu = function() {
		$('.questions').empty().append('<li><button class="drink">Drink?</button></li><li><button class="burger">Burger?</button></li>');
	};
	
	// Constructor object randomly select an ingredient from a list of ingredients
	var Ingredient = function(ingredients) {
		this.ingredients = ingredients.ingredients.choices;
		this.ingredient = 'None';
	};

	Ingredient.prototype.randomIngredient = function() {
		this.ingredient = this.ingredients[Math.floor((Math.random() * this.ingredients.length))];
	};

	var ben = new Bartender(data);
	ben.prototype = Bartender.prototype;
	


	// Constructor object for list of all of the ingredients
	var Pantry = function(ingredients) {

	};



















