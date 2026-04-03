// logger.js
const fs = require('fs');
const path = require('path');

// Caminho do arquivo de log
const caminhoLog = path.join(__dirname, 'log.txt');

function limparLogs() {
    try {
        fs.truncateSync(caminhoLog, 0);
        console.log("Arquivo de log foi limpo.");
    } catch (err) {
        console.log("Erro ao limpar:", err);
    }
}

// Verifica o terminal
if (process.argv.includes('--clear')) {
    limparLogs();
}

// Cria stream de escrita (modo append)
const writeStream = fs.createWriteStream(caminhoLog, { flags: 'a' });

function registrarLog(mensagem, nivel) {
    const data = new Date().toISOString();
    const linha = `[${data}] [${nivel}] ${mensagem}\n`;
    
    writeStream.write(linha);
}

module.exports = {
    registrarLog
};