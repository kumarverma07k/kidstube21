import React from 'react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from '../components/icons/SocialIcons';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    // In a real app, you'd handle form submission here.
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Get In Touch!</h1>
      <p className="text-center text-gray-600 mb-10">We'd love to hear from you. Send us a message!</p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300">
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex flex-col justify-center items-center bg-sky-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect with Us</h3>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300 transform hover:scale-110">
                    <YoutubeIcon className="h-12 w-12" />
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors duration-300 transform hover:scale-110">
                    <InstagramIcon className="h-12 w-12" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                    <FacebookIcon className="h-12 w-12" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;