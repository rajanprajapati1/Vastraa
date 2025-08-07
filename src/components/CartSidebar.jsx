import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import useStore from '../store/useStore';
import { toast } from 'sonner';

const CartSidebar = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal 
  } = useStore();

  const total = getCartTotal();

  const handleQuantityChange = (cartId, newQuantity) => {
    updateQuantity(cartId, newQuantity);
  };

  const handleRemoveItem = (cartId, productName) => {
    removeFromCart(cartId);
    toast.success(`${productName} removed from cart`);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Shopping Bag ({cart.length})</h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 mb-4">Your bag is empty</p>
                <button 
                  onClick={closeCart}
                  className="text-black underline hover:no-underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <div className="text-sm text-gray-500 mt-1">
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.selectedSize && item.selectedColor && <span className="mx-2">•</span>}
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      </div>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gray-300 rounded-sm">
                          <button
                            onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => handleRemoveItem(item.cartId, item.name)}
                          className="text-xs text-gray-500 hover:text-red-500 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Link 
                  to="/cart" 
                  onClick={closeCart}
                  className="block w-full text-center py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium"
                >
                  View Bag
                </Link>
                
                <Link 
                  to="/checkout" 
                  onClick={closeCart}
                  className="block w-full text-center py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  Checkout
                </Link>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Free shipping on orders over $150
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;