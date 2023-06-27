let http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("Ejercicio 1");
  })

  .listen(8080);

const arrayNums = [2, 3, 101, 201, 202, 100];
const numeros = require("./numeros.js");

for (let numero of arrayNums) {
  console.log(numeros.esPar(numero));
}
