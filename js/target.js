jQuery('document').ready(function($){
	
	var menuBtn = $('.menu'),
		menu = $('.navegacion div'),
		menuBtn2 = $('.infor'),
		infor = $('.navegacion div');



	menuBtn.click(function() {
		if( menu.hasClass('show') ){
			menu.removeClass('show');
		} else {
			menu.addClass('show');
		}
		if (infor.hasClass('show') ){
			infor.removeClass('show');
		} else {
			infor.addClass('show')
		}


	});


});


function alerta()
    {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}