import react from "react";

const CRUDTableRow = ({el}) =>{
    return(
        <tr>
            <td>{el.Name}</td>
            <td>{el.Type}</td>
            <td>{el.Attack}</td>
            <td><button>Actualizar</button></td>
            <td><button>Eliminar</button></td>
        </tr> 
    );
};

export default CRUDTableRow