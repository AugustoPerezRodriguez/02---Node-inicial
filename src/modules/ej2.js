/* Importo la constante PI y la función sumar del módulo matematica. */


import {PI, sumar, restar, multiplicar, dividir, numerosTexto } from './matematica.js';


let total, numero1=10, numero2=20,total1,total2,total3;

console.clear();

console.log(`La constante PI vale '${PI}'`);        // Uso la constante PI importada.


total = sumar(numero1, numero2);                        // Uso la función sumar importada.

total1 = restar(numero2,numero1);

total2 = multiplicar(numero1,numero2);

total3 = dividir(numero2,numero1);

console.log(numerosTexto);

console.log(`sumar(${numero1}, ${numero2}) =  ${total}`);
console.log(`restar(${numero2}, ${numero1}) =  ${total1}`);
console.log(`multiplicar(${numero1}, ${numero2}) =  ${total2}`);
console.log(`dividir(${numero2}, ${numero1}) =  ${total3}`);

