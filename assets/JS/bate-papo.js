var elOrigem = document.getElementById('origem');
var elDestino = document.getElementById('destino');
var elMensagem = document.getElementById('msgDigitada');
var elLista = document.getElementById('msgExibidas');
var elEnvio = document.getElementById('Envio');

elOrigem.value = localStorage.nome;
elMensagem.addEventListener("keypress", function (eventoEnter) {
    if (eventoEnter.key === "Enter") {
        eventoEnter.preventDefault();
        elEnvio.click();
    }
  });

// abrindo uma requisição
var opRequest = new XMLHttpRequest(); // criando uma instância
opRequest.open('GET', ''); // consultando um url
opRequest.send(null); // não envia nada, pois está apenas consultando a api
// chaca o estado de prontidão
opRequest.onreadystatechange = function() {
    // checa o readyState da api
    if(opRequest.readyState === 4){
        // checa o status da api
        if(opRequest.status === 200){
            // cria variavel que vai receber a esposta da api (responseText) em forma de objeto
            var resApi = JSON.parse(opRequest.responseText);
            // percorre o objeto
            for(i=0;i<resApi.length;i++){
                // cria um let que vai criar um elemento html
                let opt = document.createElement('option');
                // cria condição para imprimir apenas os nomes que não estiverem na caixa de entrada de "origem"
                if(elOrigem.value !== resApi[i].nome){
                    opt.innerHTML = resApi[i].nome;
                    elDestino.appendChild(opt);
                };
            };
        };
    };
};

// setInterval usado para atualizar as mensagens exibidas
setInterval(function(){
    var xhr = new XMLHttpRequest(); // recebe instância

    xhr.open('GET', ``); // consulta api pelo link, enviando o que foi digitado nos campos de entrada de dados(input's)
    xhr.send(null); // não envia nada para a api, pois está apenas consultando com o 'GET'
    // checa status da api para saber se ela está pronta para consulta
    xhr.onreadystatechange = function() {
        // checa readyState da api
        if(xhr.readyState === 4){
            // checa status da api
            if(xhr.status === 200){
                // limpa o campo das mensagens
                elLista.innerHTML = '';
                // var result recebe resposta da api
                var result = JSON.parse(xhr.responseText);
                // percorre todas as mensagens criadas na api
                for(i=0;i<result.length;i++){
                    // definindo variaveis com elementos html para serem criados
                    let li = document.createElement('li');
                    let titulo = document.createElement('h5');
                    let paragraf = document.createElement('p');

                    // cria tag h5 contendo nome de quem enviou a mensagem
                    titulo.innerHTML = result[i].origem;
                    // appenda em uma lista
                    li.appendChild(titulo);

                    // cria tag p contendo texto
                    paragraf.innerHTML = result[i].mensagem;
                    // appenda em uma lista
                    li.appendChild(paragraf);
                    
                    // condição para exibir a mensagem para esquerda ou direita
                    if(localStorage.nome === result[i].origem){
                        // recebe classList para exibir mensagem para a esquerda
                        li.classList.add('esquerda');
                        // appenda tudo ao elLista
                        elLista.appendChild(li); 
                    }else{
                        // recebe classList para exibir mensagem para a direita
                        li.classList.add('direita');
                        
                        // appenda tudo ao elLista
                        elLista.appendChild(li); 
                    };
                };
            };
        };
    };
}, 5000);

// chama função com o click do botão 'enviar'
var enviar = function() {

    // cria obj para ser enviado para a api
    var obj = {
        origem : elOrigem.value,
        destino : elDestino.value,
        mensagem : elMensagem.value
    };

    // consulta a api
    var xhr = new XMLHttpRequest(); // recebe instância
    xhr.open('POST', ``); // consulta api pelo link    
    xhr.send(JSON.stringify(obj)); // método send que envia ou não alguma coisa para a api
    // checa o status da api para saber se está pronta para consultar
    xhr.onreadystatechange = function() {
        // checa retorno do readyState (se retorna 4, está ok)
        if(xhr.readyState === 4){ 
            // checa retorno do status (se retorna 201, criou com sucesso)
            if(xhr.status === 201){
                // exibe no console a resposta da api para a criação do obj
                console.log(xhr);
                console.log(xhr.responseText);
            };
        };
    };
    // limpa o campo de mensagem
    elMensagem.value = '';
};