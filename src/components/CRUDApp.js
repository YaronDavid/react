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
    return(
        <div>
            <h2>CRUD App</h2>
            <CRUDForm/>
            <CRUDTable data={db}/>
        </div>
    );
}

export default CRUDApp