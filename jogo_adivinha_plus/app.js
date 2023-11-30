let numeroSorteado, chute, numerosChutados = "", tentativas = 5;
let botaoChutar =  document.querySelector('#chutar'); 
let botaoNovoJogo =  document.querySelector('#reiniciar'); 
let campoChute =  document.querySelector('#campoChute');                       // Variáveis globais

function atualizaTextos(){
    exibirTexto('h1', 'Jogo - Número secreto');                 // Exibe o título - tag h1
    exibirTexto('p1', 'Digite um número de 0 e 100:');        // Exibe o paragrafo - tag p1
    exibirTexto('p2', 'Tentativas restantes: ' + tentativas);   // Exibe o paragrafo - tag p2
    exibirTexto('p3', 'Números chutados: ' + numerosChutados);  // Exibe o paragrafo - tag p3    
    campoChute.focus();
}

const delayms = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

const delay = async (texto) => { 
    let maiorMenor = numeroSorteado > chute ? "maior" : "menor"; 
    campoChute.value = 'Ops, Você errou! O número é '+maiorMenor+'!'; 
    let delayres = await delayms(500);         
    campoChute.value = "";
    delayres = await delayms(500);
    campoChute.value = 'Ops, Você errou! O número é '+maiorMenor+'!';
    delayres = await delayms(500);
    campoChute.value = "";
    campoChute.focus();
};

function exibirTexto(tag, texto) {                          // Função para exibir texto no html
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function novoJogo() {                                       // Função para sortear o número secreto.
    numeroSorteado = Math.round(Math.random() * 101);       // retorna o número secreto sorteado 
    botaoChutar.disabled = false; 
    botaoNovoJogo.disabled = true;
    tentativas = 10;
    campoChute.value = "";
    campoChute.focus(); 
    numerosChutados = "";
    atualizaTextos();
}

function verificarChute() {                                 // Função para verificar o chute
    chute = campoChute.value; 
    campoChute.value = "";
    numerosChutados += chute + ', ';
    if (numeroSorteado == chute) {
        campoChute.value = 'Parabens! Você acertou! Número "'+numeroSorteado+'"!';
        atualizaTextos();
        botaoChutar.disabled = true; 
        botaoNovoJogo.disabled = false;         
    } else {                
        tentativas--;
        if (!tentativas) {
            campoChute.value = 'Ops, Você errou! O número era: "'+numeroSorteado+'"!';
            atualizaTextos();
            botaoChutar.disabled = true; 
            botaoNovoJogo.disabled = false; 
        } else {
            delay();
            atualizaTextos();
        }        
    }
    
}
novoJogo();                                                     // Chama a função e sorteia o numero secreto
atualizaTextos();                                               // Atualiza textos na tela
