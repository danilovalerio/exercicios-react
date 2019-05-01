//como terá jsx é importante importar o React
import React from 'react'

//Com Arrow Function
export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.abcd}</h2>
        <p>{Math.random()}</p>
    </div>
