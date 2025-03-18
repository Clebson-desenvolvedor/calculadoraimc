export default class Imc {
    peso: HTMLInputElement | null;
    altura: HTMLInputElement | null;
    resultado: HTMLElement | null;
    imc: number = 0;
    estado_imc: { [key: string]: boolean } = {};

    constructor() {
        this.peso = document.getElementById("txtPeso") as HTMLInputElement | null;
        this.altura = document.getElementById("txtAltura") as HTMLInputElement | null;
        this.resultado = document.getElementById("resultado");
    }

    public calcular(): void {
        if (this.peso && this.altura) {
            const pesoValue = parseFloat(this.peso.value);
            const alturaValue = parseFloat(this.altura.value);

            if (isNaN(pesoValue) || isNaN(alturaValue)) {
                throw new Error("Valores inválidos para peso ou altura");
            }

            this.imc = pesoValue / (alturaValue * alturaValue);
        } else {
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
                } else {
                    elemento.classList.remove("destaque");
                }
            }
        }
    }
}

// interface Window {
//     calcular: () => void;
// }


// window.calcular = imc.calcular.bind(imc);