import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const ComparisonPlanets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {

        
        axios.get('https://swapi.dev/api/planets/')
        .then((res) =>{
            let data= res.data.results;
            setPlanets(data)

            // for (let i = 2; i < 6; i++) {
            //     axios.get('https://swapi.dev/api/planets/' + i)
            //     .then((res) =>{
            //     console.log(i);
            //     console.log(res.data.results);
            //     let data = planets;
            //     // data.push(res.data.results);
            //     setPlanets(data)
            // })
            // }
            
        })

        console.log(planets);
    }, []);

    return(
        <div className="comparison-main">
            {/* <h4>{planets[1].name}</h4>
            
            Broken!!!
            
            */}
            <ComparisonNav />
        </div>
    )
}

export default ComparisonPlanets