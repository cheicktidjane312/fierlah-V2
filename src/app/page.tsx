import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { LayoutGrid, TrendingUp, Megaphone } from "lucide-react";
export default function Home() {
  return (
    <div className="relative z-10">

      {/* HERO SECTION ROI */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-10">
        
        {/* Badge discret */}
        <div className="mb-8 py-1 px-3 rounded-full bg-foreground/5 border border-foreground/10 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cosmos-cyan animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/70">
            Agence de Croissance Digitale
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Ne cherchez plus vos clients. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-cyan to-cosmos-purple">
            Nous vous les apportons.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Transformez votre présence en ligne en système de vente prévisible. 
          Web, Ads et Stratégie orientés 100% résultats.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/contact" className="btn-premium btn-primary">
            Obtenir mon plan d'action
          </Link>
          <Link href="/portfolio" className="btn-premium btn-outline">
            Voir nos résultats
          </Link>
        </div>
      </section>

      {/* SECTION SERVICES (Version Corrigée & Complète) */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        
        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            NOS <span className="text-cosmos-cyan">SOLUTIONS</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
             Nous ne nous contentons pas de suivre les tendances. Nous créons les standards de demain pour votre entreprise.
          </p>
        </div>

        {/* GRILLE DES 3 SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* 1. CRÉATION WEB */}
           <GlassCard className="flex flex-col items-start gap-5 group">
              <div className="p-3 rounded-xl bg-cosmos-cyan/10 text-cosmos-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                 <LayoutGrid size={32} />
              </div>
              
              <h3 className="text-2xl font-bold font-syne text-foreground group-hover:text-cosmos-cyan transition-colors">
                 Création Web & App
              </h3>
              
              <p className="text-base text-foreground/70 leading-relaxed font-inter">
                 Des plateformes intuitives et esthétiques pour transformer chaque visiteur en client fidèle. Sites vitrines & E-commerce ultra-rapides.
              </p>
           </GlassCard>

           {/* 2. STRATÉGIE MARKETING */}
           <GlassCard className="flex flex-col items-start gap-5 group">
              <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                 <TrendingUp size={32} />
              </div>
              
              <h3 className="text-2xl font-bold font-syne text-foreground group-hover:text-yellow-500 transition-colors">
                 Stratégie Marketing
              </h3>
              
              <p className="text-base text-foreground/70 leading-relaxed font-inter">
                 Une feuille de route claire pour positionner votre marque en leader. Audit, Personas et Tunnels de vente optimisés.
              </p>
           </GlassCard>

           {/* 3. PUBLICITÉ (ADS) */}
           <GlassCard className="flex flex-col items-start gap-5 group">
              <div className="p-3 rounded-xl bg-cosmos-purple/10 text-cosmos-purple mb-2 group-hover:scale-110 transition-transform duration-300">
                 <Megaphone size={32} />
              </div>
              
              <h3 className="text-2xl font-bold font-syne text-foreground group-hover:text-cosmos-purple transition-colors">
                 Publicité (Ads)
              </h3>
              
              <p className="text-base text-foreground/70 leading-relaxed font-inter">
                 Des campagnes ciblées sur Meta & Google pour un ROI optimal. Arrêtez de dépenser, commencez à investir.
              </p>
           </GlassCard>

        </div>
      </section>

    </div>
  );
}