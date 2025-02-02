import { useState } from "react";
import { motion } from "framer-motion";
import { Galaxy } from "./Galaxy"; // Assuming Galaxy is a component you have

const roadmapData = [
  {
    id: "Phase 1",
    title: "Sentinel Core: Building the Foundation",
    features: [
      "Sentinel Station: AI-Powered Defense Monitor",
      "Sentinel Nexus: MetaMask's Security Hub",
      "Sentinel Shield: Web3 Browser Upgrade",
    ],
  },
  {
    id: "Phase 2",
    title: "Sentinel AI: Deploying the Defense",
    features: [
      "Real-Time Phishing Detection with Sentinel AI",
      "AI-Driven Employee Training for DeFi Security",
      "Phishing Simulation Exercises for Crypto Security",
      "24/7 Sentinel AI Monitoring for DeFi Ecosystems",
      "AI-Enhanced Incident Response for DeFi",
    ],
  },
  {
    id: "Phase 3",
    title: "Sentinel Global: Scaling the Ecosystem",
    features: [
      "Risk Assessment and Strategy Development for Blockchain",
      "AI-Secured Communication for DeFi",
      "Partnerships and Integrations with Web3 Platforms",
      "Community Engagement and Awareness Campaigns",
      "Global Adoption and Multilingual Support",
      "Sentinel Ecosystem: AI-Powered Web3 Security Network",
    ],
  },
];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(roadmapData[0]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>

      {/* Roadmap Content Section */}
      <div className="relative z-10 w-full text-left">
      <h2 className="text-5xl font-extrabold text-white ml-8">Roadmap</h2>

        {/* Container for Diagonal Layout */}
        <div className="relative mt-6 w-full min-h-[80vh]"> {/* Ensure content fits */}
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              onClick={() => setActivePhase(phase)}
              className={`absolute p-6 w-[320px] md:w-[400px] rounded-xl shadow-xl transition-transform cursor-pointer transform hover:scale-105`}
              style={{
                top: `${index === 0 ? 22 : index == 1? 14 : 2}vh`,
                left: `${index === 0 ? 2 : index === 1 ? 35 : 68}vw`,

              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold">{phase.id}</h3>
              <p className="mt-2 text-sm">{phase.title}</p>
              <ul className="mt-4 space-y-2 text-lg text-gray-300">
                {phase.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

