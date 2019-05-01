import React from 'react'

//Essa função recebe props e clona as mesmas para todos os filhos
export function propsParaFilhos(props){
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {...props })
    })
}