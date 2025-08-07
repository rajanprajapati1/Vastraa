import React from 'react';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const Shipping = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free on orders $150+, $15 under $150',
      time: '2-4 business days',
      description: 'Our most popular shipping option with reliable delivery times.'
    },
    {
      name: 'Express Shipping',
      price: '$25',
      time: '1-2 business days',
      description: 'Faster delivery for when you need your items quickly.'
    },
    {
      name: 'Overnight Shipping',
      price: '$45',
      time: 'Next business day',
      description: 'Fastest option available for urgent orders.'
    }
  ];

  const shippingZones = [
    {
      zone: 'East Coast',
      states: 'NY, NJ, CT, MA, PA, DC, MD, VA, NC, SC, GA, FL',
      time: 'Standard: 2-3 days, Express: 1-2 days'
    },
    {
      zone: 'Midwest',
      states: 'IL, IN, OH, MI, WI, MN, IA, MO, KS, NE',
      time: 'Standard: 3-4 days, Express: 1-2 days'
    },
    {
      zone: 'West Coast',
      states: 'CA, OR, WA, NV, AZ',
      time: 'Standard: 3-4 days, Express: 2 days'
    },
    {
      zone: 'Mountain/Southwest',
      states: 'CO, UT, NM, TX, OK, AR, LA',
      time: 'Standard: 3-4 days, Express: 2 days'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-6">Shipping Information</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Fast, reliable shipping to get your Vastraa pieces to you quickly and safely.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Options */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Shipping Options</h2>
            <p className="text-gray-600 font-light">Choose the shipping speed that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <Truck size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{option.name}</h3>
                <p className="text-gray-900 font-medium mb-2">{option.price}</p>
                <p className="text-gray-600 mb-3">{option.time}</p>
                <p className="text-gray-600 font-light text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Order Processing</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Processing Time</h3>
                <div className="text-gray-600 font-light space-y-2">
                  <p>Orders are processed Monday through Friday, 9 AM to 5 PM EST.</p>
                  <p>Orders placed by 2 PM EST on business days typically ship the same day.</p>
                  <p>Orders placed after 2 PM or on weekends will be processed the next business day.</p>
                  <p>During sale periods or holidays, processing may take 1-2 additional business days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Delivery Timeframes by Region</h2>
          <p className="text-gray-600 font-light mb-6">
            Delivery times are estimated from when your order ships (not when it's placed).
          </p>
          
          <div className="space-y-4">
            {shippingZones.map((zone, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{zone.zone}</h3>
                    <p className="text-gray-600 text-sm mb-2">{zone.states}</p>
                    <p className="text-gray-600 font-light text-sm">{zone.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packaging */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Packaging & Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Package size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Eco-Friendly Packaging</h3>
                    <p className="text-gray-600 font-light">
                      We use minimal, recyclable packaging materials to reduce our environmental impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Package size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Protective Packaging</h3>
                    <p className="text-gray-600 font-light">
                      Your items are carefully packed to ensure they arrive in perfect condition.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Package size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Branded Experience</h3>
                    <p className="text-gray-600 font-light">
                      Each package includes thoughtful touches that reflect the Vastraa experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-first md:order-last">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                alt="Sustainable packaging"
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* Tracking */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Order Tracking</h2>
          <div className="bg-gray-50 p-6 rounded-sm">
            <div className="space-y-4 text-gray-600 font-light">
              <p>
                Once your order ships, you'll receive a confirmation email with tracking information.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Track your order by:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Clicking the tracking link in your shipping confirmation email</li>
                  <li>Visiting the carrier's website with your tracking number</li>
                  <li>Logging into your Vastraa account to view order status</li>
                  <li>Contacting our customer service team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">International Shipping</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-600 font-light mb-4">
              We currently only ship within the United States, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 font-light space-y-1 mb-4">
              <li>All 50 states</li>
              <li>Washington, D.C.</li>
              <li>Puerto Rico</li>
              <li>US Virgin Islands</li>
            </ul>
            <p className="text-gray-600 font-light">
              International shipping is coming soon. Sign up for our newsletter to be notified when it becomes available.
            </p>
          </div>
        </section>

        {/* Shipping Issues */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Shipping Issues</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-4 rounded-sm">
              <h3 className="font-medium text-gray-900 mb-2">Delayed Delivery</h3>
              <p className="text-gray-600 font-light">
                If your package is delayed beyond the estimated delivery date, please contact us. 
                We'll work with the carrier to locate your package and find a solution.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-sm">
              <h3 className="font-medium text-gray-900 mb-2">Lost or Stolen Package</h3>
              <p className="text-gray-600 font-light">
                If your package shows as delivered but you haven't received it, check with neighbors 
                or your building management. If it's truly missing, contact us within 30 days and we'll 
                investigate with the carrier.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-sm">
              <h3 className="font-medium text-gray-900 mb-2">Damaged Package</h3>
              <p className="text-gray-600 font-light">
                If your package arrives damaged, take photos and contact us immediately. 
                We'll arrange for a replacement or refund.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 p-8 rounded-sm text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Shipping Questions?</h2>
          <p className="text-gray-600 font-light mb-6">
            Our customer service team is here to help with any shipping-related questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shipping@Vastraa.com"
              className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Email Support
            </a>
            <a
              href="tel:+15551234567"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-3 font-medium hover:border-black hover:text-black transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shipping;