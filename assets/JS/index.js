var elEmail = document.getElementById('email');
var elSenha = document.getElementById('senha');

var logar = function(){
    localStorage.clear();
    var xhr = new XMLHttpRequest();

    xhr.open(
        'GET', 
        `https://barth.com.br/ApiChatCliqx/chat/verificarLogin.php?email=${elEmail.value}&senha=${elSenha.value}`);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var res = JSON.parse(xhr.responseText);
                console.log(res.nome);
                if(res.login === true){
                    localStorage.setItem("nome",res.nome);
                    window.location.href = `../../JAVASCRIPT/chat/bate-papo.html`;
                    // window.location.href = `../../bate-papo.html`;
                }else{
                    alert('Email ou senha incorretos')
                };
            };
        };
    };
};