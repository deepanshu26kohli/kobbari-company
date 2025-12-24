import { Heart, Users, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenInquiry: () => void;
}

export default function About({ onOpenInquiry }: AboutProps) {
  const values = [
    {
      icon: Heart,
      title: 'Farmer-First Approach',
      description: 'We believe in fair partnerships. Our success is built on the prosperity of our farming community.'
    },
    {
      icon: Shield,
      title: 'Uncompromising Quality',
      description: 'Every batch is inspected, graded, and certified to meet international export standards.'
    },
    {
      icon: Users,
      title: 'Reliable Partnership',
      description: 'Decades of experience have taught us that consistency and transparency build lasting relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Scale & Capability',
      description: 'From small batches to container loads, we have the infrastructure to fulfill your requirements.'
    }
  ];

  const sourcingProcess = [
    {
      step: '01',
      title: 'Direct Farmer Partnerships',
      description: 'We work directly with 200+ coconut farmers across Karnataka, eliminating middlemen and ensuring fair prices. This direct relationship allows us to maintain quality standards from the very beginning.'
    },
    {
      step: '02',
      title: 'On-Site Quality Control',
      description: 'Our quality team visits farms regularly to inspect coconuts before harvest. We ensure only mature, disease-free coconuts are selected, maintaining our reputation for premium products.'
    },
    {
      step: '03',
      title: 'Controlled Drying Process',
      description: 'We oversee both sun-drying and machine-drying processes at our facilities. Temperature, humidity, and duration are carefully monitored to achieve optimal moisture levels and oil content.'
    },
    {
      step: '04',
      title: 'Grading & Certification',
      description: 'Every batch undergoes rigorous grading based on size, oil content, moisture levels, and appearance. We provide complete documentation and certifications required for domestic and international trade.'
    },
    {
      step: '05',
      title: 'Storage & Logistics',
      description: 'Our warehouses are equipped for bulk storage with proper ventilation and pest control. We coordinate logistics for seamless delivery to your facility, whether local or for export.'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About The Kobbari Company
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Three decades of trust, transparency, and excellence in coconut trading
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coconut Farm"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded over three decades ago, The Kobbari Company began as a small trading operation in Karnataka's coconut belt. What started as a modest venture has grown into one of India's most trusted bulk coconut suppliers, serving oil mills, food processors, and exporters across the country and beyond.
                </p>
                <p>
                  Our success is rooted in a simple philosophy: build lasting relationships with farmers and buyers through transparency, fair practices, and consistent quality. Today, we work with over 200 farming families, providing them with stable income and market access while delivering reliable bulk supply to our B2B partners.
                </p>
                <p>
                  We've witnessed the coconut industry evolve, and through changing market dynamics, one thing has remained constant our commitment to quality and reliability. Every shipment carries the promise of three decades of expertise and trust.
                </p>
                <p className="font-semibold text-green-900">
                  Whether you're a coconut oil manufacturer, food processor, or exporter, partnering with The Kobbari Company means partnering with stability, scale, and unmatched sourcing strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide every decision and partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-800 text-white rounded-full mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Sourcing & Quality Assurance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From farm to factory our comprehensive approach to quality control and ethical sourcing
            </p>
          </div>

          <div className="space-y-8">
            {sourcingProcess.map((process, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {process.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              The Karnataka Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why location matters in coconut quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 text-lg">
                Karnataka is home to one of India's most productive coconut belts, with ideal climate conditions, rich soil, and generations of farming expertise. The region produces high-quality coconuts with superior oil content and consistent characteristics making it the preferred source for manufacturers and exporters.
              </p>
              <p className="text-gray-700 text-lg">
                Our strategic location in this belt gives us direct access to premium coconuts year-round. We've built relationships with farming communities across multiple districts, ensuring supply continuity even during seasonal variations.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-800">
                <h4 className="font-bold text-green-900 mb-2 text-lg">Export-Ready Quality</h4>
                <p className="text-gray-700">
                  Our products meet international standards and are regularly exported to markets in the Middle East, Southeast Asia, and beyond. We provide all necessary documentation, certifications, and quality reports required for international trade.
                </p>
              </div>
            </div>

            <div className="relative h-96 lg:h-auto rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Karnataka Coconut Belt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of satisfied B2B partners who trust The Kobbari Company for their bulk coconut requirements
          </p>
          <button
            onClick={onOpenInquiry}
            className="bg-white text-green-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
