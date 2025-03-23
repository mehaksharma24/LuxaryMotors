import { Award, Car, Clock, HeartHandshake, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Instant Quotes",
      description: "Our Smart Dealer Matching service connects you with the right dealers based on your specific buying and selling preferences. Save time and enhance your business by ensuring you’re paired with the most suitable partners for your needs.",
      details: {
        Quotes: ["Wide selection of latest models from top brands", "Verified dealer network for secure transactions", "Effortless dealer-to-dealer matching"]
       
      }
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Smart Dealer Matching",
      description: "Our Smart Dealer Matching service connects you with the right dealers based on your specific buying and selling preferences. Save time and enhance your business by ensuring you’re paired with the most suitable partners for your needs.",
      details: {
        Choice: ["Automated matching based on vehicle preferences", "Customized recommendations tailored to your needs", "Access to a network of trusted, verified dealers"]
       
      }
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Hassle-Free Negotiation",
      description: "With Hassle-Free Negotiation, we make it easy for dealers to directly engage with each other, ensuring quick and transparent discussions. No more back-and-forth delays—our platform empowers you to negotiate smarter and finalize deals faster.",
      details: {
        options: ["Direct communication between dealers for quick negotiations", "Real-time updates and notifications on deal progress", "Seamless document sharing and offer exchange"]
      }
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Financing Options",
      description: "Our finance experts work with multiple lenders to secure competitive rates and flexible terms tailored to your financial situation. We make the financing process simple, transparent, and stress-free.",
      details: {
        inspection: ["Competitive interest rates", "Flexible payment terms", "Lease and purchase options"]
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-black"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Experience unparalleled luxury service tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group cursor-pointer`}
              onClick={() => setSelectedService(service.title === selectedService ? null : service.title)}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="p-8">
                  <div className="text-black mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>
                  
                  <div className={`transition-all duration-500 ${
                    selectedService === service.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="pt-6 border-t border-gray-200">
                      {Object.entries(service.details).map(([key, value]) => (
                        <div key={key} className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3 capitalize">{key}</h4>
                          {Array.isArray(value) ? (
                            <ul className="space-y-2">
                              {value.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <HeartHandshake className="h-5 w-5 mr-2 text-black" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">{value}</p>
                          )}
                        </div>
                      ))}
                      <Link
                        to="/contact"
                        className="block w-full bg-black text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105"
                      >
                        Inquire About {service.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
              {/*  */}
              <div className="bg-black">
              <div className="bg-white-100 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white-900"> Reach out to us directly for inquiries or visit our office.</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold text-black-800">Address</h3>
              <p className="mt-2 font-semibold text-black-600">Suite 443-80 Atlantic Ave, 4th floor</p>
              <p className="text-white-600 font-semibold">Toronto, ON M6K1X9</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold text-black-800 font-semibold">Phone</h3>
              <p className="mt-2 text-black-600 font-semibold">(647) 470-8387</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-black">
              <h3 className="text-xl font-semibold text-black-800 font-semibold">Email</h3>
              <p className="mt-2 text-black-600 font-semibold">contact.slandco@gmail.com</p>
            </div>
          </div>
          </div>
          </div></div>
    </div>
  );
};

export default Services;