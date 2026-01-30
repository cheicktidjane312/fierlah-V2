import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, AlertTriangle } from "lucide-react";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Requête sécurisée
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(query, { slug });

  // Gestion 404
  if (!project) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center px-6">
        <AlertTriangle size={64} className="text-red-500 mb-6" />
        <h1 className="text-3xl font-syne font-bold text-foreground mb-4">Projet Introuvable</h1>
        <Link href="/portfolio" className="btn-premium btn-primary">
          Retour au Portfolio
        </Link>
      </div>
    );
  }

  // Sécurité Image
  const mainImageUrl = project.mainImage ? urlForImage(project.mainImage)?.url() : null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-foreground/50 hover:text-cosmos-cyan mb-8 transition-colors font-syne text-sm font-bold tracking-wider">
          <ArrowLeft size={16} /> RETOUR AUX RÉALISATIONS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* IMAGE */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-foreground/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] bg-foreground/5">
            {mainImageUrl ? (
              <Image
                src={mainImageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-foreground/20 font-syne">Image indisponible</div>
            )}
          </div>

          {/* INFOS */}
          <div className="space-y-6">
            {project.category && (
              <span className="text-cosmos-cyan border border-cosmos-cyan/30 bg-cosmos-cyan/5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider font-syne">
                {project.category}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-syne font-bold text-foreground leading-tight">
              {project.title}
            </h1>
            
            <p className="text-foreground/70 font-inter text-lg leading-relaxed">
              {project.description}
            </p>

            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background font-syne font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4 shadow-lg"
              >
                VOIR LE SITE EN LIVE <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* CONTENU RICHE (PortableText) */}
        {project.content && (
          <div className="border-t border-foreground/10 pt-12">
            <h3 className="font-syne font-bold text-2xl text-foreground mb-6">Détails du projet</h3>
            
            <div className="prose prose-lg max-w-none font-inter 
              prose-headings:text-foreground prose-p:text-foreground/80
              prose-li:text-foreground/80 prose-strong:text-foreground
              prose-img:rounded-xl
            ">
              <PortableText value={project.content} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}