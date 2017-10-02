var model = [
	{
		'name': 'Ser Meow',
		'imgSrc': 'images/sermeow.jpg',
		'clickCount': 0
	},
	{
		'name': 'Pounce',
		'imgSrc': 'images/pounce.jpg',
		'clickCount': 0
	},
	{
		'name': 'Benny & Joon',
		'imgSrc': 'images/bennyjoon.jpg',
		'clickCount': 0
	},
	{
		'name': 'Siberia',
		'imgSrc': 'images/siberia.jpg',
		'clickCount': 0
	},
	{
		'name': 'Leroy',
		'imgSrc': 'images/leroy.jpg',
		'clickCount': 0
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);

	this.currentLevel = ko.computed(function() {
		var level = 'Newborn'

		if (this.clickCount() >= 10 && this.clickCount() < 50) {
			level = 'Juvenile';
		}

		else if (this.clickCount() >= 50 && this.clickCount() < 150) {
			level = 'Young Adult';
		}

		else if (this.clickCount() >= 150) {
			level = 'Adult';
		}

		return level;
	}, this);


	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}.bind(this);
}


var ViewModel = function() {
	var self = this;

	this.cats =  ko.observableArray([]);

	model.forEach(function(cat) {
		self.cats.push( new Cat(cat));
	});

	this.currentCat = ko.observable(this.cats()[0]);

	this.changeCat = function(cat) {
		self.currentCat(cat);
	};
	
}

ko.applyBindings(new ViewModel());