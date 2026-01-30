import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import GlassCard from "@/components/ui/GlassCard";
import { ExternalLink, Layers, Smartphone, Megaphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Typage du Projet
interface Project {
  _id: string;
  title: string;
  slug: { current: string }; // Important: on récupère le slug ici
  category: "Web" | "Ads" | "Stratégie";
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
  link?: string;
}

export const revalidate = 0;

export default async function PortfolioPage() {
  // On ajoute 'slug' à la requête pour pouvoir créer le lien
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    mainImage,
    link
  }`;

  const projects: Project[] = await client.fetch(query);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
            NOS <span className="text-cosmos-cyan">RÉALISATIONS</span>
          </h1>
          <p className="text-gray-300 font-rajdhani text-xl max-w-2xl mx-auto">
            Explorez les projets qui ont propulsé nos clients au sommet.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <GlassCard key={project._id} className="h-full p-0 group overflow-hidden flex flex-col relative">
                
                {/* C'EST ICI LA MODIFICATION IMPORTANTE : 
                   Ce Link couvre toute la carte et redirige vers la page de détails interne
                */}
                <Link href={`/portfolio/${project.slug.current}`} className="absolute inset-0 z-20" />

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-black/50">
                  {project.mainImage && urlForImage(project.mainImage) && (
                     <Image
                       src={urlForImage(project.mainImage)!.url()}
                       alt={project.title}
                       fill
                       className="object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                  )}
                  
                  {/* Overlay visuel (purement décoratif maintenant) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                    <div className="flex items-center gap-2 text-white font-orbitron border border-cosmos-cyan px-6 py-2 rounded-full hover:bg-cosmos-cyan hover:text-black transition-all">
                      VOIR DÉTAILS <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded ${
                      project.category === 'Web' ? 'text-cosmos-cyan border-cosmos-cyan/30' :
                      project.category === 'Ads' ? 'text-cosmos-purple border-cosmos-purple/30' :
                      'text-yellow-400 border-yellow-400/30'
                    }`}>
                      {project.category}
                    </span>
                    {project.category === "Web" && <Layers size={18} className="text-gray-500" />}
                    {project.category === "Ads" && <Megaphone size={18} className="text-gray-500" />}
                    {project.category === "Stratégie" && <Smartphone size={18} className="text-gray-500" />}
                  </div>

                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-cosmos-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-rajdhani leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-xl text-gray-400 font-orbitron">Aucun projet publié pour le moment.</p>
            <p className="text-sm text-gray-500 mt-2">Connectez-vous au Studio pour ajouter votre première réalisation.</p>
          </div>
        )}

      </div>
    </div>
  );
}