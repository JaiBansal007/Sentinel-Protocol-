import React from 'react'
import { Galaxy } from './Components/Galaxy.jsx'
import './App.css'
import { ParticleBg } from './Components/ParticleBg.jsx'
import SecurityTrainingPage from './pages/Securitytraning.jsx'
import BlockchainRiskAssessment from './pages/BlockChainRisk.jsx'
import Roadmap from './Components/Roadmap.jsx'
import NavBar from './Components/NavBar.jsx'
import DefiSecurityPage from './pages/DefiSecurity.jsx'
import AIIncidentResponse from './pages/AIincidence.jsx'
import BlockchainPhishingProtection from './pages/BlockChainService.jsx'
import DeFiAIMonitoring from './pages/Monitering.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <>
    
    <div className='relative space-grotesk'>
      <Galaxy />
      <NavBar />
      <DefiSecurityPage />
      <BlockchainPhishingProtection/>
      <DeFiAIMonitoring />
      <SecurityTrainingPage />
      <BlockchainRiskAssessment />
      <Roadmap />
      <AIIncidentResponse />
      <Footer />
    </div>

</>

  )
}

export default App;
