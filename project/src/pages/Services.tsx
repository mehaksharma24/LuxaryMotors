import { Award, Car, Clock, HeartHandshake, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const serviceList = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Instant Quotes",
      description: "Get quick, accurate quotes by connecting with dealers that match your buying and selling criteria. Save time and boost your business with precise dealer pairings.",
      details: {
        Quotes: ["Latest models from leading brands", "Verified dealer network for safe transactions", "Efficient dealer-to-dealer matching"]
      }
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Smart Dealer Matching",
      description: "Effortlessly connect with the most relevant dealers based on your specific preferences, making the buying and selling process smooth and efficient.",
      details: {
        Choice: ["Automated vehicle preference matching", "Personalized recommendations", "Access to a trusted dealer network"]
      }
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Effortless Negotiation",
      description: "Enable direct dealer communication for faster, transparent negotiations. Minimize delays and streamline deal-making with ease.",
      details: {
        options: ["Direct dealer interactions", "Real-time deal updates", "Seamless document and offer exchanges"]
      }
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Flexible Financing",
      description: "Our finance team collaborates with multiple lenders to offer competitive rates and flexible terms, making financing simple and hassle-free.",
      details: {
        inspection: ["Low interest rates", "Flexible payment plans", "Lease and purchase options"]
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
              Discover tailored solutions designed to meet your unique needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {serviceList.map((service) => (
            <div
              key={service.title}
              className="group cursor-pointer"
              onClick={() => setActiveService(service.title === activeService ? null : service.title)}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="p-8">
                  <div className="text-black mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{service.description}</p>
                  
                  <div className={`transition-all duration-500 ${activeService === service.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
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
                        Learn More About {service.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black">
        <div className="bg-white-100 py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white-900">Get in touch or visit us in person.</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg text-black">
                <h3 className="text-xl font-semibold text-black-800">Address</h3>
                <p className="mt-2 font-semibold text-black-600">Suite 443-80 Atlantic Ave, 4th floor</p>
                <p className="text-white-600 font-semibold">Toronto, ON M6K1X9</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-black">
                <h3 className="text-xl font-semibold text-black-800">Phone</h3>
                <p className="mt-2 text-black-600 font-semibold">(647) 470-8387</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-black">
                <h3 className="text-xl font-semibold text-black-800">Email</h3>
                <p className="mt-2 text-black-600 font-semibold">contact.slandco@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
