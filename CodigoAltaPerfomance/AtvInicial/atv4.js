/* 
4- Você foi contratado para desenvolver um sistema em JavaScript que filtra uma lista
de números e retorna apenas os números maiores que 10. Além disso, o sistema deve
combinar o array filtrado com um novo número (por exemplo, 70). Os números devem
ser inseridos diretamente no código, e o sistema deve criar um novo array contendo
apenas os números maiores que 10 e o número adicional. Utilize uma função arrow, o
método filter, e o operador spread para resolver o problema.
*/
const numeros = [5, 12, 8, 20, 3, 45, 9];

const numeroExtra = 70;

const resultadoFinal = [...numeros.filter(n => n > 10), numeroExtra];

console.log("Números Maiores que 10 + Número Extra:", resultadoFinal);