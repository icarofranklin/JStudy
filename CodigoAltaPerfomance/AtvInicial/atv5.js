/* 
5 - Você foi contratado para desenvolver um sistema em JavaScript que some os valores
de um array de números. Os números devem ser inseridos diretamente no código. Além
disso, você deve usar desestruturação para extrair os três primeiros números do array e
somá-los separadamente. O sistema também deve calcular a soma total de todos os
números no array usando o método reduce.
*/
const numeros = [10, 20, 30, 40, 50, 60];

const [primeiro, segundo, terceiro] = numeros;

const somaDosTresPrimeiros = primeiro + segundo + terceiro;

const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`Os três primeiros números são: ${primeiro}, ${segundo} e ${terceiro}`);
console.log(`Soma dos três primeiros: ${somaDosTresPrimeiros}`);
console.log(`Soma total de todos os números: ${somaTotal}`);