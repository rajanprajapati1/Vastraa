import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      category: 'Orders & Payment',
      questions: [
        {
          question: 'How do I place an order?',
          answer: 'Simply browse our collections, select your desired items, choose size and color, then add to cart. Follow the checkout process to complete your purchase. We accept all major credit cards and PayPal.'
        },
        {
          question: 'Can I modify or cancel my order?',
          answer: 'You can modify or cancel your order within 1 hour of placing it. After this time, your order will be processed and changes may not be possible. Contact our customer service team immediately if you need to make changes.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept Visa, MasterCard, American Express, Discover, and PayPal. All payments are processed securely using SSL encryption to protect your information.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Currently, we do not offer payment plans or installment options. All orders must be paid in full at the time of purchase.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          question: 'How much does shipping cost?',
          answer: 'We offer free shipping on all orders over $150. For orders under $150, standard shipping is $15. Expedited shipping options are available at checkout for an additional fee.'
        },
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 2-4 business days within the continental US. Expedited shipping (1-2 business days) and overnight shipping are available for an additional cost.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Currently, we only ship within the United States. We are working on expanding our international shipping options and will update our customers when available.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on our shipping carrier\'s website.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for all unworn, unwashed items in their original condition with tags attached. Items must be returned in their original packaging.'
        },
        {
          question: 'How do I return an item?',
          answer: 'To return an item, log into your account and initiate a return request, or contact our customer service. We\'ll provide you with a prepaid return label and instructions.'
        },
        {
          question: 'Can I exchange an item for a different size or color?',
          answer: 'Yes, exchanges are available for different sizes or colors of the same item, subject to availability. The exchange process is the same as returns - we\'ll send you the new item once we receive your return.'
        },
        {
          question: 'How long do refunds take?',
          answer: 'Refunds are processed within 3-5 business days of receiving your returned item. The refund will appear on your original payment method within 5-10 business days depending on your bank.'
        }
      ]
    },
    {
      category: 'Sizing & Fit',
      questions: [
        {
          question: 'How do I find my size?',
          answer: 'Please refer to our size guide available on each product page. We recommend measuring yourself and comparing to our size chart for the best fit. If you\'re between sizes, we generally recommend sizing up.'
        },
        {
          question: 'What if an item doesn\'t fit?',
          answer: 'If an item doesn\'t fit properly, you can return or exchange it within 30 days. We want you to be completely satisfied with your purchase.'
        },
        {
          question: 'Do your sizes run true to size?',
          answer: 'Our sizes are designed to fit true to standard US sizing. However, fit can vary slightly between different styles and fabrics. Always check the specific size guide for each item.'
        },
        {
          question: 'Can I get styling advice?',
          answer: 'Absolutely! Our customer service team can provide styling advice and fit recommendations. You can also book a personal styling session through our contact page.'
        }
      ]
    },
    {
      category: 'Care & Sustainability',
      questions: [
        {
          question: 'How should I care for my Vastraa garments?',
          answer: 'Each garment comes with specific care instructions on the label. Generally, we recommend gentle washing in cold water and air drying to maintain quality and extend the life of your pieces.'
        },
        {
          question: 'Are your products sustainable?',
          answer: 'Yes, sustainability is core to our mission. We use ethically sourced materials, partner with responsible manufacturers, and design pieces to last. Learn more on our About page.'
        },
        {
          question: 'What materials do you use?',
          answer: 'We use high-quality, sustainable materials including organic cotton, recycled fabrics, and responsibly sourced wool and silk. Material information is available on each product page.'
        },
        {
          question: 'Do you offer a repair service?',
          answer: 'While we don\'t currently offer repair services, we can recommend trusted local tailors and provide care tips to help maintain your garments for years to come.'
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 font-light">
            Find answers to common questions about ordering, shipping, returns, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`${categoryIndex > 0 ? 'mt-12' : ''}`}>
              <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openItems.has(currentIndex);
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-sm">
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-lg font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 font-light leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Our customer service team is here to help you with any questions not covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@Vastraa.com"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;