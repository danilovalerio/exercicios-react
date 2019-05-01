import React from 'react'
import ReactDOM from 'react-dom'

//importando o componentes
//import PrimeiroComponente from './componentes/PrimeiroComponente'

// import {CompA, CompB as B} from './componentes/MultiplosComponentes'
// import MultiplosElementos from './componentes/MultiplosElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
// import FamiliaSilva from './componentes/FamiliaSilva';



const elemento = document.getElementById('root')
//passa a string para o elemento
ReactDOM.render(
    <div>
        <div>
            <Familia sobrenome="Viana">
                <Membro nome="Danilo" />
                <Membro nome="Daniela" sobrenome="Silva"></Membro>
            </Familia>

        </div>
        {/* <div>
            <FamiliaSilva sobrenome="Silva"/>
        </div> */}
        


        {/* <div>
           <MultiplosElementos/> 
        </div> */}

        {/* <div>
            <CompA valor="Sou o CompA"></CompA>
            <B valor="Sou o CompB"></B>
        </div> */}

        {/* <div>
            <PrimeiroComponente valor="Bem vindo as props!" abcd={12345}></PrimeiroComponente>
        </div> */}
    </div>    
, elemento)