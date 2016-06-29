$(document).ready(function() {
	"use strict";

	$('body').on('click', '.fa-square-o', function() {
		$(this).removeClass('fa-square-o').addClass('fa-check-square-o');
	})
	.on('click', '.fa-check-square-o', function() {
		$(this).removeClass('fa-check-square-o').addClass('fa-square-o');
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
	var Cook = function(questions, name, type) {
		this.questions = questions;
		this.name = name;
		this.type = type;
	};

	Cook.prototype.generateQuestions = function() {
		$('.questions').empty();
		questions = this.questions;
		for (var i = 0; i < questions.length; i++) {
			$('.questions').append('<li><h1>' + questions[i].question + '</h1><i class="fa fa-check-square-o" aria-hidden="true"></i></li>');	
		};
		$('.questions').append('<li><button class='+ this.name +'>Orders Up!</button></li>')
	};

	Cook.prototype.createOrder = function() {
		var ingredients = [],
		order = '';
		questions = this.questions;
		
		$('.fa-check-square-o').each(function() {
			for (var i = 0; i < questions.length; i++) {
				if (questions[i].question == $(this).parent().children('h1').html()) {
					var ingredient = new Ingredient(questions[i]);
					ingredient.prototype = Ingredient.prototype;
					ingredient.randomIngredient();
					ingredients.push(ingredient.ingredient);
				}
			}
		});
		var str = this.name;
		str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    		return letter.toUpperCase();
		});
		order += str + ' gives you your ' + this.type + ': ';
		if (ingredients.length == 0) {
			order = str + ' gives you nothing';
		}
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

	var Bartender = function(data, name, type) {
		Cook.call(this, data, name, type);
	};
	Bartender.prototype = Object.create(Cook.prototype);
	Bartender.prototype.constructor = Bartender;

	var Chef = function(data, name, type) {
		Cook.call(this, data, name, type);
	};

	Chef.prototype = Object.create(Cook.prototype);
	Chef.prototype.constructor = Chef;


	var ben = new Bartender(data.bartender, 'ben', 'drink');
	
	var steven = new Cook(data.chef, 'steven', 'burger');


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

















