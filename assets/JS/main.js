var origem = document.getElementById('origem');
var destino = document.getElementById('destino');
var mensagem = document.getElementById('msgDigitada');

var obj = {
    "origem" : origem.value,
    "destino" : destino.value,
    "mensagem" : mensagem.value
};

var xhr = new XMLHttpRequest(); // recebe instância

xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${obj.origem}&lt;nome_origem&gt;&amp;destino=${obj.destino}&lt;nome_destino&gt;`);
xhr.send(null);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.obj);
        }else{
            console.log("erro no status do get");
        };
    };
};

var enviar = function() {
    var xhr = new XMLHttpRequest(); // recebe instância

    xhr.open('POST', `https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php`);
    xhr.send(JSON.parse(obj));
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 201){
                console.log(xhr.responseText);
            };
        };
    };
};
