let lista = [];
let numeroMaximo = 3;
let numero_secreto = geraNumeroSecreto();
exibirBoasVindas();
let tentativas = 1;

function imprimeTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.0});    
}

function exibirBoasVindas(){
    imprimeTexto("h1", "Jogo do número");
    imprimeTexto("p", "Escolha um número de 1 a 10");
}

function limparCampo(tag){
    chute = document.querySelector("input");
    chute.value = '';
}

function geraNumeroSecreto(){
    let x = parseInt(Math.random()*numeroMaximo + 1);
    let tamanho = lista.length;
    if (tamanho == numeroMaximo){
        lista = [];
    }
    if(lista.includes(x)){
        return geraNumeroSecreto();
    }
    else{
        lista.push(x);
        console.log(lista);
        return x;
    }
}

function verificarChute(numero_secreto){
    let chute = document.querySelector("input").value;
    if(chute == numero_secreto){
        imprimeTexto('h1','Muito bem!')
        if (tentativas == 1){
            imprimeTexto('p','Você acertou em ' + tentativas + ' tentativa');
        }
        else{
            imprimeTexto('p','Você acertou em ' + tentativas + ' tentativas');
        }
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if(chute > numero_secreto){
        imprimeTexto('p',"Errou, seu chute foi maior que o número");
        limparCampo();
        tentativas++; 
    }
    else{
        imprimeTexto('p',"Errou, seu chute foi menor que o número");
        limparCampo();
        tentativas++; 
    }
}

function reiniciarJogo(){
    numero_secreto = geraNumeroSecreto();
    tentativas = 1;
    limparCampo();
    exibirBoasVindas();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// exibirBoasVindas();
// numero_secreto = geraNumeroSecreto();
// let tentativas = 1;
