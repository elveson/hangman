/*
 Descricao :
    Hangman ou Jogo da forca é um jogo que o programa seleciona aleatóriamente 
    uma palavra para que o usuário descubra por meio de tentativa/erro a sugestão de
    letra que compõe a palavra.
 Aluno :
    Elveson S. Costa
 Data :
    16/06/21
 */

var palavras = ["cat", "dog", "rabbit", "pork", "cow"];

let palavra = "";
let adivinhar = [];
let vidas = 5;
let palavraEscondida = null;
let letrasErrada = [];

function randomPalavra() {
  palavra = palavras[Math.floor(Math.random() * palavras.length)];
}

function checkSeVenceu() {
  if (palavraEscondida === palavra) {
    control = true;
    alert("Voce se salvou.\n\nVoce venceu!!!");
  } else handleGuess();
}

function checkSePerdeu() {
  if (vidas == 1) {
    control = true;
    alert(`Voce foi enforcado!!!\n\nA palavra era: ${palavra}`);
  } else {
    vidas--;
    handleGuess();
  }
}

function adivinharPalavra() {
  palavraEscondida = palavra
    .split("")
    .map((letra) => (adivinhar.indexOf(letra) >= 0 ? letra : " _ "))
    .join("");
}

function handleGuess() {
  let alterarLetra = prompt(
    `Vidas: ${vidas}\nLetras erradas: ${letrasErrada.sort()}\n\n${palavraEscondida}`
  );

  adivinhar.indexOf(alterarLetra) === -1 ? adivinhar.push(alterarLetra) : null;

  if (palavra.indexOf(alterarLetra) >= 0) {
    adivinharPalavra();
    checkSeVenceu();
  } else if (palavra.indexOf(alterarLetra) === -1) {
    letrasErrada.push(alterarLetra);
    checkSePerdeu();
  }
}

function handleUsuarioResposta() {
  let resposta = confirm("Deseja jogar? \n\nOk = Sim\nCancelar= Nao");

  if (resposta == 1) {
    start();
  } else if (resposta == 0) {
    alert("Goodbye!!!");
  }
}

function start() {
  vidas = 5;
  adivinhar = [];
  letrasErrada = [];
  randomPalavra();
  adivinharPalavra();
  handleGuess();
  handleUsuarioResposta();
}

start();
