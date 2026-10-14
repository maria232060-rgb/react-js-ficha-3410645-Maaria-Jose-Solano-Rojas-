console.log("JavaScript listo para practicar"); 

function calcularTotal(precio, cantidad) { const total = precio * cantidad; return total; } 
 const resultado = calcularTotal(50000, 3); console.log(resultado); 





import promptSync from 'prompt-sync';
const prompt = promptSync();

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));

console.log("Suma:", sumar(num1, num2));
console.log("Resta:", restar(num1, num2));
console.log("Multiplicación:", multiplicar(num1, num2));
console.log("División:", dividir(num1, num2));

let nota1 = parseFloat(prompt("Ingresa la primera nota: "));
let nota2 = parseFloat(prompt("Ingresa la segunda nota: "));
let nota3 = parseFloat(prompt("Ingresa la tercera nota: "));

console.log("Promedio:", calcularPromedio(nota1, nota2, nota3));
// console.log() imprime el resultado en la consola, mientras que return devuelve el valor para poder usarlo en el código.