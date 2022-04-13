import React from "react";
import '../css/dashboard.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const Dashboard = () => {

    const [movieInfo, setMovieInfo] =useState([]);
    

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
        .then((res) =>{
            let data= res.data.results;

            let movies = [];

            for(let i = 0; i < data.length; i++){
                
                movies.push({
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

            setInterval(myTimer, 9000);
            let counter = 0;
            function myTimer() {
                if (counter <= 5) {
                    setMovieInfo(movies[counter]);
                    counter++;
                }else {
                    counter = 1;
                }
                
            }
            

            console.log (data)
            console.log(movies)

            
        })
    }, [])


    return(
        <div className="dashboard-main">
            
                <select className="starships" >
                    <option>Starships</option>
                    <option>vehicles</option>
                </select>
                <div className="info-con">
                    <h1 className="title-text">{movieInfo.name}</h1>
                    <p className="info-text">Episode  - {movieInfo.ep}</p>
                    <p className="description-text">{movieInfo.intro}</p>
                    <p className="info-text">Release Date: {movieInfo.releaseDate}</p>                  
                    <p className="info-text">Characters {movieInfo.character}</p>
                    <p className="info-text">{movieInfo.species} Characters Species</p>                  
                    <p className="info-text">Planets in the movie {movieInfo.planet}</p>
                    <p className="info-text">Starships {movieInfo.starships}</p>
                    <p className="info-text">Vehicles {movieInfo.vehicles}</p>
            </div>
        </div>
         
        
       
    );
}

export default Dashboard;