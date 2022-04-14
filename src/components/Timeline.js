import React from 'react';
import '../css/timeline.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

const Timeline = () => {

    const [movie, setMovie] = useState([]);

    const inputMovie1 = useRef();
    const inputMovie2 = useRef();

    const [movie1, setMovie1] = useState([]);
    const [movie2, setMovie2] = useState([]);
    
    useEffect(() => {
        
        let moviesArray = ["A+New+Hope", "The+Empire+Strikes+Back", "Return+of+the+Jedi", "The+Phantom+Menace", "Attack+of+the+Clones", "Revenge+of+the+Sith"];
        
        for (let i = 0; i < moviesArray.length; i++) {
            console.log(moviesArray[i]);
            axios.get('https://www.omdbapi.com/?t=' + moviesArray[i] + '&apikey=5d0c0e4f')
            .then((res) =>{
                let data= res.data;
                console.log (data);
            })
            
        }
    })
   

      
  function updateMovie1(){
    let movieData = {};
    console.log(inputMovie1.current.value);
    const url = inputMovie1.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          movieData = res.data;
        setMovie1(movieData);
    })      


    console.log(movie1.cost_in_credits);
  }

  function updateMovie2(){
    let movieData = {};
    console.log(inputMovie2.current.value);
    const url = inputMovie2.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          movieData = res.data;
        setMovie2(movieData);
    })
    console.log(movie2.cost_in_credits);
  }

  const movieInfo = {
    labels: [inputMovie1.data,'testing'],
    datasets: [
        {
        label: 'Dataset 1',
        data: [33, 53, 85, 41, 44, 65],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Dataset 2',
        data: [33, 53, 85, 41, 44, 30],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'green',
        },
    ],
  };
      
  let movieOptions = movie.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

    return(
        <>
            <div className="timeline-main">
            <div className="dropdown-con">
                <select className="dropdown" ref={inputMovie1}onChange={updateMovie1}>
                {movieOptions}
                </select>
                <select className="dropdown" ref={inputMovie2}onChange={updateMovie2}>
                {movieOptions}
                </select>
            </div>
            

                <div className="timline-chart">
                    <Line data={movieInfo}/>
                </div>
            </div>
        </>      
    );
}

export default Timeline;