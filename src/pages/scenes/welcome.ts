import { goTo } from "../../router";

customElements.define(
    "welcome-page",
    class extends HTMLElement{
        connectedCallback(){
            this.innerHTML = `
                <div class="page">
                    <h1>Bienvenidos</h1>
                    <h2>Piedra, Papel o Tijera</h2>
                    <p>Mejor de 3 rondas</p>
                    <button>Jugar</button>
                </div>
            `;
            this.querySelector("button")!.onclick=()=>{goTo("/play");};
        };
    },
);