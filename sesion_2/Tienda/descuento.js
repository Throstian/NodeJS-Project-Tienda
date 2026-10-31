
const precio = Number(process.argv[2]);
const porcentaje = Number(process.argv[3]);

if (process.argv.length < 4) {
  console.log("Faltan datos. Escribe: node descuento.js <precio> <porcentaje>");
} else if (isNaN(precio) || isNaN(porcentaje)) {
  console.log("ERROR: el precio y el porcentaje deben ser números");
} else {
  const precioFinal = precio - (precio * porcentaje / 100);
  console.log(`Precio con ${porcentaje}% de descuento: $${precioFinal}`);
}
