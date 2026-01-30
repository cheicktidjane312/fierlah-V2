"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Le loader reste affiché 2.5 secondes pour l'effet "Branding"
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }} // Disparition douce vers le haut
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950"
        >
          {/* CERCLE LUMINEUX D'ARRIÈRE PLAN */}
          <div className="absolute w-96 h-96 bg-cosmos-cyan/10 rounded-full blur-3xl animate-pulse" />

          {/* CONTENU */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            
            {/* LOGO TEXTE */}
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-syne font-black tracking-tighter text-white"
            >
              FIERLAH
              <span className="text-cosmos-cyan animate-pulse">.</span>
            </motion.h1>

            {/* ICÔNE DE CHARGEMENT FUTURISTE */}
            <div className="relative">
              {/* Anneau extérieur */}
              <div className="h-12 w-12 rounded-full border-2 border-white/10" />
              
              {/* Anneau qui tourne */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-2 border-cosmos-cyan"
              />
              
              {/* Point central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>

            {/* BARRE DE CHARGEMENT DÉCORATIVE */}
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-cosmos-cyan to-transparent"
              />
            </div>

            <p className="text-white/40 font-syne text-xs tracking-[0.3em] uppercase mt-2">
              Initialisation
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}