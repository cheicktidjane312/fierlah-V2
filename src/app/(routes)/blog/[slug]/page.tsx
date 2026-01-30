import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, AlertTriangle } from "lucide-react";

// --- CONFIGURATION DES IMAGES DANS LE TEXTE ---
const ptComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      // 1. On essaie de générer l'URL
      const imageUrl = value ? urlForImage(value)?.url() : null;

      // 2. Si pas d'URL valide, on n'affiche rien (Anti-Crash)
      if (!imageUrl) return null;

      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden border border-foreground/10 bg-foreground/5">
          <Image
            src={imageUrl}
            alt={value.alt || 'Illustration article'}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export const revalidate = 0;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Récupération des paramètres (Next.js 15 compatible)
  const { slug } = await params;

  // 2. Requête Sanity
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);

  // 3. Gestion Erreur 404 (Si l'article n'existe pas)
  if (!post) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center text-center px-6">
        <AlertTriangle size={64} className="text-red-500 mb-6" />
        <h1 className="text-3xl font-syne font-bold text-foreground mb-4">Article Introuvable</h1>
        <p className="text-foreground/60 mb-8 font-inter">
          Impossible de trouver : <span className="font-bold text-foreground">{slug}</span>
        </p>
        <Link href="/blog" className="px-6 py-3 bg-foreground text-background rounded-full font-bold font-syne hover:opacity-90 transition-opacity">
          Retour au Journal
        </Link>
      </div>
    );
  }

  // 4. Sécurisation de l'Image Principale
  // On utilise ?.url() pour ne pas planter si l'image est malformée
  const mainImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;

  return (
    <article className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        
        {/* BOUTON RETOUR */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/50 hover:text-cosmos-cyan mb-8 transition-colors font-syne text-sm font-bold tracking-wider">
          <ArrowLeft size={16} /> RETOUR AU JOURNAL
        </Link>
        
        <div className="mb-12">
          {/* DATE */}
          <div className="flex items-center gap-2 text-cosmos-cyan mb-4 font-syne text-sm font-bold">
             <Calendar size={14} />
             {post.publishedAt 
               ? new Date(post.publishedAt).toLocaleDateString('fr-FR', { dateStyle: 'long' }) 
               : "Date inconnue"}
          </div>
          
          {/* TITRE */}
          <h1 className="text-3xl md:text-5xl font-syne font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>
          
          {/* IMAGE PRINCIPALE (Avec protection anti-crash) */}
          {mainImageUrl ? (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl shadow-cosmos-cyan/5 bg-foreground/5">
              <Image
                src={mainImageUrl}
                alt={post.title || "Image de couverture"}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
        
        {/* CONTENU RICHE */}
        <div className="prose prose-lg max-w-none font-inter 
          prose-headings:font-syne prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-foreground/80 prose-p:leading-relaxed
          prose-strong:text-foreground prose-strong:font-bold
          prose-a:text-cosmos-cyan hover:prose-a:text-cosmos-purple prose-a:font-bold prose-a:no-underline
          prose-li:text-foreground/80
          prose-blockquote:border-l-cosmos-cyan prose-blockquote:text-foreground/90 prose-blockquote:bg-foreground/5
          prose-img:rounded-xl prose-img:border prose-img:border-foreground/10
        ">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-foreground/50 italic">Contenu en cours de rédaction...</p>
          )}
        </div>

      </div>
    </article>
  );
}