import react from "react";
import { useState, useEffect } from "react";

const initialForm = {
    id: null,
    name: "",
    type: ""
};

const CRUDForm = () => {
    const[form, setform] = useState({initialForm});

    const handleChange = (e) =>{}

    const handleSubmit = (e) =>{}

    const handleReset = (e) =>{}

    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input type="text" name="type" placeholder="Tipo" onChange={handleChange} value={form.type}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Resetear" onClick={handleReset}/>
            </form>
        </div>
    );
};

export default CRUDForm