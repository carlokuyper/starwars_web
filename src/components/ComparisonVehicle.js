import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

import {  Chart as ChartJS, CategoryScale, LinearScale, BarElement,  RadialLinearScale,  ArcElement,  PointElement,  LineElement,  Filler,  Tooltip, Title, Legend,} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(  RadialLinearScale,  PointElement,  LineElement,  Filler,  Tooltip,  Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend);


const ComparisonVehicles = () => {

    const [vehicleInfo, setVehicleInfo] =useState([]);
    const [vehicle, setVehicle] = useState([]);
    

    const inputVehicle1 = useRef();
    const inputVehicle2 = useRef();

    const [vehicle1, setVehicle1] = useState([]);
    const [vehicle2, setVehicle2] = useState([]);

    useEffect(() => {
      let names = [];
        axios.get('https://swapi.dev/api/vehicles/')
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
    labels: [vehicle1.name + 'Crew', vehicle2.name + 'Crew', vehicle1.name + 'Passengers', vehicle2.name + 'Passengers'],
    datasets: [
      {
        label: '# of Votes',
        data: [vehicle1.crew, vehicle2.crew, vehicle1.passengers, vehicle2.passengers],
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
        <div className="dropdown-con">
          <select className="dropdown" ref={inputVehicle1}onChange={updateVehicle1}>
            {vehicleOptions}
          </select>
          <select className="dropdown" ref={inputVehicle2}onChange={updateVehicle2}>
            {vehicleOptions}
          </select>
        </div>
        
        
        <div className="chart-con">
          <div className="chartholder2">
            <Bar data={peopleData} />
          </div>

          <div className="chartholder">
            <Pie data={costData} />
          </div>

          <div className="chartholder">
            <Doughnut data={capacityData} />
          </div>                
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
    )
}

export default ComparisonVehicles