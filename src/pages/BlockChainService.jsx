"use client";

import { motion } from "framer-motion";

export default function BlockchainPhishingProtection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-white text-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full border  rounded-2xl shadow-lg p-6 "
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          Blockchain Phishing Protection Services
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Our AI-powered phishing detection system scans the blockchain
          ecosystem in real time, identifying and alerting you to potential
          threats instantly. From malicious emails to fake websites, our
          technology ensures you’re always one step ahead of cybercriminals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            title="Real-Time Detection"
            description="AI scans transactions and alerts you to potential phishing attempts."
            delay={0.2}
          />
          <FeatureCard
            title="Instant Alerts"
            description="Receive immediate notifications about suspicious blockchain activities."
            delay={0.4}
          />
          <FeatureCard
            title="Advanced Security"
            description="Stay protected with AI-driven phishing prevention strategies."
            delay={0.6}
          />
        </div>

        <div className="flex justify-center pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            Enable Real-Time Blockchain Detection Alerts Today
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
      className="border border-gray-700 rounded-lg p-4 shadow-md"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </motion.div>
  );
}
