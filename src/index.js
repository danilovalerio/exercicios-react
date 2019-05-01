import React from 'react'
import ReactDOM from 'react-dom'

//importando o componente novo
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
//passa a string para o elemento
ReactDOM.render(
    <div>
        <PrimeiroComponente></PrimeiroComponente>
    </div>    
, elemento)