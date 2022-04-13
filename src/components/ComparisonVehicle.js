import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

const ComparisonVehicles = () => {

    const [vehicleInfo, setVehicleInfo] =useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/vehicles/')
        .then((res) => {
            let data= res.data.results;

            let vehicle = [];

            for(let i = 0; i < data.length; i++){
                
                let vehicle = data[i].cargo_capacity;
            }

            console.log (data)
            

        })

        
        
    },[])

    const data = {
        labels: ['Date', 'testing', 'data'],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            borderColor: "#742774"
          }
        ]
      };

    return(
        <div className="comparison-main">

            <div className="dropdown-holder"></div>
            <div className="timline-chart">
                <Line data={data}/>
            </div>
            <ComparisonNav />
        </div>
    )
}

export default ComparisonVehicles