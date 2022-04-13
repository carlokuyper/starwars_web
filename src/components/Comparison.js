import React from "react";
import '../css/comparison.css'

import 'chart.js/auto';
import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  RadialLinearScale,  PointElement,  LineElement,  Filler,  Tooltip,  Legend, } from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(    RadialLinearScale,    PointElement,    LineElement,    Filler,    Tooltip,    Legend  );

const Comparison = () => {

    const [shipName, setShipName] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
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

    const data = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#FFFFFF',
          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#FFFFFF',
          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };


    return(
        <div className="comparison-main">
            <div className="dropdown-holder">

            </div>

            <div className="radar-holder">
                <Radar data={data} />
            </div>

        </div>
       
    );
}

export default Comparison;