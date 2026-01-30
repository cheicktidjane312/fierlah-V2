"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  // Récupère l'ID depuis .env.local
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-cosmos-cyan/10 border border-cosmos-cyan rounded-xl">
        <h3 className="text-2xl font-orbitron text-white mb-2">Message Reçu ! 🚀</h3>
        <p className="text-gray-300 font-rajdhani">
          Merci de nous avoir contactés. L'équipe FIERLAH revient vers vous sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-gray-500">Nom & Prénom</label>
          <input id="nom" type="text" name="nom" required className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-cosmos-cyan focus:outline-none transition-all" />
          <ValidationError prefix="Nom" field="nom" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-gray-500">Email</label>
          <input id="email" type="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-cosmos-cyan focus:outline-none transition-all" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-gray-500">Service Souhaité</label>
        <select name="service" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-cosmos-cyan focus:outline-none transition-all">
          <option value="Site Web">Création Site Web</option>
          <option value="Ads">Publicité Meta/Google Ads</option>
          <option value="Stratégie">Stratégie Marketing</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-gray-500">Message</label>
        <textarea id="message" name="message" rows={4} required className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-cosmos-cyan focus:outline-none transition-all resize-none" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="w-full bg-gradient-to-r from-cosmos-cyan to-cosmos-purple text-white font-orbitron font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50">
        {state.submitting ? "ENVOI..." : "ENVOYER LE MESSAGE"} <Send size={18} />
      </button>
    </form>
  );
}