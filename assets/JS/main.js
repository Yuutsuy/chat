var origem = document.getElementById('origem');
var destino = document.getElementById('destino');
var mensagem = document.getElementById('msgDigitada');
var elLista = document.getElementById('msgExibidas');

var enviar = function() {

    var obj = {
        origem : origem.value,
        destino : destino.value,
        mensagem : mensagem.value
    };

    var xhr = new XMLHttpRequest(); // recebe instância
    xhr.open('POST', `https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php`);
    
    console.log(obj);
    
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 201){
                console.log(xhr.responseText);
            };
        };
    };
    mensagem.value = '';
};


    var xhr = new XMLHttpRequest(); // recebe instância

    xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${origem.value}&destino=${destino.value}`);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                console.log(result);
                result = xhr.responseText;
                for(i=0;i<result.length;i++){
                    
                    // var li = document.createElement('li');                    
                    // elLista.appendChild(li);
                }
            }else{
                console.log("erro no status do get");
            };
        };
    };
