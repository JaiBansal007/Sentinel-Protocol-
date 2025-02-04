
import React from 'react'

const NavBar = () => {
  return (
    <nav className="space-grotesk sticky top-0 z-50 w-full flex justify-between items-center backdrop-blur-lg shadow-md px-6 py-2">
  {/* Logo Section */}
  <div className="flex items-center gap-3  rounded-lg px-4 py-2">
    <img src="images/logo.png" alt="Sentinel Logo" className="h-12 w-auto" />
    <p className="text-white text-3xl font-semibold tracking-wide">
      Sentinel
    </p>
  </div>

  {/* Navigation Links */}
  <div className="flex space-x-6 text-white text-lg">
    <span className="relative group cursor-pointer">
      Browser Extension
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
    <span className="relative group cursor-pointer">
      Security Dashboard
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
    <span className="relative group cursor-pointer">
      MetaMask Snap
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </span>
  </div>

  {/* Call-to-Action Button */}
  <div>
    <button className="text-lg bg-gradient-to-r from-green-400 to-green-600 text-black font-extrabold rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 shadow-lg ">
      Add to MetaMask
    </button>
  </div>
</nav>


  )
}

export default NavBar
