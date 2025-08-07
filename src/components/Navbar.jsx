import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import useStore from '../store/useStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isSearchOpen, toggleSearch, closeSearch, toggleCart, getCartItemCount, wishlist } = useStore();
  const navigate = useNavigate();
  
  const cartItemCount = getCartItemCount();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      closeSearch();
    }
  };

  const navLinks = [
    { name: 'Women', href: '/category/women' },
    { name: 'Men', href: '/category/men' },
    { name: 'Accessories', href: '/category/accessories' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-light tracking-wider text-black">Vastraa</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-black transition-colors duration-200 font-light tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSearch}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200"
              >
                <Search size={20} className="text-gray-700" />
              </button>
              
              <Link 
                to="/wishlist"
                className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200 relative"
              >
                <Heart size={20} className="text-gray-700" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200 relative"
              >
                <ShoppingBag size={20} className="text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl px-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full text-2xl border-none outline-none bg-transparent border-b-2 border-gray-200 focus:border-black pb-4 font-light"
                autoFocus
              />
              <button
                type="button"
                onClick={closeSearch}
                className="absolute top-0 right-0 p-2"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </form>
            <p className="text-gray-500 mt-4 text-sm">Press Enter to search</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;