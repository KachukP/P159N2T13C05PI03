import { goTo } from "../router";
import { EstadoGame } from "../state";

customElements.define(
    "round-wait",
    class extends HTMLElement {
        connectedCallback() {
            let i = 3;

            this.innerHTML = `<p>Siguiente ronda en ${i}...</p>`;

            const intervalo = setInterval(() => {
                i--;
                this.innerHTML = `<p>Siguiente ronda en ${i}...</p>`;

                if (i === 0) {
                clearInterval(intervalo);

                if (EstadoGame.hayGanadorFinal()) {
                    const ganador = EstadoGame.ganadorFinal();
                    if (ganador === "ganaste") goTo("/win");
                    if (ganador === "perdiste") goTo("/lose");
                } else {
                    goTo("/play");
                };
                };
            }, 1000);
        };
    },
);