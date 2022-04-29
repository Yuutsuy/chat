var origem = document.getElementById('origem');
var destino = document.getElementById('destino');

if(origem.value !== '' && destino.value !== ''){
    if(origem.value === xhr.origem && destino.value === xhr.destino){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', `https://barth.com.br/ApiChatCliqx/chat/verificarMensagem.php?origem=${origem.value}&destino=${destino.value}`);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    alert('acessou')
                    
                }
            }
        }
    }
}