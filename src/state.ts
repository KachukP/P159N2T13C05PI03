type Jugada = "piedra" | "papel" | "tijera";
type Resultado = "ganaste" | "perdiste" | "empate";

export const EstadoGame = {
    data: {
        jugador: null as Jugada | null,
        computadora: null as Jugada | null,
        resultado: null as Resultado | null,
        rondas: 0,
        puntosJugador: 0,
        puntosCPU: 0,
    },
    setJugada(jugada: Jugada){
        this.data.jugador = jugada;
        this.data.computadora = this.jugadaRandom();
        this.data.resultado = this.calcularResultado();
        this.data.rondas++;
        if (this.data.resultado === "ganaste") this.data.puntosJugador++;
        if (this.data.resultado === "perdiste") this.data.puntosCPU++;
    },
    hayGanadorFinal(){
        return (
            this.data.puntosJugador === 2 ||
            this.data.puntosCPU === 2
        );
    },
    ganadorFinal(){
        if (this.data.puntosJugador === 2) return "ganaste";
        if (this.data.puntosCPU === 2) return "perdiste";
        return null;
    },
    reset(){
        this.data = {
            jugador: null,
            computadora: null,
            resultado: null,
            rondas: 0,
            puntosJugador: 0,
            puntosCPU: 0,
        };
    },
    jugadaRandom():Jugada{
        const opciones: Jugada[] = ["piedra", "papel", "tijera"];
        return opciones[Math.floor(Math.random() * opciones.length)];
    },
    calcularResultado():Resultado{
        const { jugador, computadora } = this.data;
        if (jugador === computadora) return "empate";
        if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
        ){
            return "ganaste";
        };
        return "perdiste";
    },
    ObtenerEstado(){
        return this.data;
    },
};