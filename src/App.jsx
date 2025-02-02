import React from 'react';
import { Galaxy } from './Components/Galaxy.jsx';
import { ParticleBg } from './Components/ParticleBg.jsx';
import Roadmap from './Components/Roadmap';
import './App.css';

function App() {
  return (
    <>
      <Galaxy />
      <div className="h-screen w-screen">
        <ParticleBg />
        <div className="text-white text-center text-2xl mt-10">asdd</div>
        <Roadmap />
      </div>
    </>
  );
}

export default App;
