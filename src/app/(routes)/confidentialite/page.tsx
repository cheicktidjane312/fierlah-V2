import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10 text-gray-300 font-rajdhani">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-orbitron font-bold text-white">Politique de Confidentialité</h1>
        <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl text-white font-bold mb-2">1. Collecte des données</h2>
          <p>Dans le cadre de nos formulaires (Contact, Devis), FIERLAH AGENCY collecte les informations suivantes : Nom, Prénom, Numéro de téléphone (WhatsApp), Email, Nom de l'entreprise.</p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-2">2. Utilisation</h2>
          <p>Ces données sont utilisées uniquement pour : La réponse commerciale, l'élaboration de votre contrat, la communication durant le projet. Aucune donnée n'est vendue à des tiers.</p>
        </section>

        <section>
          <h2 className="text-2xl text-white font-bold mb-2">3. Sécurité</h2>
          <p>Nous utilisons des protocoles sécurisés (HTTPS) et des partenaires de confiance (Sanity, Vercel) pour protéger vos informations.</p>
        </section>
      </div>
    </div>
  );
}