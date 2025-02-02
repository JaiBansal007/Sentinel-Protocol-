import React from "react";

const BlockchainRiskAssessment = () => {
  return (
    <div className="min-h-[80vh] bg-transparent text-white p-6 flex items-center">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center py-16">
      <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="risk-sharing-left.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center gap-10 font-bold">
          <h1 className="text-4xl font-bold text-neon-green neon-glow">
            Risk Assessment and Strategy Development for Blockchain
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We conduct comprehensive blockchain risk assessments to identify vulnerabilities and 
            develop tailored strategies to combat phishing threats. Our solutions align with 
            your business objectives, ensuring optimal protection for your blockchain operations.
          </p>

        </div>

      </div>
    </div>
  );
};

export default BlockchainRiskAssessment;
