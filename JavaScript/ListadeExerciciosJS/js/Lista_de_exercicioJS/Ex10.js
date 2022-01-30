var nome, valor, cont=0, x=2
nome=prompt("Digite o seu nome: ")
valor=prompt("Digite um valor: ")

if(valor==8){
    alert(nome+" Parabéns você acertou! \n 8 é o número da perfeição!!")
}
else{
    alert(nome+" Você errou, uma dica o número está entre "+x+" e 10")
    x=x+2
    while(valor!=8 && cont<3)
        {
            if(cont<2){
                valor=prompt("Digite outro valor: ")
                if(valor==8){
                    alert(nome+" Parabéns você acertou! \n 8 é o número da perfeição!!")
                }
                else{
                    alert(nome+" Você errou, uma dica o número está entre "+x+" e 10")
                    x=x+2
                }
            }
            else if(cont==2){
                valor=prompt("Digite outro valor: ")
                if(valor==8){
                    alert(nome+" Parabéns você acertou! \n 8 é o número da perfeição!!")
                }
                else{
                    alert(nome+" Que pena, você errou! \n O número correto é 8")
                }
            }
            cont++
        }
    
}