import { useState } from "react";

const Calculadora = () => {
    const [Altura, setAltura] = useState(0);
    const [Peso, setPeso] = useState(0);

    const mostraResultado = () => {
        const calculo = Peso / (Altura * Altura);
        const resultado = calculo.toFixed(2);

        if (resultado <= 18.5) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso abaixo do normal.</h2>
            );
        } else if (resultado > 18.5 && resultado < 24.99) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso considerado na faixa saudável.</h2>
            );
        } else if (resultado >= 24 && resultado < 29.99) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso na faixa do sobrepeso.</h2>
            );
        } else if (resultado >= 30 && resultado < 34.99) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso na faixa da obesidade grau 1.</h2>
            );
        } else if (resultado >= 35 && resultado < 39.99) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso na faixa da obesidade grau 2.</h2>
            );
        } else if (resultado >= 40) {
            return (
                <h2>Seu IMC é: {resultado} <br /> Peso na faixa da obesidade grau 3.</h2>
            );
        }
    };

    return (
        <form>
            <h2>Seu peso:</h2> <br />
            <input
                type="number"
                placeholder="48.9"
                onChange={evento => setPeso(parseFloat(evento.target.value))}
            />
            <h2>Sua altura:</h2> <br />
            <input
                type="number"
                placeholder="1.67"
                onChange={evento => setAltura(parseFloat(evento.target.value))}
            />
            {mostraResultado()}
        </form>
    );
}

export default Calculadora;
