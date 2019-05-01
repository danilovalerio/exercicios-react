import React from 'react'

export default props => 
    <div>
        <h1>Família</h1>
        {/* Solução 2 - foi passada todas as props para o filho 
            Obs.: Operador spread ... espalha as props clonadas para o objeto */}
        {React.cloneElement(props.children, { ...props})}

        {/* Solução 1 - Passar props de pai pra filho, nessa caso props específica
        cloneElement clona o elemento e passa a propriedade sobrenome que vem de família */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>