"use client";

import { motion } from "framer-motion";

export default function DeFiAIMonitoring() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-white text-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full border border-gray-700 rounded-2xl shadow-lg p-6 bg-gray-800"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          24/7 AI Monitoring for DeFi Ecosystems
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Our AI-powered monitoring system provides round-the-clock surveillance 
          of your DeFi ecosystem. By analyzing patterns and detecting anomalies, 
          we ensure potential threats are neutralized before they can cause harm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            title="Continuous Surveillance"
            description="AI-powered security monitors DeFi transactions 24/7."
            delay={0.2}
          />
          <FeatureCard
            title="Real-Time Threat Detection"
            description="Identify and neutralize anomalies before they cause harm."
            delay={0.4}
          />
          <FeatureCard
            title="Actionable Insights"
            description="Receive instant alerts and in-depth security analysis."
            delay={0.6}
          />
        </div>

        <div className="flex justify-center pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            Deploy AI Monitoring for Your DeFi Ecosystem
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="border border-gray-700 rounded-lg p-4 shadow-md bg-gray-700"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </motion.div>
  );
}
