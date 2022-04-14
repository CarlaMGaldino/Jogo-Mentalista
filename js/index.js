var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;
var input = document.getElementById("valor");
var botaoChutar = document.querySelector("#chutar");
var elementoResultado = document.getElementById("resultado");

function Chutar() {
  ++tentativa;
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativa >= 4) {
    elementoResultado.innerHTML = "Desculpe, seu número de tentativas acabou. O número secreto é " + numeroSecreto;
    input.setAttribute("disabled", "true");
    botaoChutar.setAttribute("disabled", "true");
  } else if (chute === numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "O numero é maior";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "O numero é menor";
  } else {
    elementoResultado.innerHTML = "Errou";
  }
}

function reset() {
  tentativa = 0;
  input.removeAttribute("disabled");
  botaoChutar.removeAttribute("disabled");
  input.value = "";
  numeroSecreto = parseInt(Math.random() * 11);
  elementoResultado.innerHTML = "";
}
