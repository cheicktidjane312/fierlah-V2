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
  slug: { current: string };
  category: "Web" | "Ads" | "Stratégie";
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
  link?: string;
}

export const revalidate = 0;

export default async function PortfolioPage() {
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
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-foreground mb-4">
            NOS <span className="text-cosmos-cyan">RÉALISATIONS</span>
          </h1>
          <p className="text-foreground/70 font-inter text-xl max-w-2xl mx-auto">
            Explorez les projets de démonstration illustrant les capacités techniques de l'agence FIERLAH.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <GlassCard key={project._id} className="h-full p-0 group overflow-hidden flex flex-col relative border border-foreground/10 hover:border-cosmos-cyan/50">
                
                {/* Lien Global */}
                <Link href={`/portfolio/${project.slug.current}`} className="absolute inset-0 z-20" />

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-foreground/10">
                  {project.mainImage && urlForImage(project.mainImage) && (
                      <Image
                        src={urlForImage(project.mainImage)!.url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                  )}
                  
                  {/* Overlay au survol (Reste blanc sur noir car c'est une image) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                    <div className="flex items-center gap-2 text-white font-syne font-bold border border-cosmos-cyan px-6 py-2 rounded-full hover:bg-cosmos-cyan hover:text-black transition-all">
                      VOIR DÉTAILS <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    {/* Tags Catégories */}
                    <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-1 rounded ${
                      project.category === 'Web' ? 'text-cosmos-cyan border-cosmos-cyan/30 bg-cosmos-cyan/5' :
                      project.category === 'Ads' ? 'text-cosmos-purple border-cosmos-purple/30 bg-cosmos-purple/5' :
                      'text-yellow-600 border-yellow-600/30 bg-yellow-500/5' // Jaune plus foncé pour lisibilité jour
                    }`}>
                      {project.category}
                    </span>
                    {project.category === "Web" && <Layers size={18} className="text-foreground/40" />}
                    {project.category === "Ads" && <Megaphone size={18} className="text-foreground/40" />}
                    {project.category === "Stratégie" && <Smartphone size={18} className="text-foreground/40" />}
                  </div>

                  {/* Titre & Desc */}
                  <h3 className="text-2xl font-syne font-bold text-foreground mb-2 group-hover:text-cosmos-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm font-inter leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          /* État Vide */
          <div className="text-center py-20 bg-foreground/5 rounded-2xl border border-foreground/10">
            <p className="text-xl text-foreground/60 font-syne">Aucun projet publié pour le moment.</p>
            <p className="text-sm text-foreground/40 mt-2 font-inter">Connectez-vous au Studio pour ajouter votre première réalisation.</p>
          </div>
        )}

      </div>
    </div>
  );
}