import React from 'react';
import { RefreshCw, Package, CreditCard, Clock } from 'lucide-react';

const ReturnPolicy = () => {
  const steps = [
    {
      icon: Package,
      title: 'Prepare Your Return',
      description: 'Ensure items are unworn, unwashed, and include original tags and packaging.'
    },
    {
      icon: RefreshCw,
      title: 'Initiate Return',
      description: 'Contact us or log into your account to start the return process.'
    },
    {
      icon: Package,
      title: 'Ship Your Return',
      description: 'Use our prepaid return label to send items back to us safely.'
    },
    {
      icon: CreditCard,
      title: 'Receive Refund',
      description: 'Get your refund within 5-10 business days after we process your return.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-6">Return Policy</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            We want you to love your Vastraa purchase. If you're not completely satisfied, 
            we're here to help with our hassle-free return process.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Return Process Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">How to Return</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 font-light text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Details */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Return Eligibility</h2>
            <div className="bg-gray-50 p-6 rounded-sm">
              <div className="flex items-start gap-3 mb-4">
                <Clock size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">30-Day Return Window</h3>
                  <p className="text-gray-600 font-light">
                    You have 30 days from the date of delivery to return items for a full refund.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 font-light">
                <h4 className="font-medium text-gray-900">Items must be:</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Unworn and unwashed</li>
                  <li>In original condition with all tags attached</li>
                  <li>Returned in original packaging when possible</li>
                  <li>Free from damage, stains, or alterations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Non-Returnable Items</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-gray-600 font-light mb-4">
                For hygiene and safety reasons, the following items cannot be returned:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-light space-y-1">
                <li>Undergarments and intimate apparel</li>
                <li>Swimwear</li>
                <li>Items marked as "Final Sale"</li>
                <li>Personalized or customized items</li>
                <li>Items damaged by misuse</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Return Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Online Returns</h3>
                <div className="space-y-3 text-gray-600 font-light">
                  <p>1. Log into your account and go to "Order History"</p>
                  <p>2. Select the items you'd like to return</p>
                  <p>3. Print your prepaid return label</p>
                  <p>4. Package items and drop off at any UPS location</p>
                </div>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contact Us</h3>
                <div className="space-y-3 text-gray-600 font-light">
                  <p>Email: returns@Vastraa.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Monday-Friday: 9AM-6PM EST</p>
                  <p>We'll guide you through the process</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Exchanges</h2>
            <div className="bg-blue-50 p-6 rounded-sm">
              <p className="text-gray-600 font-light mb-4">
                We offer exchanges for different sizes or colors of the same item, subject to availability.
              </p>
              <div className="space-y-3 text-gray-600 font-light">
                <p><span className="font-medium">Size Exchange:</span> If you need a different size, we'll send the new item as soon as we receive your return.</p>
                <p><span className="font-medium">Color Exchange:</span> Exchange for a different color of the same style, if available.</p>
                <p><span className="font-medium">Processing Time:</span> Exchanges are processed within 2-3 business days of receiving your return.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Refund Information</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-sm">
                <h3 className="font-medium text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600 font-light">
                  Refunds are processed within 3-5 business days after we receive and inspect your return.
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-sm">
                <h3 className="font-medium text-gray-900 mb-2">Refund Method</h3>
                <p className="text-gray-600 font-light">
                  Refunds are issued to your original payment method. Credit card refunds may take 5-10 business days to appear on your statement.
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-sm">
                <h3 className="font-medium text-gray-900 mb-2">Shipping Costs</h3>
                <p className="text-gray-600 font-light">
                  Original shipping costs are non-refundable unless the return is due to our error. Return shipping is free with our prepaid labels.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Damaged or Defective Items</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-600 font-light mb-4">
                If you receive a damaged or defective item:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-light space-y-2">
                <li>Contact us immediately at returns@Vastraa.com</li>
                <li>Include photos of the damage or defect</li>
                <li>We'll arrange for immediate replacement or full refund</li>
                <li>No need to return the item unless requested</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light text-gray-900 mb-6">International Returns</h2>
            <p className="text-gray-600 font-light mb-4">
              Currently, we only accept returns from customers within the United States. We are working on 
              expanding our return options for international customers.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-8 rounded-sm text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 font-light mb-6">
              Our customer service team is here to help with any questions about returns or exchanges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:returns@Vastraa.com"
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
    </div>
  );
};

export default ReturnPolicy;