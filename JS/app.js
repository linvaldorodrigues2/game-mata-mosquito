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
mosca.className = "mosca1";
mosca.style.left = `${posicaoX}px`;
mosca.style.top = `${posicaoY}px`;
mosca.style.position = "absolute";
document.body.appendChild(mosca);
