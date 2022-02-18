import react from "react";
import CRUDTableRow from "../CRUDTableRow";

const CRUDTable = ({ data }) => {
    return (
        <div>
            <h3>Tabla CRUD</h3>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Ataque</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {data.lenght === 0 ? (
                    <tr>
                        <td colSpan="4">Sin Datos</td>
                    </tr>
                    ) : (
                        data.map((el) => <CRUDTableRow key={el.id} el={el}/>)
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CRUDTable