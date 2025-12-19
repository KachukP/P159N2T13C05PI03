import { goTo } from "../../router";
import { EstadoGame } from "../../state";

customElements.define(
  "win-page",
  class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>🎉 Ganaste</h1>
            <result-message></result-message>
            <button>Volver a jugar</button>
        `;

        this.querySelector("button")!.addEventListener("click", () => {
            EstadoGame.reset();   // ← ESTA es la parte importante
            goTo("/");            // ← volvés al inicio limpio
        });
    };
  },
);