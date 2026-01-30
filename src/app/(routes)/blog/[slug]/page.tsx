import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

const ptComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
          <Image
            src={urlForImage(value)!.url()}
            alt={value.alt || 'Image article'}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export const revalidate = 0;

// Notez le type : Promise<{ slug: string }>
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // CRUCIAL : On attend que les paramètres soient chargés
  const { slug } = await params;

  // On utilise le slug récupéré proprement
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const post = await client.fetch(query);

  if (!post) {
    return (
      <div className="min-h-screen pt-40 text-center text-white">
        <h1 className="text-4xl font-orbitron mb-4">Article introuvable</h1>
        <p className="text-gray-400 mb-6">Le slug recherché est : <span className="text-cosmos-cyan">{slug}</span></p>
        <Link href="/blog" className="text-cosmos-cyan underline">Retour au Journal</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cosmos-cyan mb-8 transition-colors font-orbitron text-sm">
          <ArrowLeft size={16} /> RETOUR AU JOURNAL
        </Link>
        <div className="mb-12">
          <div className="flex items-center gap-2 text-cosmos-cyan mb-4 font-orbitron text-sm">
             <Calendar size={14} />
             {new Date(post.publishedAt).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
          </div>
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          {post.mainImage && urlForImage(post.mainImage) && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cosmos-cyan/10">
              <Image
                src={urlForImage(post.mainImage)!.url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="prose prose-invert prose-lg max-w-none font-rajdhani prose-headings:font-orbitron prose-headings:text-white prose-a:text-cosmos-cyan hover:prose-a:text-cosmos-purple prose-img:rounded-xl">
          <PortableText value={post.body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
}