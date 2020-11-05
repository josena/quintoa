//Funciones para acceder al DOM de manera jerarquica

// a través del tipo o nombre de la etiqueta
var etih2=document.getElementsByTagName("h2");
// a través del atributo name
var etih2=document.getElementsByName("hola");
// a través del atributo ID o identificador
var msje=document.getElementById("bienve");

//Código para cambiar color al documento a través de DOM
var miBody=document.getElementsByTagName("body");
miBody[0].style.backgroundColor = "aqua"; 

alert("Texto del h2 by name:"+etih2[0].innerHTML);
msje.innerText="Hola muchachos";
/*Uso del confirm*/
var ok=confirm("¿Estas seguro de querer sumar?");
/*Si el ususario contesto que si*/
if (ok==true) {
	/*Uso del prompt*/
	var nom=prompt("¿La suma de 2+2 es:? ");
	if (Number(nom)==4) {
		alert("Correcto!!!...")
		msje.innerText="El resultado de la suma es:"+nom.innerHTML;
	}else{
		alert("Fatal!!!...")
	}
}

