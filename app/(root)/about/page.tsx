// src/app/about/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  HelpingHand,
  Users,
  Award,
  Calendar,
  Heart,
  ChevronRight,
  Coffee,
  Lightbulb,
  HandHelping,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const RecoveryIcon = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-8"
  >
    <circle cx="60" cy="60" r="50" fill="#E9F7FE" />
    <circle cx="60" cy="60" r="40" fill="#BEE3F8" />
    <path
      d="M45 60C45 52.5 52.5 45 60 45C67.5 45 75 52.5 75 60C75 67.5 67.5 75 60 75"
      stroke="#3182CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M60 75C60 82.5 67.5 90 75 90"
      stroke="#3182CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M38 38L82 82"
      stroke="#3182CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M60 30V40"
      stroke="#3182CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M30 60H40"
      stroke="#3182CE"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("mission");

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen">
      <WavyBackground />

      {/* Hero Section */}
      <Hero>
        {/* Hero Section */}
        <section className="flex items-center justify-center pt-28 md:pt-36 pb-12 md:pb-16  overflow-hidden max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-indigo-100 blur-3xl opacity-30" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-teal-100 blur-3xl opacity-20" />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-8 py-12 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Visual Indicator */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                  Making a difference since 2005
                </span>
              </div>

              {/* Main Heading with Animation Class */}
              <h1
                id="hero-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight"
              >
                <span className="block">Empowering Youth</span>
                <span className="block text-white">Through Recovery</span>
              </h1>

              {/* Subheading with improved readability */}
              <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed">
                At Youth Recovery Alliance, we believe in the power of
                community, compassion, and evidence-based practices to help
                young people reclaim their lives from addiction.
              </p>

              {/* CTA Section with Multiple Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button
                  onClick={() => scrollToSection("mission")}
                  className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Learn more about our mission"
                >
                  Learn More
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 rounded-lg bg-white text-indigo-600 border border-indigo-200 font-medium hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label="Contact us for assistance"
                >
                  Get Support
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-slate-500 mb-2">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </section>
      </Hero>

      {/* Mission Section */}
      <section
        id="mission"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
          activeSection === "mission" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <HelpingHand className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              At Youth Recovery Alliance, our mission is to provide
              compassionate, evidence-based support to young people struggling
              with substance use disorders, helping them reclaim their lives and
              fulfill their potential.
            </p>
            <p>
              We believe that every young person deserves the opportunity to
              live a healthy, purposeful life free from addiction. Through our
              holistic approach, we address not just the addiction itself, but
              the underlying factors that contribute to substance use, including
              mental health challenges, trauma, and social determinants of
              health.
            </p>
            <p>
              Our organization was founded in 2005 by a group of recovery
              professionals, mental health specialists, and parents who
              recognized the critical need for youth-specific recovery services.
              Since then, we've grown to serve communities nationwide while
              maintaining our commitment to personalized care and positive
              outcomes.
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="values" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="values">Our Values</TabsTrigger>
                <TabsTrigger value="vision">Our Vision</TabsTrigger>
                <TabsTrigger value="history">Our History</TabsTrigger>
              </TabsList>
              <TabsContent value="values" className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Compassion",
                      description:
                        "We approach every interaction with empathy and understanding, recognizing the courage it takes to seek help.",
                    },
                    {
                      title: "Evidence-Based",
                      description:
                        "Our programs are grounded in the latest research and proven therapeutic approaches.",
                    },
                    {
                      title: "Inclusivity",
                      description:
                        "We welcome all young people, regardless of background, belief, identity, or circumstance.",
                    },
                    {
                      title: "Collaboration",
                      description:
                        "We work alongside families, communities, and other service providers to create comprehensive support networks.",
                    },
                  ].map((value, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="vision" className="pt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">
                      We envision a world where every young person has access to
                      the support, resources, and community they need to
                      overcome addiction and thrive.
                    </p>
                    <p className="text-lg mb-4">
                      Our vision includes communities where prevention is
                      prioritized, early intervention is readily available, and
                      recovery is celebrated and supported.
                    </p>
                    <p className="text-lg">
                      We strive to be at the forefront of youth recovery
                      services, continually evolving our approaches based on
                      research, outcomes, and the voices of those we serve.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history" className="pt-6">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">2005:</span> Founded by
                          a coalition of recovery professionals, mental health
                          specialists, and parents of youth in recovery.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">2008:</span> Opened our
                          first dedicated youth recovery center in Portland.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">2012:</span> Launched
                          our family support program, recognizing the crucial
                          role of family in sustainable recovery.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">2017:</span> Expanded to
                          five additional cities and introduced our peer
                          mentorship initiative.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">2020:</span> Developed
                          virtual support services in response to the pandemic,
                          reaching youth in rural and underserved areas.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                        <div>
                          <span className="font-medium">Today:</span> Serving
                          thousands of young people annually through our
                          integrated approach to recovery support.
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section
        id="approach"
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          activeSection === "approach" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Approach
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <Users className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="mb-12">
            <p className="text-lg text-slate-700 mb-8">
              Our approach to youth recovery is holistic, personalized, and
              evidence-based. We recognize that each young person's journey is
              unique, and we tailor our support to meet their specific needs and
              circumstances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="rounded-full bg-blue-100 p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Coffee className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Person-Centered Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We meet young people where they are, with respect for their
                    autonomy and individual goals. Our programs are flexible and
                    responsive to changing needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="rounded-full bg-blue-100 p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Community Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Recovery happens in community. We help young people build
                    supportive networks and develop the skills to navigate
                    social environments without substances.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="rounded-full bg-blue-100 p-2 w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Trauma-Informed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We recognize the prevalence of trauma in addiction and
                    prioritize creating safe, trustworthy environments where
                    healing can occur.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Programs
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  title: "Clinical Treatment",
                  content:
                    "Our licensed therapists provide evidence-based treatments including Cognitive Behavioral Therapy, Dialectical Behavior Therapy, and Motivational Interviewing. We offer both individual and group therapy options tailored to youth needs.",
                },
                {
                  title: "Peer Support",
                  content:
                    "Our peer support specialists have lived experience with addiction and recovery, providing relatable guidance and hope. Youth connect with peers who understand their challenges and can share practical strategies for maintaining recovery.",
                },
                {
                  title: "Family Engagement",
                  content:
                    "We recognize families as essential partners in recovery. Our family program includes education, therapy, and support groups to help the whole family system heal and develop healthy dynamics that support recovery.",
                },
                {
                  title: "Life Skills Development",
                  content:
                    "Recovery is about building a fulfilling life. We offer workshops and coaching on education, employment, financial literacy, healthy relationships, and independent living skills.",
                },
                {
                  title: "Aftercare & Continuing Support",
                  content:
                    "Recovery is a lifelong journey. Our alumni program, check-ins, and step-down services ensure young people have support for the long term as they transition to independence.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Methodology
            </h3>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-lg text-slate-700 mb-4">
                Our work is guided by a commitment to:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    <strong>Evidence-based practices</strong> that have
                    demonstrated effectiveness with young people
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    <strong>Continuous evaluation</strong> of outcomes to refine
                    and improve our programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    <strong>Cultural humility</strong> that respects diverse
                    backgrounds and experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    <strong>Youth voice and choice</strong> in all aspects of
                    their recovery journey
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    <strong>Harm reduction principles</strong> that prioritize
                    safety and meet youth where they are
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
          activeSection === "impact" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Impact
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <Award className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                By the Numbers
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15,000+", label: "Youth Served" },
                  { number: "85%", label: "Program Completion" },
                  { number: "73%", label: "Sustained Recovery" },
                  { number: "90%", label: "Family Engagement" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h4 className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </h4>
                    <p className="text-slate-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Success Stories
              </h3>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 p-2 flex items-center justify-center mr-4">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
                      <path d="M12 17a5 5 0 01-5-5c0-2.124 1.317-3.932 3.172-4.687a.996.996 0 01.68-.014c.237.084.48.256.64.514.45.774-.095 1.77-.944 1.962-1.228.28-2.038 1.23-2.038 2.224a3 3 0 003 3c1.226 0 2.266-.784 2.647-1.88.082-.234.256-.476.514-.636.774-.48 1.77.095 1.962.944A5.002 5.002 0 0112 17z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold">Our clients speak</h5>
                    <p className="text-sm text-slate-500">
                      Real stories, real impact
                    </p>
                  </div>
                </div>

                <blockquote className="italic text-slate-700 mb-6">
                  "Youth Recovery Alliance didn't just help me get sober — they
                  helped me discover who I am and what I want from life. The
                  combination of therapy, peer support, and life skills coaching
                  gave me the tools I needed to build a future I'm excited
                  about."
                  <footer className="text-slate-500 mt-2 not-italic">
                    — Jamie, Program Graduate
                  </footer>
                </blockquote>

                <Button variant="outline" className="w-full">
                  Read More Stories
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Local School Districts",
                "Children's Hospital Network",
                "Community Mental Health Centers",
                "State Department of Health",
                "National Institute on Drug Abuse",
                "Local Universities",
                "Youth Development Nonprofits",
                "Recovery Housing Alliance",
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24"
                >
                  <p className="font-medium text-slate-700 text-center">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're seeking help, looking to volunteer, or wanting to
              support our work, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Get Support
              </Button>
              <Button
                variant="outline"
                className="text-black border-white hover:bg-blue-700"
              >
                Volunteer
              </Button>
              <Button
                variant="outline"
                className="text-black border-white hover:bg-blue-700"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
