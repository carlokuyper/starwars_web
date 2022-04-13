import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";





const ComparisonPeople = () => {
    const [person1, setPerson1] = useState([]);
    const [person2, setPerson2] = useState([]);
    const [people, setPeople] = useState([]);
    const inputPerson1 = useRef();
    const inputPerson2 = useRef();

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
    }, []);

    function updatePerson1(){
        console.log(inputPerson1.current.value);
        const url = inputPerson1.current.value;
        axios.get(url)
        .then((res) =>{
            let data= res.data.results;
             console.log(res.data);
             setPerson1(res.data);
        }).catch((err)=> {
            console.log(err);
        })

        console.log(person1.name);
    }
    function updatePerson2(){
        console.log(inputPerson2.current.value);

    }

 let peopleOptions = people.map((item) => ( <option key={item.key} value={item.url}>{item.name}</option>))

    return(
        <>
        <div className="comparison-main">

        <div className="dropdown-holder">
            <h1>{person1.name}</h1>
              <select className="person1" ref={inputPerson1}onChange={updatePerson1}>
              {peopleOptions}
              </select>
              
            </div>

        <div className="dropdown-holder">
            
              <select className="person2" ref={inputPerson2} onChange={updatePerson2}>
                  {peopleOptions}
              </select>
              
        </div>
            
            
        </div>
        <ComparisonNav />
        </> 
        
    )
}

export default ComparisonPeople