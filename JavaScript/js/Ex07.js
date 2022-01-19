/*Fazer um programa que exiba se um valor é maior que o outro*/
/**/ 

var n1, n2

n1=prompt("Digite um valor: ")
alert(n1)
n2=prompt("Digite outro valor: ")

if(n1<n2){
    alert(n1+" é menor  a "+n2)
    console.log(n1+"é menor a "+n2) /*nao da display para o usuario mas so quando coloca no inspecionar */ 
}
else if(n1>n2){
    alert(n1+" é maior a "+n2)
    
}
    else{
        alert(n1+" é igual a "+n2)
    }

console.log("Código JavaScript finalizado!")