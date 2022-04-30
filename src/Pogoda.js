import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PogodaElements from './PogodaElements';
import './Pogoda.css'
import ButtonPanel from './ButtonPanel';


function Pogoda() {

    const [base, changeBase] = useState([])
    const [pogodaData, setPogodaData] = useState([]);

    useEffect(() => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
            .then((res) => {

                setPogodaData(res.data)
                changeBase(res.data)

            });
    }, []);

    useEffect(() => {

    })

    const sortByTemperatureLow = () => {
        let filteredPogodaData = [...pogodaData.sort(function (a, b) {
            if (Number(a.temperatura) < Number(b.temperatura)) { return -1 }
            if (Number(a.temperatura) > Number(b.temperatura)) { return 1 }
            return 0
        })]
        setPogodaData(filteredPogodaData)
    };

    const sortByTemperatureHigh = () => {
        let filteredPogodaData = [...pogodaData.sort(function (a, b) {
            if (Number(a.temperatura) < Number(b.temperatura)) { return -1 }
            if (Number(a.temperatura) > Number(b.temperatura)) { return 1 }
            return 0
        }).reverse()]

        setPogodaData(filteredPogodaData)

    };

    const sortByName = () => {
        let filteredPogodaData = [...pogodaData.sort(function (a, b) {
            if (a.stacja < b.stacja) { return -1 }
            if (a.stacja > b.stacja) { return 1 }
            return 0
        })]

        setPogodaData(filteredPogodaData)

    };

    const filter = (event) => {

        
        let input = event.target.value.toUpperCase()
        
        if(input === '') {

             return setPogodaData(base)
             
        } else {
            let filteredPogodaData = pogodaData.filter((element) => {
           
 
                let elements = element.stacja.toUpperCase()
                return elements.startsWith(input)
    
            })
            return setPogodaData(filteredPogodaData)
        }

    };



    return (
        <div>
            <ButtonPanel filter={filter} sortByTemperatureLow={sortByTemperatureLow} sortByTemperatureHigh={sortByTemperatureHigh} sortByName={sortByName} />
            <div className='pogoda'>
                <PogodaElements pogodaData={pogodaData} />
            </div>
        </div>
    )
}

export default Pogoda;
