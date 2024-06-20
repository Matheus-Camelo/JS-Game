let numeroSorteado = [];
let numeroLimite = 10
let numeroGerado = gerarNumero();
exibirMensagemInicial();


function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Game do número secreto')
    exibirTexto('p', 'Escolha um número entre 1 e 10')

}



function verificarTentativa() {
    let tentativa = document.querySelector('input').value
    if (tentativa == numeroGerado){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (tentativa > numeroGerado){
            exibirTexto('p', "O número secreto é menor.");
        } else{
            exibirTexto('p', "O número secreto é maior.");
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumeros = numeroSorteado.length;

    if(quantidadeNumeros == numeroLimite){
        numeroSorteado = []
    }
    if (numeroSorteado.includes(numeroGerado)) {
        return gerarNumero();
    }else{
        numeroSorteado.push(numeroGerado)
        return numeroGerado;
    }
}



function limparCampo(){
    tentativa = document.querySelector('input');
    tentativa.value = '';
}

function novoJogo() {
    numeroGerado = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',True)
}