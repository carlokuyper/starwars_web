import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";


const ComparisonFilms = () => {

    const [shipName, setShipName] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
        .then((res) =>{
            let data= res.data.results;
            for(let i = 0; i < data.length; i++){
                
                let shipN = data[i].name;

                shipName.push(shipN)
            }

            setShipName(shipName)
            console.log (data)
        })
    })

    return(
        <div className="comparison-main">
            <p>Testing Films</p>
            <div className="dropdown-holder"></div>
            <div className="radar-holder"></div>
            <ComparisonNav />
        </div>
    )
}

export default ComparisonFilms