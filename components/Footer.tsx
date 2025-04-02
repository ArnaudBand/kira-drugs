// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">New Beginnings</h3>
            <p className="text-gray-300 text-sm">
              Empowering youth to overcome addiction through compassionate support, 
              evidence-based treatment, and community engagement since 2003.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors">
                  Support Our Mission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-blue-300" />
                <span className="text-gray-300">24/7 Helpline: (800) 555-HOPE</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-blue-300" />
                <span className="text-gray-300">info@newbeginnings.org</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-blue-300" />
                <span className="text-gray-300">
                  1234 Recovery Road<br />
                  Suite 100<br />
                  Portland, OR 97201
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Join our newsletter for updates on events, resources, and recovery insights.
            </p>
            <form className="space-y-2">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-medium transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} New Beginnings. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-gray-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;