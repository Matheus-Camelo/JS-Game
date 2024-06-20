let numeroSorteado = [];
let numeroLimite = 10
let numeroGerado = gerarNumero();
let limpar;
//let tentativa = 1;
exibirMensagemInicial();


function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Game do número secreto')
    exibirTexto('p', 'Escolha um número entre 1 e 10')

}
let tentativa = 1;
function verificarTentativa() {
    let tentativaInput = document.querySelector('input').value
    if (tentativaInput == numeroGerado){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativaInput > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (tentativaInput > numeroGerado){
            tentativa++;
            exibirTexto('p', "O número secreto é menor.");
        } else{
            tentativa++;
            exibirTexto('p', "O número secreto é maior.");
        }
        limparCampo();
    }
    console.log(tentativa)//tentativa++;
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
   limpar = document.querySelector('input');
   limpar.value = '';
}

function novoJogo() {
    numeroGerado = gerarNumero();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',True)
}