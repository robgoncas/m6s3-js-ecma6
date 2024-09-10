
const array1 = [1,2,3,4];

const array2 = [8,9,10,22];

const nuevoArray = [...array1, ...array2];

console.log(...array1, ...array2);
console.log(nuevoArray);

const persona = {
    nombre: "r.g.",
    pais: "Chile"
};

console.log(persona);

const nuevaPersona = {...persona, nombre: "Roberto G."};

console.log(nuevaPersona);

console.log(...Object.values(persona));







// const persona = {
//     nombre: "r.g.",
//     pais: "Chile"
// };

// //no se puede cambiar el valor de una const tipo valor
// // const valorUFHoy = 38.005; 
// // valorUFHoy = 38.805; 

// const arrayFrutas = ["pera", "manzana", "plátano"];

// arrayFrutas.push("melón");

// arrayFrutas.pop();
// arrayFrutas.pop();
// arrayFrutas.pop();

// persona.nombre = "Roberto";

// persona.ciudad = "Valparaíso"

// console.log(persona);

// console.log(arrayFrutas);