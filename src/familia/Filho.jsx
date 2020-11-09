import React from "react";

export default (props) => {
    const gerarIdade = parseInt(Math.random() * 100 + 20)
  return (
    <div>
        <div>filho</div>
        <button onClick = {e => {props.click("Geraldo", gerarIdade)}}>Fornecer informações</button>
    </div>
    );
};
