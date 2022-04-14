import React from 'react';
import '../css/timeline.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

const Timeline = () => {

    const [movie, setMovie] = useState([]);

    const [movieName, setMovieName] = useState([]);
    const [movieYear, setMovieYear] = useState([]);
    const [movieScore, setMovieScore] = useState([]);
    
    useEffect(() => {
        
        let moviesArray = ["A+New+Hope", "The+Empire+Strikes+Back", "Return+of+the+Jedi", "The+Phantom+Menace", "Attack+of+the+Clones", "Revenge+of+the+Sith"];
        
        for (let i = 0; i < moviesArray.length; i++) {
            
            axios.get('https://www.omdbapi.com/?t=' + moviesArray[i] + '&apikey=5d0c0e4f')
            .then((res) =>{
                let data = res.data;

                    let name = data.Title;             
                    let year = data.Year;
                    let score = data.imdbRating;
    
                    movieName.push(name)
                    movieYear.push(year)    
                    movieScore.push(score) 
                     
                console.log(movieName, movieYear)
 
                
            })
            
        }
        
    },[])

       
  const movieInfo = {
    labels: movieName,
        datasets: [
        {
        label: 'Years released',
        data: movieYear,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        
    ],
  };
      
  let movieOptions = movie.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

    return(
        <>
            <div className="timeline-main">
                <div className="timline-chart">
                    <Line data={movieInfo}/>
                </div>
            </div>
        </>      
    );
}

export default Timeline;