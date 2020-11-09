import React from "react";
import If, {Else} from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Bem vindo <strong>{usuario.nome}</strong>!<br/>
        <Else>Bem vindo Amigão</Else>
      </If>
    </div>
  );
};
