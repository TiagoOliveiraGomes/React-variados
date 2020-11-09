import React from "react";

export default function aleat(props) {
  const {min, max} = props;
  const result = parseInt(Math.random() * (max - min) + min);
  return (
    <div>
      <h1>Valor minimo: {min}</h1>
      <h1>Valor maximo: {max}</h1>
      <h1>Resultado: {result}</h1>
    </div>
  );
}
