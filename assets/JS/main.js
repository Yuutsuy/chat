var origem = document.getElementById('origem');
var destino = document.getElementById('destino');

if(origem.value !== '' && destino.value !== ''){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${origem.value}&destino=${destino.value}`);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            console.log(xhr);
        }
    }
}
var teste = function(){
    xhr.open('POST', 'https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php');
    xhr.send(msgDigitada.value);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                
            }
        }
    }
}