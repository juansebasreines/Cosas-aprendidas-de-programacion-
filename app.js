/*IMPRIME UN TEXTO O VALOR*/

console.log("hola hola");

/*ASIGNAR UN VALOR CON EL LET O EL VAR*/ 

var my_var1 = 5;
let valor = "un string";
console.log(type(valor))

/*-----------------------*/
/*CONTROL FLOW*/ 
/*-----------------------*/

/*-----------------------*/
	/*COMANDO IF*/		 
/*-----------------------*/

let mycode = "Javascript";

if (mycode == "hola") {
	console.log("estado de if con el hola ")
} else if (mycode == "Python"){
	console.log("esto se imprime si fuera Python")
} else {
	console.log("es Javascript")
}

/*----------------------------------------*/
	/* O TAMBIEN SE PUEDE CON SWITCH*/
/*----------------------------------------*/

switch(mycode){
	case "hola":
		console.log("estado de if con el hola")
		break;
	case "Python":
		console.log("esto se imprime si fuera Python")
		break;
	default:
		console.log("es Javascript")
}


/*----------------------------------------*/
	/*COMANDO FOR*/
/*----------------------------------------*/


for (let i = 0; i < 10; i++) {
	console.log(i);					/*esto imprime valores del 0 al 9*/
}




/*----------------------------------------*/
	/*COMANDO WHILE*/
/*----------------------------------------*/

let i = 0;

while (i < 10){
	console.log(i);
	i++;			/*esto tambien imprime valores del 0 al 9*/
}



/*----------------------------------------*/
	/*COMANDO DO WHILE*/
/*----------------------------------------*/

let j = 10;

do {
	console.log(j);
	i++;
} while (j < 10);			/*la diferencia entre el do while y el 
								while comun es que este hace la 
								accion primero y despues chequea 
							mientras que el otro no*/



/*----------------------------------------*/
	/*COMANDO FOR OF*/
/*----------------------------------------*/
let objeto = {
	firstName: "Juan"
	lastName: "Reines"
}








document.write("Hola soy nuevo en esto, tengame comprension parce");
// Tipos de datos

"buenas buenas" // string
8468746 // number
// boolean
true 
false

// array
["joe","Ryan","Martha"] // list

// object 
{
	"usernam":"primerizo", 
	"score:" 30,
	"hours": 2,
	"noob": true,
	"friends": "nadie"
}

{
	"usernam":"El capo", 
	"score:" 3000,
	"hours": 200,
	"noob": false,
	"friends": "Martha"
}
