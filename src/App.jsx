import React from 'react'
import { Galaxy } from './Components/Galaxy.jsx'
import './App.css'
import { ParticleBg } from './Components/ParticleBg.jsx'
import SecurityTrainingPage from './pages/Securitytraning.jsx'
import BlockchainRiskAssessment from './pages/BlockChainRisk.jsx'
function App() {

  return (
    <>

    <div className='relative'>
      <Galaxy />
      <SecurityTrainingPage />
      <BlockchainRiskAssessment />
    </div>

</>

  )
}

export default App
