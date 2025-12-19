let e={data:{jugador:null,computadora:null,resultado:null,rondas:0,puntosJugador:0,puntosCPU:0},setJugada(e){this.data.jugador=e,this.data.computadora=this.jugadaRandom(),this.data.resultado=this.calcularResultado(),this.data.rondas++,"ganaste"===this.data.resultado&&this.data.puntosJugador++,"perdiste"===this.data.resultado&&this.data.puntosCPU++},hayGanadorFinal(){return 2===this.data.puntosJugador||2===this.data.puntosCPU},ganadorFinal(){return 2===this.data.puntosJugador?"ganaste":2===this.data.puntosCPU?"perdiste":null},reset(){this.data={jugador:null,computadora:null,resultado:null,rondas:0,puntosJugador:0,puntosCPU:0}},jugadaRandom(){let e=["piedra","papel","tijera"];return e[Math.floor(Math.random()*e.length)]},calcularResultado(){let{jugador:e,computadora:t}=this.data;return e===t?"empate":"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t||"tijera"===e&&"papel"===t?"ganaste":"perdiste"},ObtenerEstado(){return this.data}};customElements.define("game-option",class extends HTMLElement{connectedCallback(){this.play=this.getAttribute("play"),this.innerHTML=`<button>${this.play}</button>`,this.querySelector("button").onclick=()=>{e.setJugada(this.play),a("/round")}}}),customElements.define("welcome-page",class extends HTMLElement{connectedCallback(){this.innerHTML=`
        <h1>Piedra, Papel o Tijera</h1>
        <div class="opciones">
          <game-option play="piedra"></game-option>
          <game-option play="papel"></game-option>
          <game-option play="tijera"></game-option>
        </div>
      `}}),customElements.define("win-page",class extends HTMLElement{connectedCallback(){this.innerHTML=`
            <h1>\u{1F389} Ganaste</h1>
            <result-message></result-message>
            <button>Volver a jugar</button>
        `,this.querySelector("button").addEventListener("click",()=>{e.reset(),a("/")})}}),customElements.define("lose-page",class extends HTMLElement{connectedCallback(){this.innerHTML=`
                <h1>\u{1F480} Perdiste la partida</h1>
                <button>Intentar otra vez</button>
            `,this.querySelector("button").addEventListener("click",()=>{e.reset(),a("/")})}}),customElements.define("tie-page",class extends HTMLElement{connectedCallback(){this.innerHTML=`
        <h1>\u{1F610} Empate</h1>
        <button>Reintentar</button>
      `,this.querySelector("button").onclick=()=>a("/")}}),customElements.define("result-message",class extends HTMLElement{connectedCallback(){let t=e.ObtenerEstado();this.innerHTML=`
        <p>Vos jugaste: <strong>${t.jugador}</strong></p>
        <p>La compu jug\xf3: <strong>${t.computadora}</strong></p>
      `}}),customElements.define("round-wait",class extends HTMLElement{connectedCallback(){let t=3;this.innerHTML=`<p>Siguiente ronda en ${t}...</p>`;let n=setInterval(()=>{if(t--,this.innerHTML=`<p>Siguiente ronda en ${t}...</p>`,0===t)if(clearInterval(n),e.hayGanadorFinal()){let t=e.ganadorFinal();"ganaste"===t&&a("/win"),"perdiste"===t&&a("/lose")}else a("/")},1e3)}}),customElements.define("round-page",class extends HTMLElement{connectedCallback(){this.innerHTML=`
        <h2>Resultado de la ronda</h2>
        <result-message></result-message>
        <round-wait></round-wait>
      `}});let t={"/":"welcome-page","/round":"round-page","/win":"win-page","/lose":"lose-page","/tie":"tie-page"};function a(e){history.pushState({},"",e),n(e)}function n(e){let a=document.getElementById("app");if(!a)return;a.innerHTML="";let n=t[e];n&&a.appendChild(document.createElement(n))}n(location.pathname),window.onpopstate=()=>n(location.pathname);
//# sourceMappingURL=p159n2t13c05pi03.f9ec9b99.js.map
