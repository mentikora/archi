$(document).ready(function (){

	'use strict';

	// show menu list
	$('.menu__nav-categories-title').on('click', function (){
		$(this).siblings('ul').stop().slideToggle(200);
	});

	// change slides
	if ( $('.section-categories') ){
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