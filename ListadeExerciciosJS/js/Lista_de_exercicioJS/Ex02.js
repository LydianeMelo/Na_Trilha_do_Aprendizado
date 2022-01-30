var valor, valorconvertido, r

valor=prompt("Digite o valor:")

r=prompt("Você deseja realizar a conversão para Dólar digite:1 para Real digite: 2")

if(r==1){
    valorconvertido=parseFloat(valor) / 5.46
    alert("A conversão do valor digitado para dólar é: US$" + valorconvertido)
}
else{
    valorconvertido=parseFloat(valor) * 5.46
    alert("A conversão do valor digitado para reais é: R$" + valorconvertido)
}
