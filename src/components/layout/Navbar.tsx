"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Rocket, LayoutGrid, Globe, BookOpen, Zap, Lock, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle"; 

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

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll body quand menu ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-3 shadow-sm" : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 block">
             <div className="relative w-28 md:w-40 h-10">
               <Image 
                 src="/assets/images/logo.jpeg" 
                 alt="FIERLAH Logo" 
                 fill 
                 className="object-contain object-left" 
                 priority
               />
             </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium font-syne hover:text-cosmos-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-foreground/10 mx-1" />
            
            <ThemeToggle />

            {/* BOUTON ADMIN (Desktop) */}
            <Link 
              href="/studio" 
              target="_blank"
              className="flex items-center gap-1 text-xs font-bold font-syne text-foreground/50 hover:text-cosmos-cyan transition-colors uppercase tracking-wider border border-foreground/10 px-3 py-2 rounded-lg hover:border-cosmos-cyan/50"
            >
              <Lock size={12} /> ADMIN
            </Link>

            <Link href="/contact" className="btn-premium btn-primary text-xs py-2 px-5 ml-2">
              Démarrer
            </Link>
          </div>

          {/* MOBILE TOGGLES */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-2 text-foreground active:scale-90 transition-transform"
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />

            <motion.div
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 h-[100dvh] w-[85%] max-w-[300px] bg-background border-l border-foreground/10 z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-foreground/5">
                <span className="font-syne font-bold text-xl tracking-wider">MENU</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-4 -mr-4 text-foreground/70 hover:text-cosmos-cyan active:scale-90 transition-all"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-2 p-6 overflow-y-auto h-full">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-4 px-2 text-xl font-syne font-bold text-foreground hover:bg-foreground/5 hover:text-cosmos-cyan hover:pl-6 rounded-lg transition-all duration-300 border-b border-foreground/5 last:border-0"
                  >
                    <link.icon size={22} className="text-foreground/40" />
                    {link.name}
                  </Link>
                ))}
                
                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="btn-premium btn-primary w-full py-4 text-base"
                  >
                    Lancer mon projet
                  </Link>

                  {/* BOUTON ADMIN (Mobile) */}
                  <Link 
                    href="/studio"
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-sm font-bold font-syne text-foreground/50 hover:text-cosmos-cyan py-3 border border-foreground/10 rounded-lg"
                  >
                    <Lock size={14} /> ACCÈS ADMIN
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}