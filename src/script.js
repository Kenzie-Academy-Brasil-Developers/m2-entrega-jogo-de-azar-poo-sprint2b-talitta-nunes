import { Magic8Ball } from "./models/index.js";
import { respostas } from "./models/respostas.js";

const magics = document.getElementById("perguntas-aqui");
magics.addEventListener("click", function (event) {
  event.preventDefault();
  const btnSelect = event.target;
  if (btnSelect.tagName === "BUTTON") {
    Magic8Ball.jogoMagicBall();
    Magic8Ball.shake();
  }
});

console.log("oi");
