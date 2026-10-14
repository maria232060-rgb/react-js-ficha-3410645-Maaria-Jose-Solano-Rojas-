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

let doble = parseFloat(prompt("Ingresa el número para calcular su cuadrado: "));

const cuadrado = numero => numero * numero;
console.log("Cuadrado de " + doble + ":", cuadrado(doble));

let edad = parseFloat(prompt("Ingresa la edad: "));

const esMayorEdad = edad => edad >= 18;
console.log("¿Es mayor de edad?:", esMayorEdad(edad));

let name = prompt("Ingresa el nombre: ");
let lastname = prompt("Ingresa el apellido: ");

const nombreCompleto = (name, lastname) => `${name} ${lastname}`;
console.log("Nombre completo:", nombreCompleto(name, lastname));

const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Perifericos', stock: 10 },
  { id: 5, nombre: 'Laptop Gamer', precio: 3500000, categoria: 'Computadores', stock: 2 },
  { id: 6, nombre: 'Impresora', precio: 450000, categoria: 'Oficina', stock: 0 },
  { id: 7, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 15 },
  { id: 8, nombre: 'Disco Duro SSD', precio: 280000, categoria: 'Almacenamiento', stock: 4 },
  { id: 9, nombre: 'Silla Gamer', precio: 750000, categoria: 'Oficina', stock: 1 },
  { id: 10, nombre: 'Webcam', precio: 150000, categoria: 'Perifericos', stock: 6 }
];

console.log("Lista de productos cargada:", productos);

productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - \$${producto.precio} - stock: ${producto.stock}`);
});


const nombres = productos.map(producto => producto.nombre);
console.log("Nombres:", nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log("Precios con IVA:", preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log("Nombres en mayúscula:", nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta \$${producto.precio}`);
console.log("Resumen de productos:", resumenProductos);
//RETO6
const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles:", disponibles);

const producto3 = productos.find(producto => producto.id === 3);
console.log("Producto con id 3:", producto3);


const mayoresA100k = productos.filter(producto => producto.precio > 100000);
console.log("Productos con precio > $100.000:", mayoresA100k);

const entre50y200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log("Productos entre $50.000 y $200.000:", entre50y200k);

const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
console.log("Productos de categoría Periféricos:", categoriaPerifericos);

const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con id 5:", producto5);

function buscarProducto(idBuscado) {
  return productos.find(producto => producto.id === idBuscado);
}
console.log("Resultado de buscarProducto(2):", buscarProducto(2));

// 7
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Existe algún producto agotado?:", hayAgotados);

const hayCaros = productos.some(producto => producto.precio > 1000000);
console.log("¿Existe algún producto mayor a $1.000.000?:", hayCaros);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos tienen precio mayor a 0?:", preciosValidos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock mayor o igual a 0?:", stockValido);

const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock), 
  0
);
console.log("Valor total del inventario: \$", valorInventario);

// 8
console.log(`El producto ${productos[0].nombre} cuesta \$${productos[0].precio}`);

const { nombre, precio, stock } = productos[0];
console.log("Desestructurado:", nombre, precio, stock);

const productoActualizado = {
  ...productos[0],
  precio: 55000,
  stock: 8
};
console.log("Producto original:", productos[0].precio);
console.log("Producto actualizado:", productoActualizado);

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log("Estado con ternario:", estado);

const fraseEstado = `El producto ${productoActualizado.nombre} está ${productoActualizado.stock > 0 ? 'Disponible' : 'Agotado'}`;
console.log(fraseEstado);

