import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { lookbooks, products } from '../data/mock';

const Lookbook = () => {
  const getProductsForLook = (productIds) => {
    return products.filter(product => productIds.includes(product.id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop"
          alt="Vastraa Lookbook"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">Lookbook</h1>
            <p className="text-xl font-light">Style inspiration for every occasion</p>
          </div>
        </div>
      </section>

      {/* Lookbook Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {lookbooks.map((lookbook, lookbookIndex) => (
          <section key={lookbook.id} className={`${lookbookIndex > 0 ? 'mt-24' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4">{lookbook.title}</h2>
              <div className="w-24 h-px bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {lookbook.images.map((image, index) => (
                <div key={index} className="group relative">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
                    <img
                      src={image.url}
                      alt={`${lookbook.title} Look ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    
                    {/* Shop the Look Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors duration-200 mb-3">
                          Shop This Look
                        </button>
                        <div className="flex items-center justify-center gap-1 text-white text-sm">
                          <Eye size={14} />
                          <span>{image.products.length} items</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Products in this look */}
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Shop This Look ({image.products.length} items)
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {getProductsForLook(image.products).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-sm transition-colors duration-200"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-gray-900 truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-600">${product.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Style Tips Section */}
        <section className="mt-24 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Style Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Mix & Match</h3>
                <p className="text-gray-600 font-light">
                  Create multiple outfits by mixing pieces from different collections. 
                  Our neutral palette makes every piece versatile.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Layering</h3>
                <p className="text-gray-600 font-light">
                  Master the art of layering to transition seamlessly from season to season. 
                  Start with basics and add statement pieces.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Accessorize</h3>
                <p className="text-gray-600 font-light">
                  The right accessories can transform any outfit. Choose pieces that 
                  complement your personal style and the occasion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Styling CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Need Personal Styling?</h2>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Our style experts are here to help you create the perfect wardrobe. 
            Book a personal styling session or get advice through our chat support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Book Styling Session
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-4 font-medium hover:border-black hover:text-black transition-colors duration-200"
            >
              Style Chat Support
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lookbook;