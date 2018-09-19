$(document).ready(function() {
	// We use a $ to remind ourselves (and others) that this variable is holding a jQuery function inside. //
	var burgers = ['classic', 'doublepatty', 'spicy', 'southern', 'syd']
	var $selectBox = $('#burger-type')

	// Make each array object targetable (and turn it into a variable) and push said variable into the $selectBox//
	burgers.forEach(function(burger) {
		$selectBox.append('<option>' + burger.toUpperCase() + '</option>')
	})
	// Our first loop — addClass, removeClass, targeting
	$selectBox.change(function() {
		$('body').removeClass()
		burgers.forEach(function(city) {
			if ($selectBox.val() === burger.toUpperCase()) {
				$('body').addClass(city)
			}
		})
	})
})
