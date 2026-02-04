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
      borderColor: "border-cosmos-cyan/30",
      description: "Des plateformes intuitives et esthétiques pour transformer chaque visiteur en client fidèle.",
      features: [
        "Sites Vitrines & E-commerce",
        "Paiements Mobile Money intégrés",
        "Optimisation SEO & Performance",
        "Design Futuriste & Mobile First"
      ],
      price: "Sur devis",
    },
    {
      id: "strategy",
      title: "Stratégie Marketing",
      icon: LineChart,
      color: "text-yellow-500", // Un peu plus foncé pour être lisible sur blanc
      borderColor: "border-yellow-500/30",
      description: "Une feuille de route claire pour positionner votre marque en leader sur son marché.",
      features: [
        "Audit & Personas Clients",
        "Plan d'action sur 3 mois",
        "Positionnement de marque",
        "Copywriting & Messages Clés"
      ],
      price: "Sur devis",
    },
    {
      id: "ads",
      title: "Publicité (Ads)",
      icon: Megaphone,
      color: "text-cosmos-purple",
      borderColor: "border-cosmos-purple/30",
      description: "Des campagnes ciblées sur Meta & Google pour un ROI optimal et une croissance mesurable.",
      features: [
        "Gestion Meta Ads (Facebook/Instagram)",
        "Campagnes Google Ads (Search)",
        "Ciblage Précis & Retargeting",
        "Reporting Mensuel Transparent"
      ],
      price: "Gestion : Sur devis",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* En-tête */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-foreground">
            NOS <span className="text-cosmos-cyan">SOLUTIONS</span>
          </h1>
          <p className="text-foreground/70 font-inter text-xl max-w-2xl mx-auto">
            Nous ne nous contentons pas de suivre les tendances. Nous créons les standards de demain pour votre entreprise.
          </p>
        </div>

        {/* Grille des Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <GlassCard key={service.id} className="flex flex-col h-full hover:border-foreground/20">
              
              {/* Icône avec fond adapté */}
              <div className={`mb-6 p-4 rounded-full bg-foreground/5 w-fit border border-foreground/10 ${service.color}`}>
                <service.icon size={40} />
              </div>

              {/* Titre & Description */}
              <h3 className="text-2xl font-syne font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 font-inter mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              {/* Liste des points forts */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 font-inter">
                    <CheckCircle2 size={16} className={`mt-1 flex-shrink-0 ${service.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Prix & Action */}
              <div className="mt-auto pt-6 border-t border-foreground/10">
                <p className="text-sm text-foreground/50 mb-1 font-inter uppercase tracking-wider">Investissement</p>
                <p className={`text-xl font-bold font-syne mb-4 ${service.color}`}>
                  {service.price}
                </p>
                <Link 
                  href="/contact" 
                  className="w-full group flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground py-3 rounded-lg font-syne text-sm font-bold transition-all border border-foreground/10 hover:border-foreground/30"
                >
                  COMMANDER
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* SECTION PROCESSUS */}
        <div className="mt-24">
          <h2 className="text-3xl font-syne font-bold text-foreground text-center mb-12">
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
              <div key={idx} className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl border border-foreground/10 hover:border-cosmos-cyan/30 transition-colors">
                <span className="text-4xl font-bold text-foreground/10 font-syne">0{idx + 1}</span>
                <p className="text-foreground font-inter font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}