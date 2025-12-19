import "../../components/game-option";

customElements.define(
  "welcome-page",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h1>Piedra, Papel o Tijera</h1>
        <div class="opciones">
          <game-option play="piedra"></game-option>
          <game-option play="papel"></game-option>
          <game-option play="tijera"></game-option>
        </div>
      `;
    };
  },
);