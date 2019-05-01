import React from 'react'
// O filho vai avisar o Pai através do botão que vai sair
export default props => 
    <div>
        <button
            onClick={() => props.notificarSaida('Shopping')}>
            Vou Sair
        </button>
    </div>


// export default props => 
//     <div>
        
//     </div>