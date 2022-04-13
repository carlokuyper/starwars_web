import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ComparisonPeople from "./components/ComparisonPeople";
import ComparisonPlanets from "./components/ComparisonPlanets";
import ComparisonStarships from "./components/ComparisonStarships";
import ComparisonVehicles from "./components/ComparisonVehicle";

import Timeline from "./components/Timeline";

import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Timeline" element={<Timeline/>} />
        <Route path="/ComparisonPeople" element={<ComparisonPeople />}/>
        <Route path="/ComparisonPlanets" element={<ComparisonPlanets />}/>
        <Route path="/ComparisonStarships" element={<ComparisonStarships />}/>
        <Route path="/ComparisonVehicles" element={<ComparisonVehicles />}/>
      </Routes>
    </div>
  );
}

export default App;
