import { EstadoGame } from "../state";

customElements.define(
    "result-message",
    class extends HTMLElement{
        connectedCallback(){
            const estado = EstadoGame.ObtenerEstado();
            this.innerHTML = `
                <p>Vos jugaste: <strong>${estado.jugador}</strong></p>
                <p>La compu jugó: <strong>${estado.computadora}</strong></p>
            `;
        };
    },
);