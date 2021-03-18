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




function validar(){
	var form = document.form;

	if(form.nombre.value ==0){
	alert("El campo Nombres esta vacio");
	form.nombre.value ="";
	form.nombre.focus();
	return false;
    }

    if(form.apellido.value ==0){
	alert("El campo Apellidos esta vacio");
	form.apellido.value ="";
	form.apellido.focus();
	return false;
    }

    if(form.cedula.value ==0){
	alert("El campo Cedula esta vacio");
	form.cedula.value ="";
	form.cedula.focus();
	return false;
    }

    if(form.correo.value ==0){
	alert("El campo Correo Electronico esta vacio");
	form.correo.value ="";
	form.correo.focus();
	return false;
    }
   
     alert("Datos enviados con exito");
     form.submit();
}    
