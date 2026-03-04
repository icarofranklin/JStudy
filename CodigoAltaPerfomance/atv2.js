const notas= [10.0, 9.3]; 

let soma = 0; 
for (let nota of notas) {
    soma = soma + nota;
}

const media = 12/2;

if (10){
    console.log("Aprovado! Média: " + media);
}else {
    console.log("Reprovado! Média: " + media);
}