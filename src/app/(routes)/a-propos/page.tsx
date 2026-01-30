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
          {/* Correction : text-foreground */}
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-foreground">
            L'EXCELLENCE COMME <span className="text-cosmos-cyan">STANDARD.</span>
          </h1>
          {/* Correction : text-foreground/70 */}
          <p className="text-xl md:text-2xl font-inter text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            "Chez FIERLAH, nous croyons qu'une présence en ligne réussie est l'équilibre parfait entre une image de marque forte et une exécution technique irréprochable."
          </p>
        </div>

        {/* MANIFESTE & IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 font-inter text-lg text-foreground/70 text-justify">
             <p>Bienvenue chez FIERLAH. Dans un écosystème numérique en constante évolution, la réussite ne dépend plus seulement de la présence, mais de la pertinence.</p>
             <p>Nous ne nous contentons pas de suivre les tendances ; <span className="text-foreground font-bold">nous créons les standards de demain pour votre entreprise.</span></p>
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
        {/* Correction : bg-foreground/5 (Gris léger) au lieu de bg-white/5 */}
        <GlassCard className="p-8 md:p-12 border-l-4 border-l-cosmos-cyan bg-foreground/5">
          <blockquote className="space-y-6">
            {/* Correction : text-foreground/80 */}
            <p className="text-xl md:text-2xl font-syne italic text-foreground/80">
              "Le nom FIERLAH n'est pas seulement une marque, c'est une promesse : celle de délivrer un travail dont nous, et surtout nos clients, pouvons être fiers. La standardisation de nos processus est le gage de notre exigence."
            </p>
            <footer className="pt-4 border-t border-foreground/10">
              <p className="text-cosmos-cyan font-syne font-bold text-lg">
                TRAORÉ OUESSOGO CHEICK M. T.
              </p>
              <p className="text-sm text-foreground/50 uppercase tracking-wider font-inter">
                Président & Fondateur
              </p>
            </footer>
          </blockquote>
        </GlassCard>

        {/* SECTION CLOSING PREMIUM */}
        <div className="mt-20 mb-8">
          <GlassCard className="relative overflow-hidden text-center py-16 px-6 border border-cosmos-cyan/20 group">
            
            {/* Effet d'arrière-plan animé */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cosmos-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Correction : text-foreground */}
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-foreground mb-6">
              VOUS AVEZ UNE <span className="text-cosmos-cyan">IDÉE ?</span>
            </h2>
            
            {/* Correction : text-foreground/70 */}
            <p className="text-foreground/70 font-inter text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Ne la laissez pas dormir dans un tiroir. Discutons de votre vision et voyons comment la technologie peut la propulser.
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cosmos-cyan to-cosmos-purple text-white font-syne font-bold px-10 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(112,0,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              DISCUTONS-EN MAINTENANT <ArrowRight size={22} />
            </Link>

          </GlassCard>
        </div>

      </div>
    </div>
  );
}