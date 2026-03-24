// logger.js

const fs = require('fs');
const path = require('path');

// Caminho do arquivo de log
const caminhoLog = path.join(__dirname, 'log.txt');

// Cria stream de escrita (modo append)
const writeStream = fs.createWriteStream(caminhoLog, { flags: 'a' });

function registrarLog(mensagem) {
    const data = new Date().toISOString();
    const linha = `[${data}] ${mensagem}\n`;

    writeStream.write(linha);
}

module.exports = {
    registrarLog
};