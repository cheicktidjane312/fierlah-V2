"use client";

import Image from "next/image"; // N'oubliez pas l'import en haut
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, Zap, Globe, LayoutGrid, Lock, BookOpen, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: LayoutGrid },
  { name: "Réalisations", href: "/portfolio", icon: Globe },
  { name: "Blog", href: "/blog", icon: BookOpen }, // <--- AJOUT ICI (Importez BookOpen de lucide-react)
  { name: "À Propos", href: "/a-propos", icon: Zap },
  { name: "Contact", href: "/contact", icon: Rocket },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Détection du scroll pour l'effet de verre
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="relative z-50 block">
           {/* Mobile: w-32 (128px), PC: w-60 (240px) */}
           <div className="relative w-32 md:w-60 h-auto aspect-[3/1]">
             <Image 
               src="/assets/images/logo.jpeg" 
               alt="FIERLAH Logo" 
               fill 
               className="object-contain object-left" 
               priority
             />
           </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-300 hover:text-cosmos-cyan transition-colors font-rajdhani font-semibold"
            >
              <link.icon size={16} />
              {link.name}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-white/20 mx-4"></div> {/* Séparateur */}

          {/* BOUTON ADMIN (LOGIN) */}
          <Link
            href="/studio"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cosmos-cyan/10 border border-cosmos-cyan/30 text-cosmos-cyan hover:bg-cosmos-cyan hover:text-black transition-all font-orbitron text-xs font-bold"
          >
            <Lock size={14} />
            ADMIN
          </Link>
        </div>

        {/* BOUTON MOBILE */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* MENU MOBILE (ANIMATION) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-orbitron text-white hover:text-cosmos-cyan transition-colors flex items-center gap-3"
                >
                  <link.icon size={24} />
                  {link.name}
                </Link>
              ))}

              <div className="w-16 h-px bg-white/20 my-4"></div>

              {/* LIEN ADMIN MOBILE */}
              <Link
                href="/studio"
                onClick={() => setIsOpen(false)}
                className="text-xl font-orbitron text-cosmos-cyan border border-cosmos-cyan px-6 py-2 rounded-full flex items-center gap-2"
              >
                <Lock size={18} />
                ESPACE ADMIN
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}