import React from 'react';
import '../css/timeline.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

const Timeline = () => {

    const [shipName, setShipName] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
        .then((res) =>{
            let data= res.data.results;
            for(let i = 0; i < data.length; i++){
                
                let shipN = data[i].release_date;

                shipName.push(shipN)
            }

            setShipName(shipName)
            console.log (data)
        })
    })
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
      
    return(
        <>
            <div className="timeline-main">
                <div className="dropdown-holder">
                    <select className="starships" >
                        <option>Starships</option>
                        <option>vehicles</option>
                    </select>
                </div>
            

                <div className="timline-chart">
                    <Line data={data}/>
                </div>
            </div>
        </>      
    );
}

export default Timeline;