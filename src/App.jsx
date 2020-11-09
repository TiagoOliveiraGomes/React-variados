import React from "react";
import "./App.css";
import Aleatorio from "./Aleatorio.jsx";
import Card from "./layout/Card";
import Familia from "./familia/Familia";
import FamMembers from './familia/FamMembers'
import TabelaAlun from './repeticao/TabelaAluno'
import ParImpar from './componentes/ParImpar'
import UsuarioInfo from './componentes/UsuarioInfo'
import Pai from './familia/Pai'
import Input from './formulario/Input'
import Contador from './contador/Contador'
import Mega from './mega/Mega'

export default function lala(propriedades) {
  return (
    <div className="app">
      <Card titulo="Mega" color="#144689">
        <Mega quant = {5} />
      </Card>
      <Card titulo="Contador" color="#144689">
        <Contador numInit = {1}></Contador>
      </Card>
      <Card titulo="Formulario" color="#756812">
        <Input></Input>
      </Card>
      <Card titulo="Alunos" color="#465289">
        <Pai></Pai>
      </Card>
      <Card titulo="Alunos" color="#844241">
        <ParImpar numero={4}></ParImpar>
        <UsuarioInfo usuario={{nome: 'carlos'}}/>
        <UsuarioInfo usuario={{email: 'jose@email.com'}}/>
      </Card>
      <Card titulo="Alunos" color="#356145">
        <TabelaAlun></TabelaAlun>
      </Card>
      <Card titulo="aleatorio" color="#662145">
        <Familia sobrenome="Gomes">
          <FamMembers nome="joaquin"/>
          <FamMembers nome="Ana"/>
          <FamMembers nome="Alures" />
        </Familia>
      </Card>
      <Card titulo="aleatorio" color="#367821">
        <Aleatorio min={1} max={10} />
      </Card>
      <Card titulo="aleatorio" color="#F57C4A">
        <Aleatorio min={1} max={10} />
      </Card>
      <Card titulo="aleatorio" color="#E36671">
        Ola pessoal
      </Card>
    </div>
  );
}
