var elEmail = document.getElementById('email');
var elSenha = document.getElementById('senha');

var logar = function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open(
        'GET', 
        `https://barth.com.br/ApiChatCliqx/chat/verificarLogin.php?email=${elEmail.value}&senha=${elSenha.value}`);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                
            }
        }
    }
}