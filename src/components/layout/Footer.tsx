import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { client } from "@/lib/sanity";

// Fonction pour récupérer les infos Sanity
async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function Footer() {
  const settings = await getSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/90 backdrop-blur-xl pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* COLONNE 1 : MARQUE */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-orbitron font-bold tracking-widest text-white">
              FIERLAH<span className="text-cosmos-cyan">.</span>
            </Link>
            <p className="text-gray-400 font-rajdhani text-sm">
              Votre transformation digitale commence ici. Agence marketing 360° spécialisée dans la performance et le ROI.
            </p>
          </div>

          {/* COLONNE 2 : EXPLORER */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">EXPLORER</h4>
            <ul className="space-y-3 font-rajdhani text-gray-400">
              <li><Link href="/" className="hover:text-cosmos-cyan transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-cosmos-cyan transition-colors">À Propos</Link></li>
              <li><Link href="/portfolio" className="hover:text-cosmos-cyan transition-colors">Réalisations</Link></li>
              <li><Link href="/blog" className="hover:text-cosmos-cyan transition-colors">Le Journal</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : NOS SERVICES */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">NOS SERVICES</h4>
            <ul className="space-y-3 font-rajdhani text-gray-400">
              <li><Link href="/services" className="hover:text-cosmos-cyan transition-colors">Création Web</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan transition-colors">Stratégie Marketing</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan transition-colors">Publicité (Ads)</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan transition-colors">Design & Affiches</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT (CLIQUABLE) */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-6">CONTACT</h4>
            <ul className="space-y-4 font-rajdhani text-gray-400">
              {settings?.address && (
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-cosmos-cyan flex-shrink-0" />
                  <span>{settings.address}</span>
                </li>
              )}
              {settings?.phone && (
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-cosmos-cyan flex-shrink-0" />
                  <a href={`tel:${settings.phone}`} className="hover:text-white transition-colors">
                    {settings.phone}
                  </a>
                </li>
              )}
              {settings?.email && (
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-cosmos-cyan flex-shrink-0" />
                  <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors break-all">
                    {settings.email}
                  </a>
                </li>
              )}
            </ul>
            {/* RÉSEAUX */}
            <div className="flex gap-4 mt-6">
              {settings?.facebook && <a href={settings.facebook} target="_blank" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>}
              {settings?.instagram && <a href={settings.instagram} target="_blank" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>}
              {settings?.linkedin && <a href={settings.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 font-rajdhani text-sm">
          <p>© {currentYear} FIERLAH AGENCY. Tous droits réservés.</p>
          <Link href="/confidentialite" className="hover:text-cosmos-cyan transition-colors">
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}