$( document ).ready(function() {
   
	'use strict';

  var $toggleButton = $('.main-menu__toggle');
  var $toggleCollapse = $('.main-menu__collapse');

	$toggleButton.on('click', function () {
		$(this).toggleClass('on');
		$toggleCollapse.toggleClass('on');
	});




	$('#fullpage').fullpage({
		anchors: ['main', 'experience'],

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
  density: 20000, // One particle every n pixel
  parallaxMultiplier: 20, // Lower the number is more extreme parallax
  particleRadius: 5, // Dot size
	});
	

});