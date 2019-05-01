import React, {Component } from 'react'
// um componente de classe
export default class ComponenteCasse extends Component{
    render(){
        return (
            <div>
                <h1>Olá, sou uma Classe!</h1>
                {/* || usando Ou caso seja undefined, vazia ele retorna o padrão */}
                <h2>Valor: {this.props.valor || 'Padrão'}</h2>
            </div>
        )
    }

}