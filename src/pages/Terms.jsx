import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">Terms of Service</h1>
          <p className="text-gray-500 text-center mb-12">Last updated: January 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                By accessing and using the Vastraa website and services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Vastraa's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and 
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-light space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Product Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We strive to provide accurate product information, including descriptions, prices, and availability. 
                However, we do not warrant that product descriptions or other content is accurate, complete, reliable, 
                current, or error-free. Colors may appear differently on different devices and monitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Pricing and Payment</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                All prices are in US dollars and are subject to change without notice. We reserve the right to correct 
                pricing errors on our website. Payment must be received before we ship any products. We accept major 
                credit cards and PayPal for payment processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Shipping and Delivery</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We will make every effort to ship orders within the timeframes specified on our website. However, 
                shipping dates are estimates and we are not liable for delays caused by shipping carriers, weather, 
                or other circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Returns and Refunds</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our return policy allows for returns within 30 days of purchase for unworn, unwashed items with 
                original tags. Refunds will be processed to the original payment method within 5-10 business days 
                after we receive and process the returned item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. Privacy Policy</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
                the website, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                In no event shall Vastraa or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or 
                inability to use the materials on our website or products purchased, even if Vastraa or an authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the State of 
                New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Vastraa reserves the right to revise these terms at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-600 font-light">
                <p>Vastraa Fashion</p>
                <p>123 Fashion Street</p>
                <p>New York, NY 10001</p>
                <p>Email: legal@Vastraa.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;