// src/app/get-involved/page.tsx
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
  Heart,
  Users,
  ArrowRight,
  Handshake,
  Calendar,
  Check,
  Clock,
  DollarSign,
  MessageSquare,
  Share2,
  Briefcase,
  Megaphone,
  Lightbulb,
  Gift,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import { Input } from "@/components/ui/input";

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

const volunteerOpportunities = [
  {
    id: 1,
    title: "Peer Mentor",
    commitment: "4-6 hours weekly",
    location: "In-person (various locations)",
    description:
      "Connect one-on-one with youth in recovery to provide support, guidance, and a positive example of sustainable recovery.",
    requirements:
      "Minimum 2 years in recovery, age 21+, background check required",
    impact:
      "Help youth build confidence and develop recovery skills through consistent, supportive relationships",
    category: "direct",
  },
  {
    id: 2,
    title: "Group Facilitator",
    commitment: "2-3 hours weekly",
    location: "In-person or virtual",
    description:
      "Lead support groups, skill-building workshops, or recreational activities for youth in various stages of recovery.",
    requirements:
      "Strong communication skills, experience with group dynamics, background check required",
    impact:
      "Create safe spaces for youth to develop social skills and build community with peers in recovery",
    category: "direct",
  },
  {
    id: 3,
    title: "Administrative Support",
    commitment: "Flexible hours",
    location: "Virtual or office-based",
    description:
      "Assist with data entry, correspondence, scheduling, and other administrative tasks that keep our programs running smoothly.",
    requirements:
      "Organized, detail-oriented, proficient with basic office software",
    impact:
      "Ensure our programs operate efficiently so staff can focus on direct service to youth and families",
    category: "support",
  },
  {
    id: 4,
    title: "Event Volunteer",
    commitment: "One-time or occasional",
    location: "Various locations",
    description:
      "Help plan and execute fundraisers, awareness events, recovery celebrations, and community outreach activities.",
    requirements: "Enthusiastic, reliable, willing to help with various tasks",
    impact:
      "Create memorable experiences that build community and raise awareness about youth recovery",
    category: "support",
  },
  {
    id: 5,
    title: "Professional Skills Volunteer",
    commitment: "Project-based",
    location: "Virtual or in-person",
    description:
      "Share your professional expertise in areas like marketing, legal, IT, financial management, or facilities maintenance.",
    requirements: "Professional experience in relevant field",
    impact:
      "Help us operate efficiently and professionally while reducing overhead costs",
    category: "professional",
  },
  {
    id: 6,
    title: "Youth Advisory Board Member",
    commitment: "5-10 hours monthly",
    location: "Hybrid (virtual and in-person)",
    description:
      "Young people in recovery who advise on program development, participate in advocacy, and ensure youth perspectives are centered.",
    requirements:
      "Age 16-25, lived experience with substance use or mental health challenges, 6+ months in recovery",
    impact:
      "Shape programs and policies to ensure they truly meet the needs of youth in recovery",
    category: "leadership",
  },
  {
    id: 7,
    title: "Recovery Advocate",
    commitment: "5-10 hours monthly",
    location: "Virtual and community-based",
    description:
      "Help reduce stigma through community education, storytelling, and advocacy for policies that support youth recovery.",
    requirements:
      "Passion for advocacy, good communication skills, willingness to share personal experiences (if appropriate)",
    impact:
      "Change public perception and policies to create a more supportive environment for youth in recovery",
    category: "leadership",
  },
  {
    id: 8,
    title: "Special Skills Instructor",
    commitment: "Weekly or monthly sessions",
    location: "In-person",
    description:
      "Share your talents in arts, music, fitness, cooking, or other areas by leading workshops for youth in recovery.",
    requirements:
      "Expertise in specific skill area, ability to teach/mentor youth",
    impact:
      "Help youth discover healthy interests and coping skills that support long-term recovery",
    category: "professional",
  },
];

const donationImpact = [
  {
    amount: "$25",
    impact:
      "Provides transportation assistance for one youth to attend a week of recovery support meetings",
  },
  {
    amount: "$50",
    impact:
      "Supplies materials for an art therapy or skill-building workshop for 10 participants",
  },
  {
    amount: "$100",
    impact:
      "Funds a family support session to help parents and siblings understand and support recovery",
  },
  {
    amount: "$250",
    impact:
      "Sponsors a youth's participation in a weekend recovery retreat or wellness event",
  },
  {
    amount: "$500",
    impact:
      "Covers the cost of emergency assistance for a youth in early recovery (housing, food, necessities)",
  },
  {
    amount: "$1,000",
    impact:
      "Equips a peer recovery support specialist with training and resources to mentor five youth",
  },
  {
    amount: "$5,000",
    impact: "Launches a new recovery support group in an underserved community",
  },
];

const partnerOpportunities = [
  {
    title: "Corporate Volunteering",
    description:
      "Engage your employees in meaningful volunteer opportunities that support youth in recovery while building team morale and skills.",
    icon: <Users className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Cause Marketing",
    description:
      "Create co-branded campaigns that raise awareness and funds for youth recovery while highlighting your company's commitment to community health.",
    icon: <Megaphone className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Sponsorship",
    description:
      "Support specific programs, events, or initiatives while gaining visibility and demonstrating your company's values.",
    icon: <DollarSign className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Workplace Giving",
    description:
      "Set up matching gift programs, payroll deductions, or employee-driven fundraising that multiplies your team's impact.",
    icon: <Gift className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Skills-Based Support",
    description:
      "Share your company's expertise in areas like technology, marketing, legal services, or facilities to help us operate more effectively.",
    icon: <Lightbulb className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Employment Pathways",
    description:
      "Create internships, job shadows, or employment opportunities that help youth in recovery develop career skills and financial stability.",
    icon: <Briefcase className="h-10 w-10 text-blue-500" />,
  },
];

export default function GetInvolvedPage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(
    volunteerOpportunities[0]
  );

  return (
    <div className="relative min-h-screen">
      <WavyBackground />

      {/* Hero Section */}
      <Hero>
        <section className="flex items-center justify-center min-h-[50vh] overflow-hidden max-w-7xl mx-auto relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                Make a Difference Today
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Get Involved
              </h1>
              <p className="text-lg md:text-xl text-slate-950 max-w-2xl mx-auto mb-8">
                Join our mission to transform lives through youth recovery
                support. Your time, talent, and resources can help young people
                build sustainable futures.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Volunteer Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Make a Donation
                </Button>
              </div>
            </motion.div>

            {/* Ways to Get Involved Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "Volunteer",
                  description:
                    "Share your time and talents directly with youth or behind the scenes",
                  icon: <Heart className="h-8 w-8 text-blue-500" />,
                  link: "#volunteer",
                },
                {
                  title: "Donate",
                  description:
                    "Provide financial support to sustain and expand our programs",
                  icon: <DollarSign className="h-8 w-8 text-blue-500" />,
                  link: "#donate",
                },
                {
                  title: "Partner",
                  description:
                    "Create strategic partnerships that advance our shared mission",
                  icon: <Handshake className="h-8 w-8 text-blue-500" />,
                  link: "#partner",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                >
                  <Card className="bg-white h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                      <div className="p-3 rounded-full bg-blue-50 mb-4">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600">{item.description}</p>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Button variant="ghost" asChild>
                        <a href={item.link} className="flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Hero>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Volunteer Opportunities
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-lg text-slate-700 max-w-2xl">
                Whether you have lived experience with recovery, professional
                skills to share, or simply a passion for helping young people
                thrive, we have a meaningful volunteer role for you.
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Roles</TabsTrigger>
              <TabsTrigger value="direct">Direct Support</TabsTrigger>
              <TabsTrigger value="support">Program Support</TabsTrigger>
              <TabsTrigger value="professional">
                Professional Skills
              </TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                    setSelectedOpportunity={setSelectedOpportunity}
                  />
                ))}
              </div>
            </TabsContent>

            {["direct", "support", "professional", "leadership"].map(
              (category) => (
                <TabsContent key={category} value={category} className="pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {volunteerOpportunities
                      .filter(
                        (opportunity) => opportunity.category === category
                      )
                      .map((opportunity) => (
                        <OpportunityCard
                          key={opportunity.id}
                          opportunity={opportunity}
                          setSelectedOpportunity={setSelectedOpportunity}
                        />
                      ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>

          {/* Selected Opportunity Detail */}
          {selectedOpportunity && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 md:mb-0">
                    {selectedOpportunity.title}
                  </h3>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center text-slate-600 mb-3">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <span className="font-medium mr-1">
                        Time Commitment:
                      </span>{" "}
                      {selectedOpportunity.commitment}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      <span className="font-medium mr-1">Location:</span>{" "}
                      {selectedOpportunity.location}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start text-slate-600 mb-3">
                      <Users className="h-5 w-5 mr-2 mt-1 text-blue-600" />
                      <div>
                        <span className="font-medium">Requirements:</span>
                        <p className="mt-1">
                          {selectedOpportunity.requirements}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-2">
                    Role Description
                  </h4>
                  <p className="text-slate-700">
                    {selectedOpportunity.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-2">
                    Your Impact
                  </h4>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-2 mt-1 text-blue-600" />
                    <p className="text-slate-700">
                      {selectedOpportunity.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Volunteer Process Steps */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              How to Become a Volunteer
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description:
                    "Fill out our volunteer application form with your interests and availability.",
                },
                {
                  step: "2",
                  title: "Interview",
                  description:
                    "Meet with our volunteer coordinator to discuss opportunities that match your skills.",
                },
                {
                  step: "3",
                  title: "Orientation",
                  description:
                    "Complete our volunteer orientation to learn about youth recovery and our approach.",
                },
                {
                  step: "4",
                  title: "Get Started",
                  description:
                    "Begin making a difference in the lives of young people in recovery.",
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="bg-white border-t-4 border-blue-500"
                >
                  <CardHeader className="flex flex-col items-center text-center pb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mb-2">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Volunteer Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Support Our Work
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Your financial support ensures that young people have access to
              the recovery support they need, regardless of their ability to
              pay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Ways to Give
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "One-Time Donation",
                    description:
                      "Make an immediate impact with a one-time gift of any amount.",
                    icon: <DollarSign className="h-6 w-6 text-blue-600" />,
                  },
                  {
                    title: "Monthly Giving",
                    description:
                      "Join our Sustainer Circle with a recurring monthly donation to provide reliable support.",
                    icon: <Calendar className="h-6 w-6 text-blue-600" />,
                  },
                  {
                    title: "Legacy Giving",
                    description:
                      "Include Youth Recovery Alliance in your estate planning to create a lasting impact.",
                    icon: <Heart className="h-6 w-6 text-blue-600" />,
                  },
                  {
                    title: "Donor-Advised Fund",
                    description:
                      "Recommend a grant from your donor-advised fund to support our programs.",
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 mr-4"
                >
                  Donate Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Contact Development Team
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Your Donation's Impact
              </h3>

              <div className="space-y-4">
                {donationImpact.map((item, index) => (
                  <Card key={index} className="bg-white">
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-blue-100 text-blue-700 font-bold py-2 px-3 rounded-lg mr-4">
                        {item.amount}
                      </div>
                      <p className="text-slate-700">{item.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center text-slate-700 text-sm">
                <p>
                  Youth Recovery Alliance is a 501(c)(3) nonprofit organization.
                  All donations are tax-deductible to the extent allowed by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partner With Us
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Create a strategic partnership that advances our shared goals
              while making a meaningful difference in young people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partnerOpportunities.map((opportunity, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="mb-4">{opportunity.icon}</div>
                  <CardTitle>{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{opportunity.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Current Partners
                </h3>
                <p className="text-slate-700 mb-6">
                  We're proud to collaborate with organizations across sectors
                  who share our commitment to supporting youth recovery and
                  wellbeing.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-slate-100 h-16 rounded flex items-center justify-center"
                    >
                      <span className="text-slate-400">Partner Logo</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Become a Partner
                </h3>
                <p className="text-slate-700 mb-6">
                  We work with each partner to create a customized partnership
                  that aligns with your organization's goals and values.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule a Partnership Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <div className="bg-white/20 p-3 rounded-full inline-block mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Share Your Story
                </h2>
                <p className="text-blue-50 mb-6">
                  Stories have the power to inspire hope, reduce stigma, and
                  show that recovery is possible. If you've experienced recovery
                  - as a young person, family member, or supporter - consider
                  sharing your journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    Share Your Experience
                  </Button>
                  <Button
                    variant="outline"
                    className="text-black hover:text-white border-white hover:bg-blue-700/50"
                  >
                    Read Recovery Stories
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    How Your Story Helps
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Inspire Hope",
                        description:
                          "Show others that recovery is possible and that challenges can be overcome.",
                      },
                      {
                        title: "Reduce Stigma",
                        description:
                          "Help change public perception about addiction and mental health challenges.",
                      },
                      {
                        title: "Guide Programs",
                        description:
                          "Inform how we develop and improve our support services.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <Check className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium text-slate-900">
                            {item.title}
                          </h4>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Social Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Stay Connected</CardTitle>
                <CardDescription>
                  Subscribe to our newsletter for updates, stories, and
                  opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Our Journey</CardTitle>
                <CardDescription>
                  Connect with us on social media to stay updated and help
                  spread awareness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {[
                    "Facebook",
                    "Twitter",
                    "Instagram",
                    "LinkedIn",
                    "YouTube",
                  ].map((platform) => (
                    <Button
                      key={platform}
                      variant="outline"
                      size="icon"
                      className="rounded-full w-10 h-10"
                    >
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">{platform}</span>
                    </Button>
                  ))}
                </div>
                <p className="text-slate-700 mt-4">
                  Follow, share, and help us spread the message that recovery is
                  possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you volunteer, donate, partner with us, or share your
              story, your contribution matters. Join us in building a world
              where every young person has the support they need to thrive in
              recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Today
              </Button>
              <Button
                aria-label="contact"
                className="tex-black hover:text-white border-white hover:bg-blue-700"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Opportunity Card Component
function OpportunityCard({
  opportunity,
  setSelectedOpportunity,
}: {
  opportunity: any;
  setSelectedOpportunity: any;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle>{opportunity.title}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <Clock className="h-3 w-3 mr-1" />
          {opportunity.commitment}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-700 line-clamp-3">{opportunity.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={() => setSelectedOpportunity(opportunity)}
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
