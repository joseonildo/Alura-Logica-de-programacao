let numeroSorteado, numeroChutado, tentativas = 5;
let botaoChutar =  document.querySelector('#chutar'); 
let botaoNovoJogo =  document.querySelector('#reiniciar'); 
let campoChute =  document.querySelector('#campoChute');                       // Variáveis globais

function exibirTexto(tag, texto) {                          // Função para exibir texto no html
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function sortearNumero() {                                   // Função para sortear o número secreto.
    numeroSorteado = Math.round(Math.random() * 10);        // retorna o número secreto sorteado 
    botaoChutar.disabled = false; 
    botaoNovoJogo.disabled = true;
    campoChute.focus(); 
}


function verificarChute() {                                 // Função para verificar o chute
    numeroChutado = campoChute.value; 
    campoChute.value = "";
    campoChute.focus();   
    if (numeroSorteado == numeroChutado) {
        alert(`Parabens, Você acertou o número secreto`);
        tentativas = 5;
        botaoChutar.disabled = true; 
        botaoNovoJogo.disabled = false;         
    } else {
        alert(`Ops, Você errou o número secreto`);
        tentativas--;
        if (!tentativas) {
            botaoChutar.disabled = true; 
            botaoNovoJogo.disabled = false; 
        }
    }
    
}

exibirTexto('h1', 'Jogo - Número secreto');                 // Exibe o título - tag h1
exibirTexto('p', 'Digite um número entre 1 e 10:');         // Exibe o paragrafo - tag p
sortearNumero();                                            // Chama a função e sorteia o numero secreto
campoChute.focus();                                        
