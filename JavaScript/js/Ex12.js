/*declarando vetor o arrey em java scrript é vista como um objeto*/

var v=[4, 8, 7, 6] 
//alert(v)
//alert(v[1])
v[2]=3
//alert(v)

var soma= v[0]+v[3]
//alert("A soma do elemento 0 com o elemento 3 do vetor é"+soma)

lista=["Juquinha", 1910,"Rua A","Irati", "PR", 80.5]
alert(lista)
alert(lista[0]) //para acessar o nome coloca lista e a posição

for(var i=0; i<lista.length; i++) { //length vai até o final do elemnto
    documento.write("<h2>"+lista[i]+"</h2>")// vai escrever no documento html
}   

lista.push("84500-000")//push vai adicionar um elemnto no final da lista, na ultima posição da lista
lista.push("teste")
alert(lista)
lista.pop()//para remover o último elemento da lista
alert(lista)
lista.shift()//remove o primeiro elemento da lista
alert(lista)
lista.unshift("Zequinha") //adiciona na primeira posição da lista
alert(lista)

var posicao//criar uma variavel

posicao = lista.indexOf("Irati") // retorna o index do elemnto procura, cso seja -1 é por nao achar esse elemento 
alert(posicao)




