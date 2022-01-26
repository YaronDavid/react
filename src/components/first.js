import React from 'react';

const first = (props) =>{
    return(
        <>
        <h2>Primer componente</h2>
        <h3>Este es mi primer componente y me mando {props.msg}</h3>
        </>
    );
}


export default first;