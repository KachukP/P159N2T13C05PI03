import { goTo } from "../../router";
import { EstadoGame } from "../../state";

customElements.define(
    "lose-page",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <h1>💀 Perdiste la partida</h1>
                <button>Intentar otra vez</button>
            `;

            this.querySelector("button")!.addEventListener("click", () => {
                EstadoGame.reset();   // ← limpia el marcador
                goTo("/");            // ← vuelve a welcome
            });
        };
    },
);