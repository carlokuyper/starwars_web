import React from "react";
import '../css/dashboard.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const Dashboard = () => {

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
        <div className="container-fluid dashboard-main">
            <div className="background-img">
                <div className="info-con">
                    <h1 className="title-text">Tatooine</h1>
                    <p className="info-text">Population - 200000</p>
                    <p className="description-text">
                        Ever wonder how big some of the planets are?
                        <br></br>How many people live on them?
                        <br></br>What makes them special? 
                    </p>
                    <div className="page-button"><a  href="/Comparison">Comparison</a></div>
                </div>
                <div className="card-carousel">
                   
                </div>
                
            </div>

            
        </div>
         
        
       
    );
}

export default Dashboard;