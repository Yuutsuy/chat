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

setInterval(function(){
    var xhr = new XMLHttpRequest(); // recebe instância

    xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${origem.value}&destino=${destino.value}`);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                elLista.innerHTML = '';
                var result = JSON.parse(xhr.responseText);
                for(i=0;i<result.length;i++){
                    var li = document.createElement('li');
                    var titulo = document.createElement('h5');
                    var paragraf = document.createElement('p');

                    // cria tag h5 contendo nome
                    titulo.innerHTML = result[i].origem;
                    // appenda em uma lista
                    li.appendChild(titulo);

                    // cria tag p contendo texto
                    paragraf.innerHTML = result[i].mensagem;
                    // appenda em uma lista
                    li.appendChild(paragraf);

                    // appenda tudo ao elLista
                    elLista.appendChild(li);
                }
            }
        };
    };
}, 1000);