let tentativa = 1;
let jogoEscolhido = new Array(30);

var g1 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

var g2 = new Array('B', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

var g3 = new Array('B', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

var g4 = new Array('B', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

var g5 = new Array('B', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

var g6 = new Array('B', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C');

function iniciarJogo(nomeDoJogo) {
  const selecaoJogo = document.getElementById('selecao-jogo');
  const jogoSelecionado = document.getElementById(nomeDoJogo);
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
  }
}


function jogo() {

  var num = 0
  var pontos = 0

  var p = document.getElementById('pergunta')
  p.value = `Pergunta ${num + 1}`

  responder = function(r) {
    if (r == jogoEscolhido[num]) {
      if (tentativa == 1) {
        alert('Resposta Correta!')
        pontos += 3;
      }
      else if (tentativa == 2) {
        alert('Resposta Correta!')
        pontos += 2;
      }
      else if (tentativa == 3) {
        alert('Resposta Correta!')
        pontos += 1;
      }
      num++;
      tentativa = 1;
    }
    else {
      alert("Resposta errada!");
      tentativa++;
    }
    if (tentativa > 3) {
      num++;
      p.value = `Pergunta ${num + 1}`;
    }
    else if (num < 3) {
      p.value = `Pergunta ${num + 1}`;
    }
    else {
      num = 0
      p.value = 'Jogo Encerrado'
      document.getElementById('resultado').innerText = pontos
    }
  }
}
onload = jogo()