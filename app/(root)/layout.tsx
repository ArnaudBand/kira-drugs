"use client";

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { ReactNode, useEffect, useState } from 'react'

const RootLayout = ({ children } : { children: ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 60) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout