import React from 'react';
import Image from 'next/image';

interface SuccessStoryProps {
  name: string;
  age: number;
  yearsClean: number;
  quote: string;
  image: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ name, age, yearsClean, quote, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <Image 
          src={image}
          alt={`${name}'s success story`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}, {age}</h3>
        <p className="text-emerald-600 font-medium mb-4">{yearsClean} years clean</p>
        <blockquote className="italic text-gray-600 border-l-4 border-emerald-500 pl-4">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      name: "Alex",
      age: 21,
      yearsClean: 2,
      quote: "This program helped me reclaim my future. I'm now in college studying psychology to help others like me.",
      image: "/images/aftercare-program.jpeg"
    },
    {
      name: "Mia",
      age: 19,
      yearsClean: 1.5,
      quote: "I found a community that understands me. The mentors here gave me hope when I had none left.",
      image: "/images/aftercare-program.jpeg"
    },
    {
      name: "Jason",
      age: 23,
      yearsClean: 3,
      quote: "Recovery isn't linear, but with the right support, it's possible. I'm living proof of that.",
      image: "/images/outpatient-program.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase">Real Stories, Real Recovery</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every journey to recovery is unique and inspiring. Here are some of our graduates who have transformed their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center">
            <span>Read More Success Stories</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;