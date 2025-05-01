// src/app/success-stories/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Award,
    ChevronRight,
    Star,
    Users,
    ArrowRight,
    Quote,
    Calendar,
    Check,
    MapPin
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";

// SVG Components
const WavyBackground = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#E9F7FE"
                fillOpacity="0.6"
                d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,176C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
    </div>
);

const featuredSuccessStories = [
    {
        id: 1,
        name: "Jamie's Journey",
        year: 2023,
        location: "Portland",
        quote: "After struggling with substance use for years, I found a community that believed in me even when I didn't believe in myself. Today, I'm three years sober and helping others find their path to recovery.",
        testimonial: "Youth Recovery Alliance didn't just help me get sober — they helped me discover who I am and what I want from life. The combination of therapy, peer support, and life skills coaching gave me the tools I needed to build a future I'm excited about.",
        outcome: "Now pursuing a degree in social work and volunteering as a peer mentor",
        image: "/api/placeholder/400/320",
        category: "individual"
    },
    {
        id: 2,
        name: "The Garcia Family",
        year: 2021,
        location: "Seattle",
        quote: "We were desperate to help our daughter but didn't know how. The family program showed us how to support her recovery while healing our relationship.",
        testimonial: "The family engagement program transformed our understanding of addiction and recovery. We learned how to rebuild trust, set healthy boundaries, and truly listen to our daughter. Today, our family is stronger than ever.",
        outcome: "Family successfully reunited with improved communication and trust",
        image: "/api/placeholder/400/320",
        category: "family"
    },
    {
        id: 3,
        name: "North High School Partnership",
        year: 2019,
        location: "Denver",
        quote: "Implementing the prevention and early intervention program at our school has dramatically reduced substance use incidents and improved student wellbeing.",
        testimonial: "The training provided to our counselors and teachers has enabled us to identify and support at-risk students earlier. The peer support component has been particularly effective at changing school culture around substance use.",
        outcome: "47% reduction in substance-related incidents over three years",
        image: "/api/placeholder/400/320",
        category: "community"
    },
    {
        id: 4,
        name: "Tyler's Transformation",
        year: 2020,
        location: "Chicago",
        quote: "After three failed treatment attempts elsewhere, the personalized approach at YRA finally helped me find sustainable recovery.",
        testimonial: "What made the difference was how the program adapted to my needs instead of trying to force me into a one-size-fits-all approach. From trauma therapy to vocational support, every aspect of my life was addressed in an integrated way.",
        outcome: "Now working as a recovery coach and pursuing entrepreneurship",
        image: "/api/placeholder/400/320",
        category: "individual"
    }
];

const impactMetrics = [
    { figure: "15,000+", label: "Youth Served" },
    { figure: "85%", label: "Program Completion" },
    { figure: "73%", label: "Sustained Recovery" },
    { figure: "20", label: "Years of Experience" }
];

const milestones = [
    {
        year: 2005,
        title: "Foundation",
        description: "Youth Recovery Alliance was founded by recovery professionals, mental health specialists, and parents."
    },
    {
        year: 2008,
        title: "First Recovery Center",
        description: "Opened our first dedicated youth recovery center in Portland."
    },
    {
        year: 2012,
        title: "Family Program Launch",
        description: "Launched our comprehensive family support program."
    },
    {
        year: 2017,
        title: "National Expansion",
        description: "Expanded to five additional cities and introduced peer mentorship."
    },
    {
        year: 2020,
        title: "Virtual Services",
        description: "Developed virtual support services reaching rural and underserved areas."
    },
    {
        year: 2025,
        title: "Today",
        description: "Serving thousands of young people through our integrated approach to recovery."
    }
];

export default function SuccessStoriesPage() {
    const [selectedStory, setSelectedStory] = useState(featuredSuccessStories[0]);

    return (
        <div className="relative min-h-screen">
            <WavyBackground />



            {/* Hero Section */}
            <Hero>
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  Two Decades of Transformation
                </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                                Success Stories
                            </h1>
                            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-8">
                                For 20 years, we've been helping young people reclaim their lives from addiction.
                                These are their stories of hope, resilience, and transformation.
                            </p>
                        </motion.div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
                            {impactMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="bg-white rounded-lg p-6 shadow-sm"
                                >
                                    <h4 className="text-3xl font-bold text-blue-600 mb-2">{metric.figure}</h4>
                                    <p className="text-slate-700">{metric.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </Hero>

            {/* Featured Stories Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Stories</h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Real stories from real people whose lives have been transformed through our programs.
                            </p>
                        </div>
                    </div>

                    <Tabs defaultValue="all" className="w-full mb-12">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="all">All Stories</TabsTrigger>
                            <TabsTrigger value="individual">Individual</TabsTrigger>
                            <TabsTrigger value="family">Family</TabsTrigger>
                            <TabsTrigger value="community">Community</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featuredSuccessStories.map((story) => (
                                    <StoryCard key={story.id} story={story} setSelectedStory={setSelectedStory} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="individual" className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featuredSuccessStories
                                    .filter(story => story.category === "individual")
                                    .map((story) => (
                                        <StoryCard key={story.id} story={story} setSelectedStory={setSelectedStory} />
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="family" className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featuredSuccessStories
                                    .filter(story => story.category === "family")
                                    .map((story) => (
                                        <StoryCard key={story.id} story={story} setSelectedStory={setSelectedStory} />
                                    ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="community" className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {featuredSuccessStories
                                    .filter(story => story.category === "community")
                                    .map((story) => (
                                        <StoryCard key={story.id} story={story} setSelectedStory={setSelectedStory} />
                                    ))}
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Featured Story Detail */}
                    {selectedStory && (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <Quote className="h-8 w-8 text-blue-500 mr-3" />
                                        <h3 className="text-2xl font-bold text-slate-900">{selectedStory.name}</h3>
                                    </div>

                                    <div className="flex items-center text-slate-600 mb-6">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span className="mr-4">{selectedStory.year}</span>
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{selectedStory.location}</span>
                                    </div>

                                    <blockquote className="text-lg italic text-slate-700 mb-6 border-l-4 border-blue-500 pl-4">
                                        "{selectedStory.quote}"
                                    </blockquote>

                                    <p className="text-slate-700 mb-6">{selectedStory.testimonial}</p>

                                    <div className="flex items-center text-blue-600">
                                        <Check className="h-5 w-5 mr-2" />
                                        <p className="font-medium">{selectedStory.outcome}</p>
                                    </div>
                                </div>
                                <div className="bg-slate-100 flex items-center justify-center p-8">
                                    <img
                                        src={selectedStory.image}
                                        alt={selectedStory.name}
                                        className="rounded-lg shadow-md max-h-80 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                            A timeline of our growth and impact over 20 years of service.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-blue-200"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative">
                                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex-1 md:w-1/2"></div>
                                        <div className="flex items-center justify-center z-10">
                                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                                {milestone.year.toString().substring(2)}
                                            </div>
                                        </div>
                                        <div className="flex-1 md:w-1/2"></div>
                                    </div>
                                    <div className={`mt-4 md:mt-0 md:absolute ${index % 2 === 0 ? 'md:right-1/2 md:pr-12 md:text-right' : 'md:left-1/2 md:pl-12'} md:top-0 md:w-1/2`}>
                                        <Card>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-xl">{milestone.year}: {milestone.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-slate-700">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What People Say</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The skills I learned through the recovery program have helped me in every aspect of my life. I'm not just sober — I'm thriving.",
                                author: "Alex K.",
                                role: "Program Graduate, 2018"
                            },
                            {
                                quote: "As a parent, I was terrified and didn't know where to turn. The family support program gave us hope and practical tools when we needed them most.",
                                author: "Michelle T.",
                                role: "Parent, Family Program"
                            },
                            {
                                quote: "Working with Youth Recovery Alliance has transformed how our school approaches substance use prevention and early intervention.",
                                author: "Dr. Ramirez",
                                role: "School Principal, Community Partner"
                            }
                        ].map((testimonial, index) => (
                            <Card key={index} className="bg-white">
                                <CardContent className="pt-6">
                                    <Quote className="h-10 w-10 text-blue-200 mb-4" />
                                    <blockquote className="text-lg text-slate-700 mb-6">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <footer>
                                        <p className="font-semibold text-slate-900">{testimonial.author}</p>
                                        <p className="text-slate-500 text-sm">{testimonial.role}</p>
                                    </footer>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Be Part of Our Next Success Story
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Whether you're seeking help, looking to volunteer, or wanting to support our work, join us in creating more stories of recovery and transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                Get Support
                            </Button>
                            <Button
                                variant="outline"
                                className="text-white border-white hover:bg-blue-700"
                            >
                                Share Your Story
                            </Button>
                            <Button
                                variant="outline"
                                className="text-white border-white hover:bg-blue-700"
                            >
                                Support Our Work
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Story Card Component
function StoryCard({ story, setSelectedStory }: { story: any, setSelectedStory: any }) {
    return (
        <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <CardTitle>{story.name}</CardTitle>
                    <span className="text-sm text-slate-500">{story.year}</span>
                </div>
                <CardDescription className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {story.location}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-slate-700 line-clamp-3">{story.quote}</p>
            </CardContent>
            <CardFooter>
                <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => setSelectedStory(story)}
                >
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </CardFooter>
        </Card>
    );
}