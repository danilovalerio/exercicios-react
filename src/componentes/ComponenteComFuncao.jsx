import React from 'react'

const aprovados = ['Danilo', 'Daniela', 'Bruna', 'Raphael']

export default props => {
    // função que gera itens
    const gerarItens = itens => {
        return itens.map(item => 
            <li>{item}</li>
        )
    }

    //retorno que usa a função
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}