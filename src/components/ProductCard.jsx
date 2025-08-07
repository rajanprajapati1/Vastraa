import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import useStore from '../store/useStore';

const ProductCard = ({ product, showQuickActions = true }) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Hover image */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                SALE
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-light text-gray-900 hover:text-gray-600 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {showQuickActions && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
              }}
              className="p-1 hover:bg-gray-50 rounded-full transition-colors duration-200"
            >
              <Heart 
                size={16} 
                className={`${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-gray-600'} transition-colors duration-200`}
              />
            </button>
          )}
        </div>
        
        {/* Color options preview */}
        {product.colors && product.colors.length > 1 && (
          <div className="flex items-center space-x-1 mt-2">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-200"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'black' ? '#000' : 
                                  color.toLowerCase() === 'white' ? '#fff' :
                                  color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                  color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                  color.toLowerCase() === 'cream' ? '#fffdd0' :
                                  color.toLowerCase() === 'camel' ? '#c19a6b' :
                                  color.toLowerCase() === 'charcoal' ? '#36454f' :
                                  color.toLowerCase() === 'ivory' ? '#fffff0' :
                                  color.toLowerCase() === 'khaki' ? '#c3b091' :
                                  color.toLowerCase() === 'olive' ? '#808000' :
                                  color.toLowerCase() === 'tan' ? '#d2b48c' :
                                  color.toLowerCase() === 'brown' ? '#964B00' :
                                  color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#808080' :
                                  '#ccc' 
                }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        )}
        
        {product.isTrending && (
          <span className="inline-block text-xs text-gray-500 font-light">
            Trending
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;