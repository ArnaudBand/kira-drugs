// src/app/contact/page.tsx
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
import { Button } from "@/components/ui/button";
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Users,
    Handshake,
    Calendar,
    HelpCircle,
    ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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

// Contact information
const contactInfo = [
    {
        icon: <Phone className="h-6 w-6 text-blue-500" />,
        title: "Call Us",
        details: [
            "(800) 123-4567 - Main Helpline",
            "(800) 987-6543 - Family Support"
        ],
        action: "Call Now",
        link: "tel:8001234567"
    },
    {
        icon: <Mail className="h-6 w-6 text-blue-500" />,
        title: "Email Us",
        details: [
            "support@youthrecoveryalliance.org",
            "referrals@youthrecoveryalliance.org"
        ],
        action: "Send Email",
        link: "mailto:support@youthrecoveryalliance.org"
    },
    {
        icon: <MapPin className="h-6 w-6 text-blue-500" />,
        title: "Visit Us",
        details: [
            "Main Office: 123 Recovery Way, Portland, OR 97201",
            "Hours: Mon-Fri 9am-5pm"
        ],
        action: "Get Directions",
        link: "https://maps.google.com"
    }
];

// Office locations
const officeLocations = [
    {
        city: "Portland",
        address: "123 Recovery Way, Portland, OR 97201",
        phone: "(503) 123-4567",
        email: "portland@youthrecoveryalliance.org"
    },
    {
        city: "Seattle",
        address: "456 Healing Street, Seattle, WA 98101",
        phone: "(206) 234-5678",
        email: "seattle@youthrecoveryalliance.org"
    },
    {
        city: "Denver",
        address: "789 Wellness Avenue, Denver, CO 80202",
        phone: "(303) 345-6789",
        email: "denver@youthrecoveryalliance.org"
    },
    {
        city: "Chicago",
        address: "101 Support Boulevard, Chicago, IL 60601",
        phone: "(312) 456-7890",
        email: "chicago@youthrecoveryalliance.org"
    }
];

// Inquiry types
const inquiryTypes = [
    {
        icon: <HelpCircle />,
        label: "Support & Services",
        description: "Get information about our recovery programs and services"
    },
    {
        icon: <Users />,
        label: "Family Support",
        description: "Resources and guidance for family members"
    },
    {
        icon: <Handshake />,
        label: "Partnerships",
        description: "Collaborate with us on recovery initiatives"
    },
    {
        icon: <Calendar />,
        label: "Events & Workshops",
        description: "Information about upcoming events and educational opportunities"
    }
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
        location: "",
        preferredContact: "email",
        subscribe: false
    });

    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleRadioChange = (value: string) => {
        setFormData(prev => ({ ...prev, preferredContact: value }));
    };
    
    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({ ...prev, subscribe: checked }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, this would send data to a server
        console.log("Form submitted:", formData);
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                inquiryType: "",
                message: "",
                location: "",
                preferredContact: "email",
                subscribe: false
            });
            setSubmitted(false);
        }, 5000);
    };

    return (
        <div className="relative min-h-screen">
            <WavyBackground />

            {/* Hero Section */}
            <Hero>
                <section className="flex items-center justify-center min-h-[40vh] overflow-hidden max-w-7xl mx-auto relative">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                We're Here For You
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                                Contact Us
                            </h1>
                            <p className="text-lg md:text-xl text-slate-950 max-w-2xl mx-auto mb-8">
                                Have questions or need support? Our team is ready to help you navigate the journey to recovery.
                            </p>
                        </motion.div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <Card className="h-full">
                                        <CardHeader className="flex flex-col items-center pb-2">
                                            <div className="p-3 bg-blue-50 rounded-full mb-4">
                                                {info.icon}
                                            </div>
                                            <CardTitle className="text-xl">{info.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-slate-700 mb-2">{detail}</p>
                                            ))}
                                            <Button 
                                                variant="ghost" 
                                                className="text-blue-600 mt-4 flex items-center"
                                                asChild
                                            >
                                                <a href={info.link}>
                                                    {info.action}
                                                    <ChevronRight className="h-4 w-4 ml-1" />
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </Hero>

            {/* Contact Form Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
                            <p className="text-lg text-slate-700 max-w-2xl">
                                Fill out the form below and one of our team members will contact you within 24 hours.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Inquiry Types */}
                        <div className="lg:col-span-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-6">How Can We Help?</h3>
                            <div className="space-y-4">
                                {inquiryTypes.map((type, index) => (
                                    <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                                        <CardContent className="flex items-start p-4">
                                            <div className="p-2 bg-blue-50 rounded-full mr-4">
                                                {type.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">{type.label}</h4>
                                                <p className="text-sm text-slate-600">{type.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="pt-6">
                                    {submitted ? (
                                        <div className="text-center py-8">
                                            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                                            <p className="text-slate-700">
                                                Your message has been received. A member of our team will contact you shortly.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input 
                                                        id="name" 
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your name" 
                                                        required 
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input 
                                                        id="email" 
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Your email" 
                                                        required 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input 
                                                        id="phone" 
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Your phone number" 
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="location">Nearest Location</Label>
                                                    <Select
                                                        onValueChange={(value: string) => handleSelectChange("location", value)}
                                                        value={formData.location}
                                                    >
                                                        <SelectTrigger id="location">
                                                            <SelectValue placeholder="Select a location" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {officeLocations.map((office, index) => (
                                                                <SelectItem key={index} value={office.city}>
                                                                    {office.city}
                                                                </SelectItem>
                                                            ))}
                                                            <SelectItem value="other">Other/Not Sure</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label htmlFor="inquiryType">Inquiry Type</Label>
                                                <Select
                                                    onValueChange={(value: string) => handleSelectChange("inquiryType", value)}
                                                    value={formData.inquiryType}
                                                >
                                                    <SelectTrigger id="inquiryType">
                                                        <SelectValue placeholder="Select your inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {inquiryTypes.map((type, index) => (
                                                            <SelectItem key={index} value={type.label}>
                                                                {type.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Your Message</Label>
                                                <Textarea 
                                                    id="message" 
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="How can we help you?" 
                                                    rows={4} 
                                                    required 
                                                />
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label>Preferred Contact Method</Label>
                                                <RadioGroup 
                                                    value={formData.preferredContact}
                                                    onValueChange={handleRadioChange}
                                                    className="flex space-x-4"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="email" id="email-contact" />
                                                        <Label htmlFor="email-contact" className="cursor-pointer">Email</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="phone" id="phone-contact" />
                                                        <Label htmlFor="phone-contact" className="cursor-pointer">Phone</Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            
                                            <div className="flex items-center space-x-2 pt-2">
                                                <Checkbox 
                                                    id="subscribe" 
                                                    checked={formData.subscribe}
                                                    onCheckedChange={handleCheckboxChange}
                                                />
                                                <Label htmlFor="subscribe" className="text-sm cursor-pointer">
                                                    Subscribe to our newsletter for updates on events and resources
                                                </Label>
                                            </div>
                                            
                                            <div className="pt-4">
                                                <Button type="submit" className="w-full">
                                                    Submit
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Locations</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                            With recovery centers across the country, help is never far away.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {officeLocations.map((office, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="h-40 bg-slate-200 flex items-center justify-center">
                                    <img 
                                        src={`/images/${office.city.toLowerCase()}-office.jpeg`} 
                                        alt={`${office.city} Office`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/images/placeholder-office.jpeg";
                                        }}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                                        {office.city}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-slate-700 text-sm">{office.address}</p>
                                    <p className="text-slate-700 text-sm">{office.phone}</p>
                                    <p className="text-blue-600 text-sm">{office.email}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How do I know if your programs are right for me or my loved one?",
                                answer: "Our programs are designed to support young people ages 12-25 who are struggling with substance use disorders. We offer a free initial consultation to assess individual needs and recommend the most appropriate level of care."
                            },
                            {
                                question: "Do you accept insurance?",
                                answer: "Yes, we accept most major insurance plans. Our financial counselors can verify your benefits and explain any out-of-pocket costs before you commit to a program."
                            },
                            {
                                question: "What should I expect during the first appointment?",
                                answer: "The first appointment typically involves an assessment of current substance use, mental health, family dynamics, and recovery goals. This helps us develop a personalized treatment plan."
                            },
                            {
                                question: "How can family members be involved in the recovery process?",
                                answer: "We strongly encourage family involvement through our dedicated family program. This includes family therapy sessions, education workshops, and support groups designed to heal relationships and build a supportive recovery environment."
                            },
                            {
                                question: "What makes your approach to youth recovery different?",
                                answer: "Our approach is specifically designed for young people, combining evidence-based treatment with peer support, educational and vocational assistance, and life skills development. We focus on the whole person, not just the addiction."
                            }
                        ].map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start">
                                        <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                                        {faq.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start">
                                        <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">A</span>
                                        <p className="text-slate-700">{faq.answer}</p>
                                    </div>
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
                            Ready to Start the Journey?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Recovery is possible. Take the first step by reaching out today and let us support you or your loved one on the path to healing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50">
                                Call Now: (800) 123-4567
                            </Button>
                            <Button
                                variant="outline"
                                className="hover:text-white text-black border-white hover:bg-blue-700"
                            >
                                Schedule a Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}