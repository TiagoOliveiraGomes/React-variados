import React from 'react'
import BancoAlunos from '../data/BancoAlunos'

export default props => {

const AlunoLista = BancoAlunos.map(aluno => {
    return(
        <li key = {aluno.id}>
            {aluno.id}) <strong>{aluno.nome}</strong> Nota: <strong>{aluno.nota}</strong>
        </li>
    )
});

    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {AlunoLista}
            </ul>
        </div>
    )
}