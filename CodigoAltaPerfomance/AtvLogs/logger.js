// logger.js
const fs = require('fs');
const path = require('path');

// Caminho do arquivo de log definido uma única vez
const caminhoLog = path.join(__dirname, 'log.txt');

function limparLogs() {
    try {
        fs.truncateSync(caminhoLog, 0);
        console.log("> Arquivo log.txt limpo com sucesso.");
    } catch (err) {
        console.error("> Erro ao tentar limpar o log:", err);
    }
}

if (process.argv.includes('--clear')) {
    limparLogs();
}

const writeStream = fs.createWriteStream(caminhoLog, { flags: 'a' });

function registrarLog(mensagem, nivel = 'INFO') {
    const data = new Date().toISOString();
    const linha = `[${data}] [${nivel}] ${mensagem}\n`;
    writeStream.write(linha);
}

module.exports = {
    registrarLog
};