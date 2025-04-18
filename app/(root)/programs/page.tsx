// src/app/programs/page.tsx
"use client";

import React, { useState } from "react";
// import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  BookOpen,
  Calendar,
  Heart,
  ChevronRight,
  Coffee,
  Lightbulb,
  HandHelping,
  UserPlus,
  GraduationCap,
  Activity,
  Home,
  Briefcase,
  Smile,
  MessageCircle,
  Clock,
  Star,
  CheckCircle,
  Badge,
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

const ProgramIcon = ({ icon: Icon, color = "text-blue-500" }: { icon: React.ComponentType<{ className?: string }>; color?: string }) => (
  <div className="rounded-full bg-blue-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
    <Icon className={`h-8 w-8 ${color}`} />
  </div>
);

const ProgramCard = ({ program }: { program: any }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <ProgramIcon icon={program.icon} />
        <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
          {program.type}
        </Badge>
        <CardTitle>{program.title}</CardTitle>
        <CardDescription>{program.shortDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">{program.description}</p>
        {program.features && (
            <ul className="mt-4 space-y-2">
            {program.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start">
              <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
              </li>
            ))}
            </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Learn More <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const TestimonialCard = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string; }) => (
  <Card className="h-full">
    <CardContent className="pt-6">
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="inline-block h-4 w-4 text-yellow-400 mr-1"
            fill="currentColor"
          />
        ))}
      </div>
      <blockquote className="text-slate-700 italic mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold mr-3">
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function ProgramsPage() {
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const programs = [
    {
      id: 1,
      title: "Clinical Treatment",
      type: "Core Program",
      icon: Activity,
      shortDesc: "Evidence-based therapy for substance use and mental health",
      description:
        "Our licensed therapists provide personalized, evidence-based treatments to address both substance use disorders and co-occurring mental health conditions. Services are tailored specifically for adolescents and young adults.",
      features: [
        "Individual therapy sessions",
        "Group therapy focused on skill-building",
        "Psychiatric evaluation and medication management when needed",
        "Trauma-informed approaches",
        "Specialized therapies including CBT, DBT, and MI",
      ],
    },
    {
      id: 2,
      title: "Peer Recovery Support",
      type: "Core Program",
      icon: Users,
      shortDesc: "Connection with others who understand the journey",
      description:
        "Our certified peer recovery specialists have lived experience with addiction and recovery. They provide relatable guidance, connection, and hope while helping young people navigate practical challenges in early recovery.",
      features: [
        "One-on-one peer coaching",
        "Youth recovery community events",
        "Peer-led support groups",
        "Recovery skills workshops",
        "Community navigation assistance",
      ],
    },
    {
      id: 3,
      title: "Family Engagement",
      type: "Support Service",
      icon: Heart,
      shortDesc: "Healing relationships and building recovery support",
      description:
        "Recovery is stronger when families heal together. Our family program helps parents, siblings, and other loved ones understand addiction, develop healthy boundaries, improve communication, and learn how to support recovery.",
      features: [
        "Family therapy sessions",
        "Multi-family support groups",
        "Parent education workshops",
        "Sibling support services",
        "Family recovery coaching",
      ],
    },
    {
      id: 4,
      title: "Life Skills Development",
      type: "Support Service",
      icon: GraduationCap,
      shortDesc: "Building capabilities for independent living",
      description:
        "Recovery is about building a fulfilling life. Our life skills program helps young people develop the practical capabilities needed for independent living, educational success, and career development.",
      features: [
        "Financial literacy workshops",
        "Resume building and job search skills",
        "Educational support and planning",
        "Healthy relationship development",
        "Cooking, nutrition, and self-care basics",
      ],
    },
    {
      id: 5,
      title: "Recovery Housing",
      type: "Residential Service",
      icon: Home,
      shortDesc: "Safe, supportive living environments",
      description:
        "Our recovery housing provides structured, substance-free environments where young people can stabilize in early recovery while receiving comprehensive support services and building community with peers.",
      features: [
        "Semi-structured living environment",
        "House meetings and community meals",
        "On-site recovery support staff",
        "Life skills practice in real-world setting",
        "Peer accountability and community",
      ],
    },
    {
      id: 6,
      title: "Aftercare & Alumni",
      type: "Continuing Care",
      icon: Clock,
      shortDesc: "Ongoing support for sustained recovery",
      description:
        "Recovery is a lifelong journey. Our aftercare program provides step-down services, check-ins, and alumni community to ensure young people have the ongoing support they need as they transition to independence.",
      features: [
        "Monthly alumni events and activities",
        "Recovery milestone celebrations",
        "Volunteer and mentorship opportunities",
        "Ongoing access to recovery resources",
        "Community service projects",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "The peer recovery program changed everything for me. Having someone who'd been through it and come out the other side gave me hope when I needed it most.",
      author: "Jordan T.",
      role: "Program Participant, Age 19",
    },
    {
      quote:
        "The family program helped us understand what our daughter was going through and how to support her without enabling. We learned to communicate in ways that actually worked.",
      author: "Maria L.",
      role: "Parent of Program Graduate",
    },
    {
      quote:
        "The life skills program taught me practical things nobody ever showed me before – how to budget, interview for jobs, even cook healthy meals. These skills help me stay on track every day.",
      author: "Alex K.",
      role: "Program Graduate, Age 22",
    },
  ];

  const pathwaysContent = [
    {
      name: "Youth (14-17)",
      content:
        "Our adolescent pathway is designed with appropriate supervision, educational support, and family integration. Treatment approaches are developmentally tailored with an emphasis on identity formation, peer relationships, and appropriate independence.",
    },
    {
      name: "Young Adults (18-25)",
      content:
        "Our young adult pathway balances autonomy with support. It focuses on life transitions, career development, and adult relationship skills while addressing the unique neurological and social development happening during this formative period.",
    },
    {
      name: "Early Recovery",
      content:
        "For those just beginning their recovery journey, this pathway provides stability, intensive support, and foundation-building. It focuses on safety, immediate needs, withdrawal management, and establishing basic recovery skills.",
    },
    {
      name: "Sustained Recovery",
      content:
        "For those with some recovery time, this pathway focuses on growth, purpose development, and building a meaningful life in recovery. It emphasizes education, career, relationships, and deeper healing work.",
    },
    {
      name: "Co-occurring Mental Health",
      content:
        "This specialized pathway integrates mental health treatment with addiction recovery services. It provides coordinated care for young people dealing with both substance use disorders and mental health challenges.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <WavyBackground />

      {/* Hero Section */}
      <Hero>
        <section className="flex items-center justify-center min-h-[50vh] overflow-hidden max-w-7xl mx-auto relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-30" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-20" />
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-8 py-12 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Visual Indicator */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  Personalized Recovery Support
                </span>
              </div>

              {/* Main Heading with Animation Class */}
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                <span className="block">Our Comprehensive</span>
                <span className="block text-blue-600">Recovery Programs</span>
              </h1>

              {/* Subheading with improved readability */}
              <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed">
                We offer a range of evidence-based programs tailored to the
                unique needs of young people at different stages of their
                recovery journey.
              </p>

              {/* CTA Section with Multiple Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button
                  onClick={() => scrollToSection("core-programs")}
                  className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Explore Programs
                </Button>
                <Button
                  onClick={() => scrollToSection("get-started")}
                  className="px-8 py-4 rounded-lg bg-white text-blue-600 border border-blue-200 font-medium hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Hero>

      {/* Core Programs Section */}
      <section
        id="core-programs"
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          activeSection === "core-programs" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Programs
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-lg text-slate-700 max-w-2xl">
                Each program is designed to address specific aspects of
                recovery, with all services tailored to the unique needs and
                circumstances of each young person.
              </p>
            </div>
            <BookOpen className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section
        id="pathways"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
          activeSection === "pathways" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Recovery Pathways
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <Coffee className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="mb-10">
            <p className="text-lg text-slate-700 mb-8">
              We recognize that recovery isn't one-size-fits-all. Our pathways
              approach allows us to tailor our services to meet specific needs
              based on age, recovery stage, and co-occurring conditions.
            </p>
          </div>

          <Tabs defaultValue="youth" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="youth">Youth (14-17)</TabsTrigger>
              <TabsTrigger value="young-adults">
                Young Adults (18-25)
              </TabsTrigger>
              <TabsTrigger value="early">Early Recovery</TabsTrigger>
              <TabsTrigger value="sustained">Sustained Recovery</TabsTrigger>
              <TabsTrigger value="co-occurring">
                Co-occurring Mental Health
              </TabsTrigger>
            </TabsList>

            {pathwaysContent.map((pathway, idx) => (
              <TabsContent
                key={idx}
                value={pathway.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[()]/g, "")}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{pathway.name} Pathway</CardTitle>
                    <CardDescription>
                      Tailored recovery support for specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">{pathway.content}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <h4 className="font-medium text-lg mb-2 text-blue-600">
                          Key Components
                        </h4>
                        <ul className="space-y-2">
                          {[1, 2, 3, 4].map((item) => (
                            <li key={item} className="flex items-start">
                              <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              <span>
                                Customized component for {pathway.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <h4 className="font-medium text-lg mb-2 text-blue-600">
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {[1, 2, 3, 4].map((item) => (
                            <li key={item} className="flex items-start">
                              <Star className="h-5 w-5 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                              <span>
                                Outcome specifically designed for {pathway.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Learn More About This Pathway
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          activeSection === "testimonials" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Success Stories
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <MessageCircle className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="mb-8">
            <p className="text-lg text-slate-700">
              Hear from those who have experienced our programs firsthand and
              see the real impact of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                image={""}
                key={idx}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">
              View More Success Stories{" "}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section
        id="program-details"
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
          activeSection === "program-details" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Program Details
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>
            <BookOpen className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Frequently Asked Questions
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How long are your programs?",
                  answer:
                    "Program length varies based on individual needs and circumstances. Our clinical treatment typically ranges from 3-6 months, while peer support and other services can continue for a year or more. We believe in providing support for as long as needed, with services that can be adjusted in intensity over time.",
                },
                {
                  question: "How much do your programs cost?",
                  answer:
                    "We accept most major insurance plans, including Medicaid. We also offer sliding scale fees based on financial need and never turn anyone away due to inability to pay. Our admissions team works with each family to explore all payment options, including grants and scholarships for those who qualify.",
                },
                {
                  question: "Do you offer virtual services?",
                  answer:
                    "Yes, we offer telehealth options for many of our services, including therapy, peer support, and family engagement. Virtual services are especially valuable for young people in rural areas or those with transportation challenges. We use secure, HIPAA-compliant platforms for all virtual services.",
                },
                {
                  question:
                    "How do I know which program is right for me/my child?",
                  answer:
                    "We begin with a comprehensive assessment to understand the specific needs, goals, and circumstances of each young person. Based on this assessment, our team works with you to develop a personalized treatment plan that draws from our various programs. This plan is regularly reviewed and adjusted as needs change.",
                },
                {
                  question: "What age ranges do you serve?",
                  answer:
                    "We serve young people ages 14-25, with separate age-appropriate programming for adolescents (14-17) and young adults (18-25). Each age group has specific developmental needs that we address through tailored approaches.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Program Schedule
            </h3>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-lg mb-4 text-blue-600">
                      Intensive Outpatient Program
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">
                            Monday, Wednesday, Thursday
                          </span>
                          <p className="text-slate-600">3:30pm - 6:30pm</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Group Sessions</span>
                          <p className="text-slate-600">
                            CBT Skills, Process Group, Life Skills
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <UserPlus className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">
                            Individual Sessions
                          </span>
                          <p className="text-slate-600">Scheduled weekly</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-lg mb-4 text-blue-600">
                      Peer Support & Recovery Activities
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Tuesday & Friday</span>
                          <p className="text-slate-600">4:00pm - 7:00pm</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Coffee className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Coffee House</span>
                          <p className="text-slate-600">
                            Drop-in social space (3:00pm - 8:00pm)
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Weekends</span>
                          <p className="text-slate-600">
                            Recreational activities & service projects
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-slate-700">
                    <span className="font-medium">Note:</span> Program schedules
                    are flexible and can be adjusted based on individual needs,
                    school schedules, and work commitments. Virtual options are
                    available for many services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="get-started"
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          activeSection === "get-started" ? "scroll-mt-16" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Begin Your Recovery Journey?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                The path to recovery starts with a simple conversation. Reach
                out today to learn more about our programs and how we can
                support you or your loved one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-white/10 border-0">
                  <CardContent className="pt-6 text-center">
                    <div className="rounded-full bg-white/20 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Call Us</h3>
                    <p className="text-blue-100">
                      Speak directly with our admissions team
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-0">
                  <CardContent className="pt-6 text-center">
                    <div className="rounded-full bg-white/20 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Visit Us</h3>
                    <p className="text-blue-100">
                      Schedule a tour of our facilities
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-0">
                  <CardContent className="pt-6 text-center">
                    <div className="rounded-full bg-white/20 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium mb-2">
                      Get Informed
                    </h3>
                    <p className="text-blue-100">
                      Request an information packet
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigation */}
      <div className="bg-blue-50 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          <Button
            variant="ghost"
            className="text-blue-600"
            onClick={() => scrollToSection("core-programs")}
          >
            Our Programs
          </Button>
          <Button
            variant="ghost"
            className="text-blue-600"
            onClick={() => scrollToSection("pathways")}
          >
            Recovery Pathways
          </Button>
          <Button
            variant="ghost"
            className="text-blue-600"
            onClick={() => scrollToSection("testimonials")}
          >
            Success Stories
          </Button>
          <Button
            variant="ghost"
            className="text-blue-600"
            onClick={() => scrollToSection("program-details")}
          >
            Program Details
          </Button>
          <Button
            variant="ghost"
            className="text-blue-600"
            onClick={() => scrollToSection("get-started")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
