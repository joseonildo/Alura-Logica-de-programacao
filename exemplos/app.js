//console.clear();
var resultado = document.getElementById("resultado");
var divCartaMaquina = document.getElementById("carta-maquina");
var divCartaJogador = document.getElementById("carta-jogador");
var moldura = '<img src="img/card-super-trunfo.png" style=" width: inherit; height: inherit; position: absolute;">';
var tagHTML = "<div id='opcoes' class= 'carta-status'>";

function sortearCarta() {
  //console.clear();
  resultado.innerHTML = "";
  divCartaMaquina.innerHTML = moldura;
  divCartaMaquina.style.backgroundImage = "";
  var numeroCarta = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCarta]; 
  
  var numeroAtributoMaquina = parseInt(Math.random() * 3);
  if (numeroAtributoMaquina == 0) {atributoMaquina = "Ataque"}
  if (numeroAtributoMaquina == 1) {atributoMaquina = "Defesa"}
  if (numeroAtributoMaquina == 2) {atributoMaquina = "Grito"}
  
  var numeroCarta = parseInt(Math.random() * 7);
  cartaJogador = cartas[numeroCarta]; 
  
  exibirCartaJogador();
            
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

