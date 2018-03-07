$(document).ready(function () {
	var classCycle = ['imageCycle1', 'imageCycle2', 'imageCycle3', 'imageCycle4'];

	var randomNumber = Math.floor(Math.random() * classCycle.length);
	var classToAdd = classCycle[randomNumber];

	$('body').addClass(classToAdd);

});

$('.myIframe').css('height', $(window).height() + 'px');

$(function () {
	$("#nob").on({
		mouseenter: function () {
			$(this).attr('src', 'images/nob5.png');
		},
		mouseleave: function () {
			$(this).attr('src', 'images/nob3.png');
		}
	});

});