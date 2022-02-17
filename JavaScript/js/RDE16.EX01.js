function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var datanasc= document.getElementById("datanasc")
    var comentario= document.getElementById("comentario")
    var ok

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            if(datanasc.value!="" && datanasc.value<'2010'){
                if(comentario.value.length>=50){
                    alert(nome.value +"Agradecemos o seu contato!")
                    ok=true
                }
                else{
                    alert("Digite no mínimo 50 caracteres no seu comentário!")
                    ok=false
                }
            }
            else
            {
                alert("Não deixe a data de nascimento em branco e ela não será aceita caso for posterior ao ano de 2010!")
                ok=false
            } 
         }
         else{
            alert("Digite um email válido!")
            ok=false
        }
    }
    else{
        alert("Digite seu nome completo!")
        ok=false
    }
    return ok
}
