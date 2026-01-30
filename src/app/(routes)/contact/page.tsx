import React from "react";
import { client } from "../../../../sanity/lib/client"; // Assurez-vous que le chemin est bon selon votre structure
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/contact/ContactForm"; // Le composant créé à l'étape 3
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

// Fonction pour récupérer les données CMS
async function getSettings() {
  // On récupère le PREMIER document de type settings
  const query = `*[_type == "settings"][0]`;
  const settings = await client.fetch(query, {}, { next: { revalidate: 60 } }); // Cache de 60s
  return settings;
}

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INFOS DYNAMIQUES (CMS) */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
                PARLONS <span className="text-cosmos-cyan">PROJET</span>
              </h1>
              <p className="text-gray-300 font-rajdhani text-lg">
                Vous avez une vision ? Nous avons la technologie.
                Contactez-nous via les canaux ci-dessous.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp (CMS) */}
              {settings?.whatsappLink && (
                <a href={settings.whatsappLink} target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-cosmos-cyan transition-colors group">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cosmos-cyan/50 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp Direct</p>
                    <p className="font-orbitron text-lg">{settings.phone || "+221 ..."}</p>
                  </div>
                </a>
              )}

              {/* Email (CMS) */}
              {settings?.email && (
                <a href={`mailto:${settings.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cosmos-cyan transition-colors group">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cosmos-cyan/50 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="font-orbitron text-lg">{settings.email}</p>
                  </div>
                </a>
              )}

              {/* Adresse (CMS) */}
              {settings?.address && (
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 rounded-full bg-white/5 border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Siège</p>
                    <p className="font-orbitron text-lg">{settings.address}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Réseaux Sociaux (CMS) */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">SUIVEZ LA MISSION</p>
              <div className="flex gap-4">
                {settings?.facebook && (
                  <a href={settings.facebook} target="_blank" className="p-3 rounded-lg bg-white/5 hover:bg-[#1877F2] hover:text-white transition-all text-gray-400">
                    <Facebook size={24} />
                  </a>
                )}
                {settings?.instagram && (
                  <a href={settings.instagram} target="_blank" className="p-3 rounded-lg bg-white/5 hover:bg-[#E4405F] hover:text-white transition-all text-gray-400">
                    <Instagram size={24} />
                  </a>
                )}
                {settings?.linkedin && (
                  <a href={settings.linkedin} target="_blank" className="p-3 rounded-lg bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all text-gray-400">
                    <Linkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE FORMSPREE */}
          <GlassCard className="p-8">
            <ContactForm />
          </GlassCard>

        </div>
      </div>
    </div>
  );
}