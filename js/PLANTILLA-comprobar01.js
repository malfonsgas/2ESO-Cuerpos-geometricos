
/*window.onload= function Fescala() {
    var aleatorio = Math.random();
    document.getElementById('Escala').innerHTML = "Escala 1:"+ 1000*Math.round(4*aleatorio+1);
   EscalaPlano=1000*Math.round(4*aleatorio+1);
    }

*/

var contador=0;

function PLANTILLAcomprobar(){
	var Respuesta1=document.getElementById("respuesta1").value;
	var Respuesta2=document.getElementById("respuesta2").value;
	var Respuesta3=document.getElementById("respuesta3").value;
	var Respuesta4=document.getElementById("respuesta4").value;
	var Respuesta5=document.getElementById("respuesta5").value;
	var Respuesta6=document.getElementById("respuesta6").value;
	var Respuesta7=document.getElementById("respuesta7").value;
	var Respuesta8=document.getElementById("respuesta8").value;
	var Respuesta9=document.getElementById("respuesta9").value;
	var Respuesta10=document.getElementById("respuesta10").value;

	
	if (Respuesta1=="b"){
	 	document.getElementById("Correcto1").style='display:block';
	 	document.getElementById("Incorrecto1").style='display:none';
	} else if (Respuesta1=="no"){ }
	else {
		document.getElementById("Correcto1").style='display:none';
		document.getElementById("Incorrecto1").style='display:block';
	}
	if (Respuesta2=="c"){
	 	document.getElementById("Correcto2").style='display:block';
	 	document.getElementById("Incorrecto2").style='display:none';
	} else if (Respuesta2=="no"){ }
	else{
		document.getElementById("Incorrecto2").style='display:block';
		document.getElementById("Correcto2").style='display:none';
	}

	if (Respuesta3=="a"){
	 	document.getElementById("Correcto3").style='display:block';
	 	document.getElementById("Incorrecto3").style='display:none';
	} else if (Respuesta3=="no"){ }
	else{
		document.getElementById("Correcto3").style='display:none';
		document.getElementById("Incorrecto3").style='display:block';
	}


	if (Respuesta4=="c"){
	 	document.getElementById("Correcto4").style='display:block';
	 	document.getElementById("Incorrecto4").style='display:none';
	} else if (Respuesta4=="no"){ }
	else{
		document.getElementById("Incorrecto4").style='display:block';
		document.getElementById("Correcto4").style='display:none';
	}

	if (Respuesta5=="c"){
	 	document.getElementById("Correcto5").style='display:block';
	 	document.getElementById("Incorrecto5").style='display:none';
	} else if (Respuesta5=="no"){ }
	else{
		document.getElementById("Correcto5").style='display:none';
		document.getElementById("Incorrecto5").style='display:block';
	}


	if (Respuesta6=="c"){
	 	document.getElementById("Correcto6").style='display:block';
	 	document.getElementById("Incorrecto6").style='display:none';
	} else if (Respuesta6=="no"){ }
	else{
		document.getElementById("Incorrecto6").style='display:block';
		document.getElementById("Correcto6").style='display:none';
	}

	if (Respuesta7=="b"){
	 	document.getElementById("Correcto7").style='display:block';
	 	document.getElementById("Incorrecto7").style='display:none';
	} else if (Respuesta7=="no"){ }
	else{
		document.getElementById("Correcto7").style='display:none';
		document.getElementById("Incorrecto7").style='display:block';
	}


	if (Respuesta8=="a"){
	 	document.getElementById("Correcto8").style='display:block';
	 	document.getElementById("Incorrecto8").style='display:none';
	} else if (Respuesta8=="no"){ }
	else{
		document.getElementById("Incorrecto8").style='display:block';
		document.getElementById("Correcto8").style='display:none';
	}

	if (Respuesta9=="b"){
	 	document.getElementById("Correcto9").style='display:block';
	 	document.getElementById("Incorrecto9").style='display:none';
	} else if (Respuesta9=="no"){ }
	else{
		document.getElementById("Correcto9").style='display:none';
		document.getElementById("Incorrecto9").style='display:block';
	}


	if (Respuesta10=="c"){
	 	document.getElementById("Correcto10").style='display:block';
	 	document.getElementById("Incorrecto10").style='display:none';
	} else if (Respuesta10=="no"){ }
	else{
		document.getElementById("Incorrecto10").style='display:block';
		document.getElementById("Correcto10").style='display:none';
	}

	++contador;
	document.getElementById("Codigo").innerHTML="Vas en el intento número " + contador;
	document.getElementById("Codigo").style='display:block';

	/*if ((Respuesta2==90) && (Respuesta1=="t=d/80")&& (Respuesta3)){
		document.getElementById("Contenido").style='display:none';
		document.getElementById("Codigo").style='display:block';


	}*/


}
