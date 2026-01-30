import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Home() {
  return (
    <div className="relative z-10">
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="mb-6 p-2 rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-300 font-orbitron tracking-widest">AGENCE MARKETING DIGITAL 360°</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 tracking-tight">
          VOTRE TRANSFORMATION <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-cyan to-cosmos-purple animate-pulse">
            DIGITALE COMMENCE ICI
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-rajdhani text-gray-300 max-w-3xl mx-auto mb-10">
          Sites Web, Stratégie & Publicité. <br />
          <span className="text-white font-bold">Payez uniquement pour des résultats.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-cosmos-cyan text-black font-orbitron font-bold hover:bg-white transition-colors flex items-center gap-2">
            LANCER MON PROJET (0 FCFA D'ACOMPTE) <ArrowRight size={20} />
          </Link>
          <Link href="/portfolio" className="px-8 py-4 rounded-full border border-white/20 text-white font-orbitron font-bold hover:bg-white/10 transition-colors">
            VOIR NOS RÉALISATIONS
          </Link>
        </div>
      </section>

      {/* SECTION SERVICES RÉSUMÉ */}
      <section className="py-20 px-6 bg-black/50">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="p-8 hover:bg-white/5">
                 <Zap className="text-cosmos-cyan mb-4" size={40} />
                 <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Création Web</h3>
                 <p className="text-gray-400 font-rajdhani">Des plateformes intuitives pour transformer chaque visiteur en client.</p>
              </GlassCard>
              <GlassCard className="p-8 hover:bg-white/5">
                 <Zap className="text-yellow-400 mb-4" size={40} />
                 <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Stratégie</h3>
                 <p className="text-gray-400 font-rajdhani">Une feuille de route claire pour positionner votre marque en leader.</p>
              </GlassCard>
              <GlassCard className="p-8 hover:bg-white/5">
                 <Zap className="text-cosmos-purple mb-4" size={40} />
                 <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Publicité Ads</h3>
                 <p className="text-gray-400 font-rajdhani">Campagnes ciblées Meta & Google pour un ROI optimal.</p>
              </GlassCard>
           </div>
        </div>
      </section>

    </div>
  );
}