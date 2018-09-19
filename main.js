$(document).ready(function() {

	// Ingredients: assigning each with a numerical value //
	$('.onionPlus').val(1)
	$('.baconPlus').val(2)
	$('.cheesePlus').val(1)
	$('.beefPlus').val(5)
	$('.tomatoPlus').val(1)
	$('.lettucePlus').val(1)

	// Plus/minus buttons //
	$('.onionPlus').click(function() {
		$('.burger-inside').append("<div class='onion ingredient'></div>")
			var amount = $('.onionPlus').val()
			var balance = $('span').text()
			var total = Number(amount) + Number(balance)
			$('span').text(total)
	})

	$('.onionMinus').click(function() {
		$('div[class="onion ingredient"]').eq(0).remove()
		// if ($(".burger-inside:childElementCount") === >1) {
		// if ($("<div class='onion ingredient'></div>") === 0) {
			console.log('.onion.ingredient')
			var amount = $('.onionPlus').val()
			var balance = $('span').text()
			var total = Number(balance) - Number(amount)
			$('span').text(total)
		// }
	})

	$('.baconPlus').click(function() {
		$('.burger-inside').append("<div class='bacon ingredient'></div>")
		var amount = $('.baconPlus').val()
		var balance = $('span').text()
		var total = Number(amount) + Number(balance)
		$('span').text(total)
	})
	$('.baconMinus').click(function() {
		$('div[class="bacon ingredient"]').eq(0).remove()
		var amount = $('.baconPlus').val()
		var balance = $('span').text()
		var total = Number(balance) - Number(amount)
		$('span').text(total)
	})

	$('.cheesePlus').click(function() {
		$('.burger-inside').append("<div class='cheese ingredient'></div>")
		var amount = $('.cheesePlus').val()
		var balance = $('span').text()
		var total = Number(amount) + Number(balance)
		$('span').text(total)
	})
	$('.cheeseMinus').click(function() {
		$('div[class="cheese ingredient"]').eq(0).remove()
		var amount = $('.cheesePlus').val()
		var balance = $('span').text()
		var total = Number(balance) - Number(amount)
		$('span').text(total)
	})

	$('.beefPlus').click(function() {
		$('.burger-inside').append("<div class='beef ingredient'></div>")
		var amount = $('.beefPlus').val()
		var balance = $('span').text()
		var total = Number(amount) + Number(balance)
		$('span').text(total)
	})
	$('.beefMinus').click(function() {
		$('div[class="beef ingredient"]').eq(0).remove()
		var amount = $('.beefPlus').val()
		var balance = $('span').text()
		var total = Number(balance) - Number(amount)
		$('span').text(total)
	})

	$('.tomatoPlus').click(function() {
		$('.burger-inside').append("<div class='tomato ingredient'></div>")
		var amount = $('.tomatoPlus').val()
		var balance = $('span').text()
		var total = Number(amount) + Number(balance)
		$('span').text(total)
	})
	$('.tomatoMinus').click(function() {
		$('div[class="tomato ingredient"]').eq(0).remove()
		var amount = $('.tomatoPlus').val()
		var balance = $('span').text()
		var total = Number(balance) - Number(amount)
		$('span').text(total)
	})

	$('.lettucePlus').click(function() {
		$('.burger-inside').append("<div class='lettuce ingredient'></div>")
		var amount = $('.lettucePlus').val()
		var balance = $('span').text()
		var total = Number(amount) + Number(balance)
		$('span').text(total)
	})
	$('.lettuceMinus').click(function() {
		$('div[class="lettuce ingredient"]').eq(0).remove()
		var amount = $('.lettucePlus').val()
		var balance = $('span').text()
		var total = Number(balance) - Number(amount)
		$('span').text(total)
	})

	// Premade burger: Selecting an option //
	var burgers = ['classic', 'veggie', 'bacon', 'double decker', 'cheese supreme', 'custom']
	var $selectBox = $('#burger-type')

	// Premade burgers: place into dropdown box //
	burgers.forEach(function(burger) {
	  $selectBox.append('<option>' + burger.toUpperCase() + '</option>')
	})

	// Premade burger: adding ingredients inside the burger //
	$selectBox.change(function () {
		$('.burger-inside').empty()
		if ($selectBox.val() === 'classic'.toUpperCase()) {
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('span').text(8)
		} else if ($selectBox.val() === 'veggie'.toUpperCase()) {
			$('.burger-inside').append("<div class='onion ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('span').text(6)
		} else if ($selectBox.val() === 'bacon'.toUpperCase()) {
			$('.burger-inside').append("<div class='bacon ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('span').text(9)
		} else if ($selectBox.val() === 'double decker'.toUpperCase()) {
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('span').text(12)
		} else if ($selectBox.val() === 'cheese supreme'.toUpperCase()) {
			$('.burger-inside').append("<div class='onion ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('.burger-inside').append("<div class='beef ingredient'></div>")
			$('.burger-inside').append("<div class='tomato ingredient'></div>")
			$('.burger-inside').append("<div class='lettuce ingredient'></div>")
			$('.burger-inside').append("<div class='cheese ingredient'></div>")
			$('span').text(10)
		} else if ($selectBox.val() === 'cheese supreme'.toUpperCase()){
			$('.burger-inside').empty()
			$('span').text(0)
		}
	})
})
