"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Rocket, LayoutGrid, Globe, BookOpen, Zap, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle"; // Import du toggle

const navLinks = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: LayoutGrid },
  { name: "Réalisations", href: "/portfolio", icon: Globe },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "À Propos", href: "/a-propos", icon: Zap },
  { name: "Contact", href: "/contact", icon: Rocket },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50 block">
           <div className="relative w-28 md:w-40 h-10">
             {/* Note: Assurez-vous d'avoir un logo compatible Fond Noir ET Fond Blanc, ou utilisez un filtre CSS invert en mode jour */}
             <div className="relative w-28 md:w-40 h-10">
             {/* CORRECTION : J'ai retiré 'dark:invert-0 invert'. Le logo reste tel quel. */}
             <Image 
               src="/assets/images/logo.jpeg" 
               alt="FIERLAH Logo" 
               fill 
               className="object-contain object-left" 
               priority
             />
           </div>
           </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium font-syne hover:text-cosmos-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-foreground/10 mx-2" />
          <ThemeToggle />
          <Link href="/contact" className="btn-premium btn-primary text-xs py-2 px-5">
            Démarrer
          </Link>
        </div>

        {/* MOBILE TOGGLES */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="z-50 p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER (TIROIR LATÉRAL) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] bg-background border-l border-foreground/10 z-50 p-8 shadow-2xl flex flex-col justify-center"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-xl font-syne font-bold hover:text-cosmos-cyan transition-colors"
                  >
                    <link.icon size={20} className="text-foreground/50" />
                    {link.name}
                  </Link>
                ))}
                <hr className="border-foreground/10 my-4" />
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-premium btn-primary w-full"
                >
                  Lancer mon projet
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}