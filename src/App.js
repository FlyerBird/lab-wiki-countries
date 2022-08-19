// src/App.js
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import countriesData from "./countries.json";



function App() {
  return (
  <div className="App">
    <Navbar />

    <Routes>
      <Route path="/" element={<CountriesList countries={countriesData}  />} />
    </Routes>
  
    
  </div>
  );
}
export default App;