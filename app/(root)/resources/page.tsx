// src/app/resources/page.tsx
"use client";

import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Book,
    FileText,
    Link as LinkIcon,
    Phone,
    Calendar,
    Users,
    PhoneCall,
    ExternalLink,
    Download,
    Search,
    MapPin,
    MessageCircle,
    FileSpreadsheet,
    BookOpen,
    FilePlus,
    CheckCircle,
} from "lucide-react";
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

const ResourceCard = ({ resource }: { resource: any }) => {
    return (
        <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="rounded-full bg-blue-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {React.createElement(resource.icon, { className: "h-8 w-8 text-blue-500" })}
                </div>
                {resource.badge && (
                    <div className="w-fit mb-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {resource.badge}
                    </div>
                )}
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-slate-700">{resource.content}</p>
                {resource.items && (
                    <ul className="mt-4 space-y-2">
                        {resource.items.map((item: any, idx: number) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    {resource.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

const EmergencyContactCard = ({ contact }: { contact: any }) => (
    <Card className="h-full">
        <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-4">
                <div className="rounded-full bg-red-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {React.createElement(contact.icon, { className: "h-8 w-8 text-red-500" })}
                </div>
                <h3 className="text-xl font-bold text-center">{contact.name}</h3>
                <p className="text-slate-500 text-center mb-3">{contact.description}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                    <Phone className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-bold">{contact.phone}</span>
                </div>
                {contact.hours && (
                    <p className="text-sm text-center text-slate-600">{contact.hours}</p>
                )}
            </div>
            <p className="text-sm text-center text-slate-600">{contact.additional}</p>
        </CardContent>
    </Card>
);

const GuideCard = ({ guide }: { guide: any }) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
            <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-2 mr-4">
                    {React.createElement(guide.icon, { className: "h-5 w-5 text-blue-500" })}
                </div>
                <div>
                    <h3 className="font-medium mb-2">{guide.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{guide.description}</p>
                    <Button size="sm" variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function ResourcesPage() {
    const [activeSection, setActiveSection] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Smooth scroll to section
    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    const emergencyContacts = [
        {
            icon: Phone,
            name: "National Suicide Prevention Lifeline",
            description: "24/7 crisis support for those in distress",
            phone: "988 or 1-800-273-8255",
            hours: "Available 24/7",
            additional: "Call or text for immediate crisis support"
        },
        {
            icon: MessageCircle,
            name: "Crisis Text Line",
            description: "Text-based crisis support",
            phone: "Text HOME to 741741",
            hours: "Available 24/7",
            additional: "Connect with a counselor within minutes"
        },
        {
            icon: PhoneCall,
            name: "SAMHSA Helpline",
            description: "Substance use disorder help",
            phone: "1-800-662-4357",
            hours: "Available 24/7",
            additional: "Treatment referral and information service"
        },
        {
            icon: Phone,
            name: "Our Crisis Hotline",
            description: "Immediate support from our team",
            phone: "(555) 123-4567",
            hours: "Available 24/7",
            additional: "Direct connection to our on-call counselors"
        }
    ];

    const digitalResources = [
        {
            icon: Book,
            badge: "Free",
            title: "Recovery Workbooks",
            description: "Self-guided recovery materials",
            content: "Access our collection of workbooks designed for different stages of recovery, covering topics like relapse prevention, managing triggers, and building healthy coping skills.",
            items: [
                "Early Recovery Skills Workbook",
                "Relapse Prevention Guide",
                "Family Communication Handbook",
                "Mindfulness for Recovery Practice Guide"
            ],
            buttonText: "Browse Workbooks"
        },
        {
            icon: FileText,
            badge: "Free Downloads",
            title: "Recovery Worksheets",
            description: "Printable tools for your journey",
            content: "Our worksheets provide structured exercises to help process emotions, track progress, identify triggers, and develop healthy habits throughout your recovery journey.",
            items: [
                "Daily Check-in Templates",
                "Trigger Identification Worksheets",
                "Goal Setting & Progress Tracking",
                "Boundary Setting Exercises"
            ],
            buttonText: "Download Worksheets"
        },
        {
            icon: BookOpen,
            badge: "Reading List",
            title: "Recommended Books",
            description: "Essential reading for recovery",
            content: "Explore our curated list of books that provide insight, inspiration, and practical guidance for individuals in recovery and their families.",
            items: [
                "Memoirs from those in long-term recovery",
                "Evidence-based recovery guides",
                "Books for family members and allies",
                "Mental health and personal development"
            ],
            buttonText: "View Reading List"
        },
        {
            icon: FilePlus,
            badge: "Interactive",
            title: "Recovery Plan Builder",
            description: "Create your personalized plan",
            content: "Our interactive tool helps you build a personalized recovery plan based on your specific needs, goals, and circumstances. Save and update your plan as you progress.",
            items: [
                "Identify your recovery priorities",
                "Set SMART goals for your journey",
                "Create action steps for each goal",
                "Track your progress over time"
            ],
            buttonText: "Start Your Plan"
        }
    ];

    const communityResources = [
        {
            icon: MapPin,
            title: "Local Support Groups",
            description: "In-person meetings in your area",
            content: "Find substance use disorder support groups near you, including 12-step programs, SMART Recovery, Refuge Recovery, and youth-specific support communities.",
            buttonText: "Find Local Groups"
        },
        {
            icon: Calendar,
            title: "Community Events",
            description: "Recovery-friendly activities",
            content: "Discover sober events, volunteer opportunities, and recovery community gatherings happening in your area. Connect with others while enjoying substance-free activities.",
            buttonText: "See Calendar"
        },
        {
            icon: Users,
            title: "Peer Support Matching",
            description: "Connect with a recovery peer",
            content: "Our peer matching program connects you with a trained peer recovery coach who has lived experience with addiction and recovery to provide support and guidance.",
            buttonText: "Request a Peer"
        },
        {
            icon: LinkIcon,
            title: "Treatment Provider Network",
            description: "Find specialized care options",
            content: "Access our network of vetted treatment providers who specialize in substance use disorders in adolescents and young adults, from detox to outpatient care.",
            buttonText: "Find Treatment"
        }
    ];

    const familyResources = [
        {
            icon: Book,
            title: "Family Education Program",
            description: "Understanding addiction and recovery",
            content: "Our comprehensive education series helps families understand the science of addiction, effective communication strategies, setting healthy boundaries, and how to support recovery.",
            items: [
                "Online learning modules on addiction science",
                "Family communication strategies",
                "Setting effective boundaries",
                "Self-care practices for family members"
            ],
            buttonText: "Start Learning"
        },
        {
            icon: Users,
            title: "Family Support Groups",
            description: "Connect with other families",
            content: "Join our virtual or in-person family support groups to share experiences, gain insights, and learn from others who understand the challenges of having a loved one in recovery.",
            buttonText: "Join a Group"
        },
        {
            icon: FileText,
            title: "Family Recovery Plan",
            description: "Guidance for the whole family",
            content: "This structured workbook helps families create their own recovery plan, addressing family dynamics, communication patterns, boundaries, and healing from past hurts.",
            buttonText: "Get the Workbook"
        },
        {
            icon: BookOpen,
            title: "Family Resource Library",
            description: "Articles, videos, and tools",
            content: "Access our extensive library of articles, videos, podcasts, and tools specifically designed to help families navigate the recovery journey alongside their loved one.",
            buttonText: "Browse Library"
        }
    ];

    const selfAssessmentResources = [
        {
            icon: FileSpreadsheet,
            title: "Substance Use Self-Assessment",
            description: "Understand your relationship with substances",
            content: "This confidential assessment helps you evaluate your substance use patterns, identify potential areas of concern, and determine if you might benefit from support services.",
            buttonText: "Take Assessment"
        },
        {
            icon: FileSpreadsheet,
            title: "Mental Health Screening",
            description: "Check in on your mental wellbeing",
            content: "Our mental health screening tool can help identify symptoms of common mental health conditions that often co-occur with substance use disorders.",
            buttonText: "Start Screening"
        },
        {
            icon: FileSpreadsheet,
            title: "Recovery Capital Assessment",
            description: "Identify your strengths and resources",
            content: "This tool helps you identify your personal, social, and community resources that can support your recovery journey and areas where you might need additional support.",
            buttonText: "Assess Your Resources"
        },
        {
            icon: FileSpreadsheet,
            title: "Family Impact Assessment",
            description: "For family members of those struggling",
            content: "This assessment helps family members understand how a loved one's substance use has affected their own wellbeing and identify areas where they might need support.",
            buttonText: "Family Assessment"
        }
    ];

    const downloadableGuides = [
        {
            icon: FileText,
            title: "Early Recovery Survival Guide",
            description: "Essential tools and strategies for the first 90 days"
        },
        {
            icon: FileText,
            title: "Supporting Your Teen in Recovery",
            description: "A guide for parents and caregivers"
        },
        {
            icon: FileText,
            title: "Navigating College in Recovery",
            description: "Balancing education and recovery needs"
        },
        {
            icon: FileText,
            title: "Recovery-Friendly Workplace Guide",
            description: "For employers and HR professionals"
        },
        {
            icon: FileText,
            title: "Mental Health and Addiction",
            description: "Understanding and managing co-occurring disorders"
        },
        {
            icon: FileText,
            title: "Building Healthy Relationships in Recovery",
            description: "Repairing and creating supportive connections"
        }
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
                  Tools for Your Journey
                </span>
                            </div>

                            {/* Main Heading with Animation Class */}
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                <span className="block">Recovery</span>
                                <span className="block text-blue-600">Resources</span>
                            </h1>

                            {/* Subheading with improved readability */}
                            <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed">
                                Access tools, information, and support to help you or a loved one navigate the journey to recovery and sustained wellbeing.
                            </p>

                            {/* Search Bar */}
                            <div className="relative w-full max-w-xl mb-10">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <Input
                                    placeholder="Search for resources..."
                                    className="pl-10 py-6 w-full rounded-lg"
                                    value={searchQuery}
                                    onChange={(e: any) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* CTA Section with Multiple Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <Button
                                    onClick={() => scrollToSection("emergency-resources")}
                                    className="px-8 py-4 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                                >
                                    Emergency Help
                                </Button>
                                <Button
                                    onClick={() => scrollToSection("digital-resources")}
                                    className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Browse Resources
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Hero>

            {/* Emergency Resources Section */}
            <section
                id="emergency-resources"
                className={`py-16 px-4 sm:px-6 lg:px-8 bg-red-50 ${
                    activeSection === "emergency-resources" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Emergency Resources
                            </h2>
                            <div className="w-20 h-1 bg-red-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                If you or someone you know is in crisis, please reach out for immediate help using one of these resources.
                            </p>
                        </div>
                        <Phone className="h-16 w-16 text-red-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {emergencyContacts.map((contact, idx) => (
                            <EmergencyContactCard key={idx} contact={contact} />
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-red-100 mt-6">
                        <div className="flex items-start">
                            <CheckCircle className="h-6 w-6 mr-3 text-red-500 flex-shrink-0 mt-1" />
                            <p className="text-slate-700">
                                <strong>Important:</strong> If you're experiencing a life-threatening emergency, please call 911 or go to your nearest emergency room. These resources are not a substitute for emergency medical services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital Resources Section */}
            <section
                id="digital-resources"
                className={`py-16 px-4 sm:px-6 lg:px-8 ${
                    activeSection === "digital-resources" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Digital Recovery Resources
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Access our collection of digital tools, worksheets, and guides to support your recovery journey at your own pace.
                            </p>
                        </div>
                        <FileText className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {digitalResources.map((resource, idx) => (
                            <ResourceCard key={idx} resource={resource} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Resources Section */}
            <section
                id="community-resources"
                className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
                    activeSection === "community-resources" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Community Resources
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Recovery thrives in community. Connect with local support groups, events, and services to build your recovery network.
                            </p>
                        </div>
                        <Users className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {communityResources.map((resource, idx) => (
                            <ResourceCard key={idx} resource={resource} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Family Resources Section */}
            <section
                id="family-resources"
                className={`py-16 px-4 sm:px-6 lg:px-8 ${
                    activeSection === "family-resources" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Family Resources
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Recovery affects the whole family. These resources are designed to support parents, siblings, and other loved ones of those in recovery.
                            </p>
                        </div>
                        <Users className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {familyResources.map((resource, idx) => (
                            <ResourceCard key={idx} resource={resource} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Self-Assessment Section */}
            <section
                id="self-assessment"
                className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
                    activeSection === "self-assessment" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Self-Assessment Tools
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                These confidential assessments can help you better understand your relationship with substances and identify areas where support might be beneficial.
                            </p>
                        </div>
                        <FileSpreadsheet className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {selfAssessmentResources.map((resource, idx) => (
                            <ResourceCard key={idx} resource={resource} />
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg mt-6">
                        <div className="flex items-start">
                            <CheckCircle className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-slate-700">
                                <strong>Note:</strong> These self-assessments are tools for self-reflection and education. They are not diagnostic instruments and do not replace professional evaluation. All assessments are confidential and your results are not stored.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloadable Guides Section */}
            <section
                id="guides"
                className={`py-16 px-4 sm:px-6 lg:px-8 ${
                    activeSection === "guides" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Downloadable Guides
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Our comprehensive guides provide in-depth information and practical strategies for specific recovery-related topics and situations.
                            </p>
                        </div>
                        <BookOpen className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {downloadableGuides.map((guide, idx) => (
                            <GuideCard key={idx} guide={guide} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className={`py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 ${
                    activeSection === "faq" ? "scroll-mt-16" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                        </div>
                        <MessageCircle className="h-16 w-16 text-blue-500 mt-4 md:mt-0" />
                    </div>

                    <div className="mb-12">
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    question: "How do I know which resources are right for me?",
                                    answer:
                                        "Start by considering where you are in your recovery journey. If you're just beginning, our Early Recovery Guide and Self-Assessment tools are good places to start. If you're supporting a loved one, the Family Resources section offers specialized materials. You can also reach out to our team for personalized recommendations based on your specific situation.",
                                },
                                {
                                    question: "Are these resources a substitute for treatment?",
                                    answer:
                                        "No, these resources are meant to complement professional treatment, not replace it. While they provide valuable information and support tools, individuals struggling with substance use disorders often benefit from professional evaluation and personalized treatment. Our resources can help you better understand addiction and recovery, learn coping strategies, and connect with support networks.",
                                },
                                {
                                    question: "How often are these resources updated?",
                                    answer:
                                        "We review and update our digital resources quarterly to ensure they reflect current best practices in addiction recovery. Our team of clinical professionals, recovery experts, and individuals with lived experience collaborate to keep our materials relevant, evidence-based, and helpful.",
                                },
                                {
                                    question: "Can I share these resources with others?",
                                    answer:
                                        "Yes! We encourage sharing these resources with anyone who might benefit from them. Most of our downloadable materials are free to distribute for non-commercial purposes. If you work with an organization that would like to use our materials on a larger scale, please contact us to discuss partnership opportunities.",
                                },
                                {
                                    question: "What if I need more personalized support?",
                                    answer:
                                        "If you find you need more individualized guidance, we offer several options. You can schedule a consultation with one of our recovery specialists, join a support group, or connect with a peer recovery coach. For those needing clinical services, we can help connect you with appropriate treatment providers in your area.",
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
                </div>
            </section>

            {/* Contact Section */}
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
                                className="text-white border-white hover:bg-blue-700"
                            >
                                Volunteer
                            </Button>
                            <Button
                                variant="outline"
                                className="text-white border-white hover:bg-blue-700"
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
