import React, {Component } from 'react'

export default class Contador extends Component{
    state = {
        // numero: 0
        numero: this.props.numeroInicial
    }
   

    maisUm = () => {
        this.alterarNumero(1)
        // this.setState({numero: this.state.numero + 1})
    }

    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({numero: this.state.numero - 1})
    }

    //Na chamada do onclick tem que ser arrow function por conta da passagem de parâmetro
    alterarNumero = (diferenca) => {
        this.setState({numero: this.state.numero + diferenca})
    }
    
    render(){
        return(
            <div>
                <h1>Número: {this.state.numero}</h1>
                <button onClick={this.maisUm}> + Inc</button>
                <button onClick={this.menosUm}>- Dec</button>
                <button onClick={() => this.alterarNumero(10)}> + 10</button>
                <button onClick={() => this.alterarNumero(-10)}> - 10</button>
            
            </div>
        )
    }
    
}

//Solucão 01 - Para o problema de this undefined Bind
//no constructor é passado o this e garantindo 
//que this sempre será uma instância de contador por conta do bind
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//Solução 02 - com Arrow Function (onClick)
// <button onClick={() => this.maisUm()}> + Inc</button>

//Solução 03 Arrow Function no método, o this associa o local Contador
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }