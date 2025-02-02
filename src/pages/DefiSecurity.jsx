import { useEffect } from 'react';

import { motion } from 'framer-motion';

export default function DefiSecurityPage() {
  return (
    <div className="min-h-screen text-white p-8 transform -translate--20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#03624c]">Redefining DeFi Security with AI-Powered Solutions</h1>
      </motion.div>
      
      <div className=" p-6 max-w-4xl mx-auto rounded-lg shadow-xl">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed"
        >
          We are revolutionizing DeFi security with cutting-edge, AI-powered solutions designed to combat phishing threats and safeguard your crypto assets. Our advanced technology identifies and eliminates risks in real time, ensuring your sensitive data remains protected and your team stays informed. With 24/7 monitoring, instant alerts, and proactive defense mechanisms, we empower you to navigate the blockchain landscape with confidence and peace of mind.
        </motion.p>
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 p-6  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#03624c] mb-4">Introduction</h2>
        <p className=" leading-relaxed">
          The rise of decentralized finance (DeFi) has brought unprecedented opportunities—and risks. Phishing attacks targeting blockchain users are on the rise, threatening financial losses and data breaches. At <span className="text-green-400 font-bold">[Your Company Name]</span>, we’re redefining DeFi security with AI-powered solutions that detect, prevent, and neutralize threats before they strike.
        </p>
        <p className="text-gray-300 mt-4">
          Our mission is to empower individuals and businesses with the tools and knowledge to stay ahead of cybercriminals. With our innovative approach, you can focus on growing your crypto portfolio while we handle the security.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
