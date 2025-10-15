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

const canasta = ['leche', 'pan', 'huevos', 'carne', 'verduras'];

canasta.forEach( (item, key) => { console.log('item=', item, ' key=', key) } );

const copiaCanasta = canasta.map( (item) => {
        if (item !== 'pan') {
            return `nuevo item ${item}` 
        } 
    }
);
const copiaCanasta2 = canasta.filter( (item) =>  item !== 'pan' );

console.log('copiaCanasta2=', copiaCanasta2);