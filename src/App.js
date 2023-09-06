// import './App.css';
import Navbar from "./components/Navbar.js";
import LandingPage from "./components/LandingPage.js";
import Services from './components/Services';
import About from './components/About';
import { useEffect, useState } from 'react';
import Clients from './components/Clients';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Services/>
      <About />
      <Clients/>
      <Feedback/>
      </div>
  );
}

export default App;
