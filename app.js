var cats = [
	{
		'name': 'Ser Meow',
		'image': 'sermeow.jpg'
	},
	{
		'name': 'Pounce',
    	'image': 'pounce.jpg'
    }
];

$(document).ready(function() {
	var catDiv = document.createElement("div");
	var newP = document.createElement("p");

	for (i=0; i < cats.length; i++) {
		console.log('adding a cat...')
		$('section').append('<div class="cat"></div>');

		var catSelector = 'section .cat:nth-child(' + (i + 1) + ')';
		$(catSelector).css('background-image', 'url(' + cats[i].image + ')');
		$(catSelector).append('<p class="count">0</p>');
		$(catSelector).append('<p class="name">' + cats[i].name + '</p>');
	}
	$('.cat').click(function(e) {
		incrementCount($(this));
	});
});

function incrementCount(e) {
	var $count = e.find('.count')
	var current = parseInt($count.text(),10);
	current ++;
	$count.text(current);
}