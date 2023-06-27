let http = require("http");

http.createServer((req, res) =>{

res.writeHead(200, { "Content-Type": "text/html" });

res.end("Ejercicio 2");

})

.listen(8080);
const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);