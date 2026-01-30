import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl space-y-20">
        
        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
            L'EXCELLENCE COMME <span className="text-cosmos-cyan">STANDARD.</span>
          </h1>
          <p className="text-xl md:text-2xl font-rajdhani text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Chez FIERLAH, nous croyons qu'une présence en ligne réussie est l'équilibre parfait entre une image de marque forte et une exécution technique irréprochable."
          </p>
        </div>

        {/* MANIFESTE & IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-rajdhani text-lg text-gray-300 text-justify">
             <p>Bienvenue chez FIERLAH. Dans un écosystème numérique en constante évolution, la réussite ne dépend plus seulement de la présence, mais de la pertinence.</p>
             <p>Nous ne nous contentons pas de suivre les tendances ; <span className="text-white font-bold">nous créons les standards de demain pour votre entreprise.</span></p>
             <p>Notre mission est simple : devenir le moteur de votre transformation digitale en convertissant des idées complexes en solutions fluides, esthétiques et surtout rentables.</p>
          </div>
          
          {/* PHOTO FONDATEUR */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-cosmos-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
             <Image 
               src="/assets/images/founder.jpeg" 
               alt="Fondateur FIERLAH" 
               fill 
               className="object-cover"
             />
          </div>
        </div>

        {/* CITATION */}
        <GlassCard className="p-8 md:p-12 border-l-4 border-l-cosmos-cyan bg-white/5">
          <blockquote className="space-y-6">
            <p className="text-xl md:text-2xl font-rajdhani italic text-gray-200">
              "Le nom FIERLAH n'est pas seulement une marque, c'est une promesse : celle de délivrer un travail dont nous, et surtout nos clients, pouvons être fiers. La standardisation de nos processus est le gage de notre exigence."
            </p>
            <footer className="pt-4 border-t border-white/10">
              <p className="text-cosmos-cyan font-orbitron font-bold text-lg">
                TRAORÉ OUESSOGO CHEICK M. T.
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Président & Fondateur
              </p>
            </footer>
          </blockquote>
        </GlassCard>

        {/* BOUTON CTA (Celui qui manquait) */}
        <div className="text-center pt-8">
          <Link href="/contact" className="inline-flex items-center gap-2 border-b-2 border-cosmos-cyan text-cosmos-cyan font-orbitron text-xl hover:text-white hover:border-white transition-all pb-1">
            VOUS AVEZ UNE IDÉE ? DISCUTONS-EN <ArrowRight size={24} />
          </Link>
        </div>

      </div>
    </div>
  );
}