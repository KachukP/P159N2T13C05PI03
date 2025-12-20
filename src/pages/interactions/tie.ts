import { goTo } from "../../router";

customElements.define(
    "tie-page",
    class extends HTMLElement {
        connectedCallback() {
        this.innerHTML = `
            <h1>😐 Empate</h1>
            <button>Reintentar</button>
        `;
        this.querySelector("button")!.onclick = () => goTo("/");
        };
    },
);