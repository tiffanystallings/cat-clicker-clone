// Model
var model = { 
	'currentCat': null,
	'cats': [
		{
			'name': 'Ser Meow',
			'image': 'images/sermeow.jpg',
			'clicks': 0
		},
		{
			'name': 'Pounce',
	    	'image': 'images/pounce.jpg',
	    	'clicks': 0
	    },
	    {
	    	'name': 'Benny & Joon',
	    	'image': 'images/bennyjoon.jpg',
	    	'clicks': 0
	    },
	    {
	    	'name': 'Siberia',
	    	'image': 'images/siberia.jpg',
	    	'clicks': 0
	    },
	    {
	    	'name': 'Leroy',
	    	'image': 'images/leroy.jpg',
	    	'clicks': 0
	    }
	]
}

// View
view = {
	'init': function() {
		this.renderList();
		this.renderCat();

		$('.cat').click(function() {
			octopus.incrementCount();
		});
	},

	'renderList': function() {
		var cats = octopus.listCats();
		for (i=0; i<cats.length; i++) {
			var cat = cats[i];
			$('.links').append('<li class="cat-link">' + cat.name + '</li>');
			console.log('Link added.')

			$('ul .cat-link:nth-child('+(i+1)+')').click(function(cat) {
				return function() {
					octopus.setCurrentCat(cat);
					view.renderCat();
				};
			}(cat));
		}
	},

	'renderCat': function() {
		var cat = octopus.getCurrentCat();
		$('.cat').css('background-image', 'url(' + cat.image + ')');
		$('.count').text(cat.clicks);
		$('.name').text(cat.name);
	}
}

// Octopus
var octopus = {
	'init': function() {
		model.currentCat = model.cats[0];
		console.log('Set current cat.')
		view.init();
		console.log('View initialized')
	},

	'listCats': function() {
		return model.cats;
	},

	'setCurrentCat': function(cat) {
		model.currentCat = cat;
	},

	'getCurrentCat': function() {
		return model.currentCat;
	},

	'incrementCount': function() {
		model.currentCat.clicks++;
		view.renderCat();
	}
}

$(document).ready(function() {
	octopus.init();
});
