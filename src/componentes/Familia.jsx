import React from 'react'
//importando a função que clona as propriedades para os filhos
import {propsParaFilhos} from '../utils/utils'

export default props => 
    <div>
        <h1>Família</h1>
        {/* chamamos a função e passamos as props */}
        {propsParaFilhos}

        {/* Com a função map dentro do React para clonar props para todos os filhos */}
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props })
        })} */}

        {/* Solução 2 - foi passada todas as props para o filho 
            Obs.: Operador spread ... espalha as props clonadas para o objeto */}
        {/* {React.cloneElement(props.children, { ...props})} */}

        {/* Solução 1 - Passar props de pai pra filho, nessa caso props específica
        cloneElement clona o elemento e passa a propriedade sobrenome que vem de família */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>