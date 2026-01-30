import React from "react";
import { client } from "@/lib/sanity"; 
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

// Force le rafraîchissement des données (CMS) à chaque visite
export const revalidate = 0;

async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  const settings = await client.fetch(query);
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
              <h1 className="text-4xl md:text-6xl font-syne font-bold text-foreground mb-4">
                PARLONS <span className="text-cosmos-cyan">PROJET</span>
              </h1>
              <p className="text-foreground/70 font-inter text-lg">
                Vous avez une vision ? Nous avons la technologie.
                Contactez-nous via les canaux ci-dessous.
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp (CMS) */}
              {settings?.whatsappLink && (
                <a href={settings.whatsappLink} target="_blank" className="flex items-center gap-4 text-foreground/70 hover:text-cosmos-cyan transition-colors group">
                  <div className="p-3 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-cosmos-cyan/50 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-inter">WhatsApp Direct</p>
                    <p className="font-syne text-lg text-foreground">{settings.phone || "+221 ..."}</p>
                  </div>
                </a>
              )}

              {/* Email (CMS) */}
              {settings?.email && (
                <a href={`mailto:${settings.email}`} className="flex items-center gap-4 text-foreground/70 hover:text-cosmos-cyan transition-colors group">
                  <div className="p-3 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-cosmos-cyan/50 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-inter">Email</p>
                    <p className="font-syne text-lg text-foreground">{settings.email}</p>
                  </div>
                </a>
              )}

              {/* Adresse (CMS) */}
              {settings?.address && (
                <div className="flex items-center gap-4 text-foreground/70">
                  <div className="p-3 rounded-full bg-foreground/5 border border-foreground/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-inter">Siège</p>
                    <p className="font-syne text-lg text-foreground">{settings.address}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Réseaux Sociaux (CMS) */}
            <div className="pt-8 border-t border-foreground/10">
              <p className="text-sm text-foreground/50 mb-4 font-inter">SUIVEZ LA MISSION</p>
              <div className="flex gap-4">
                {settings?.facebook && (
                  <a href={settings.facebook} target="_blank" className="p-3 rounded-lg bg-foreground/5 hover:bg-[#1877F2] hover:text-white transition-all text-foreground/60 hover:text-foreground">
                    <Facebook size={24} />
                  </a>
                )}
                {settings?.instagram && (
                  <a href={settings.instagram} target="_blank" className="p-3 rounded-lg bg-foreground/5 hover:bg-[#E4405F] hover:text-white transition-all text-foreground/60 hover:text-foreground">
                    <Instagram size={24} />
                  </a>
                )}
                {settings?.linkedin && (
                  <a href={settings.linkedin} target="_blank" className="p-3 rounded-lg bg-foreground/5 hover:bg-[#0A66C2] hover:text-white transition-all text-foreground/60 hover:text-foreground">
                    <Linkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE */}
          {/* IMPORTANT : hoverEffect={false} pour éviter que le formulaire bouge quand on tape dedans */}
          <GlassCard className="p-8" hoverEffect={false}>
            <ContactForm />
          </GlassCard>

        </div>
      </div>
    </div>
  );
}