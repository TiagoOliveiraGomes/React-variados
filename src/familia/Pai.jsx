import React, {useState} from "react";
import Filho from "./Filho";

export default (props) => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)

    function fornecerInfo(nome, idade){
        setNome(nome)
        setIdade(idade)
    }
  return (
    <div>
        <span> {nome} </span>
        <span> {idade} </span>
        <Filho click = {fornecerInfo}></Filho>
    </div>
    );
};
