
import { motion } from "framer-motion";

export default function AIIncidentResponse() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-white text-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full border  rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          AI-Enhanced Incident Response for DeFi
        </h2>
        <p className="text-gray-300 text-center mb-6">
          When a threat strikes, every second counts. Our AI-driven system
          provides clear, actionable steps to mitigate damage and recover
          quickly. With AI at the helm, you can respond to breaches with
          precision and confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            title="AI-Powered Response"
            description="Detect and counter threats in real-time using AI-driven security protocols."
            delay={0.2}
          />
          <FeatureCard
            title="Faster Recovery"
            description="Minimize downtime with instant threat mitigation and automated responses."
            delay={0.4}
          />
          <FeatureCard
            title="Actionable Insights"
            description="Get clear, step-by-step guidance to respond effectively to incidents."
            delay={0.6}
          />
        </div>

        <div className="flex justify-center pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <button className="text-lg bg-gradient-to-r from-green-400 to-green-600 text-black font-extrabold rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 shadow-lg ">
                Learn More
    </button>
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
      className="border border-gray-700 rounded-lg p-4 shadow-md "
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </motion.div>
  );
}
