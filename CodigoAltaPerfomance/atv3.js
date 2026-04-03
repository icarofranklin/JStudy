/*
Você foi contratado para desenvolver um sistema em JavaScript que dobra o valor de
cada número em uma lista de preços de produtos. Os preços devem ser inseridos
diretamente no código, e o sistema deve criar um novo array onde cada preço é
multiplicado por 2. Utilize uma função arrow e o método map para resolver o problema.
*/

const precos = [10.0, 25.5, 40.0, 100.0, 7.25];

const precosDobrados = precos.map(preco => preco * 2);

console.log("Preços Originais:", precos);
console.log("Preços com 100% de aumento (Dobro):", precosDobrados);