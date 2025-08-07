import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderTotal, orderNumber } = location.state || { 
    orderTotal: 0, 
    orderNumber: `LX${Date.now().toString().slice(-6)}` 
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <CheckCircle size={80} className="mx-auto text-green-500 mb-8" />
          
          <h1 className="text-4xl font-light text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <div className="bg-gray-50 p-8 rounded-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Order Number</h3>
                <p className="text-2xl font-light text-black">{orderNumber}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Order Total</h3>
                <p className="text-2xl font-light text-black">${orderTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <Package size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600 text-sm">
                Your order is being prepared for shipment. You'll receive a confirmation email shortly.
              </p>
            </div>
            
            <div className="text-center">
              <Truck size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Estimated Delivery</h3>
              <p className="text-gray-600 text-sm">
                2-4 business days for standard shipping. You'll receive tracking information once shipped.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/products"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200 mr-4"
            >
              Continue Shopping
            </Link>
            
            <Link
              to="/"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-4 font-medium hover:border-black hover:text-black transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Order Confirmation</h4>
                <p>Check your email for order details and receipt.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Shipping Updates</h4>
                <p>Track your package with updates sent to your email.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Customer Support</h4>
                <p>Need help? <Link to="/contact" className="text-black underline">Contact us</Link> anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;