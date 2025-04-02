// components/StatsCounter.jsx
import React, { useState, useEffect, useRef } from 'react';

const CountUp: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string }> = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    startTimeRef.current = Date.now();
    const animateCount = () => {
      const now = Date.now();
      const elapsed = startTimeRef.current !== null ? now - startTimeRef.current : 0;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);
      
      countRef.current = Math.floor(easedProgress * end);
      setCount(countRef.current);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animateCount);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration]);
  
  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface StatItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label, prefix = '', suffix = '' }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="mb-4 text-indigo-600">
        <Icon width={40} height={40} />
      </div>
      <h3 className="text-4xl font-bold text-gray-800 mb-2">
        <CountUp end={value} prefix={prefix} suffix={suffix} />
      </h3>
      <p className="text-gray-600 text-center font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = ({ stats = [] }) => {
  // Default stats if none provided
  const defaultStats = [
    { 
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ), 
      value: 15000, 
      label: "Youth Helped Since 2003" 
    },
    { 
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      value: 72, 
      label: "Recovery Facilities Nationwide" 
    },
    { 
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      value: 94, 
      suffix: "%", 
      label: "Program Completion Rate" 
    },
    { 
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ), 
      value: 87, 
      suffix: "%",
      prefix: '',
      label: "5-Year Sobriety Success Rate" 
    },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've been committed to helping young people reclaim their lives from addiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <StatItem 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix || ''}
              suffix={stat.suffix || ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;