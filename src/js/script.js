$( document ).ready(function() {
   
	'use strict';

	var $mainMenuLinks = $('#menu a');
  var $toggleButton = $('.main-menu__toggle');
  var $toggleCollapse = $('.main-menu__collapse');

	$toggleButton.on('click', function () {
		$(this).toggleClass('on');
		$toggleCollapse.toggleClass('on');
	});

	$mainMenuLinks.on('click', function() {
		$toggleButton.click();
	});

	$('#fullpage').fullpage({
		anchors: ['main', 'portfolio', 'skills', 'contacts'],
		menu: '#menu',
		scrollingSpeed: 1000,
		easingcss3: 'ease-in-out',

		afterLoad: function(origin, destination, direction){
			var loadedSection = this;
			console.log(origin);

			if(origin == 'main'){
			
			}
		}
	});

	$('body').particleground({
		dotColor: 'rgba(255, 255, 255, 0.5)',
  	lineColor: 'rgba(255, 255, 255, 0.05)',
  	minSpeedX: 0.5,
	  maxSpeedX: 0.5,
 		minSpeedY: 0.075,
 		maxSpeedY: 0.15,
  	density: 20000,
  	parallaxMultiplier: 20,
  	particleRadius: 5,
	});
});