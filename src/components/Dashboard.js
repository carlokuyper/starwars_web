import React from "react";
import '../css/dashboard.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const Dashboard = () => {

    const [movieInfo, setMovieInfo] = useState([]);

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
                  
            setMovieInfo(movies[1]);  
            
            setInterval(myTimer, 9000);
            let counter = 0;
            function myTimer() {
                if (counter <= 5) {
                    setMovieInfo(movies[counter]);
                    counter++;
                }else {
                    counter = 0;
                }
            }
        })
            
    }, [])


    return(
        <div className="dashboard-main">
            
                
                    <div className="titleCon">
                        <h1 className="title-text">{movieInfo.name}</h1>
                        <p className="info-text">Episode  - {movieInfo.ep}</p>
                        <p className="description-text">{movieInfo.intro}</p>
                    </div>
                    
                    <div></div>
                    <div className="titleCon2">
                        <div className="statsCon2">
                            <div id="planetIMG"></div>
                            <p className="stat-text2">Planets in the movie {movieInfo.planet}</p>
                        </div>

                        <div className="statsCon">
                            <div id="robotIMG"></div>
                            <p className="stat-text">Characters {movieInfo.character}</p>
                            <p className="stat-text">{movieInfo.species} Characters species</p>  
                        </div>      

                        <div className="statsCon">
                            <div id="shipIMG"></div>
                            <p className="stat-text">Star Ships {movieInfo.starships}</p>
                            <p className="stat-text">Vehicles {movieInfo.vehicles}</p>
                        </div>    
                    </div>    
                                    
                    
                    
            
        </div>
         
        
       
    );
}

export default Dashboard;