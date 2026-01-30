import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { client } from "@/lib/sanity";

// On récupère les infos depuis Sanity
async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function Footer() {
  const settings = await getSettings();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background/60 backdrop-blur-xl pt-20 pb-10 relative z-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : MARQUE (LOGO TEXTE) */}
          <div className="space-y-6">
            {/* LE LOGO TEXTE AVEC LE POINT */}
            <Link href="/" className="inline-block group">
              <span className="font-syne font-black text-3xl md:text-4xl tracking-tighter text-foreground transition-colors group-hover:text-cosmos-cyan/80">
                FIERLAH
                <span className="text-cosmos-cyan inline-block animate-pulse">.</span>
              </span>
            </Link>
            
            <p className="text-foreground/70 font-inter text-sm leading-relaxed max-w-xs">
              Votre partenaire de croissance digitale. Nous transformons votre vision en résultats mesurables.
            </p>

            {/* RÉSEAUX SOCIAUX MODERNES (Style Squircle Néon) */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, link: settings?.facebook },
                { icon: Instagram, link: settings?.instagram },
                { icon: Linkedin, link: settings?.linkedin }
              ].map((social, idx) => (
                social.link && (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-cosmos-cyan hover:bg-cosmos-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                  >
                    {/* L'icône change de couleur : Gris -> Noir (pour contraste sur Cyan) */}
                    <social.icon 
                      size={18} 
                      className="text-foreground/70 transition-colors duration-300 group-hover:text-black" 
                    />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* COLONNE 2 : EXPLORER */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-6 text-sm tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-3 font-inter text-foreground/60 text-sm">
              <li><Link href="/" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">À Propos</Link></li>
              <li><Link href="/portfolio" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Réalisations</Link></li>
              <li><Link href="/blog" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Journal</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : EXPERTISE */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-6 text-sm tracking-widest uppercase">Expertise</h4>
            <ul className="space-y-3 font-inter text-foreground/60 text-sm">
              <li><Link href="/services" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Sites Web & App</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Marketing Stratégique</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Publicité (Ads)</Link></li>
              <li><Link href="/services" className="hover:text-cosmos-cyan hover:pl-2 transition-all duration-300">Identité de Marque</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT RAPIDE */}
          <div>
            <h4 className="font-syne font-bold text-foreground mb-6 text-sm tracking-widest uppercase">Nous joindre</h4>
            <ul className="space-y-4 font-inter text-foreground/60 text-sm">
              {settings?.phone && (
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-cosmos-cyan/20 transition-colors">
                    <Phone size={16} className="text-cosmos-cyan" />
                  </div>
                  <a href={`tel:${settings.phone}`} className="group-hover:text-foreground transition-colors">{settings.phone}</a>
                </li>
              )}
              {settings?.email && (
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-cosmos-cyan/20 transition-colors">
                    <Mail size={16} className="text-cosmos-cyan" />
                  </div>
                  <a href={`mailto:${settings.email}`} className="group-hover:text-foreground transition-colors break-all">{settings.email}</a>
                </li>
              )}
              {settings?.address && (
                <li className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-foreground/5 mt-[-4px]">
                    <MapPin size={16} className="text-cosmos-cyan" />
                  </div>
                  <span className="leading-snug">{settings.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/40 font-inter text-xs">
          <p>© {currentYear} FIERLAH AGENCY. Dakar, Sénégal.</p>
          <div className="flex gap-6">
            <Link href="/confidentialite" className="hover:text-foreground transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}