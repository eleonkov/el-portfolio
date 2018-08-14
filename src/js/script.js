$( document ).ready(function() {
   
	'use strict';

  var $toggleButton = $('.main-menu__toggle');
  var $toggleCollapse = $('.main-menu__collapse');

	$toggleButton.on('click', function () {
		$(this).toggleClass('on');
		$toggleCollapse.toggleClass('on');
	});

});