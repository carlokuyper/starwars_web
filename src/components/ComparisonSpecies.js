import React from "react";
import '../css/comparison.css'
import ComparisonNav from "./ComparisonNav";

import {useState, useRef, useEffect } from 'react';
import axios from "axios";

const ComparisonSpecies = () => {
    return(
        <div className="comparison-main">
            <p>Testing Species</p>
            <div className="dropdown-holder"></div>
            <div className="radar-holder"></div>
            <ComparisonNav />
        </div>
    )
}

export default ComparisonSpecies