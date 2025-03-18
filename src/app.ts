import Imc from "./Imc.js";

const imc = new Imc();

const calcularButton = document.getElementById("calcular");

if (calcularButton) {
    calcularButton.addEventListener("click", () => {
        imc.calcular();
    });
}