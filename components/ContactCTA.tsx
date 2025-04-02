import React from 'react';

const ContactCTA = () => {
  return (
    <section className="relative py-16 bg-emerald-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Start Your <br />Recovery Journey?
            </h2>
            <p className="text-emerald-100 text-xl max-w-lg mb-8">
              We're here 24/7 to answer your questions and guide you through the first steps. Your call is confidential and there's no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+18001234567" 
                className="bg-white hover:bg-gray-100 text-emerald-700 font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (800) 123-4567
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold py-4 px-8 rounded-full inline-flex items-center justify-center transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const chatWidget = document.getElementById('chat-widget');
                  if (chatWidget) {
                    chatWidget.classList.toggle('hidden');
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat Now
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request More Information</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    // rows="3" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Tell us a bit about your situation..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit Request
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4 text-center">
                Your information is kept confidential and will never be sold or shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
