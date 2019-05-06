import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import CV from "./components/CV"
import Presentation from "./components/Presentation"
import Portofolio from "./components/Portofolio"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Presentation />
      </div>
      <CV />
      <Portofolio />
      <Footer/>
    </div>
  );
}

export default App;
