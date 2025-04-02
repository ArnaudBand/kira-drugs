"use client"

// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';

// Component imports
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MissionStatement from '@/components/MissionStatement';
import ProgramsOverview from '@/components/ProgramsOverview';
import SuccessStories from '../components/SuccessStories';
import StatsCounter from '../components/StatsCounter';
import ResourcesSection from '../components/ResourcesSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>New Horizons | Youth Recovery & Support</title>
        <meta name="description" content="Helping young people break free from addiction and build a brighter future through evidence-based recovery programs, mentorship, and community support." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <MissionStatement />
        <StatsCounter />
        <ProgramsOverview />
        <SuccessStories />
        <ResourcesSection />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}