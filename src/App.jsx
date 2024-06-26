import { useState } from 'react'

import Calculadora from './components/Calculadora/Index'

function App() {
  return (
    <>
    <h1>Calculadora de IMC</h1>
    <>
    <Calculadora />
    </>
    <footer>
    <h2>O que é IMC?</h2>
    <p>O Índice de Massa Corporal (IMC) é uma ferramenta que oferece uma visão geral da relação entre peso e altura de uma pessoa. No entanto, é crucial compreender que a saúde é influenciada por vários fatores, e o IMC é apenas um dos indicadores.</p>
    <h2>Interpretação do IMC</h2>
    <p>O IMC é classificado em diferentes categorias, cada uma indicando uma faixa geral de peso. Lembre-se de que o IMC é apenas uma medida inicial e não leva em conta todos os fatores individuais de saúde. As categorias são:</p>
    <ul>
      <li>Abaixo de 18,5: Peso abaixo do normal.</li>
      <li>18,5 a 24,9: Peso considerado na faixa saudável.</li>
      <li>25 a 29,9: Peso na faixa do sobrepeso.</li>
      <li>30 a 34,9: Peso na faixa da obesidade grau 1.</li>
      <li>35 a 39,9: Peso na faixa da obesidade grau 2.</li>
      <li>Acima de 40: Peso na faixa da obesidade grau 3.</li>
    </ul>
    </footer>
    </>

  )
};

export default App
