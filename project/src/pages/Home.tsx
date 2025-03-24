import { Award, BadgeCheck, ChevronRight, Shield, ThumbsUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const luxuryCars = [
    {
      name: "Ferrari SF90 Spider 2025",
      image: "https://doubleapex.co.za/wp-content/uploads/2022/07/Novitec-Ferrari-SF90-Stradale-1.jpg",
      description: "Hybrid system combining a 6.5L V12 engine with electric motors and 1,001 hp"
    },
    {
      name: "Lamborghini Revuelto 2025",
      image: "https://cdn.motor1.com/images/mgl/Kbm9v0/s1/lamborghini-revuelto---foto---2023.jpg",
      description: "Hybrid system with 6.5L V12 engine and electric motors and 1,001 hp"
    },
    {
      name: "Porsche 911 Turbo S 2025",
      image: "https://www.hdcarwallpapers.com/download/porsche_911_turbo_s_cabriolet_2020_5k-5120x2880.jpg",
      description: "Twin-turbocharged flat-6 engine and 640 hp with top speed of 205 mph."
    }
  ];

  const reasons = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Instant Quotes",
      description: "Get real-time, competitive quotes from verified dealers"
    },
    {
      icon: <ThumbsUp className="h-12 w-12" />,
      title: "Seamless Transactions",
      description: "Secure and hassle-free safe buying"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Inventory Management",
      description: "Add luxury to your stock"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Verified History",
      description: "Verified and Documented"
    },
    {
      icon: <BadgeCheck className="h-12 w-12" />,
      title: "Quality Guarantee",
      description: "Meeting luxurious standards"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div 
        className="relative h-screen bg-black"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2000)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Find Your 
            <span className="block mt-2 text-4xl md:text-6xl">Perfect Dealer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
          Effortless Dealer-to-Dealer Transactions. Quicker, Smoother, and Stress-Free. Get Instant Quotes & Optimize Your Inventory Today!
          </p>
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Begin Your Journey
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white transform rotate-90" />
        </div>
      </div>

      {/* Featured Vehicles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-gray-600">Discover our most distinguished vehicles</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {luxuryCars.map((car) => (
            <div key={car.name} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                <img src={car.image} alt={car.name} className="w-full h-[400px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-lg opacity-90 mb-4">{car.description}</p>
                
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all transform group-hover:scale-105"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center group">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                  <div className="text-white mb-6 flex justify-center">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Experience True Luxury?
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Let our luxury vehicle dealers guide you to the perfect automobile that matches your distinguished taste and lifestyle.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-12 py-5 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Connect with Our Dealers
          </Link>
        </div>
      </div>
              {/*  */}
              <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900"> Reach out to us directly for inquiries or visit our office.</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="mt-2 font-semibold text-gray-600">Suite 443-80 Atlantic Ave, 4th floor</p>
              <p className="text-gray-600 font-semibold">Toronto, ON M6K1X9</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 font-semibold">Phone</h3>
              <p className="mt-2 text-gray-600 font-semibold">(647) 470-8387</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 font-semibold">Email</h3>
              <p className="mt-2 text-gray-600 font-semibold">contact.slandco@gmail.com</p>
            </div>
          </div>
          </div>
          </div>
    </div>
    
  );
};

export default Home;