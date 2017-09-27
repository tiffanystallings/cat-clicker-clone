// Model
var model = { 
	'adminMode': false,
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

		$('.admin > h4').click(function() {
			octopus.handleAdminClick();
		});

		$('#cancel').click(function() {
			view.renderAdmin(octopus.getCurrentCat());
			octopus.handleAdminClick();
		})

		$('#edit').click(function() {
			var name = $('#cat-name').val()
			var image = $('#cat-image').val()
			var clicks = $('#cat-clicks').val()

			octopus.updateCat(name, image, clicks);
			octopus.handleAdminClick();
			view.renderList();
			view.renderCat();
		})
	},

	'renderList': function() {
		var cats = octopus.listCats();
		$('.links').text("");
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

		view.renderAdmin(cat);
	},

	'renderAdmin': function(cat) {
		$('#cat-name').val(cat.name);
		$('#cat-image').val(cat.image);
		$('#cat-clicks').val(cat.clicks);
	},

	'showAdmin': function() {
		$('.admin').css('height', 'auto');
		$('.admin').css('width', '96%');
	},

	'hideAdmin': function() {
		$('.admin').css('height', '65px');
		$('.admin').css('width', '80px');
	}
}

// Octopus
var octopus = {
	'init': function() {
		model.currentCat = model.cats[0];
		console.log('Set current cat.')
		view.init();
		console.log('View initialized');
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
	},

	'handleAdminClick': function() {
		if (model.adminMode) {
			model.adminMode = false;
			view.hideAdmin();
		} else {
			model.adminMode = true;
			view.showAdmin();
		}
	},

	'updateCat': function(name, image, clicks) {
		model.currentCat.name = name;
		model.currentCat.image = image;
		model.currentCat.clicks = clicks;
	}
}

$(document).ready(function() {
	octopus.init();
});
