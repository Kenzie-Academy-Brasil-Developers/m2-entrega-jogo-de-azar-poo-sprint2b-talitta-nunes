const recebendoResposta = document.getElementById("bolaJogo");
const respostaJogo = document.getElementById("respostaDevolvida");
const bolajogo = document.getElementById("bolaJogo");
respostaJogo.innerHTML = "";

import { respostas } from "./respostas.js";

class Magic8Ball {
  static randomNum(myMin, myMax) {
    //retorna um número entre entre os valores myMin e myMax, gerando meu índice pro meu array de respostas.
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  static randomAnswers() {
    const respostasIndice = this.randomNum(0, respostas.length - 1); //usando o this, acesso o método random num que gerou esse índice de numeros aleatórios.
    return respostas[respostasIndice]; //insiro esse meu índice dentro do meu array de respostas.
  }
  static jogoMagicBall() {
    respostaJogo.innerText = this.randomAnswers(); //jogando o método das respostas como valor para meu innerText.
    recebendoResposta.appendChild(respostaJogo); //por fim uso o appendChild para jogar no meu p dentro da bola.
  }
  static shake() {
    bolajogo.classList.add("shake");
    setTimeout(function () {
      bolajogo.classList.remove("shake");
    }, 1000);
    setTimeout(function () {
      this.randomAnswers();
    }, 1000);
  }
}

export { Magic8Ball };
