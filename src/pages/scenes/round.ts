import "../../components/result-message";
import "../../components/round-wait";
import "../../components/score-board";

customElements.define(
    "round-page",
    class extends HTMLElement{
        connectedCallback(){
            this.innerHTML = `
                <h2>Resultado de la ronda</h2>
                <score-board></score-board>
                <result-message></result-message>
                <round-wait></round-wait>
            `;
        };
    },
);