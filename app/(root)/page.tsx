"use client";


// Component imports
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import ProgramsOverview from "@/components/ProgramsOverview";
// import SuccessStories from "../../components/SuccessStories";
import StatsCounter from "../../components/StatsCounter";
// import ResourcesSection from "../../components/ResourcesSection";
import ContactCTA from "../../components/ContactCTA";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main>
        <Hero>
          {/* Abstract Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          {/* Content */}
          <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="md:max-w-3xl lg:max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Un Nouveau <span className="text-blue-300">Départ</span> Est
                Possible
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                Accompagner les jeunes sur le chemin du rétablissement par la compassion, l’entraide communautaire et des programmes basés sur des preuves.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button onClick={() => router.push("/get-help")} className="flex space-x-0.5 bg-blue-300 text-black/60 hover:text-white">
                  <span>Find Support</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
                <Button onClick={() => router.push("/programs")} className="bg-white/85 text-black/60 hover:text-white">
                  <span>Nos Programmes</span>
                </Button>
              </div>

              <div className="mt-12 md:mt-16 flex items-center">
                <p className="text-blue-100 mr-6">
                  Contacte:
                </p>
                <a
                  href="tel:25762682648"
                  className="text-white text-xl font-bold hover:text-blue-300 transition-colors"
                >
                  (257 62682648)
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-blue-100 text-sm mb-2">
              Scroll to learn more
            </span>
            <div className="w-6 h-10 border-2 border-blue-100 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-blue-100 rounded-full animate-bounce"></div>
            </div>
          </div>
        </Hero>
        <MissionStatement />
        <StatsCounter />
        <ProgramsOverview />
        {/* <SuccessStories />
        <ResourcesSection /> */}
        <ContactCTA />
      </main>
    </div>
  );
}
