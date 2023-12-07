let numeroSorteado, numerosJaChutados = [], tentativas, menor, maior;    // Variáveis globais
let botaoChutar =  document.querySelector('#chutar');                    // Define botão Chutar 
let botaoNovoJogo =  document.querySelector('#novoJogo');                // Define botão Novo Jogo 
let campoChute =  document.querySelector('#campoChute');                 // Define o campo de entrada de dados

const delayms = (delayInms) => {                                         // Constante para contar o tempo (delay)
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

function atualizaTextos(chutar, novoJogo){                              // Função para atualizar os textos e botões na tela
    exibirTexto('h1', 'Jogo - Número secreto');                         // Exibe o título h1    
    exibirTexto('p1', 'Tentativas restantes: ' + tentativas);           // Exibe o paragrafo p1
    exibirTexto('p2', 'Chutados: ' + numerosJaChutados);                // Exibe o paragrafo p2    
    botaoChutar.disabled = chutar; 
    botaoNovoJogo.disabled = novoJogo;
    campoChute.focus();                                                 // coloca o ponteiro no campo chute
}

function exibirTexto(tag, texto) {                                      // Função para exibir texto nas tags html
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function novoJogo() {                                                   // Função inicia o jogo ou um Novo Jogo
    tentativas = 10;                                                    // Define tentativas iniciais em 10
    maior = 100;                                                        // Define o número máximo do jogo
    menor = 0;                                                          // Define o número mínimo do jogo
    numeroSorteado = Math.round(Math.random() * (maior + 1));           // Armazena o número secreto sorteado    
    campoChute.value = "";                                              // Esvazia o campo imput para digitação
    numerosJaChutados = [];                                             // Esvazia os números já chutados    
    campoChute.placeholder = 'Digite aqui um número entre '+menor+' e '+maior;  // Exibe orientação inicial
    atualizaTextos(false,true);                                         // Chama a função para atualizar os textos e botões na tela
}

function verificaJaChutado(chute){                                      // Função para verificar se o número já foi chutado
    let jachutado = false;
    for (let i=0;i<numerosJaChutados.length;i++) {
        if (chute == numerosJaChutados[i]) {
            jachutado = true;            
        }
    }    
    return jachutado;
}

function exibeJaChutado(chute){                                         // Função para verificar se o número já foi chutado             
    campoChute.placeholder = 'ERRO! Número '+chute+' já chutado! Tente outro!';
    campoChute.focus();
}

function exibeForaDaFaixa(chute){                                       // Função para exibir se o número já foi chutado
    campoChute.placeholder = 'ERRO! Digite um número entre '+menor+' e '+maior+'!';
    campoChute.focus();
}

function exibeAcerto(chute){                                            // Função para exibir que acertou o número secreto
    numerosJaChutados.push(chute);                                      // Acrescenta o número chutado na lista
    campoChute.value = 'Parabéns! Você acertou! Número "'+numeroSorteado+'"!'; 
    atualizaTextos(true,false);                                         // Chama a função para atualizar os textos e botões na tela
    exibirTexto('p1', 'Tentativas utilizadas: ' + numerosJaChutados.length);
}

function exibeErro(chute) {                                             // Função para exibir que errou o chute
    numerosJaChutados.push(chute);                                      // Acrescenta o número chutado na lista
    tentativas--;                                                       // Diminui o número de tentativas
    if (!tentativas) {                                                  // Se esgotou as tentativas então encerra o jogo 
        campoChute.value = 'Ops, você errou! O número era: "'+numeroSorteado+'"!';
        atualizaTextos(true,false);                                     // Chama a função para atualizar os textos e botões na tela
    } else {                                                            // Se não estotou as tentativas...
        let maiorMenor;                                                  
        if (numeroSorteado > chute) {                                   // Se o número sorteado for menor que o chute
            menor = chute;                                              
            maiorMenor = "maior";     
        } else {                                                        // Se o número sorteado for menor que o chute
            maior = chute;
            maiorMenor = "menor";
        }    
        campoChute.placeholder = 'Ops, você errou! O número é '+maiorMenor+'!';         
        atualizaTextos(false,true);                                     // Chama a função para atualizar os textos e botões na tela
    }
}

function chutar() {                                                     // Função principal (Botão Chutar)
    let chute = parseInt(campoChute.value);                             // Lê e armazena o input digitado (chute) 
    campoChute.value = "";                                              // Esvazia o campo input 
    if (chute < menor || chute > maior || isNaN(chute)) {               // Testa se o chute é válido
        exibeForaDaFaixa(chute);                                            // Exibe que o chute é inválido (fora da faixa)
    } else if (verificaJaChutado(chute)) {                              // Verifica se o número já foi chutado
        exibeJaChutado(chute);                                              // Exibe que o número já foi chutado
    } else if (numeroSorteado == chute) {                               // Verifica se acertou o chute
        exibeAcerto(chute);                                                 // Exibe que acertou o número secreto e encerra o jogo
    } else {                                                            // Se não acertou o chute...
        exibeErro(chute);                                                   // Exibe que errou o chute.    
    }
}

novoJogo();                                                             // Inicio do jogo - Sorteia o numero secreto
