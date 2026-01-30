import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

// Notez le type : Promise<{ slug: string }>
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // CRUCIAL : On attend les paramètres
  const { slug } = await params;

  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;
  const project = await client.fetch(query);

  if (!project) {
    return (
      <div className="min-h-screen pt-40 text-center text-white px-6">
        <h1 className="text-3xl font-orbitron mb-4 text-red-500">Projet introuvable (404)</h1>
        <p className="text-gray-400 mb-6 font-rajdhani">
          Impossible de trouver le projet avec l'URL : <span className="font-bold text-white">{slug}</span>
        </p>
        <Link href="/portfolio" className="bg-cosmos-cyan text-black px-6 py-2 rounded font-bold">
          Retour au Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-cosmos-cyan mb-8 transition-colors font-orbitron text-sm">
          <ArrowLeft size={16} /> RETOUR AUX RÉALISATIONS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* IMAGE */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            {project.mainImage && urlForImage(project.mainImage) && (
              <Image
                src={urlForImage(project.mainImage)!.url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* INFOS */}
          <div className="space-y-6">
            <span className="text-cosmos-cyan border border-cosmos-cyan/30 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
              {project.title}
            </h1>
            <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
              {project.description}
            </p>

            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cosmos-cyan to-cosmos-purple text-white font-orbitron font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4"
              >
                VOIR LE SITE EN LIVE <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* CONTENU RICHE */}
        {project.content && (
          <div className="prose prose-invert prose-lg max-w-none font-rajdhani border-t border-white/10 pt-12">
            <h3 className="font-orbitron text-2xl text-white mb-6">Détails du projet</h3>
            <PortableText value={project.content} />
          </div>
        )}

      </div>
    </div>
  );
}