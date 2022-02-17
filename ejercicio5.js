
let precioSaco = prompt("¡BUEN FIN! Agregue aquí el precio del saco para aplicar el descuento");

prompt("Parece que el saco tiene descuento del 18% ¡Agregalo aquí")
let descuento_18 = parseFloat(precioSaco) - (parseFloat(precioSaco) * .18);
console.log(descuento_18);

alert(`¡El precio final con 18% de descuento es de ${descuento_18}! `);

prompt("Agrega ahora un descuento de 10%")
let descuento_10 = parseFloat(precioSaco) - (parseFloat(precioSaco) * .10);
console.log(descuento_10);

alert(`El descuento con el 10% es: ${descuento_10}`);
