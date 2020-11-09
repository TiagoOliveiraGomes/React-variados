import React from "react";
import "./TabelaAluno.css";
import BancoAlunos from '../data/BancoAlunos';

export default (props) => {

    const AlunoLista = BancoAlunos.map((aluno, i) => {
        return(
            <tr className={i % 2 === 0 ? 'par': 'impar'} key = {aluno.id}>
                <td>{aluno.id})</td>
                <td>{aluno.nome}</td>
                <td>{aluno.nota}</td>
            </tr>
        )
    });

  return (
    <div className="TabelaAlunos">
        <table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Nota</th>
                </tr> 
            </thead>
            <tbody>
                {AlunoLista}
            </tbody>
        </table>
    </div>
  );
};
