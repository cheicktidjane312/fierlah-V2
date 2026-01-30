import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Globe, LineChart, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "web",
      title: "Création Web & App",
      icon: Globe,
      color: "text-cosmos-cyan",
      description: "Des plateformes intuitives et esthétiques pour transformer chaque visiteur en client fidèle.",
      features: [
        "Sites Vitrines & E-commerce",
        "Paiements Mobile Money intégrés",
        "Optimisation SEO & Performance",
        "Design Futuriste & Mobile First"
      ],
      price: "À partir de 30 000 FCFA",
    },
    {
      id: "strategy",
      title: "Stratégie Marketing",
      icon: LineChart,
      color: "text-yellow-400",
      description: "Une feuille de route claire pour positionner votre marque en leader sur son marché.",
      features: [
        "Audit & Personas Clients",
        "Plan d'action sur 3 mois",
        "Positionnement de marque",
        "Copywriting & Messages Clés"
      ],
      price: "Pack unique : 25 000 FCFA",
    },
    {
      id: "ads",
      title: "Publicité (Ads)",
      icon: Megaphone,
      color: "text-cosmos-purple",
      description: "Des campagnes ciblées sur Meta & Google pour un ROI optimal et une croissance mesurable.",
      features: [
        "Gestion Meta Ads (Facebook/Instagram)",
        "Campagnes Google Ads (Search)",
        "Ciblage Précis & Retargeting",
        "Reporting Mensuel Transparent"
      ],
      price: "Gestion : 15 000 FCFA / mois",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* En-tête */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
            NOS <span className="text-cosmos-cyan">SOLUTIONS</span>
          </h1>
          <p className="text-gray-300 font-rajdhani text-xl max-w-2xl mx-auto">
            Nous ne nous contentons pas de suivre les tendances. Nous créons les standards de demain pour votre entreprise.
          </p>
        </div>

        {/* Grille des Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <GlassCard key={service.id} className="flex flex-col h-full">
              {/* Icône */}
              <div className={`mb-6 p-4 rounded-full bg-white/5 w-fit ${service.color}`}>
                <service.icon size={40} />
              </div>

              {/* Titre & Description */}
              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 font-rajdhani mb-6 flex-grow">
                {service.description}
              </p>

              {/* Liste des points forts */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className={`mt-1 flex-shrink-0 ${service.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Prix & Action */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">Investissement</p>
                <p className={`text-xl font-bold font-orbitron mb-4 ${service.color}`}>
                  {service.price}
                </p>
                <Link 
                  href="/contact" 
                  className="w-full group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-orbitron text-sm transition-all border border-white/5 hover:border-white/30"
                >
                  COMMANDER
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
      {/* SECTION PROCESSUS */}
<div className="mt-24">
  <h2 className="text-3xl font-orbitron font-bold text-white text-center mb-12">
    NOTRE PROCESSUS <span className="text-cosmos-cyan">D'EXCELLENCE</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "1. Choix du Pack (0 FCFA d'acompte)",
      "2. Fiche de Briefing (Vos besoins)",
      "3. Conception Créative (Développement)",
      "4. Test & Validation (Lien Privé)",
      "5. Paiement & Mise en Ligne",
      "6. Stratégie & Croissance (Bonus)"
    ].map((step, idx) => (
      <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
        <span className="text-4xl font-bold text-white/10 font-orbitron">0{idx + 1}</span>
        <p className="text-white font-rajdhani font-bold">{step}</p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}