function Enviar(){
    var login= document.getElementById("login")
    var senha= document.getElementById("senha")
    var ok

    if(login.value=="aluno"){
        if(senha.value=="1234"){
            alert("Login e senha cadastrados, sistema liberado para acesso!")
            ok=true
        }
        else{
            if(senha.value=="")
            {
                alert("Digite sua senha!")
                ok=false
            }
            else if(senha.value!="1234")
            {
                alert("Senha incorreta, sistema bloqueado para acesso!")
                ok=false
            }
        }
    }
    else{
        if(login.value==""){
            alert("Digite o seu login!")
            ok=false
        }
        else if(login.value!="aluno"){
            alert("Login incorreto, sistema bloqueado para acesso!")
        }
    }
    return ok

}