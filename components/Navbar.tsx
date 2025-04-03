// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="">
                <div className='border rounded-full bg-amber-400 p-3 w-2 h-2' />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                New Horizons
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about" isScrolled={isScrolled}>About Us</NavLink>
            <NavLink href="/programs" isScrolled={isScrolled}>Our Programs</NavLink>
            <NavLink href="/resources" isScrolled={isScrolled}>Resources</NavLink>
            <NavLink href="/success-stories" isScrolled={isScrolled}>Success Stories</NavLink>
            <NavLink href="/get-involved" isScrolled={isScrolled}>Get Involved</NavLink>
            <Link href="/contact" className="btn-primary">
              Get Help Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-blue-600' : 'text-white'}`}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3 bg-white rounded-lg p-4 shadow-lg">
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <MobileNavLink href="/programs">Our Programs</MobileNavLink>
              <MobileNavLink href="/resources">Resources</MobileNavLink>
              <MobileNavLink href="/success-stories">Success Stories</MobileNavLink>
              <MobileNavLink href="/get-involved">Get Involved</MobileNavLink>
              <Link href="/contact" className="btn-primary-mobile w-full text-center">
                Get Help Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Helper Components
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

function NavLink({ href, children, isScrolled }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={`font-medium hover:text-blue-500 transition-colors ${
        isScrolled ? 'text-gray-800' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Link href={href} className="text-gray-800 font-medium py-2 hover:text-blue-500 transition-colors">
      {children}
    </Link>
  );
}