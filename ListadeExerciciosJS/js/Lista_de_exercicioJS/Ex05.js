var a1, razao, n, PG, cont


a1=prompt("Digite o primeiro termo:")
razao=prompt("Digite a razão: ")
n=prompt("Digite a quantidade de termos que deseja:")
PG=a1
document.write("A Progressão Geomértica é: ")

for(cont=1;cont<=n;cont++){

    if(cont<n){
        document.write(PG+",")
    }
    else{
        document.write(PG)
    }
     PG=PG*razao
    
}
