import { EstadoGame } from "../state";
import { goTo } from "../router";

customElements.define(
  "game-option",
  class extends HTMLElement {
    play!: "piedra" | "papel" | "tijera";

    connectedCallback() {
      this.play = this.getAttribute("play") as any;
      this.innerHTML = `<button>${this.play}</button>`;

      this.querySelector("button")!.onclick = () => {
        EstadoGame.setJugada(this.play);
        goTo("/round");
      };
    };
  },
);