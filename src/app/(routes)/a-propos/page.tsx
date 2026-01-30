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
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-foreground">
            L'EXCELLENCE COMME <span className="text-cosmos-cyan">STANDARD.</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            "Chez FIERLAH, nous croyons qu'une présence en ligne réussie est l'équilibre parfait entre une image de marque forte et une exécution technique irréprochable."
          </p>
        </div>

        {/* CONTENU PRINCIPAL (INTRO + BIO) & IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE TEXTE */}
          <div className="space-y-10 font-inter text-lg text-foreground/70 text-justify">
            
            {/* 1. TEXTE D'INTRODUCTION */}
            <div className="space-y-4">
              <h2 className="text-2xl font-syne font-bold text-foreground">
                L'Intersection de la Donnée et du Design.
              </h2>
              <p>
                Bienvenue chez FIERLAH. Nous sommes nés d'un constat simple : en Afrique de l'Ouest, trop d'agences se concentrent uniquement sur l'esthétique, en oubliant la rentabilité.
              </p>
              <p>
                <span className="text-foreground font-bold">Notre approche est différente.</span> Nous ne voyons pas le digital comme de la décoration, mais comme une science exacte.
              </p>
              <p>
                Alliant la rigueur de la modélisation statistique à la puissance des technologies web de pointe (Next.js, IA), nous construisons des écosystèmes numériques conçus pour une seule chose : <span className="text-foreground font-bold">la performance.</span>
              </p>
              <p>
                Chez FIERLAH, nous ne "bricolons" pas. Nous appliquons des processus standardisés et exigeants pour transformer votre présence en ligne en un actif financier rentable.
              </p>
            </div>

            {/* SÉPARATEUR VISUEL */}
            <div className="w-20 h-1 bg-cosmos-cyan/30 rounded-full" />

            {/* 2. BIO DU FONDATEUR */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-syne font-bold text-foreground uppercase tracking-wide">
                  TRAORÉ OUESSOGO CHEICK M. T.
                </h3>
                <p className="text-sm text-cosmos-cyan font-bold tracking-widest uppercase mb-2">
                  FONDATEUR & STRATÈGE DIGITAL
                </p>
              </div>
              
              <p className="italic text-foreground/90 font-medium">
                "Le code est important, mais le business est vital."
              </p>
              
              <p>
                Mon parcours est atypique pour un développeur, et c'est ce qui fait la force de FIERLAH. Formé à la <span className="text-foreground font-bold">Modélisation Statistique et Informatique Économique</span>, et fort d'une expérience concrète en gestion comptable et stratégie commerciale, je ne parle pas seulement le langage des serveurs : je parle le langage de votre bilan financier.
              </p>
              <p>
                En tant qu'ancien co-fondateur d'une entreprise de divertissement à Abidjan (Stockam-Gaming), je connais les défis quotidiens d'un entrepreneur : la gestion de trésorerie, la nécessité de vendre et l'obsession du retour sur investissement.
              </p>
              <p>
                J'ai fondé FIERLAH pour offrir aux entrepreneurs ce que j'aurais voulu avoir : un partenaire technique qui comprend les enjeux économiques et qui s'engage sur les résultats, pas seulement sur les promesses.
              </p>
            </div>

          </div>
          
          {/* PHOTO FONDATEUR (Ajustée pour suivre la longueur du texte) */}
          <div className="sticky top-24">
             <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-cosmos-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <Image 
                  src="/assets/images/founder.jpeg" 
                  alt="Fondateur FIERLAH" 
                  fill 
                  className="object-cover"
                />
             </div>
             {/* Petit badge expérience */}
             <div className="absolute -bottom-6 -right-6 bg-background border border-foreground/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="text-4xl font-syne font-bold text-cosmos-cyan">IT</div>
                <div className="text-xs font-bold uppercase text-foreground/60 leading-tight">
                  Economic<br/>Intelligence
                </div>
             </div>
          </div>
        </div>

        {/* 3. CITATION "VISION" */}
        <GlassCard className="p-8 md:p-12 border-l-4 border-l-cosmos-cyan bg-foreground/5">
          <blockquote className="space-y-6">
            <p className="text-xl md:text-2xl font-syne italic text-foreground/80 leading-relaxed">
              "Le nom FIERLAH est une promesse solennelle : celle de livrer un travail dont nos clients seront fiers. Mais la fierté ne suffit pas. Nous y ajoutons l'exigence de la standardisation. Dans un monde chaotique, nos processus millimétrés sont votre meilleure garantie de sécurité et de succès."
            </p>
            <footer className="pt-4 border-t border-foreground/10">
              <p className="text-cosmos-cyan font-syne font-bold text-lg">
                TRAORÉ OUESSOGO CHEICK M. T.
              </p>
              <p className="text-sm text-foreground/50 uppercase tracking-wider font-inter">
                Président Fondateur
              </p>
            </footer>
          </blockquote>
        </GlassCard>

        {/* SECTION CLOSING PREMIUM */}
        <div className="mt-20 mb-8">
          <GlassCard className="relative overflow-hidden text-center py-16 px-6 border border-cosmos-cyan/20 group">
            
            {/* Effet d'arrière-plan animé */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cosmos-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-syne font-bold text-foreground mb-6">
              VOUS AVEZ UNE <span className="text-cosmos-cyan">VISION ?</span>
            </h2>
            
            <p className="text-foreground/70 font-inter text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Ne la laissez pas dormir dans un tiroir. Discutons de votre stratégie et voyons comment la technologie peut la propulser.
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