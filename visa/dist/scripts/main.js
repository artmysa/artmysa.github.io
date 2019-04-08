$(function(){

	var dom = {
		'btn': $('.js_Nav_btn'),
		'nav': $('.js_Nav_nav')
	}

	dom['btn'].on('click', function(e) {
		e.preventDefault();

		dom['nav'].toggleClass('is-active');
	});

})
