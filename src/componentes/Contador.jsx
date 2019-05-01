import React, {Component } from 'react'

export default class Contador extends Component{

    maisUm(){
        alert("Função chamada topis!")
        this.props.numero++
    }

    render(){
        return(
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}> + Inc</button>
                <button>- Dec</button>
            </div>
        )
    }

}