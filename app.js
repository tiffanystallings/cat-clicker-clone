
$(document).ready(function() {
	$('#cat').click(function(e) {
		incrementCount();
	});
});

function incrementCount() {
	var current = parseInt($('#count').text(), 10);
	current ++;
	$('#count').text(current);
}