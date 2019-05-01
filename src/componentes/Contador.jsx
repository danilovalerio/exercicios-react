import React, {Component } from 'react'

export default class Contador extends Component{
   

    maisUm = () => {
        // this.props.numero++
        console.log(this)
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