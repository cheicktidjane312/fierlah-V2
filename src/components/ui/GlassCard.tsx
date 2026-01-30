"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        // --- 1. BASE ---
        "relative overflow-hidden rounded-2xl backdrop-blur-xl p-6 transition-all duration-300",
        
        // --- 2. BORDURES & COULEURS (La demande spécifique) ---
        // Épaisseur doublée (2px)
        "border-2",
        
        // MODE JOUR (Light) : Bordure NOIRE foncée et fond légèrement gris pour détacher
        "border-neutral-800/60 bg-neutral-900/5", 
        
        // MODE NUIT (Dark) : Bordure BLANCHE lumineuse et fond sombre
        "dark:border-white/20 dark:bg-white/5 dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]",

        // --- 3. INTERACTION (Hover) ---
        // Au survol, on passe en Cyan Néon (Signature de la marque)
        hoverEffect && "hover:border-cosmos-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] dark:hover:border-cosmos-cyan",
        
        "animate-float", 
        className
      )}
    >
      {/* Petit reflet lumineux décoratif en haut à droite (Optionnel mais classe) */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cosmos-cyan/5 blur-3xl pointer-events-none" />
      
      {children}
    </motion.div>
  );
}