var a1, razao, n, PG, cont


a1=prompt("Digite o primeiro termo:")
razao=prompt("Digite a razão: ")
n=prompt("Digite a quantidade de termos que deseja:")
PG=a1



for(cont=1;cont<=n;cont++){
    PG=PG*razao
    
    
}

alert(PG)
document.write("A Progressão Geomértica é: "+PG)

