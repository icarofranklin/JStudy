// app.js
const fs = require('fs');
const path = require('path');
const { registrarLog } = require('./logger');

// Registra algumas mensagens
registrarLog("Aplicação iniciada", "INFO");
registrarLog("Usuário fez login", "WARN");
registrarLog("Usuário fez logout", "ERROR");
// ===== Leitura do arquivo usando stream =====

const caminhoLog = path.join(__dirname, 'log.txt');

// Cria stream de leitura
const readStream = fs.createReadStream(caminhoLog, { encoding: 'utf-8' });

// Evento disparado quando um pedaço (chunk) é lido
readStream.on('data', (chunk) => {
    console.log("Chunk recebido:");
    console.log(chunk);
});

// Evento disparado quando a leitura termina
readStream.on('end', () => {
    console.log("Leitura finalizada.");
});

// Evento disparado se ocorrer erro
readStream.on('error', (erro) => {
    console.error("Erro na leitura:", erro);
});