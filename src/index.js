import React from 'react'
import ReactDOM from 'react-dom'

//importando o componente novo
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
//passa a string para o elemento
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bem vindo as props!" abcd={12345}></PrimeiroComponente>
    </div>    
, elemento)