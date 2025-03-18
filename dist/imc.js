<<<<<<< HEAD
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
=======
export default class Imc {
    constructor() {
        this.imc = 0;
        this.estado_imc = {};
        this.peso = document.getElementById("txtPeso");
        this.altura = document.getElementById("txtAltura");
        this.resultado = document.getElementById("resultado");
    }
    calcular() {
        if (this.peso && this.altura) {
            const pesoValue = parseFloat(this.peso.value);
            const alturaValue = parseFloat(this.altura.value);
            if (isNaN(pesoValue) || isNaN(alturaValue)) {
                throw new Error("Valores inválidos para peso ou altura");
            }
            this.imc = pesoValue / (alturaValue * alturaValue);
        }
        else {
            throw new Error("Elementos peso ou altura não encontrados");
        }
        this.estado_imc = {
            magreza: this.imc < 18.5,
            normal: this.imc >= 18.5 && this.imc <= 24.9,
            sobrepeso: this.imc >= 25 && this.imc <= 29.9,
            obesidade: this.imc >= 30 && this.imc <= 39.9,
            obesidadegrave: this.imc >= 40
        };
        if (this.resultado) {
            this.resultado.innerHTML = this.imc.toFixed(2);
        }
        for (const estado in this.estado_imc) {
            const elemento = document.getElementById(estado);
            if (elemento) {
                if (this.estado_imc[estado]) {
                    elemento.classList.add("destaque");
                }
                else {
                    elemento.classList.remove("destaque");
                }
>>>>>>> c840df8 (Refatoração para POO)
            }
        }
    }
}
<<<<<<< HEAD
window.calcular = calcular;
=======
// interface Window {
//     calcular: () => void;
// }
// window.calcular = imc.calcular.bind(imc);
>>>>>>> c840df8 (Refatoração para POO)
