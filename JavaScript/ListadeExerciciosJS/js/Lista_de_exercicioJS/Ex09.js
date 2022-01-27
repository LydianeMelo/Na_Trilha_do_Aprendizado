var n
n=prompt("Digite um número: ")


if(n%3==0 && n%7==0){
    alert(n+" é múltiplo de 3 e de 7!")

}
else{ 
    if(n%7==0){
    alert(n+" é múltiplo de 7!")
}
else{ 
    if(n%3==0){
    alert(n+" é múltiplo de 3!")
}
else{
    alert(n+" não é múltiplo de 3 nem de 7!")
}
}
}