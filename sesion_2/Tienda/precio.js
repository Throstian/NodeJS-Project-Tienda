const precio = Number(process.argv[2]);
const cantidad = Number(process.argv[3]);

console.log("Sin Number:", process.argv[2] + process.argv[3]);
console.log(`Total: $${precio * cantidad}`);