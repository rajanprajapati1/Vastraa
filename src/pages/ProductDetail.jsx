import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Plus, Minus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '../components/ProductCard';
import useStore from '../store/useStore';
import { products } from '../data/mock';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  
  const product = products.find(p => p.id === id);
  const inWishlist = product ? isInWishlist(product.id) : false;
  
  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="text-black underline hover:no-underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
    
    toast.success(`${product.name} added to cart`);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const salePercentage = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows for mobile */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 rounded-full lg:hidden"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 rounded-full lg:hidden"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {salePercentage && (
                  <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                    -{salePercentage}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="hidden lg:grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-sm overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-black' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {product.isTrending && (
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    Trending
                  </span>
                )}
              </div>
              
              {/* Rating (Mock) */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(47 reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Color: {selectedColor}
                </h3>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-black' : 'border-gray-300'
                      }`}
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
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Size: {selectedSize}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 text-sm border transition-colors duration-200 ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button className="text-sm text-gray-600 underline hover:no-underline mt-2">
                  Size Guide
                </button>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 px-6 font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-black transition-colors duration-200"
                >
                  <Heart 
                    size={16} 
                    className={`${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  />
                  {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Free shipping</span>
                  <span>on orders over $150</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Free returns</span>
                  <span>within 30 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Delivery</span>
                  <span>2-4 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;