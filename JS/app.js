let largura;
let altura;
/*Ajuste da viewport em relação ao tamanho da viewport*/
function ajusteViewport() {
  largura = window.innerWidth;
  altura = window.innerHeight;

  console.log(largura, altura);
}
ajusteViewport();

/*cria posição X e Y aleatoriamente*/
let posicaoX = Math.floor(Math.random() * largura) - 90;
let posicaoY = Math.floor(Math.random() * altura) - 90;
console.log(posicaoX, posicaoY);

//controle de posicionamento do elemento mosca
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

//cria o elemento mosca
let mosca = document.createElement("img");
mosca.src = "../img/mosca.png";
mosca.className = tamanhoMoscaAleatorio();
mosca.style.left = `${posicaoX}px`;
mosca.style.top = `${posicaoY}px`;
mosca.style.position = "absolute";
document.body.appendChild(mosca);

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
        return 'mosca3'
  }
}
console.log(tamanhoMoscaAleatorio())