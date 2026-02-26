// components/ProgramsOverview.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProgramsOverview() {
  const [activeTab, setActiveTab] = useState<keyof typeof programs>('outpatient');

  const programs = {
    outpatient: {
      title: "Sensibilisation et prévention",
      description: "Nos programmes de sensibilisation et de prévention sont conçus pour éduquer les jeunes sur les risques liés à la consommation de drogues et pour promouvoir des choix de vie sains.",
      features: [
        "Informer et éduquer les jeunes sur les risques et les conséquences de la consommation de drogues.",
        "Organiser des campagnes interactives et des activités culturelles et sportives pour promouvoir des modes de vie sains.",
        "Mettre en avant l’autonomisation des jeunes, l’entrepreneuriat et le développement personnel comme facteurs de protection contre la consommation de drogues.",
        "Renforcer les compétences en prise de décision et en leadership pour aider les jeunes à faire des choix positifs.",
      ],
      image: "/images/outpatient-program.jpeg"
    },
    residential: {
      title: "Accompagnement et réduction des risques",
      description: "Nos programmes résidentiels offrent un environnement thérapeutique structuré pour les jeunes qui ont besoin d’un soutien intensif pour surmonter leur addiction et reconstruire leur vie.",
      features: [
        "Offrir un soutien psychosocial et des services adaptés aux jeunes en situation de consommation.",
        "Faciliter l’accès à des dispositifs de prévention.",
        "Former des jeunes ambassadeurs et des pairs éducateurs pour une sensibilisation efficace dans les communautés."
      ],
      image: "/images/residential-program.jpeg"
    },
    aftercare: {
      title: "Réinsertion sociale et autonomisation",
      description: "Nos programmes de suivi et de réinsertion sociale aident les jeunes à maintenir leur sobriété à long terme et à reconstruire leur vie après le traitement initial.",
      features: [
        "Développer des programmes de formation professionnelle et d’éducation pour favoriser l’intégration socio-économique des jeunes vulnérables.",
        "Accompagner les jeunes vers l’entrepreneuriat et l’innovation à travers des initiatives de microfinancement et de mentorat.",
        "Encourager l’engagement citoyen et la participation aux décisions locales pour donner aux jeunes un rôle actif dans leur communauté.",
      ],
      image: "/images/aftercare-program.jpeg"
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">Nos Programmes</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Support Complet pour Chaque Phase du Processus de Récupération
          </h3>
          <p className="text-gray-600 text-lg">
            Nous offrons une gamme de programmes conçus pour répondre aux jeunes à chaque étape de leur parcours de récupération.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof programs)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${activeTab === key
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {programs[key as keyof typeof programs].title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={programs[activeTab].image}
                alt={programs[activeTab].title}
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-transparent flex items-end lg:hidden">
                <h3 className="text-white text-2xl font-bold p-6">
                  {programs[activeTab].title}
                </h3>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hidden lg:block">
                {programs[activeTab].title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                {programs[activeTab].description}
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques du programme :</h4>
              <ul className="space-y-3 mb-8">
                {programs[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href={`/programs/${activeTab}`} className="btn-secondary">
                  En savoir plus
                </Link>
                <Link href="/contact" className="btn-primary">
                  Commencer votre parcours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}