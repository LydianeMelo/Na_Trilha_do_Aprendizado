function Enviar(){
    var name = document.getElementById("nome")
    var email = document.getElementById("email")
    var ok 

    if(nome.value !="" && nome.value.indexOf(" ")!=-1)
    {
        if(email.value.indexOf("@") !=-1) /*procure pelo seguinte o @*/
        {
            alert(nome.value+" Agradecemos os seu contato!")
            ok=true
        }
        else{
            alert("Digite um email váido!")
            ok=false
        }
    }
    else{
        alert("Preencha o seu nome completo! ")
        ok=false
    }
    return ok

}