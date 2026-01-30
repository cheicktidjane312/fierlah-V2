import React from "react";
import { client, urlForImage } from "@/lib/sanity";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

// Typage
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
  excerpt: string;
}

export const revalidate = 0;

export default async function BlogPage() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
            LE JOURNAL <span className="text-cosmos-cyan">DIGITAL</span>
          </h1>
          <p className="text-gray-300 font-rajdhani text-xl max-w-2xl mx-auto">
            Conseils, stratégies et actualités pour dominer votre marché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
              <GlassCard className="h-full p-0 overflow-hidden flex flex-col hover:border-cosmos-cyan/50 transition-colors">
                
                {/* Image */}
                <div className="relative h-48 w-full bg-black/50">
                  {post.mainImage && urlForImage(post.mainImage) && (
                    <Image
                      src={urlForImage(post.mainImage)!.url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3 font-orbitron">
                    <Calendar size={12} />
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                  </div>
                  
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-cosmos-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-rajdhani line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-cosmos-cyan text-sm font-bold mt-auto">
                    LIRE L'ARTICLE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}