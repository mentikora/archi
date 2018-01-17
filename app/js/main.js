document.addEventListener("DOMContentLoaded", function(){
	var welcomeSlide = $('.section-welcome');
	var menu = $('#menu-wrapper');

	if ( welcomeSlide.length ){
		menu.addClass('hidden');
	}
});

$(document).ready(function (){

	'use strict';

	// show menu list
	$('.menu__nav-categories-title').on('click', function (){
		$(this).siblings('ul').stop().slideToggle(200);
	});

	// remove menu on welcome slide
	var welcomeSlide = $('.section-welcome');
	var menu = $('#menu-wrapper');
	if ( welcomeSlide.length ){
		$(window).scroll(function() {
	    if ( $(this).scrollTop() < welcomeSlide.outerHeight() ) {
	      menu.addClass('hidden');
      }
	    else {
	      menu.removeClass('hidden');
	    }
	  });
	}

	// scroll bottom on welcome page button click
	$('.section-welcome__menu-button').on('click', function(){
		if (window.matchMedia("(min-width: 768px)").matches) {
			$('html, body').animate( {scrollTop: $('.section-categories').offset().top }, 500);
		}
	});

	// change slides
	if ( $('.section-categories').length ){
		var counter = 1;

		setInterval( function(){
			counter++;

			$('aside').each(function(){
				var data = $(this).data('background');

				if( counter > 3){
					counter = 1;
				} 

				$(this).css('background-image', 'url("images/' + data + counter + '.jpg")');
			});
		}, 8000);
	}

});