let tentativa = 1;
let jogoEscolhido = new Array(30);
let num = 0;
let pontos = 0;
let maxTentativas = 3;
let tempoRestante = 30;
var musica = document.getElementById("musica");
var botaoMudo = document.getElementById("botao-mudo");
musica.volume = 0.02;
var folha = 30;



var g1 = new Array('D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'B', 'A', 'A', 'D', 'C', 'B', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'A', 'B', 'A', 'B');

var g2 = new Array('D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A', 'D', 'A', 'A', 'B', 'B', 'B');

var g3 = new Array('B', 'D', 'C', 'D', 'A', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A', 'B', 'B', 'B', 'D', 'D', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D');

var g4 = new Array('C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'C', 'A', 'A', 'A', 'C', 'D', 'A', 'B', 'C', 'C', 'D', 'D', 'C', 'C', 'D', 'D', 'A', 'A');

var g5 = new Array('C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B', 'B', 'B', 'A', 'C', 'A', 'D');
var g6 = [];


for (var i = 0; i < 6; i++) {
  g6.push(g1[Math.floor(Math.random() * g1.length)]);
  g6.push(g2[Math.floor(Math.random() * g2.length)]);
  g6.push(g3[Math.floor(Math.random() * g3.length)]);
  g6.push(g4[Math.floor(Math.random() * g4.length)]);
  g6.push(g5[Math.floor(Math.random() * g5.length)]);
}


                   
function iniciarJogo(nomeDoJogo) {
  const selecaoJogo = document.getElementById('selecao-jogo');
  const jogoSelecionado = document.getElementById(nomeDoJogo);
  const xablau = document.getElementById('xablau');
  (nomeDoJogo == "jogo1") ? jogoEscolhido = g1 :
    (nomeDoJogo == "jogo2") ? jogoEscolhido = g2 :
      (nomeDoJogo == "jogo3") ? jogoEscolhido = g3 :
        (nomeDoJogo == "jogo4") ? jogoEscolhido = g4 :
          (nomeDoJogo == "jogo5") ? jogoEscolhido = g5 : jogoEscolhido = g6;
  if (selecaoJogo) {
    selecaoJogo.style.display = 'none'; // Oculta a seleção de jogos
  }

  if (jogoSelecionado) {
    jogoSelecionado.style.display = 'block'; // Mostra o jogo selecionado
    temporizador.style.display = 'block';
    resultado.style.display = 'block'; //aqui ta mostrando o timer
    apresentaPontos(pontos);
    xablau.style.display = 'block'; //aqui ta mostrando o timer
    document.getElementById('reiniciar-p').style.display = 'block';
  }

}
xablau.style.display = 'none';
document.getElementById('reiniciar-p').style.display = 'none';

function jogo() {


   var p = document.getElementById('pergunta');
  p.value = `Pergunta ${num + 1}`;
  responder = function(r) {
    if (r == jogoEscolhido[num]) {
      if (tentativa == 1) {
        alert('Resposta Correta!')
        somMoeda.play()
        pontos += 3;
      } else if (tentativa == 2) {
        alert('Resposta Correta!')
        somMoeda.play()
        pontos += 2;
      } else if (tentativa == 3) {
        alert('Resposta Correta!')
        somMoeda.play()
        pontos += 1;
      }
      apresentaPontos(pontos);
      num++;
      tentativa = 1;
      if (num < 30) {
        p.value = `Pergunta ${num + 1}`;
        tempoRestante = 30; // Reinicia o temporizador

      } else {
        p.value = 'Jogo Encerrado';
        apresentaPontos(pontos);
        document.getElementById('temporizador').style.display = 'none'; 

      }
    } else {
      alert("Resposta errada!");
      tentativa++;
      somErrou.play()
      if (tentativa > maxTentativas) {
        num++;
        tentativa = 1;
        if (num < 30) {
          p.value = `Pergunta ${num + 1}`;
          tempoRestante = 30;

        } else {
          p.value = 'Jogo Encerrado';
          apresentaPontos(pontos);
          document.getElementById('temporizador').style.display = 'none'; // Oculta o temporizador
        }
      }
    }
  }

function atualizarTemporizador() {
  document.getElementById('temporizador').innerText = `Tempo restante: ${tempoRestante} segundos`;
  if (tempoRestante > 0) {
    tempoRestante--;
    setTimeout(atualizarTemporizador, 1000);
  } else {
    if (num < 30) {
      num++;
      tentativa = 1;
      p.value = `Pergunta ${num + 1}`;
      tempoRestante = 30;
      setTimeout(atualizarTemporizador, 1000);
    } else {
      p.value = 'Jogo Encerrado';
      apresentaPontos(pontos);
      document.getElementById('temporizador').style.display = 'none';
    }
  }
}

atualizarTemporizador();
}


botaoMudo.addEventListener("click", function() {
    if (musica.muted) {
        musica.muted = false;
        botaoMudo.style.backgroundImage = "url('telainicial/som.png')"; // Substitua pelo caminho da imagem de som
    } else {
        musica.muted = true;
        botaoMudo.style.backgroundImage = "url('telainicial/semsom.png')"; // Substitua pelo caminho da imagem de mudo
    }
});

function apresentaPontos(pontos) {
  document.getElementById('resultado').innerText = 'Pontuação: ' + pontos;
}
document.getElementById("resetButton").addEventListener("click", function() {
  location.reload();
});





