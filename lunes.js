console.log("Hola mundo")

const bonafont = "Agua"
console.log(bonafont)

// CONDICIONALES
/**
 * Son las opciones que tiene el programa para ejecutarse, dependiendo de una expresión.
 * 
 */

// LO QUE ESTÁ ADENTRO DEL PARÉNTESIS SE LE CONOCE COMO EXPRESIÓN
// LO QUE SE VA A EVALUAR ES SI ES VERDADERO O FALSO
// SI ES VERDADERO, EJECUTA LO QUE ESTÁ EN LAS LLAVES
// SI ES FALSO, NO LO EJECUTA Y SIGUE EL PROGRAMA

// VERDADERO
if(1 < 2) {
    console.log("Si. Uno es menor que dos")
}

// FALSO
if(1 > 2){
    console.log("Esto nunca se ejecuta")
}


// A ESTE IGUAL SE LE CONOCE COMO ASIGNACIÓN
const teacher = "Mike"

// A ESTE IGUAL IGUAL SE LE CONOCE COMO COMPARACIÓN 
// "Mike" vs "Mike" => Son iguales. Ejecuta el if.
if(teacher == "Mike"){
    console.log("Mi teacher es Mike")
} else {
    console.log("Mi teacher NO es Mike")
}

// CONDICIONALES DE HORARIOS
/**
 * Van a construir un bloque de código que verifique una hora en una variable y:
 * a. Si es de 0000 - 1159 - Buenos días
 * b. Si es de 1200 - 1759 - Buenas tardes
 * c. Si es de 1800 - 2359 - Buenas noches
 * BONUS - Si no coincide ningún rango, generar un mensaje: "Hora no válida"
 */