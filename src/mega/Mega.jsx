import React, {useState} from "react";
import './Mega.css'


export default (props) => {
  
  function gerarNumeros(quant) {
    const arrayMega = Array(quant)
      .fill(0)
      .reduce((arrayAtual) => {
        const NewNumber = generateRandom(1, 60, arrayAtual);
        return [...arrayAtual, NewNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return arrayMega;
  }

  function generateRandom(min, max, array) {
    const randomNumber = parseInt(Math.random() * (max + 1 - min) + min);
    return array.includes(randomNumber)
      ? generateRandom(min, max, array)
      : randomNumber;
  }

  const [quant, setQuant] = useState(props.quant || 6)
  const numerosIniciais = Array(quant).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)

  return (
    <div className='Mega'>
      <h2>
        Mega
      </h2>
      <div>
        <label>Quantidade de Numeros</label>
        <input min='5' max='15' type="number" value={quant} onChange={ e => setQuant(+e.target.value)}/>
      </div>
      <h3>{numeros.join(' | ')}</h3>
      <button onClick={e => setNumeros(gerarNumeros(quant))}>
        Gerar Numeros
      </button>
    </div>
  );
};
