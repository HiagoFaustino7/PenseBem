function iniciarJogo(nomeDoJogo) {
    const selecaoJogo = document.getElementById('selecao-jogo');
    const jogoSelecionado = document.getElementById(nomeDoJogo);

    if (selecaoJogo) {
        selecaoJogo.style.display = 'none'; // Oculta a seleção de jogos
    }

    if (jogoSelecionado) {
        jogoSelecionado.style.display = 'block'; // Mostra o jogo selecionado
    }
}

function jogo1(){

var g1 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g2[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}

}
  onload = jogo1()



function jogo2(){

var g2 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g2[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}
  
}
  onload = jogo2()



function jogo3(){

var g3 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g3[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}

}
  onload = jogo3()



function jogo4(){

var g4 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g4[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}

}
  onload = jogo4()



function jogo5(){

var g5 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g5[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}

}
  onload = jogo5()




function jogo6(){

var g6 = new Array('A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'A', 'B', 'B', 'A', 'A', 'C', 'C', 'C', 'A', 'B', 'D', 'A', 'A', 'B', 'C')
var num = 0
var pontos = 0


var p = document.getElementById('pergunta')
p.value = `Pergunta ${num+1}`

responder = function(r) {
  if(r == g6[num]) {
    alert('Resposta Correta!')
    pontos += 3
  }
  else {
    alert('Resposta Errada!')
  }

  if(num < 29) {
    num++
    p.value = `Pergunta ${num+1}`
  }
  else {
    num = 0
    p.value = 'Jogo Encerrado'
    document.getElementById('resultado').innerText = pontos
  }
}

}
  onload = jogo6()


