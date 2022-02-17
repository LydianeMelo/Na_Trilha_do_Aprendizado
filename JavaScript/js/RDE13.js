function somar(){
    var n1, n2, resultado

    n1= parseFloat(document.getElementById("n1").value)
    

    n2= parseFloat(document.getElementById("n2").value)
    
    res=n1+n2
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${res}`/*inserindo algum tipo de dado vai ejetar codigos no html a partir do javascript, USA O SINAL DA CRASE ´´ os dados dentro do javscript irão para o HTML*/



}