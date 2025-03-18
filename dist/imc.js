"use strict";
function calcular() {
    let peso = document.getElementById("txtPeso");
    let altura = document.getElementById("txtAltura");
    let imc = 0;
    if (peso && altura) {
        imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
    }
    else {
        throw new Error("possíveis problema nas variáveis peso ou altura");
    }
    let resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.innerHTML = imc.toFixed(2);
    }
    console.log(imc);
    const estado_imc = {
        magreza: imc < 18.5,
        normal: imc >= 18.5 && imc <= 24.9,
        sobrepeso: imc >= 25 && imc <= 29.9,
        obesidade: imc >= 30 && imc <= 39.9,
        obesidadegrave: imc >= 40
    };
    for (const estado in estado_imc) {
        const elemento = document.getElementById(estado);
        if (elemento) {
            if (estado_imc[estado]) {
                elemento.classList.add("destaque");
            }
            else {
                elemento.classList.remove("destaque");
            }
        }
    }
}
// interface Window {
//     calcular: () => void;
// }
// window.calcular = imc.calcular.bind(imc);
