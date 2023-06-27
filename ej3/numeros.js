const Logger = require('logplease');
const logger = Logger.create('utils');


exports.esPar = (numero) => {
    if(numero%2 == 0){
        logger.log(`El número es par`);
        return true;
    } else{
        logger.error(`El número no es par`);
        return false
    }
};