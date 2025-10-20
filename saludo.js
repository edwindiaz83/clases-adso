// let string1 = "Hola mundo"
// let string2 = "javascript es genial"
// let string3 = `${string1} feliz :)`
// let string4 = string1 + string2

// console.log(string1)
// console.log(string2)
// console.log(string3)
// console.log(string4)

// let frase = "JavaScript es extremadamente genial"
// console.log(frase.length)
// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())
// console.log(frase.substring(0, 10))

//enteros y decimales
// const entero = 42;
// // const decimal = 3.14;
// console.log(typeof entero, typeof decimal)
// //notación científica
// const cientifico = 5e3;
// //infinito y NaN
// const infinitivo = Infinity;
// const noEsUnNumero = NaN;

// //operaciones arisméticas

// //suma resta multiplicación división
// const suma = 10 + 5;
// const resta = 10 - 5;
// const multiplicacion = 10 * 5;
// const division = 10 / 5;
// const modulo = 10 % 3; //residuo de una división
// const exponenciacion = 2 ** 3; //2 elevado a la 3

// //operadores de incremento y decremento
// let incremento = 5;
// // incremento++; //incremento en 1
// // incremento--; //decremento en 1

// //precision de los números
// const resultado = 0.1 + 0.2; //puede no ser exacto
// console.log(resultado); //0.30000000000000004
// console.log(resultado.toFixed(2)); //redondea a 2 decimales
// console.log(resultado === 0.3); //false

// //operaciones avanzadas
// const raizCuadrada = Math.sqrt(16); //raíz cuadrada
// const valorAbsoluto = Math.abs(-10); //valor absoluto
// const aleatorio = Math.random(); //número aleatorio entre 0 y 1
// console.log(raizCuadrada)
// console.log(valorAbsoluto)
// console.log(aleatorio)

//conversiones
// const string = "42";
// const integer = parseInt(string); //convierte a entero
// const float = parseFloat("3.14"); //convierte a decimal
// const number = Number("123"); //convierte a número
// const binary = '1010'
// const decimal = parseInt(binary, 2) //convierte de binario a decimal
// console.log(integer, float, number, decimal)
// console.log(typeof integer, typeof float, typeof number, typeof decimal)

// //implicita
// const sumaImplicita = 5 + "3"; //convierte 5 a string y concatena
// console.log(sumaImplicita)
// console.log(typeof sumaImplicita)

// const sumWithBoolean = '3' - true; //convierte true a 1 y suma
// console.log(sumWithBoolean)
// console.log(typeof sumWithBoolean)

// const stringValue = "10";
// const numberValue = 5;
// const booleanValue = true;
// console.log(stringValue + stringValue); // "1010"
// console.log(stringValue + numberValue); // "105"
// console.log(stringValue + booleanValue); // "10true"
// console.log(numberValue + booleanValue); // 6
// console.log(numberValue + numberValue); // 10
// console.log(numberValue + stringValue); // "510"
// console.log(booleanValue + stringValue); // "true10"
// console.log(booleanValue + numberValue); // 6
// console.log(booleanValue + booleanValue); // 2

//operadores de comparación

// const a = 10;
// const b = 20;
// const c = "10";

// console.log(a == b); // false
// console.log(a == c); // true
// console.log(a === c); // false
// console.log(a != b); // true
// console.log(a != c); // false
// console.log(a !== c); // true
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= c); // true
// console.log(a <= c); // true

// //operadores lógicos
// const x = true;
// const y = false;

// console.log(x && y); // false
// console.log(x || y); // true
// console.log(!x); // false

// var variable1 = "hola"
// var variable2 = 1
// var variable3 = 1.3
// var variable4 = true

//que se pueda divir solo entre 1 y entre si mismo

// while (i=0, i <= 100, i++) {
//     console.log(i)
//     if (i%i == 0 && i/1==i){
//         console.log("es primo")
//     }else{
//         console.log("no lo es")
//     }

//toca hacer un algoritmo que sume cada resultado de las 2 operaciones anteriores empezando con 0 y 1

//primeros 5 numeros pares dentro del numero 57


//Encontrar los ultimos 5 numeros pares dentro del numero 57

// const NumEval = 500;
// let NumFinal = [];

// for (let i = NumEval; i > 0; i--) {
//     if (i % 2 === 0) {
//         NumFinal.push(i);
//         console.log(i);
//         if (NumFinal.length === 5) {
//             break;
//         }
//     }   
// } 


// Serie de fibonacci es la suma de los dos anteriores empezando por 0 y 1

// let limite = 200;
// let numAnt = 0;
// let numAct = 1;
// let numFibonacci = [];

// while (numAct <= limite) {
//     numFibonacci.push(numAnt);
//     let suma = numAnt + numAct;
//     numAnt = numAct;
//     numAct = suma;
// }

// console.log(numFibonacci);



// let num1 = 2;
// let num2 = 1;
// let num3 = 6;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if (num2 > num3) {
//     console.log(num2)
// } else {
//     console.log(num3)
// }


//suma de numeros impares de un numero y suma de sus numero pares


// let numPrincipal = parseInt(prompt("Ingrese un número entero positivo:"));
// let numsImpar = [];
// let numsPar = [];
// let sumaimpar = 0;
// let sumapar = 0;

// for (let i = 1; i <= numPrincipal; i++) {
//     if (i % 2 === 0) {
//         numsPar.push(i);
//         for (let i = 0; i < numsPar.length; i++) {
//             sumapar += numsPar[i];
//         }

//     } else {
//         numsImpar.push(i);
//         for (let i = 0; i < numsImpar.length; i++) {
//             sumaimpar += numsImpar[i];
//         }

//     }
// }
// console.log("Numeros par " + numsPar);
// console.log("Numeros impar " + numsImpar);

// console.log("Suma de numeros pares " + sumapar);
// console.log("Suma de numeros impares " + sumaimpar);


// encontrar el numero mas pequeño en un array
// let min = nums[0];
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > min) {
//         min = nums[i];
//     }
// }
// console.log("tamaño del array: " + numIngresado);
// console.log('Números generados:', nums);
// console.log('Número más pequeño:', min);



// generar un array dado por el usuario y encontrar los numeros mas grandes de otro numero dado por el usuario


/*const numIngresado = parseInt(prompt("Ingrese un número entero positivo para el array:"));
let nums = [];
for(let i = 1; i <= numIngresado; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNum);
}

const x = parseInt(prompt("Ingrese un número para comparar:"));
let mayoresQueX = [];
for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] > x) {
        mayoresQueX.push(nums[i]);
    }
}
console.log("tamaño del array: " + numIngresado);
console.log('Números generados:', nums);
console.log(`Números mayores que ${x}:`, mayoresQueX);*/


/*
 * Determina la etapa de vida y la posible elegibilidad a subsidios 
 * basada en la edad y el género.
 * * NOTA IMPORTANTE: La elegibilidad de subsidios es un EJEMPLO basado 
 * en rangos de edad (ej. Subsidio Colombia Mayor). En la vida real, 
 * se deben cumplir otros requisitos (Sisbén, ingresos, etc.).
 *
 * 
 * /**
 * Determina la etapa de vida y la posible elegibilidad a subsidios 
 * basada en la edad y el género.
 /* @param {string} edad La edad de la persona (se espera un número entero).
 * @param {string} genero El género de la persona ("M" para Mujer o "H" para Hombre).
 * @returns {string} El mensaje completo con la etapa y el estado de subsidio.
 */
/*function clasificarEdadYSubsidios(edad, genero) {
    
    // Convertir y limpiar entradas
    const edadNum = Number(edad);
    const generoUpper = String(genero).toUpperCase();

    // 1. Validación de entrada
    if (isNaN(edadNum) || edadNum < 0 || !Number.isInteger(edadNum)) {
        return `Error: Ingrese una edad válida (número entero positivo).`;
    }
    if (generoUpper !== 'M' && generoUpper !== 'H') {
        return `Error: Ingrese un género válido ('M' para Mujer o 'H' para Hombre).`;
    }

    let etapa = "";
    let mensajeSubsidio = "No aplica para subsidios de esta categoría por edad.";

    // 2. Clasificación de la Etapa de Vida
    if (edadNum >= 0 && edadNum <= 12) {
        etapa = "Niño/a 👶";
    } else if (edadNum > 12 && edadNum <= 18) {
        etapa = "Adolescente 🧑‍🎤";
    } else if (edadNum > 18 && edadNum <= 55) {
        etapa = "Adulto 👨‍💼";
    } else { // Más de 55
        etapa = "Adulto Mayor 🧓";
    }
    
    // 3. Determinación de Subsidios (Ejemplo con lógica de género para Adulto Mayor)
    
    // Subsidio para menores de edad (0 a 18 años)
    if (edadNum >= 0 && edadNum <= 18) {
        mensajeSubsidio = "Potencial beneficiario de **Subsidio Familiar (Cuota Monetaria)** y otros programas de apoyo, si los padres/cuidadores cumplen requisitos.";
    }

    // Subsidio para Adulto Mayor (Colombia Mayor como referencia)
    if (etapa === "Adulto Mayor 🧓" || edadNum >= 54) {
        
        const edadMinimaMujer = 54;
        const edadMinimaHombre = 59;
        
        if (generoUpper === 'M' && edadNum >= edadMinimaMujer) {
            mensajeSubsidio = `¡Potencialmente elegible! Puede postularse al Subsidio **Colombia Mayor** a partir de los ${edadMinimaMujer} años. (Verifique otros requisitos).`;
        } else if (generoUpper === 'H' && edadNum >= edadMinimaHombre) {
            mensajeSubsidio = `¡Potencialmente elegible! Puede postularse al Subsidio **Colombia Mayor** a partir de los ${edadMinimaHombre} años. (Verifique otros requisitos).`;
        } else if (generoUpper === 'H' && edadNum > 55 && edadNum < edadMinimaHombre) {
             // Hombre Adulto Mayor (56 a 58)
             mensajeSubsidio = `Es **Adulto Mayor**, pero debe esperar a los ${edadMinimaHombre} años para postularse al subsidio.`;
        }
    }
    
    // 4. Construcción del resultado final
    const resultado = `
--- RESULTADO DE CONSULTA ---
Edad Ingresada: ${edadNum} años
Género: ${generoUpper}

Clasificación de Etapa: ${etapa}

Estado de Subsidio:
-> ${mensajeSubsidio}
`;
    return resultado;
}

// ------------------------------------------------------------------
// Función para Interacción con el Usuario (usa prompt)
// ------------------------------------------------------------------

/**
 * Solicita la edad y el género al usuario usando prompt, ejecuta la clasificación
 * y muestra el resultado en una alerta.
 */
/*function ejecutarConsulta() {
    let edad;
    let genero;
    let resultado;

    // Bucle para solicitar y validar la Edad
    do {
        edad = prompt("Ingrese su Edad (número entero positivo):");
        if (edad === null) return console.log("Consulta cancelada por el usuario.");
        
        const edadNum = Number(edad);
        if (!isNaN(edadNum) && edadNum >= 0 && Number.isInteger(edadNum)) {
            break; 
        }
        alert("Edad no válida. Por favor, ingrese un número entero positivo.");
    } while (true);

    // Bucle para solicitar y validar el Género
    do {
        genero = prompt("Ingrese su Género ('M' para Mujer o 'H' para Hombre):");
        if (genero === null) return console.log("Consulta cancelada por el usuario.");
        
        const generoUpper = String(genero).toUpperCase();
        if (generoUpper === 'M' || generoUpper === 'H') {
            break;
        }
        alert("Género no válido. Por favor, ingrese 'M' o 'H'.");
    } while (true);

    // Ejecutar clasificación
    resultado = clasificarEdadYSubsidios(edad, genero);
    
    // Mostrar el resultado al usuario y en la consola
    alert(resultado); 
    console.log(resultado);
}

// Inicia la ejecución de la consulta
ejecutarConsulta();*/

/*const canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

canasta.forEach( (item, key) => { console.log('item=', item, ' key=', key) } );

const copiaCanasta = canasta.map( (item) => {
        if (item !== 'pan') {
            return `nuevo item ${item}` 
        } 
    }
);
const copiaCanasta2 = canasta.filter( (item) =>  item !== 'pan' );

console.log('copiaCanasta2=', copiaCanasta2);

edwin diazs


dfkdsfdsf*/

/*let canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

for (item of canasta) {
    console.log(item);
}*/
/* for in------ objetos
propiedades = valor
array, string
*/

/*const listadecompras = {
    manzana: 5,
    pera: 3,
    naraja: 2,
    uva: 1,

};
for (fruta in listadecompras) {
    console.log(fruta);
}
for (fruta in listadecompras) {
    console.log(`${fruta} : ${listadecompras[fruta]}`);
}*/

/*let contador = 0;

while (contador < 30) {
    console.log(contador);
    contador++;
}*/
/* funciones trozos de codigo reutilizables
puedo recibir parametros
puedo retonar un valor*/
/*
function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const pricewithDiscount = price - discount;
return pricewithDiscount;
  }

  const originalPrice = 100;
  const discountPercentage = 20;
  const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

    console.log("original Price: $", originalPrice);
    console.log("discount: " + discountPercentage + "%");
    console.log("price with discount: $", finalPrice);*/

/* capacidades que tiene una funcion al igual que otros
 pasar funciones como argumentos -> callback
 */
/*function a () {
    function b() { }
return b
 }

const a= function() {
}*/

/*const rocket = {
    name: 'Falcon 9',
    launchmessage: function launchmessage() {
        console.log(this.name);
    }
};
rocket.launchmessage();*/

/*funciones puras

side  effects
1 mdifica variables globales
modofciar paramentros
llamados a hhttp o solicitudes
imprimir mensaje en pantalla 
multiplicacion de DOME
obtenner fecha y hora*/
/*const almuerzo = (plato,  proteinas, verdurasbebida) => {
    return `para el almuerzo voy a comer ${plato} con ${proteinas} y ${verdurasbebida}`*/
// La primera función (Arrow Function con bloque y 'return' explícito)
/* const newGREETING = (name) => {
    return `Hola ${name}, ¿cómo estás?`
}


const newGreetingImplicit = name => `Hola ${name}, ¿cómo estás?`


const edwindiaz1 = newGREETING("Juan");


const edwindiaz2 = newGreetingImplicit("Ana");



console.log("Saludo edwindiaz1 (newGREETING): " + edwindiaz1);
console.log("Saludo edwindiaz2(newGreetingImplicit): " + edwindiaz2);*/

/*const fruits = Array("apple", "banana", "orange");
console.log(fruits);
console.log(fruits.length);


const justOneName = ["12"];
console.log(justOneName);

const numbersA = [5, 10];
console.log(numbersA);

const numbersB = [5];
console.log(numbersB);

const ingredients = ["tomato", "cheese", "lettuce",
    "milk", "2 liters"
];
console.log(ingredients);
ingredients.push("eggs");
//a grega un elemento al final del array//

console.log(ingredients);

const newingredients = ingredients.concat(["flour", "sugar"]);
//concatena dos arrays y crea uno nuevo//
console.log(newingredients);
console.log(Array.isArray(newingredients));

const numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0; // 1. Inicializa la variable 'sum'

for (const number of numberarray) {
  // 2. Este es el bloque de código que faltaba
  sum += number;
}

console.log(sum); // Muestra 15
//devuelve la posicion del elemento//

const numerosOriginales = [2, 5, 3, 4, 1];

// 1. Uso correcto del map (Crea un array multiplicando por 3)
const numerosPorTres = numerosOriginales.map(numero => 
    numero * 3
);

console.log("Array Original:", numerosOriginales);
// Resultado: Array Original: [1, 2, 3, 4, 5]

// 2. Corrección: Cambiamos "Array Filtrado" por el array creado por map
// La variable 'numerosFiltrados' no existe en este código
console.log("Array por Tres:", numerosPorTres); 
// Resultado: Array por Tres: [3, 6, 9, 12, 15]

// 3. Corrección: El comando slice() estaba incompleto y la salida desordenada
// Muestra el resultado de slice (elementos en los índices 2 y 3)
console.log("Resultado de slice(2, 4):", numerosOriginales.slice(2, 4));
// Resultado: Resultado de slice(2, 4): [3, 4]

console.log(numerosOriginales.pop());
 console.log(numerosOriginales);
 numerosOriginales.pop();
 
 function compareNumbers(a, b) {
    return a - b;
}
numerosOriginales.sort(compareNumbers);
console.log(numerosOriginales);

const found = numerosOriginales.find( (element) => element > 2 );
console.log(found);

const islargenumber = (element) => element > 3;
console.log(numerosOriginales.findIndex(islargenumber));

const even = (element) => element % 6 === 0;
console.log(numerosOriginales.some(even));


const elementos = [
    { nombre: 'laptop', precio: 800 },
    { nombre: 'telefono', precio: 600 },
    { nombre: 'tablet', precio: 400 },
    { nombre: 'monitor', precio: 300 },
];

// Utilizamos el método 'reduce' para sumar el 'precio' de cada elemento.
// 'acc' (acumulador) empieza en 0 y va sumando 'curr.precio' (precio actual).
const total = elementos.reduce( (acc, curr) => acc + curr.precio, 0 );

console.log(`El total de la compra es: $${total}`); 
// Resultado esperado en consola: El total de la compra es: $2100
const trabajos = ["carpintero", "albañil", "plomero", "electricista", "carpintero", "albañil", "plomero"];
const trabajosfrecuency = trabajos.reduce( (acumulador,  currentvalue) => {
    if (acumulador[currentvalue]) {
        acumulador[currentvalue] ++;
    } else {
        acumulador[currentvalue] = 1;
    }

    return acumulador;
}, {});
console.log(trabajosfrecuency);*/

/**
 * CLASE PADRE: VEHICULO
 * Define las propiedades y métodos comunes para todos los vehículos.
 * Demuestra: Clase, Atributos y Métodos.
 */
class Vehiculo {
    // Constructor: Inicializa los atributos del objeto.
    constructor(marca, modelo, color) {
        this.marca = marca; // Atributo
        this.modelo = modelo; // Atributo
        this.color = color; // Atributo
    }

    // Método: Define una acción común.
    encender() {
        return `El ${this.marca} ${this.modelo} (${this.color}) ha encendido su motor.`;
    }

    // Método: Muestra la información básica.
    mostrarInfo() {
        return `Marca: ${this.marca} | Modelo: ${this.modelo} | Color: ${this.color}`;
    }
}

// -------------------------------------------------------------

/**
 * CLASE HIJA: COCHE
 * Hereda todas las propiedades y métodos de Vehiculo.
 * Demuestra: Herencia y Polimorfismo.
 */
class Coche extends Vehiculo {
    // El constructor llama al constructor del padre (super) y añade un atributo propio.
    constructor(marca, modelo, color, num_puertas) {
        super(marca, modelo, color); // Herencia: llama al constructor de Vehiculo
        this.num_puertas = num_puertas; // Atributo propio
    }

    // Método propio: Acción específica de un Coche.
    acelerar() {
        return `El ${this.marca} está acelerando a fondo. ¡Cuidado!`;
    }

    // Polimorfismo: Sobreescribe el método del padre para añadir información.
    mostrarInfo() {
        const infoBase = super.mostrarInfo(); // Llama al método del padre
        return `${infoBase} | Tipo: Coche | Puertas: ${this.num_puertas}`;
    }
}

// -------------------------------------------------------------

/**
 * USO Y PRUEBA (Instanciación de Objetos)
 * Demuestra: Objetos (Instancias).
 */

// 1. Instanciar un objeto de la Clase Padre (Vehiculo)
const miMoto = new Vehiculo("Yamaha", "YZF-R3", "Azul");

// 2. Instanciar un objeto de la Clase Hija (Coche)
const miCoche = new Coche("Tesla", "Model 3", "Negro", 4);

// -------------------------------------------------------------

// Ejecución de Métodos y visualización de resultados

console.log("--- Objeto: miMoto (Clase Vehiculo) ---");
console.log(miMoto.mostrarInfo());
console.log(miMoto.encender());

console.log("\n--- Objeto: miCoche (Clase Coche) ---");
console.log(miCoche.mostrarInfo()); // Método Polimórfico (sobrescrito)
console.log(miCoche.encender());   // Método Heredado de Vehiculo
console.log(miCoche.acelerar());   // Método propio de Coche








