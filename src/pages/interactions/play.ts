import "../../components/game-option";
import "../../components/score-board";

customElements.define(
    "play-page",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <div class="page">
                    <h2>Elegí tu jugada</h2>
                    <score-board></score-board>
                    <div class="opciones">
                        <game-option play="piedra"></game-option>
                        <game-option play="papel"></game-option>
                        <game-option play="tijera"></game-option>
                    </div>
                </div>
            `;
        };
    },
);