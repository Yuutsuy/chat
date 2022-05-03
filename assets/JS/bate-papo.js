var elOrigem = document.getElementById('origem');
var elDestino = document.getElementById('destino');
var elMensagem = document.getElementById('msgDigitada');
var elLista = document.getElementById('msgExibidas');

setInterval(function(){
    var xhr = new XMLHttpRequest(); // recebe instância

    xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${elOrigem.value}&destino=${elDestino.value}`);
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

                    // cria tag h5 contendo nome de quem enviou a mensagem
                    titulo.innerHTML = result[i].origem;
                    // appenda em uma lista
                    li.appendChild(titulo);

                    // cria tag p contendo texto
                    paragraf.innerHTML = result[i].mensagem;
                    // appenda em uma lista
                    li.appendChild(paragraf);
                    
                    if(elOrigem.value === result[i].origem){
                        li.classList.add('esquerda');
                        // appenda tudo ao elLista
                        elLista.appendChild(li); 
                    }else{
                        // criando uma classList para adicionar a li
                        li.classList.add('direita');
                        
                        // appenda tudo ao elLista
                        elLista.appendChild(li); 
                    }
                };
            };
        };
    };
}, 2000);

var enviar = function() {

    var obj = {
        origem : elOrigem.value,
        destino : elDestino.value,
        mensagem : elMensagem.value
    };

    var xhr = new XMLHttpRequest(); // recebe instância
    xhr.open('POST', `https://barth.com.br/ApiChatCliqx/chat/inserirMensagem.php`);
    
    console.log(obj);
    
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 201){
                console.log(xhr);
                console.log(xhr.responseText);
            };
        };
    };
    elMensagem.value = '';
};