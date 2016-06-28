$(document).ready(function() {
	"use strict";

	$('body').on('click', '.fa-thumbs-o-down', function() {
		$(this).removeClass('fa-thumbs-o-down').addClass('fa-thumbs-o-up');
	})
	.on('click', '.fa-thumbs-o-up', function() {
		$(this).removeClass('fa-thumbs-o-up').addClass('fa-thumbs-o-down');
	})
	.on('click', '.ben', function() {
		ben.createOrder();
	})
	.on('click', '.steven', function() {
		steven.createOrder();
	})
	.on('click', '.drink', function() {
		ben.generateQuestions();
	})
	.on('click', '.burger', function() {
		steven.generateQuestions();
	})
	.on('click', '.main-menu', function() {
		mainMenu();
	});
});

	// Constructor object 
	var Cook = function(questions, name) {
		this.questions = questions;
		this.name = name;
	};

	Cook.prototype.generateQuestions = function() {
		$('.questions').empty();
		questions = this.questions;
		for (var i = 0; i < questions.length; i++) {
			$('.questions').append('<li><h1>' + questions[i].question + '</h1><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></li>');	
		};
		$('.questions').append('<li><button class='+ this.name +'>Orders Up!</button></li>')
	};

	Cook.prototype.createOrder = function() {
		var ingredients = [],
		order = '';
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
				order += ingredients[i];
			} else if (i == ingredients.length - 1) {
				order += 'with ' + ingredients[i];
			} else {
				order += ingredients[i] + ', ';
			}
		}
		console.log(order);
		this.generateOrder(order)
	};

	Cook.prototype.generateOrder = function(order) {
		$('.questions').empty().append('<li><h1>' + order + '</h1></li><li><button class="main-menu">Anything Else?</button></li>');
	};

	// Constructor object randomly select an ingredient from a list of ingredients
	var Ingredient = function(ingredients) {
		this.ingredients = ingredients.ingredients.choices;
		this.ingredient = 'None';
	};

	Ingredient.prototype.randomIngredient = function() {
		this.ingredient = this.ingredients[Math.floor((Math.random() * this.ingredients.length))];
	};

	function mainMenu() {
		$('.questions').empty().append('<li><button class="drink">Drink?</button></li><li><button class="burger">Burger?</button></li>');
	};

	var Bartender = function(data, name) {
		Cook.call(this, data, name);
	};
	Bartender.prototype = Object.create(Cook.prototype);
	Bartender.prototype.constructor = Bartender;

	var Chef = function(data, name) {
		Cook.call(this, data, name);
	};

	Chef.prototype = Object.create(Cook.prototype);
	Chef.prototype.constructor = Chef;


	var ben = new Bartender(data.bartender, 'ben');
	
	var steven = new Cook(data.chef, 'steven');


	// Constructor object for list of all of the ingredients
	var Pantry = function(data) {
		var pantry = [];
		$.each(data, function(index, value) {
			$.each(value, function(index, value) {
				$.each(value.ingredients.choices, function(index, value) {
					pantry.push(value);
				});
			});
		});
		this.pantry = pantry;
	};
	var pantry = new Pantry(data);
 	console.log(pantry.pantry);

















