import "../../components/result-message";
import "../../components/round-wait";

customElements.define(
  "round-page",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h2>Resultado de la ronda</h2>
        <result-message></result-message>
        <round-wait></round-wait>
      `;
    };
  },
);