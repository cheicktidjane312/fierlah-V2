import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10 text-foreground/80 font-inter">
      <div className="container mx-auto max-w-4xl space-y-8">
        
        {/* Titre Principal */}
        <h1 className="text-4xl font-syne font-bold text-foreground">Politique de Confidentialité</h1>
        <p className="text-foreground/60">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-3">
          <h2 className="text-2xl text-foreground font-bold font-syne">1. Collecte des données</h2>
          <p className="leading-relaxed">
            Dans le cadre de nos formulaires (Contact, Devis), FIERLAH AGENCY collecte les informations suivantes : 
            Nom, Prénom, Numéro de téléphone (WhatsApp), Email, Nom de l'entreprise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-foreground font-bold font-syne">2. Utilisation</h2>
          <p className="leading-relaxed">
            Ces données sont utilisées uniquement pour : La réponse commerciale, l'élaboration de votre contrat, 
            la communication durant le projet. Aucune donnée n'est vendue à des tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-foreground font-bold font-syne">3. Sécurité</h2>
          <p className="leading-relaxed">
            Nous utilisons des protocoles sécurisés (HTTPS) et des partenaires de confiance (Sanity, Vercel) 
            pour protéger vos informations.
          </p>
        </section>

        <section className="pt-8 border-t border-foreground/10">
          <p className="text-sm">
            Pour toute demande de suppression de vos données, contactez-nous via le formulaire de contact.
          </p>
        </section>

      </div>
    </div>
  );
}