$(document).ready(function() {
	// Ingredients //
	function onion() {
		$('.burger-inside').append("<div class='onion ingredient'></div>")
	}

	function bacon() {
		$('.burger-inside').append("<div class='bacon ingredient'></div>")
	}

	function cheese() {
		$('.burger-inside').append("<div class='cheese ingredient'></div>")
	}

	function beef() {
		$('.burger-inside').append("<div class='beef ingredient'></div>")
	}

	function tomato() {
		$('.burger-inside').append("<div class='tomato ingredient'></div>")
	}

	function lettuce() {
		$('.burger-inside').append("<div class='lettuce ingredient'></div>")
	}

	// using the plus/minus buttons //
	$('.onionPlus').click(onion)
	$('.onionMinus').click(function() {
		$('div[class="onion ingredient"]').eq(0).remove()
	})

	$('.baconPlus').click(bacon)
		$('.burger-inside').append("<div class='bacon ingredient'></div>")
	})

	$('.baconMinus').click(function() {
		$('div[class="bacon ingredient"]').eq(0).remove()
	})

	$('.cheesePlus').click(function() {
		$('.burger-inside').append("<div class='cheese ingredient'></div>")
	})
	$('.cheeseMinus').click(function() {
		$('div[class="cheese ingredient"]').eq(0).remove()
	})

	$('.beefPlus').click(function() {
		$('.burger-inside').append("<div class='beef ingredient'></div>")
	})
	$('.beefMinus').click(function() {
		$('div[class="beef ingredient"]').eq(0).remove()
	})

	$('.tomatoPlus').click(function() {
		$('.burger-inside').append("<div class='tomato ingredient'></div>")
	})
	$('.tomatoMinus').click(function() {
		$('div[class="tomato ingredient"]').eq(0).remove()
	})

	$('.lettucePlus').click(function() {
		$('.burger-inside').append("<div class='lettuce ingredient'></div>")
	})
	$('.lettuceMinus').click(function() {
		$('div[class="lettuce ingredient"]').eq(0).remove()
	})

	// selecting a premade burger //
	var burgers = ['classic', 'veggie', 'bacon', 'double decker', 'cheese supreme', 'custom']
	var $selectBox = $('#burger-type')

	burgers.forEach(function(burger) {
	  $selectBox.append('<option>' + burger.toUpperCase() + '</option>')
	})

	// Our first loop — addClass, removeClass, targeting
	$selectBox.change(function () {
		$('.burger-inside').empty()
		if ($selectBox.val() === 'classic'.toUpperCase()) {
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
		} else if ($selectBox.val() === 'veggie'.toUpperCase()) {
			$('.burger-inside').append("<div class='onion ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
		} else if ($selectBox.val() === 'bacon'.toUpperCase()) {
			$('.burger-inside').append("<div class='bacon ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
		} else if ($selectBox.val() === 'double decker'.toUpperCase()) {
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
		} else if ($selectBox.val() === 'cheese supreme'.toUpperCase()) {
			$('.burger-inside').append("<div class='onion ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
		} else if ($selectBox.val() === 'cheese supreme'.toUpperCase()){
			$('.burger-inside').empty()
		}
	})
})
