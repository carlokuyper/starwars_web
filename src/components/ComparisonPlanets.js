import React from "react";
import '../css/comparison.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS, CategoryScale, LinearScale, BarElement,  RadialLinearScale,  ArcElement,  PointElement,  LineElement,  Filler,  Tooltip, Title, Legend,} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(  RadialLinearScale,  PointElement,  LineElement,  Filler,  Tooltip,  Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend);

const ComparisonPlanets = () => {
    const [planet, setPlanet] = useState([]);
  

  const inputPlanet1 = useRef();
  const inputPlanet2 = useRef();

  const [planet1, setPlanet1] = useState([]);
  const [planet2, setPlanet2] = useState([]);

  useEffect(() => {
    let names = [];
      axios.get('https://swapi.dev/api/planets/')
      .then((res) => {
          let data= res.data.results;

          let planets = [];

          for(let i = 0; i < data.length; i++){
            let planets = data[i].cargo_capacity;

            for(let i = 0; i < data.length; i++){
              names.push({
                  key: i,
                  name: data[i].name,
                  url: data[i].url,
              })
            }
          }
          setPlanet(names)
          console.log (data)
      })
  },[])


  function updatePlanet1(){
    let planetData = {};
    console.log(inputPlanet1.current.value);
    const url = inputPlanet1.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          planetData = res.data;
        setPlanet1(planetData);
    })      


    console.log(planet1.cost_in_credits);
  }

  function updatePlanet2(){
    let planetData = {};
    console.log(inputPlanet2.current.value);
    const url = inputPlanet2.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          planetData = res.data;
        setPlanet2(planetData);
    })      


    console.log(planet2.cost_in_credits);
  }

  const popData = {
    labels: [planet1.name + ' Population',  planet2.name + ' Population'],
    datasets: [
      {
        label: '# of Votes',
        data: [planet1.population, planet2.population],
        backgroundColor: [
          'blue', 
          'green',
          'orange',
          'purple'
        ], 
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 0,
      },
    ],
  };

  const diamData = {
    labels: [planet1.name + ' Diameter', planet2.name + ' Diameter'],
    datasets: [
      {
        label: '# of Votes',
        data: [planet1.diameter, planet2.diameter],
        backgroundColor: [
          'blue', 
          'green',
          'orange',
          'purple'
        ], 
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 0,
      },
    ],
  };
  
  const rotationData = {
    labels: [ planet1.name, planet1.name ],
    datasets: [
        {
            label: 'Orbital Period',
            data: [ planet1.orbital_period, planet2.orbital_period],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
        },
        {
        label: ' Rotation Period',
        data: [planet1.rotation_period, planet2.rotation_period, ],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      }
    ],
  };


  let planetOptions = planet.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

    return(
        <div className="comparison-main">
            <div className="dropdown-con">
            <select className="dropdown" ref={inputPlanet1}onChange={updatePlanet1}>
              {planetOptions}
            </select>
            <select className="dropdown" ref={inputPlanet2}onChange={updatePlanet2}>
              {planetOptions}
            </select>
          </div>  
        <div className="chart-con">
          <div className="chartholder2">
            <Bar data={rotationData} />
          </div>

          <div className="chartholder">
            <Doughnut data={popData} />
          </div>

          <div className="chartholder">
            <Doughnut data={diamData} />
          </div>

        </div>

        <div className="info-con">
          <p className="text">Name:  {planet1.name}</p>
          <p className="text">Terrain:  {planet1.terrain}</p>
          <p className="text">Climate:  {planet1.climate}</p>
          <p className="text">Surface Water:  {planet1.surface_water}</p>
        </div>
        <div className="info-con">
          <p className="text">Name:  {planet2.name}</p>
          <p className="text">Terrain:  {planet2.terrain}</p>
          <p className="text">Climate:  {planet2.climate}</p>
          <p className="text">Surface Water:  {planet2.surface_water}</p>
        </div>
            
        </div>
    )
}

export default ComparisonPlanets