const idade = 23; 

if (idade < 18){
    console.log("Você é menor de idade");

} else if(idade <= 60) {
    console.log("Você é maior de idade")
} else {
    console.log("Já passou da validade!")
}

/*
No JS moderno, você não declara o tipo da variável. Usamos const para valores que não mudam e let para valores que podem ser reatribuídos depois.
*/