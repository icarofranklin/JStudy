// app.js
const fs = require('fs');
const path = require('path');
const { registrarLog } = require('./logger'); 

registrarLog("Aplicação iniciada", "INFO");
registrarLog("Tentativa de acesso suspeita", "WARN");
registrarLog("Falha ao conectar com o serviço de autenticação", "ERROR");

// ===== Leitura do arquivo usando stream =====
const caminhoLog = path.join(__dirname, 'log.txt');

// Cria stream de leitura
const readStream = fs.createReadStream(caminhoLog, { encoding: 'utf-8' });

readStream.on('data', (chunk) => {
    console.log("Chunk recebido:");
    console.log(chunk);
});

readStream.on('end', () => {
    console.log("Leitura finalizada.");
});

readStream.on('error', (erro) => {
    console.error("Erro na leitura:", erro);
});