console.log("\n*********** Variables ***********\n");

var numero1 = 4;
var numero2 = 6;

console.log("Número 1: " + numero1 + " Número 2: " + numero2);

console.log("\n*********** Cadenas ***********\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n*********** Condicionales ***********\n");
console.log(numero1 != numero2);

console.log("\n*********** Operador lógico AND ***********\n");
console.log(true && true);

console.log("\n*********** Operador lógico OR ***********\n");
console.log(true || false);

console.log("\n*********** Arreglos ***********\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);
console.log(listaDeNumeros.length);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);

let listaDePalabras = ["Explorer", "MissionCommander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2])
console.log(palabra.length);

// Comentario
/* Comentario */

console.log("\n*********** Objetos ***********\n");

let explorer = {
    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "Frontend",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tarea",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer);
console.log(explorer.proPer);


/* Flujo condicional */
let number1 = 4;
let number2 = 2;

console.log("\n*********** if / else ***********\n");
if (number1 > number2) {
    console.log('El número 1 es mayor que el número 2');
} else if (number1 == number2 || number1 < 3) {
    console.log('Los números son iguales');
} else {
    console.log('El número 2 es mayor que número 1');
}

/* Ciclo condicional */
console.log("\n*********** while ***********\n");

let numberWhile = 0;
while(numberWhile <= 12) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log('Aquí finalizó el ciclo while en: ' + numberWhile);


/* Ciclo condicional de una iteración mínimo */
console.log("\n*********** do while ***********\n");

let numeroDoWhile = 12;

do {
    numeroDoWhile += 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log('Aquí finalizó el ciclo do while en: ' + numeroDoWhile);


/* Ciclo for con iteración controlada */
console.log("\n*********** for ***********\n");
let numeroFor = 0;
for(numeroFor; numeroFor <= 12; numeroFor++) {
    console.log(numeroFor)
}
console.log('Aquí finalizó el ciclo for en ' + numeroFor);

/* Opciones para evitar anidar ciclos condicionales */
console.log("\n*********** switch ***********\n");

switch(prompt('¿Cómo está el clima?')){
    case "lluvioso":
        console.log('No te vayas a mojar');
        break;
    case "soleado":
        console.log('Ponte bloqueador');
        break;
    case "nublado":
        console.log('Tápate bien');
        break;
    default:
        console.log('No sé como está el clima.');
        break;
}
console.log('Aquí nos salimos del switch');
