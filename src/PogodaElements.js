import React from 'react';
import './PogodaElements.css'

const PogodaElements = (props) => {

    let pogodaData = props.pogodaData;
    // console.log(props.pogodaData)

    let pogodaElement = pogodaData.map((object) => {

        return (
            <div key={object.id_stacji} className='pogodaElement'>
                <li>
                    <h4>{object.stacja}</h4>
                    <p className={(object.temperatura >= 10 ? 'red' : 'blue')}>Temperatura: {(object.temperatura === null ? 'Brak danych' : object.temperatura)}</p>
                    <p>Wilgotność: {(object.wilgotnosc_wzgledna === null ? 'Brak danych' : object.wilgotnosc_wzgledna)}</p>
                    <p>Ciśnienie: {(object.cisnienie === null ? 'Brak danych' : object.cisnienie)}</p>
                </li>
            </div>
        )

    })


    return (
        <div className='pogodaElementsContainer'>{pogodaElement}</div>
    )
}

export default PogodaElements;