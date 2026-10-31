const precio = Number(process.argv[2]); 
const cantidad = Number(process.argv[3]); 
if (process.argv.length < 4) { 
console.log("Faltan datos. Escribe: node validar.js <precio> <cantidad>"); 
} else if (isNaN(precio) || isNaN(cantidad)) { 
console.log("ERROR: el precio y la cantidad deben ser números"); 
} else { 
console.log(`Datos correctos: precio ${precio}, cantidad ${cantidad}`); 
}