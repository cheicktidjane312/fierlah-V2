"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // On récupère l'URL actuelle

  return (
    <motion.div
      key={pathname} // <--- C'EST LA CLÉ MAGIQUE : Elle force l'animation à chaque changement d'URL
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }} // J'ai mis 0.5s pour que ce soit plus dynamique
    >
      {children}
    </motion.div>
  );
}