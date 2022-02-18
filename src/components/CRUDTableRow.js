import react from "react";

const CRUDTableRow = ({el}) =>{
    return(
        <tr>
            <td>{el.Name}</td>
            <td>{el.Type}</td>
            <td>{el.Attack}</td>
            <button>Actualizar</button>
            <button>Eliminar</button>
        </tr> 
    );
};

export default CRUDTableRow