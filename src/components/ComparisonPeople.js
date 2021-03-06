import React from "react";
import '../css/comparison.css'

import {useState, useRef, useEffect } from 'react';
import axios from "axios";


import {  Chart as ChartJS, CategoryScale, LinearScale, BarElement,  RadialLinearScale,  ArcElement,  PointElement,  LineElement,  Filler,  Tooltip, Title, Legend,} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(  RadialLinearScale,  PointElement,  LineElement,  Filler,  Tooltip,  Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.register(  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend);


const ComparisonPeople = () => {

    const [people, setPeople] = useState([]);
    const inputPerson1 = useRef();
    const inputPerson2 = useRef();


    const [person1, setPerson1] = useState([]);
    const [person1homeworld, setPerson1homeworld] = useState([]);

    const [person1films, setPerson1films] = useState();
    // const [person1Starships, setPerson1Starhips] = useState([]);
    // const [person1Vehicles, setPerson1Vehicles] = useState([]);

    const [person2, setPerson2] = useState([]);
    const [person2homeworld, setPerson2homeworld] = useState([]);

    const [person2films, setPerson2films] = useState([]);
    // const [person2Starships, setPerson2Starhips] = useState([]);
    // const [person2Vehicles, setPerson2Vehicles] = useState([]);

   

    useEffect(() => {
        let names = [];
        axios.get('https://swapi.dev/api/people/')
        .then((res) =>{
            let data= res.data.results;
            // console.log(data);
            for(let i = 0; i < data.length; i++){
                names.push({
                    key: i,
                    name: data[i].name,
                    url: data[i].url,
                })
            }
            setPeople(names)
            // console.log (names)
        })
        
        axios.get('https://swapi.dev/api/people/1/')
        .then((res) =>{
            let data= res.data.results;
            //  console.log(res.data);
             setPerson1(res.data);
        })
        axios.get('https://swapi.dev/api/people/1/')
        .then((res) =>{
            let data= res.data.results;
            //  console.log(res.data);
             setPerson2(res.data);
        })


    }, []);
    

    function updatePerson1(){
        let person = {};
        console.log(inputPerson1.current.value);
        const url = inputPerson1.current.value;
        axios.get(url)
        .then((res) =>{
            let data= res.data.results;
             console.log(res.data);
             person = res.data;
            setPerson1(person);
             setPerson1films(person.films.length);
            updatePerson1Homeworld();

            // updatePerson1Films();
            // updatePerson1Starhips();
            // updatePerson1Vehicles();
        })      


        console.log(person1);
    }

    function updatePerson1Homeworld(){
        axios.get(person1.homeworld)
        .then((res) =>{
            console.log(res.data.name);
            setPerson1homeworld(res.data.name);
        })
    }

    // function updatePerson1Films() {
    //     let films = "";
    //         for (let i = 0; i < person1.films.length; i++) {

    //             axios.get(person1.films[i])
    //             .then((re2) =>{
    //                 // console.log(re2.data.title);
    //                 films = films + re2.data.title + " ";

    //                 setPerson1films(films);
    //                 // console.log(person1films);
    //             })
    //         }
    // }

    // function updatePerson1Starhips() {
    //     let starships = "";
    //         for (let i = 0; i < person1.starships.length; i++) {

    //             axios.get(person1.starships[i])
    //             .then((re2) =>{
    //                 console.log(re2.data.name);
    //                 starships = starships + re2.data.name + " ";

    //                 setPerson1Starhips(starships);
    //                 console.log(person1Starships);
    //             })
    //         }
    // }

    // function updatePerson1Vehicles() {
    //     let vehicles = "";
    //         for (let i = 0; i < person1.vehicles.length; i++) {

    //             axios.get(person1.vehicles[i])
    //             .then((re2) =>{
    //                 console.log(re2.data.name);
    //                 vehicles = vehicles + re2.data.name + " ";

    //                 setPerson1Vehicles(vehicles);
    //                 console.log(person1Vehicles);
    //             })
    //         }
    // }
    
    function updatePerson2(){
        let person = {};
        console.log(inputPerson2.current.value);
        const url = inputPerson2.current.value;
        axios.get(url)
        .then((res) =>{
            let data= res.data.results;
             console.log(res.data);
             person = res.data;
            setPerson2(person);
            setPerson2films(person.films.length);


            updatePerson2Homeworld();
            // updatePerson2Films();
            // updatePerson2Starhips();
            // updatePerson2Vehicles();
        })      


        console.log(person2);
    }

    function updatePerson2Homeworld(){
        axios.get(person2.homeworld)
        .then((res) =>{
            console.log(res.data.name);
            setPerson2homeworld(res.data.name);
        })
    }

    // function updatePerson2Films() {
    //     let films = "";
    //         for (let i = 0; i < person2.films.length; i++) {

    //             axios.get(person2.films[i])
    //             .then((re2) =>{
    //                 // console.log(re2.data.title);
    //                 films = films + re2.data.title + " ";

    //                 setPerson2films(films);
    //                 // console.log(person1films);
    //             })
    //         }
    // }

    // function updatePerson2Starhips() {
    //     let starships = "";
    //         for (let i = 0; i < person2.starships.length; i++) {

    //             axios.get(person2.starships[i])
    //             .then((re2) =>{
    //                 console.log(re2.data.name);
    //                 starships = starships + re2.data.name + " ";

    //                 setPerson2Starhips(starships);
    //                 console.log(person2Starships);
    //             })
    //         }
    // }

    // function updatePerson2Vehicles() {
    //     let vehicles = "";
    //         for (let i = 0; i < person2.vehicles.length; i++) {

    //             axios.get(person2.vehicles[i])
    //             .then((re2) =>{
    //                 console.log(re2.data.name);
    //                 vehicles = vehicles + re2.data.name + " ";

    //                 setPerson2Vehicles(vehicles);
    //                 console.log(person2Vehicles);
    //             })
    //         }
    // }

    const personData = {
        labels: [ person1.name, person2.name,],
        datasets: [
            {
              label: 'Mass',
              data: [person1.mass, person2.mass,],
              backgroundColor: '#1B998B',
            },
            {
              label: 'Height',
              data: [person1.height, person2.height],
              backgroundColor: '#176087',
            },
          ],
      };

      const filmData = {
        labels: [person1.name + " Films", person2.name + " Films"],
        datasets: [
          {
            data: [person1films, person2films],
            backgroundColor: [
              '#EAC435',
              '#E4572E',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 0 ,
          },
        ],
      };

 let peopleOptions = people.map((item) => ( <option key={item.key} value={item.url}> {item.name} </option>))

    return(

        <div className="comparison-main">
        
            <div className="PInfoCon">
                <h1 className="titleHolder">People Comparison</h1>
                <div className="PlanetInfo">
                    <select className="dropDown person1" ref={inputPerson1}onChange={updatePerson1}>
                    {peopleOptions}
                    </select>

                    <h2>Name : {person1.name}</h2>
                    <p className="text">Hair colour : {person1.hair_color}</p>
                    <p className="text">Eye colour : {person1.eye_color}</p>
                    <p className="text">Birth year :  {person1.birth_year}</p>
                    <p className="text">Gender : {person1.gender}</p>
                    <p className="text">Homeworld : {person1homeworld}</p>
                    {/* <h3>Films : {person1films}</h3> */}
                    {/* <h3>Starships : {person1Starships}</h3>
                    <h3>Vehicles : {person1Vehicles}</h3> */}
                </div>
                
                              
                <div className="PlanetInfo">
                    <select className="dropDown person2" ref={inputPerson2} onChange={updatePerson2}>
                        {peopleOptions}
                    </select>

                    <h2>Name : {person2.name}</h2>
                    <p className="text">Hair colour : {person2.hair_color}</p>
                    <p className="text">Eye colour : {person2.eye_color}</p>
                    <p className="text">Birth year :  {person2.birth_year}</p>
                    <p className="text">Gender : {person2.gender}</p>
                    <p className="text">Homeworld : {person2homeworld}</p>
                    {/* <h3>Fimls : {person2films}</h3> */}
                    {/* <h3>Starships : {person2Starships}</h3>
                    <h3>Vehicles : {person2Vehicles}</h3> */}
                    
                    

                </div>
                <div className="rotationChart">
                        <Bar data={personData} />
                    </div>
                <div className="peopleChart2">
                    <Pie data={filmData} />
                </div>

            </div>
                
                
                
                
        </div>
                
    )
}

export default ComparisonPeople