$(document).ready(function(){"use strict";if($(".menu__nav-categories-title").on("click",function(){$(this).siblings("ul").stop().slideToggle(200)}),$(".section-categories").length){var i=1;setInterval(function(){i++,$("aside").each(function(){var e=$(this).data("background");i>3&&(i=1),$(this).css("background-image",'url("images/'+e+i+'.jpg")')})},8e3)}});