let largura;
let altura;
let vidas = 1;
/*Ajuste da viewport em relação ao tamanho da viewport*/
function ajusteViewport() {
  largura = window.innerWidth;
  altura = window.innerHeight;

  console.log(largura, altura);
}
ajusteViewport();

/*cria posição X e Y aleatoriamente*/
function posicaoMoscaAleatoria() {
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;
  console.log(posicaoX, posicaoY);

  //controle de posicionamento da img mosca
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //remove a img mosca (caso tenha)
  if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove();
    if (vidas > 3) {
      alert("interromper o jogo");
    } else {
      document.getElementById(`v${vidas}`).src = "../img/coracao_vazio.png";
      vidas++;
    }
  }

  //cria a img mosca
  let mosca = document.createElement("img");
  mosca.src = "../img/mosca.png";
  mosca.className = tamanhoMoscaAleatorio() + " " + ladoAleatorio();
  mosca.style.left = `${posicaoX}px`;
  mosca.style.top = `${posicaoY}px`;
  mosca.style.position = "absolute";
  mosca.id = "mosca";
  mosca.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosca);
}

//tamanho aleatorio da img mosca
function tamanhoMoscaAleatorio() {
  let classe = Math.floor(Math.random() * 3);
  console.log(classe);

  switch (classe) {
    case 0:
      return "mosca1";
    case 1:
      return "mosca2";
    case 2:
      return "mosca3";
  }
}
console.log(tamanhoMoscaAleatorio());

//cria lados opostos( esquerda e direita) da img mosca
function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
console.log(ladoAleatorio());

setInterval(function () {
  posicaoMoscaAleatoria();
}, 2000);
