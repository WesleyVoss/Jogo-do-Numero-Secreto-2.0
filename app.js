let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// função p/ exibir texto na tela.
function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}
//  chamando a função do texto a ser imprimido.
function exibiMensagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolho um número entre 1 a 10.');
}

exibiMensagemInicial()
// função p/ verificar click no btn.
function verificarChute() {
        let chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
                } else {
                        exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
                }
                tentativas++;
                limparCampo();
        }
}

// função p/ gerar número aleatório, adcionar a lista numeros já utilizados.
function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
                listaDeNumerosSorteados = [];
        }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
                return gerarNumeroAleatorio();
        } else {
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados)
                return numeroEscolhido;
        }
}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
        // location.reload() <- recarregar a página, também funcionou.
        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
        exibiMensagemInicial();
        limparCampo();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}