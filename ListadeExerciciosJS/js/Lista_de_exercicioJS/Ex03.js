var n1,n2,n3,n4,media

n1=prompt("Digite a primeira nota:")
n2=prompt("Digite a segunda nota:")
n3=prompt("Digite a terceira nota:")
n4=prompt("Digite a quarta nota:")

media= (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4


if(media>=9 && media<=10){
    alert("Sua média é: "+media+"\n Conceito A")
}
    else{
        if(media>=8 && media>9){
            alert("Sua média é: "+media+"\n Conceito B")
        }
        else{
            if(media>=7 && media<8){
                alert("Sua média é: "+media+"\n Conceito C")
            }
            else{   
                if(media<7){
                     alert("Sua média é: "+media+"\n Conceito D")
                }
            }
        }
    }
