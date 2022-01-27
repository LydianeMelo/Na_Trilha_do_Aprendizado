var n, cont, t

n=parseInt(prompt("Entre com o valor de tabuada:"))
cont=0

while(cont<11)
{
    t=n*cont
    document.write("<h2>" +t+"</h2>") /*vai escrever um documento HTML, entre as as oq deseja exibir*/
    cont++
}