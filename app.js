var cats = [
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
];

$(document).ready(function() {

	for (i=0; i<cats.length; i++) {
		console.log('adding a cat...')
		$('.links').append('<li class="cat-link">' + cats[i].name + '</li>');

		//var catSelector = 'section .cat:nth-child(' + (i + 1) + ')';
		//$(catSelector).css('background-image', 'url(' + cats[i].image + ')');
		//$(catSelector).append('<p class="count">0</p>');
		//$(catSelector).append('<p class="name">' + cats[i].name + '</p>');
	}
	$('.cat-link').click(function() {
		var catName = $(this).text()
		var cat = searchCats(catName);
		$('.cat').css('background-image', 'url(' + cat.image + ')');
		$('.count').text(cat.clicks);
		$('.name').text(cat.name);
	});

	$('.cat').click(function() {
		incrementCount($(this));
	});
});

function searchCats(name) {
	for (i=0; i<cats.length; i++) {
		if (name == cats[i].name) {
			return cats[i];
		}
	}
	return null;
}

function incrementCount(e) {
	var name = e.find('.name').text()
	var cat = searchCats(name);
	var count = e.find('.count')
	//var current = parseInt(count.text(),10);
	cat.clicks ++;
	count.text(cat.clicks);

	//for (i=0; i<cats.length; i++) {
	//	if (name == cats[i].name)
	//}
	//current ++;
	//count.text(current);
}