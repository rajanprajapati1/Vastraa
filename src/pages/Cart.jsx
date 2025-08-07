import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import useStore from '../store/useStore';

const Cart = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    getCartTotal 
  } = useStore();

  const total = getCartTotal();
  const shipping = total > 150 ? 0 : 15;
  const finalTotal = total + shipping;

  const handleQuantityChange = (cartId, newQuantity) => {
    updateQuantity(cartId, newQuantity);
  };

  const handleRemoveItem = (cartId, productName) => {
    removeFromCart(cartId);
    toast.success(`${productName} removed from cart`);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      clearCart();
      toast.success('Cart cleared');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-8" />
            <h1 className="text-3xl font-light text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Discover our latest collections and find something you love.</p>
            <Link
              to="/products"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-light text-gray-900">
            Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </h1>
          <button
            onClick={handleClearCart}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-6 p-6 bg-gray-50 rounded-sm">
                  <div className="w-24 h-32 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          {item.selectedColor && (
                            <p>Color: {item.selectedColor}</p>
                          )}
                          {item.selectedSize && (
                            <p>Size: {item.selectedSize}</p>
                          )}
                        </div>
                        <p className="text-lg font-medium text-gray-900 mt-2">
                          ${item.price}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveItem(item.cartId, item.name)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-sm">
                        <button
                          onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <p className="text-lg font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-sm sticky top-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                {shipping === 0 && total > 0 && (
                  <p className="text-sm text-green-600">
                    ✓ You qualify for free shipping!
                  </p>
                )}
                
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    Add ${(150 - total).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
              
              <div className="flex justify-between py-4 text-lg font-medium">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="block w-full text-center bg-black text-white py-4 px-6 font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/products"
                  className="block w-full text-center border border-gray-300 text-gray-700 py-4 px-6 font-medium hover:border-black hover:text-black transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Free returns</span>
                    <span>within 30 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Customer support</span>
                    <span>24/7 available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;