/*
Você foi contratado para desenvolver um sistema em JavaScript que faça verificação 
da idade do usuário.  Com base na idade fornecida, o sistema exibirá uma mensagem 
apropriada. Se o usuário tiver menos de 18 anos, o sistema deverá informar que ele é 
menor de idade. Se a idade estiver entre 18 e 60 anos, o sistema dirá que ele é um adulto. 
Caso o usuário tenha mais de 60 anos, o sistema exibirá a mensagem dizendo que ele é 
idoso.
*/

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