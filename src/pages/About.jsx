import React from 'react';
import { Leaf, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and sustainable practices in every aspect of our business.'
    },
    {
      icon: Users,
      title: 'Craftsmanship',
      description: 'Working with skilled artisans and premium materials to create timeless pieces.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Rigorous quality standards ensure every piece meets our high expectations.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building lasting relationships with our customers, partners, and communities.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://warburgpincus.com/wp-content/uploads/2019/10/Sarah-Chen-web-1024x991.jpg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Sustainability Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop"
          alt="About Vastraa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">About Vastraa</h1>
            <p className="text-xl font-light">Redefining modern luxury fashion</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600 font-light leading-relaxed">
              <p className="mb-6">
                Founded in 2020, Vastraa emerged from a vision to create timeless fashion that transcends 
                seasons and trends. We believe that true luxury lies not in excess, but in the perfect 
                balance of quality, design, and sustainability.
              </p>
              <p className="mb-6">
                Our journey began with a simple question: How can we create beautiful clothing that 
                respects both people and planet? This led us to partner with ethical manufacturers, 
                source sustainable materials, and design pieces that are made to last.
              </p>
              <p>
                Today, Vastraa represents a new generation of fashion brands that prioritize conscious 
                consumption without compromising on style. Every piece in our collection is thoughtfully 
                crafted to become a cherished part of your wardrobe for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 font-light">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Sustainability Commitment</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Sustainable fashion"
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
            <div>
              <div className="space-y-6 font-light text-gray-600">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ethical Manufacturing</h3>
                  <p>We partner only with factories that meet our strict standards for worker welfare and environmental responsibility.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainable Materials</h3>
                  <p>From organic cotton to recycled fabrics, we carefully select materials that minimize our environmental impact.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Carbon Neutral Shipping</h3>
                  <p>All our shipments are carbon neutral, and we use minimal, recyclable packaging whenever possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 font-light">The creative minds behind Vastraa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Join Our Journey</h2>
          <p className="text-gray-300 mb-8 font-light">
            Be part of the sustainable fashion movement. Follow our story and discover new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 bg-white text-black rounded-none focus:outline-none"
            />
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-200 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;