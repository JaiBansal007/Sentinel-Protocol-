import React from "react";

const SecurityTrainingPage = () => {
  return (
    <div className="min-h-screen text-white p-6  flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-white">
            AI-Driven Employee Training for DeFi Security
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Knowledge is power. Our AI-driven training programs educate your team
            on the latest phishing tactics and how to spot them.
          </p>

          {/* Training Details */}
          <div className="mt-6 space-y-6">
            <div className=" p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold ">
                Interactive Learning
              </h2>
              <p className="mt-2 text-gray-300">
                Our platform combines hands-on modules with real-world scenarios to
                strengthen your security awareness.
              </p>
            </div>
            <div className=" p-6 rounded-xl shadow-lg  ">
              <h2 className="text-2xl font-semibold  ">
                Real-World Scenarios
              </h2>
              <p className="mt-2 text-gray-300">
                Train employees using AI-generated phishing attacks and simulated
                security breaches.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Ready to Secure Your Team?
            </h2>
            <p className="text-gray-300 mt-2">
              Enroll now and boost your team’s phishing awareness today.
            </p>
          </div>
        </div>

        {/* Right Side - WebM Video */}
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="mixed-integer.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecurityTrainingPage;
