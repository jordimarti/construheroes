
$(document).on('turbolinks:load', function () {
	// Preparació
	$('.container-fase').hide()
	$('#amaga-tot').click(function() {
		$('.container-fase').hide()
	})
	// Fase 1
	$('#frase-2').hide()
	$('.benfet').hide()
	$('.malfet').hide()
	$('#pista-1').click(function() {
	  $('#frase-1').hide()
	  $('#frase-2').show()
	  $('#pista-1').hide()
	})
	$('#comprova-repte-1').click(function() {
	  valor = $('#input-repte-1').val()
	  if(valor === 'Per estalviar diners i lluitar contra el canvi climàtic') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climàtic.') {
	    $('.benfet').show()
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic.') {
	    $('.benfet').show()
	  } else {
	    $('.malfet').show().delay(3000).fadeOut();
	  }
	})

	// Fase 2
	$('.benfet2').hide()
	$('.malfet2').hide()
	$('.map-slice').click(function() {
		$('.benfet2').hide()
		$('.malfet2').show()
	})
	$('#map48').click(function() {
		$('.malfet2').hide()
		$('.benfet2').show()
		$('img[id="map48"]').attr('src','/assets/mapa_mon_48_v2.jpg');
  })

  // Fase 3
  

  // Fase 8
  
})