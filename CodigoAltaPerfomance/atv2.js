/*
Você foi contratado para desenvolver um sistema em JavaScript que calcula a média 
das notas de um aluno. As notas devem ser inseridas diretamente no código. Após todas 
as notas serem inseridas, o sistema deve calcular a média e exibir: 
• "Aprovado" se a média for maior ou igual a 7. 
• "Reprovado" se a média for menor que 7. 
Você deve definir um array notas contendo as notas do aluno.
*/

const notas= [10.0, 9.3, 8.2, 7.5]; 

const soma = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);

const media = soma / notas.length;

console.log(`Média: ${media.toFixed(1)}`);

if (media >= 7) {
    console.log("Status: Aprovado");
} else {
    console.log("Status: Reprovado");
}