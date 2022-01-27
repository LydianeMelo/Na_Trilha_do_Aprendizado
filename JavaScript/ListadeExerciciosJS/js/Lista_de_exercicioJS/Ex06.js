var n1, n2, n3, n4, n5

n1=prompt("Digite o primeiro valor: ")

n2=prompt("Digite o segundo valor: ")

n3=prompt("Digite o terceiro valor: ")

n4=prompt("Digite o quarto valor: ")

n5=prompt("Digite o quinto valor: ")



if(n1>n2 && n1>n3 && n1>n4 && n1>n5){
    alert(" O maior é "+n1)
}
    else{
        if(n2>n1 && n2>n3 && n2>n4 && n2>n5){
            alert(" O maior é "+n2)
        }
        else{
            if(n3>n1 && n3>n2 && n3>n4 && n3>n5){
                alert(" O maior é "+n3)
            }
            else{
                if(n4>n1 && n4>n3 && n4>n2 && n4>n5){
                    alert(" O maior é "+n4)
                }
                else{
                    if(n5>n1 && n5>n2 && n5>n3 && n5>n4){
                        alert(" O maior é "+n5)
                    }
                }
            }
        }
    }
                    
if(n1<n2 && n1<n3 && n1<n4 && n1<n5){
    alert(" O menor é "+n1)
}
    else{
        if(n2<n1 && n2<n3 && n2<n4 && n2<n5){
            alert(" O menor é "+n2)
        }
        else{
            if(n3<n1 && n3<n2 && n3<n4 && n3<n5){
                alert(" O menor é "+n3)
            }
            else{
                if(n4<n1 && n4<n3 && n4<n2 && n4<n5){
                    alert(" O menor é "+n4)
                }
                else{
                    if(n5<n1 && n5<n2 && n5<n3 && n5<n4){
                        alert(" O menor é "+n5)
                    }
                }
            }
        }
    }   

