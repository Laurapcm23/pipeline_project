//--------------------------------------
//             JAVASCRIPT
//--------------------------------------


var inputs = document.getElementsByClassName('form_input');

for (var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('keyup' , function(){

		if(this.value.length>=1){
			this.nextElementSibling.classList.add('quedar')
		}else{
			this.nextElementSibling.classList.remove('quedar')
		}
	});
}


//-------------------------------------
//        VALIDACION DE CAMPOS
//-------------------------------------

function validar(){
	var form = document.form;

	if(form.nombre.value ==0){
	alertify.error("Campo Obligatorio!");
	document.getElementByClassName('nombre').className = "form_input border border-danger";
	form.nombre.value ="";
	form.nombre.focus();
	return false;
    }

    if(form.apellido.value ==0){
    alertify.error("Campo Obligatorio!");
    document.getElementByClassName('apellido').className = "form_input border border-danger";
	form.apellido.value ="";
	form.apellido.focus();
	return false;
    }

    if(form.cedula.value ==0){	
    alertify.error("Campo Obligatorio!");
    document.getElementByClassName('cedula').className = "form_input border border-danger";
	form.cedula.value ="";
	form.cedula.focus();
	return false;
    }

    if(form.correo.value ==0){
    alertify.error("Campo Obligatorio!");
    document.getElementByClassName('correo').className = "form_input border border-danger";
	form.correo.value ="";
	form.correo.focus();
	return false;
    }
   
     alert("Datos enviados");
     form.submit();
}  





//-----------------------------------------
//            GUIONES DE CEDULA
//------------------------------------------

function mascara(){
	var cpf = document.getElementById("ce")

	if (cpf.value.length ==3 || cpf.value.length ==4) {
		cpf.value +="-"

	}else if (cpf.value.length ==11){
		cpf.value+= "-"
	}

}
