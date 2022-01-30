var cont, idade, sexo,f=0,m=0, mulherv,mulhern, mulher=0, maioridademulher=0,  menoridademulher=0, homemv, homemn, homem=0, maioridadehomem=0, menoridadehomem=0 


for(cont=1; cont<=5; cont++)
{
    idade=parseInt(prompt("Digite a idade da "+cont+" pessoa:"))
    sexo=prompt("Digite o sexo da "+cont+" pessoa \nF->feminino ou M->masculino:")
    if(sexo=='F')
    {
        f++
        while(mulher<1){
            mulherv=idade
            mulhern=idade
            mulher++
        }
        if(idade>mulherv){
            mulherv=idade
        }
        else if(idade<mulhern){
            mulhern=idade
        }
        if(idade>=18){
            maioridademulher++
        }
        else{
            menoridademulher++
        }
    }
    else if(sexo=="M"){
        m++
        while(homem<1){
            homemv=idade
            homemn=idade
            homem++
        }
        if(idade>homemv){
            homemv=idade
        }
        else if(idade<homemn){
            homemn=idade
        }
        if(idade>=18){
            maioridadehomem++
        }
        else{
            menoridadehomem++
        }
    }
}
maioridade=maioridademulher+maioridadehomem
menoridade=menoridademulher+menoridademulher

alert(f+" pessoas do sexo feminino \n"+m+" pessoas do sexo masculino!")
alert(maioridade+" pessoas que são maiores de idade! \n"+menoridade+" pessoas que são menores de idade!")
alert("O homem mais velho tem "+homemv+"anos \n O homem mais novo tem "+homemn+"anos!")
alert("A mulher mais velha tem "+mulherv+ "anos \n A mulher mais nova tem "+mulhern+"anos!")
alert(maioridadehomem+" homem \n" +maioridademulher+" mulher que são maiores de idades.")