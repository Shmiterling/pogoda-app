import React from "react";
import './ButtonPanel.css'

const ButtonPanel = (props) => {


    return (
        <div>
            <button onClick={props.sortByTemperatureLow} className="sort_by_temperature_low">Sortuj temperature do najwyzszej</button>
            <button onClick={props.sortByTemperatureHigh} className="sort_by_temperature_high">Sortuj temperature do najnizszej</button>
            <button onClick={props.sortByName} className="sort_by_name">Sortuj alfabetycznie</button>
            <input onChange={props.filter} type='text' placeholder="Szykaj miasta"></input>
        </div>
    )
}



export default ButtonPanel;