let qtdIngressosCadeiraInferior = 400;
let qtdIngressosCadeiraSuperior = 200;
let qtdIngressosPista = 100;
let ingressoSelecionado = document.getElementById("tipo-ingresso");
let quantidadeDigitada = document.getElementById("qtd"); 
quantidadeDigitada.focus();

function atualizaQtdIngressos(){
    document.getElementById("qtd-pista").textContent = qtdIngressosPista;
    document.getElementById("qtd-superior").textContent = qtdIngressosCadeiraSuperior;
    document.getElementById("qtd-inferior").textContent = qtdIngressosCadeiraInferior;
}

function compraIngressoPista() {
    if (quantidadeDigitada.value <= qtdIngressosPista) {
        qtdIngressosPista -= quantidadeDigitada.value;        
        atualizaQtdIngressos();
    } else {
        if (qtdIngressosPista == 0) {
            alert(`Desculpe, mas acabaram os ingressos para a pista!`);
        } else {
        alert(`Só temos ${qtdIngressosPista} ingressos disponíveis para a pista!`);
        }
    }
}

function compraIngressoCadeiraSuperior() {
    if (quantidadeDigitada.value <= qtdIngressosCadeiraSuperior) {
        qtdIngressosCadeiraSuperior -= quantidadeDigitada.value;        
        atualizaQtdIngressos();
    } else {
        if (qtdIngressosCadeiraSuperior == 0) {
            alert(`Desculpe, mas acabaram os ingressos para as cadeiras superiores!!`);
        } else {
        alert(`Só temos ${qtdIngressosCadeiraSuperior} ingressos disponíveis para as cadeiras superiores!`);
        }
    }
}

function compraIngressoCadeiraInferior() {
    if (quantidadeDigitada.value <= qtdIngressosCadeiraInferior) {
        qtdIngressosCadeiraInferior -= quantidadeDigitada.value;        
        atualizaQtdIngressos();
    } else {
        if (qtdIngressosCadeiraInferior == 0) {
            alert(`Desculpe, mas acabaram os ingressos para as cadeiras inferiores!`);
        } else {
        alert(`Só temos ${qtdIngressosCadeiraInferior} ingressos disponíveis para as cadeiras inferiores!`);
        }
    }
}

function comprarIngresso() {
    if (quantidadeDigitada.value == "" || quantidadeDigitada.value == "0") {
        alert("Ops, faltou digitar a quantidade de ingressos!")
    }else if (ingressoSelecionado.value == "pista") {
        compraIngressoPista();        
    } else if (ingressoSelecionado.value == "superior") {
        compraIngressoCadeiraSuperior();
    } else if (ingressoSelecionado.value == "inferior") {
        compraIngressoCadeiraInferior();    
    }
    quantidadeDigitada.value = "";
    quantidadeDigitada.focus();
}
