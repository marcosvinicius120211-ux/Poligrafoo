let perguntas = [
"Você conhece a vítima ou algum parente dela?",
"Você tem alguma dívida com a vítima ou vice-versa?",
"No horário do ocorrido, você estava acordado?",
"Se sim, ouviu algo durante o período?",
"Alguém lhe contou algo sobre a vítima antes do ocorrido?",
"De acordo com o que você sabe, mais alguém participou do ocorrido?",
"Se a vítima estivesse viva hoje, ela teria ranço de você?",
"Algum parente seu tem relação com a vítima?",
"Você tem algum telefone que possa servir de informação?",
"Você conhece a arma utilizada no ocorrido?"
];
let respostas = [];
let atual = 0;
mostrarPergunta();
function mostrarPergunta() {
document.getElementById("pergunta").innerHTML = perguntas[atual];
document.getElementById("numero").innerHTML = "Pergunta " + (atual +
1);
}
function responder() {
let resposta = document.getElementById("resposta").value;
if (resposta == "") {
alert("Escolha uma resposta!");
return;
}
respostas[atual] = resposta;
atual++;
document.getElementById("resposta").value = "";
if (atual < perguntas.length) {
mostrarPergunta();
} else {
resultado();
}
}
function resultado() {
let pontos = 0;
if (respostas[0] != respostas[3]) pontos++;
if (respostas[1] != respostas[4]) pontos++;
if (respostas[2] != respostas[5]) pontos++;
let mensagem = "";
switch (pontos) {
case 0:
mensagem = "VERDADE! Respostas consistentes.";
break;
case 1:
mensagem = "SUSPEITO! Uma contradição.";
break;
default:
mensagem = "POSSÍVEL MENTIRA! Várias contradições.";
}
document.getElementById("pergunta").innerHTML = mensagem;
document.getElementById("numero").innerHTML = "Fim do interrogatório";
document.getElementById("resposta").style.display = "none";
document.querySelector("button").style.display = "none";
document.getElementById("reiniciar").style.display = "inline-block";
}
function reiniciarJogo() {
location.reload();
  }
