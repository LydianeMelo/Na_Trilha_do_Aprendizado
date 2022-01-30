var n=0, ant1=0, ant2=1, cont=0, e

e=prompt("Digite a quantidade de elemento para a série de Fibonacci: ")
document.write("Série de Fibonacci: ")
while(cont<e)
{
    document.write(n+ " " )
    n=ant1+ant2
    ant2=ant1
    ant1=n
    cont++
}
