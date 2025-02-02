import React from 'react'
import { Galaxy } from './Components/Galaxy.jsx'
import './App.css'
import { ParticleBg } from './Components/ParticleBg.jsx'
import SecurityTrainingPage from './pages/Securitytraning.jsx'
import BlockchainRiskAssessment from './pages/BlockChainRisk.jsx'
import Roadmap from './Components/Roadmap.jsx'
import NavBar from './Components/NavBar.jsx'
import DefiSecurityPage from './pages/DefiSecurity.jsx'
function App() {
  return (
    <>
    
    <div className='relative'>
      <Galaxy />
      <NavBar />
      <DefiSecurityPage />
      <SecurityTrainingPage />
      <BlockchainRiskAssessment />
      <Roadmap />
    </div>

</>

  )
}

export default App;
