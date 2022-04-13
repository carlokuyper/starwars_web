import React from "react";
import '../css/dashboard.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const Dashboard = () => {

    const [shipName, setShipName] = useState([]);
    const [movieInfo, setMovieInfo] =useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
        .then((res) =>{
            let data= res.data.results;

            let movieInfo = [];

            for(let i = 0; i < data.length; i++){
                
                movieInfo.push({
                    name: data[i].title,
                    ep: data[i].episode_id,
                    intro: data[i].opening_crawl,
                    releaseDate: data[i].release_date,

                    character: data[i].characters.length,
                    species: data[i].species.length,
                    
                    planet: data[i].planets.length,
                    starships: data[i].starships.length,
                    vehicles: data[i].starships.length,
                })

                

                
            }

            setMovieInfo(movieInfo)

            

            console.log (data)
            console.log(movieInfo)
        })
    }, [])

    return(
        <div className="dashboard-main">
            
                <select className="starships" >
                    <option>Starships</option>
                    <option>vehicles</option>
                </select>
                <div className="info-con">
                    <h1 className="title-text">Tatooine</h1>
                    <p className="info-text">Population - 200000</p>
                    <p className="description-text">
                        Ever wonder how big some of the planets are?
                        <br></br>How many people live on them?
                        <br></br>What makes them special? 
                    </p>
                    
                
            </div>

            
        </div>
         
        
       
    );
}

export default Dashboard;