import React from 'react'
//Solução 03 - com um array de elementos
export default props => [
        <h1>Parte 1</h1>,
        <h2>Parte 2</h2>
    ]
    

//Solução 02 - diferença que não manda objeto div para o html
// export default props => 
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>


//Solução 01 - para a exportação de vários elementos (mais usada)
// export default props => 
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>