import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const popularLinks = [
    { name: 'New Arrivals', href: '/products?new=true' },
    { name: 'Women\'s Collection', href: '/category/women' },
    { name: 'Men\'s Collection', href: '/category/men' },
    { name: 'Accessories', href: '/category/accessories' },
    { name: 'Sale Items', href: '/products?sale=true' },
    { name: 'Lookbook', href: '/lookbook' }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-light text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            The page you're looking for doesn't exist or may have been moved. 
            Let's help you find what you're looking for.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 font-medium hover:border-black hover:text-black transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Search for what you need
          </h3>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-3 border border-gray-300 border-r-0 focus:outline-none focus:border-black transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Links */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {popularLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block p-4 border border-gray-200 rounded-sm text-gray-700 hover:border-black hover:text-black transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-50 p-8 rounded-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 font-light mb-6">
            Our customer service team is here to assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <a
              href="mailto:help@Vastraa.com"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-3 font-medium hover:border-black hover:text-black transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;