import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    contact: false,
    message: false
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const getFieldError = (field: keyof typeof formData) => {
    if (!touched[field]) return '';
    
    switch (field) {
      case 'name':
        return formData.name.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !validateEmail(formData.email) ? 'Please enter a valid email' : '';
      case 'contact':
        return !validatePhone(formData.contact) ? 'Please enter a valid phone number' : '';
      case 'message':
        return formData.message.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const isFormValid = () => {
    return (
      formData.name.length >= 2 &&
      validateEmail(formData.email) &&
      validatePhone(formData.contact) &&
      formData.message.length >= 10
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setTouched({
        name: true,
        email: true,
        contact: true,
        message: true
      });
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', contact: '', message: '' });
      setTouched({
        name: false,
        email: false,
        contact: false,
        message: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-black"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=2000)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connect with our luxury vehicle specialists for a personalized consultation
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl p-12">
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 border-2
                    ${touched.name && getFieldError('name')
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-black focus:ring-black'
                    }`}
                  placeholder="Enter your name"
                />
                {touched.name && getFieldError('name') && (
                  <p className="mt-2 text-sm text-red-600">{getFieldError('name')}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 border-2
                    ${touched.email && getFieldError('email')
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-black focus:ring-black'
                    }`}
                  placeholder="Enter your email"
                />
                {touched.email && getFieldError('email') && (
                  <p className="mt-2 text-sm text-red-600">{getFieldError('email')}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact" className="block text-lg font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  onBlur={() => handleBlur('contact')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 border-2
                    ${touched.contact && getFieldError('contact')
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-black focus:ring-black'
                    }`}
                  placeholder="Enter your contact number"
                />
                {touched.contact && getFieldError('contact') && (
                  <p className="mt-2 text-sm text-red-600">{getFieldError('contact')}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 border-2
                    ${touched.message && getFieldError('message')
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-black focus:ring-black'
                    }`}
                  placeholder="Tell us about your luxury vehicle interests"
                />
                {touched.message && getFieldError('message') && (
                  <p className="mt-2 text-sm text-red-600">{getFieldError('message')}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || !isFormValid()}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105
                  ${status === 'loading' || !isFormValid()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                {status === 'loading' ? (
                  <>
                    <span className="animate-spin mr-3">⌛</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6 mr-3" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center justify-center text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  <p className="text-lg">Thank you for your message. We'll be in touch soon!</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center justify-center text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  <p className="text-lg">There was an error sending your message. Please try again.</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;