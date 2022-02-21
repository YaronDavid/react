import react from "react";
import CRUDForm from "./CRUDForm";
import CRUDTable from "./CRUDTable";
import { useState } from "react";


const inicialBD =[
    {
        id: 1,
        Name: "Articuno",
        Type: "ice-flying",
        Attack: "Blizzard"
    },
    {
        id: 2,
        Name: "Zapdos",
        Type: "electric-flying",
        Attack: "Thunder" 
    },
    {
        id: 3,
        Name: "Moltres",
        Type: "fire-flying",
        Attack: "Heat Wave"
    },
    {
        id: 4,
        Name: "Lugia",
        Type: "Psyquic-flying",
        Attack: "Psyquic"
    },
    {
        id: 5,
        Name: "Ho-oh",
        Type: "Fire-flying",
        Attack: "Sacred Fire"
    }
];

const CRUDApp = () => {
    const[db, setDb] = useState(inicialBD);
    const[dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data])
    }

    const updateData = (data) =>{

    }

    const deleteData = (id) =>{

    }

    return(
        <div>
            <h2>CRUD App</h2>
            <CRUDForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>
            <CRUDTable 
            data={db} 
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}/>
        </div>
    );
}

export default CRUDApp