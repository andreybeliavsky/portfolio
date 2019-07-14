$(document).ready(function() {

	var navToggleButton = $('#navigation__button');
	var navMenu = $('.navigation__list');
	var navMenuOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');


	navToggleButton.on('click', function(e){
		e.preventDefault();
		navMenu.toggleClass(navMenuOpen);
		navButtonToggle();
	})

	navLink.on('click', function(){
		if (navMenu.hasClass(navMenuOpen)) {
			navButtonToggle();
		}
		navMenu.removeClass(navMenuOpen);
	})

	function navButtonToggle() {
		if(navToggleButton.hasClass('active')) {
		  navToggleButton.removeClass('active');
		} else {
		  navToggleButton.addClass('active');
		}
	}

});