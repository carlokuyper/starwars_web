import React from "react";
import '../css/comparison.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS, CategoryScale, LinearScale, BarElement,  RadialLinearScale,  ArcElement,  PointElement,  LineElement,  Filler,  Tooltip, Title, Legend,} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(  RadialLinearScale, ArcElement, CategoryScale,  PointElement,  LineElement, LinearScale,  BarElement,  Title, Filler,  Tooltip,  Legend);

const ComparisonStarships = () => {

  const [vehicle, setVehicle] = useState([]);
  

  const inputVehicle1 = useRef();
  const inputVehicle2 = useRef();

  const [vehicle1, setVehicle1] = useState([]);
  const [vehicle2, setVehicle2] = useState([]);

  useEffect(() => {
    let names = [];
      axios.get('https://swapi.dev/api/starships/')
      .then((res) => {
          let data= res.data.results;

          let vehicles = [];

          for(let i = 0; i < data.length; i++){
            let vehicles = data[i].cargo_capacity;

              names.push({
                  key: i,
                  name: data[i].name,
                  url: data[i].url,
              })
            
          }
          setVehicle(names)
          console.log (data)
      })
  },[])


  function updateVehicle1(){
    let vehicleData = {};
    console.log(inputVehicle1.current.value);
    const url = inputVehicle1.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          vehicleData = res.data;
        setVehicle1(vehicleData);
    })      


    console.log(vehicle1.cost_in_credits);
  }

  function updateVehicle2(){
    let vehicleData = {};
    console.log(inputVehicle2.current.value);
    const url = inputVehicle2.current.value;
    axios.get(url)
    .then((res) =>{
        let data= res.data.results;
          console.log(res.data);

          vehicleData = res.data;
        setVehicle2(vehicleData);
    })      


    console.log(vehicle2.cost_in_credits);
  }
 


  const speedData = {
    labels: [ vehicle1.name, vehicle2.name ],
    datasets: [
      {
        label: 'Atmospher Speed',
        data: [vehicle1.max_atmosphering_speed, vehicle2.max_atmosphering_speed,],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'MGLT',
        data: [vehicle1.MGLT,  vehicle2.MGLT,],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      }
    ],
  };

  const costData = {
    labels: [vehicle1.name + ' Credits', vehicle2.name + ' Credits'],
    datasets: [
      {
        label: '# of Votes',
        data: [vehicle1.cost_in_credits, vehicle2.cost_in_credits],
        backgroundColor: [
          'red',
          'pink',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const peopleData = {
    labels: [vehicle1.name, vehicle2.name],
    datasets: [
      {
        label: 'Crew',
        data: [vehicle1.crew, vehicle2.crew,],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Passengers',
        data: [vehicle1.passengers, vehicle2.passengers],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const capacityData = {
    labels: [vehicle1.name + 'Cargo', vehicle2.name + 'Cargo',  vehicle1.name + 'Consmables',  vehicle2.name + 'Consmables'],
    datasets: [
      {
        label: '# of Votes',
        data: [vehicle1.cargo_capacity, vehicle2.cargo_capacity, vehicle1.consumables, vehicle2.consumables],
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
  


  let vehicleOptions = vehicle.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

  return(
    <div className="comparison-main">
      <div className="PInfoCon">
        <div className="PlanetInfo">
          <select className="dropDown" ref={inputVehicle1}onChange={updateVehicle1}>
              {vehicleOptions}
          </select>
          <p className="text">Name:  {vehicle1.name}</p>
          <p className="text">Model:  {vehicle1.model}</p>
          <p className="text">Manufacturer:  {vehicle1.manufacturer}</p>
          <p className="text">Class:  {vehicle1.vehicle_class}</p>
        </div>
        <div className="PlanetInfo">
        <select className="dropDown" ref={inputVehicle2}onChange={updateVehicle2}>
              {vehicleOptions}
            </select>
          <p className="text">Name:  {vehicle2.name}</p>
          <p className="text">Model:  {vehicle2.model}</p>
          <p className="text">Manufacturer:  {vehicle2.manufacturer}</p>
          <p className="text">Class:  {vehicle2.vehicle_class}</p>
        </div>

        <div className="rotationChart">
            <Bar data={peopleData} />
          </div>
    </div>
        
        <div className="chart-con">
          <div className="chartholder">
            <Doughnut data={capacityData} />
          </div> 

          <div className="chartholder">
            <Pie data={costData} />
          </div>

          <div className="chartholder2">
            <Bar data={speedData} />
          </div>
        </div>

        

    </div>
      
  );
}

export default ComparisonStarships;