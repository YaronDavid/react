import react from "react";
import { useState, useEffect } from "react";

const initialForm = {
    id: null,
    Name: "",
    Type: "",
    Attack: ""
};

const CRUDForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const[form, setform] = useState({initialForm});

    const handleChange = (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.Name||!form.Type||!form.Attack){
            alert("Incomplete Data");
            return;
        }
        if(form.id===null){
            createData(form)
        }else{
            updateData(form)
        }
        handleReset();
    }

    const handleReset = (e) =>{
        setform(initialForm);
        setDataToEdit(null);
    }

    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Nombre" onChange={handleChange} defaultValue={form.name}/>
                <input type="text" name="Type" placeholder="Tipo" onChange={handleChange} defaultValue={form.type}/>
                <input type="text" name="Attack" placeholder="Ataque" onChange={handleChange} defaultValue={form.attack}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Resetear" onClick={handleReset}/>
            </form>
        </div>
    );
};

export default CRUDForm