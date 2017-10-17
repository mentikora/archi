$(document).ready(function (){

	'use strict';

	// show menu list
	$('.menu__nav-categories-title').on('click', function (){
		$(this).siblings('ul').stop().slideToggle(200);
	});
	

});