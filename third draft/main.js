$(document).ready(function() {
	$('.onionPlus').click(function() {
		$('.burger-inside').append("<div class='onion ingredient'></div>")
	})
	$('.onionMinus').click(function() {
		$('div[class="onion ingredient"]').eq(0).remove()
	})

	$('.baconPlus').click(function() {
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
})
