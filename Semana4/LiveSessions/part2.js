const cuadrado = function (x) {
    return x * x;
};

let numero = 4;
console.log(cuadrado(numero));

const ruido = function () {
    console.log("Kataplum!");
};
ruido();

const exponencial = function (base, exopnente) {
    let resultado = 1;
    for (let i = 0; i < exopnente; i++) {
        resultado *= base;
    }

    return resultado;
};
console.log(exponencial(4, 3));

// No importa donde estén las funciones, se van a poder llamar
console.log(sumar(5, 65));
function sumar(x, y) {
    return x + y;
}

const restar = (a, b) => {
    return a - b;
};
console.log(restar(40, 8));

function saludar(quien) {
    console.log("Hola " + quien);
    return;
}
saludar("Explorer");
console.log("Bye");

// Excepciones
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I";
    if (result.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
}

function mirar() {
    if (preguntaDireccion("A qué lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos";
    }
}

try {
    console.log("Mira a: ", mirar());
} catch (error) {
    console.log("Hubo un error: " + error);
}


