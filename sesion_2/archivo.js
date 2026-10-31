import fs from "node:fs";

fs.writeFileSync("saludo.txt", "Hola desde Node.js");
const contenido = fs.readFileSync("saludo.txt", "utf8");
console.log(contenido);

fs.writeFileSync("lista-compras.txt", "Arroz 500 g\nLeche 1 L\nPan tajado");
const listaCompras = fs.readFileSync("lista-compras.txt", "utf8");
console.log(listaCompras);