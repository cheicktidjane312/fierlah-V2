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
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300",
        hoverEffect && "hover:border-cosmos-cyan/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]", "animate-float",
        className
      )}
    >
      {/* Effet de brillance interne */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cosmos-cyan/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cosmos-purple/10 blur-3xl pointer-events-none" />
      
      {children}
    </motion.div>
  );
}