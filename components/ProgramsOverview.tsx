// components/ProgramsOverview.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsOverview() {
  const [activeTab, setActiveTab] = useState<keyof typeof programs>('outpatient');
  
  const programs = {
    outpatient: {
      title: "Outpatient Recovery",
      description: "Our flexible outpatient programs allow young people to maintain school, work, and family commitments while receiving structured support.",
      features: [
        "Individual therapy with addiction specialists",
        "Group counseling focused on peer support",
        "Family therapy sessions",
        "Evidence-based treatment approaches",
        "Flexible scheduling for school/work compatibility"
      ],
      image: "/images/outpatient-program.jpeg"
    },
    residential: {
      title: "Residential Treatment",
      description: "Our residential program provides a safe, structured environment for young people who need intensive support at the beginning of their recovery journey.",
      features: [
        "24/7 support in a healing environment",
        "Comprehensive assessment and personalized care",
        "Academic support to continue education",
        "Life skills development",
        "Structured daily routines with therapeutic activities"
      ],
      image: "/images/residential-program.jpeg"
    },
    aftercare: {
      title: "Aftercare & Continuing Support",
      description: "Recovery is a lifelong journey. Our aftercare programs provide ongoing support as young people transition back to family, school, and community life.",
      features: [
        "Alumni support groups",
        "Mentorship opportunities",
        "Educational and vocational guidance",
        "Relapse prevention planning",
        "Family support resources"
      ],
      image: "/images/aftercare-program.jpeg"
    },
    mentorship: {
      title: "Peer Mentorship",
      description: "Our unique peer mentorship program connects young people in recovery with trained mentors who have successfully navigated their own recovery journeys.",
      features: [
        "One-on-one support from peer mentors",
        "Community building activities",
        "Service opportunities",
        "Leadership development",
        "Healthy recreational activities"
      ],
      image: "/images/mentorship-program.jpeg"
    }
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">Our Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Support for Every Stage of Recovery
          </h3>
          <p className="text-gray-600 text-lg">
            We offer a range of programs designed to meet young people wherever they are in their recovery journey.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof programs)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {programs[key as keyof typeof programs].title}
            </button>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={programs[activeTab].image}
                alt={programs[activeTab].title}
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-transparent flex items-end lg:hidden">
                <h3 className="text-white text-2xl font-bold p-6">
                  {programs[activeTab].title}
                </h3>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hidden lg:block">
                {programs[activeTab].title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                {programs[activeTab].description}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Program Features:</h4>
              <ul className="space-y-3 mb-8">
                {programs[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href={`/programs/${activeTab}`} className="btn-secondary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All our programs are designed to be inclusive, trauma-informed, and culturally responsive.
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Need help figuring out which program is right for you or your loved one?</span>{' '}
            <Link href="/assessment" className="text-blue-600 hover:text-blue-800 font-medium">
              Take our assessment
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              contact us
            </Link>{' '}
            for a personalized recommendation.
          </p>
        </div>
      </div>
    </section>
  );
}