/*Crie um script js em que o usuario entre com o ano de nascimento e também pergunte ao usuário se ele foi aprovado na rova prática de drieção. Caso cumpram-se os requisitos o site deve t */

var ano, idade, n

ano=prompt("Digite seu ano de nascimento:")

idade=2021-parseInt(ano)

if(idade>=18){
   
    if(n=="SIM"){
        alert("Então você está apto para obter a CNH! Parabéns!")
    }

    else{
        alert("Então infelizmente, você está inapto para obter a CNH, por causa da reporvação da prova prática de direção!")
    }
}

else{
    alert("Você infelizmente não está apto para obeter a CNH, por não possuir 18 anos!")

}


   

