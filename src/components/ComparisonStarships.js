import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS,  RadialLinearScale,  ArcElement,  PointElement,  LineElement,  Filler,  Tooltip,  Legend,} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(    RadialLinearScale,    PointElement,    LineElement,    Filler,    Tooltip,    Legend  );

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

              for(let i = 0; i < data.length; i++){
                names.push({
                    key: i,
                    name: data[i].name,
                    url: data[i].url,
                })
            }
            
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
      labels: [vehicle1.name + ' Speed', vehicle2.name + ' Speed', vehicle1.name + ' Hyperdrive', vehicle2.name + ' Hyperdrive'],
      datasets: [
        {
          label: '# of Votes',
          data: [vehicle1.max_atmosphering_speed, vehicle2.max_atmosphering_speed, vehicle1.MGLT, vehicle2.MGLT],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderWidth: 1,
    },
  ],
    };

    let vehicleOptions = vehicle.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

    return(
      <div className="comparison-main">
          <div className="dropdown-con">
              <select className="dropdown" ref={inputVehicle1}onChange={updateVehicle1}>
                {vehicleOptions}
              </select>
              <select className="dropdown" ref={inputVehicle2}onChange={updateVehicle2}>
                {vehicleOptions}
              </select>
            </div>  

          <div className="chartholder">
              <PolarArea data={speedData} />
          </div>

          <div className="info-con">
            <p className="text">Name:  {vehicle1.name}</p>
            <p className="text">Model:  {vehicle1.model}</p>
            <p className="text">Manufacturer:  {vehicle1.manufacturer}</p>
            <p className="text">Class:  {vehicle1.vehicle_class}</p>
          </div>
          <div className="info-con">
            <p className="text">Name:  {vehicle2.name}</p>
            <p className="text">Model:  {vehicle2.model}</p>
            <p className="text">Manufacturer:  {vehicle2.manufacturer}</p>
            <p className="text">Class:  {vehicle2.vehicle_class}</p>
          </div>
          <ComparisonNav />
      </div>
       
    );
}

export default ComparisonStarships;