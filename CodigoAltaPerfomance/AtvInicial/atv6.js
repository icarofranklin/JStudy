/*
6- Você foi contratado para desenvolver um sistema em JavaScript que filtra os números
pares de um array de números e, em seguida, soma esses números. Os números devem
ser inseridos diretamente no código. O sistema deve utilizar arrow functions, o método
filter para encontrar os números pares e o método reduce para somar esses números.
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaPares = numeros
    .filter(n => n % 2 === 0)       // Filtra apenas números onde o resto da divisão por 2 é 0
    .reduce((acc, n) => acc + n, 0); // Soma os números que passaram pelo filtro

console.log("Números originais:", numeros);
console.log("Soma apenas dos números pares:", somaPares);