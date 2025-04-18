// components/MissionStatement.js
import Image from 'next/image';
// import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/mission-image.jpg"
              alt="Young people in a supportive community setting"
              fill
              className="object-cover"
            />
            
            {/* Overlapping Elements */}
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute top-10 -left-8 w-24 h-24 bg-yellow-400 rounded-lg rotate-12 opacity-20"></div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
              <blockquote className="text-white text-lg italic">
                "Every young person deserves a chance to rewrite their story."
              </blockquote>
              <p className="text-blue-100 text-sm mt-2">— Maria Chen, Founder</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="lg:pl-10">
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Youth Through Recovery and Beyond
            </h3>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8"></div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Kira Drugs, we believe that addiction recovery is not just about abstinence—it's about helping young people discover their strengths, rebuild relationships, and create meaningful futures.
            </p>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our integrated approach combines evidence-based treatment, peer support, life skills development, and family healing to address the whole person—mind, body, and spirit.
            </p>
            
            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <CoreValue 
                icon={<CompassIcon />}
                title="Compassion First"
                description="We meet young people where they are, without judgment, creating safe spaces for healing."
              />
              <CoreValue 
                icon={<EvidenceIcon />}
                title="Evidence-Based"
                description="Our programs integrate the latest research in adolescent addiction recovery."
              />
              <CoreValue 
                icon={<CommunityIcon />}
                title="Community-Centered"
                description="We believe healing happens in connection with others who understand."
              />
              <CoreValue 
                icon={<GrowthIcon />}
                title="Growth-Oriented"
                description="Recovery is a journey of continuous growth and discovering one's potential."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Components
function CoreValue({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-900 font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

// Icons
function CompassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </svg>
  );
}