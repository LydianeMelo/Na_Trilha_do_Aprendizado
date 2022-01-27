var cont, idade, sexo,f,m


for(i=1; i<5; i++)
{
    idade=parseInt(prompt("Digite sua idade:"))
    sexo=prompt("Digite seu sexo F ou M:")
    if(sexo=='F')
    {
        f=idade
        contf++
    }
    else if(sexo=='M'){
        m=idade
        contm++
    }

}