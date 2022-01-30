var n, cont, f




n=prompt("Digite um número para gerar o fatorial: ")
 

for(f=1; n>1; n=n-1){
    
    f=parseInt(f)*parseInt(n)
    
    
}
alert("O fatorial do número é: "+f)
document.write("O fatorial do número digitado é "+f)
   