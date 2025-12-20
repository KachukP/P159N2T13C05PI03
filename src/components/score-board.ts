import { EstadoGame } from "../state";

customElements.define(
    "score-board",
    class extends HTMLElement{
        connectedCallback(){
        this.render();
        };
        render(){
            const estado = EstadoGame.ObtenerEstado();
            this.innerHTML = `
                <div class="score">
                    <p><strong>Jugador:</strong> ${estado.puntosJugador}</p>
                    <p><strong>CPU:</strong> ${estado.puntosCPU}</p>
                    <p>Ronda ${estado.rondas} de 3</p>
                </div>
            `;
        };
    },
);