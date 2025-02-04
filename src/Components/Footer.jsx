import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services. Our mission is to make your experience seamless and enriching.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-sm hover:text-yellow-500">Home</a></li>
            <li><a href="#services" className="text-sm hover:text-yellow-500">Services</a></li>
            <li><a href="#about" className="text-sm hover:text-yellow-500">About</a></li>
            <li><a href="#contact" className="text-sm hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 mb-4 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="text-center mt-8 text-sm">
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
