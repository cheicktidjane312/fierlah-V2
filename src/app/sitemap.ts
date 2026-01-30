import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fierlah-agency.com'

  // 1. Récupérer tous les Slugs des Articles de Blog
  const blogQuery = `*[_type == "post"] { "slug": slug.current, _updatedAt }`
  // CORRECTION ICI : J'avais mis 'query' au lieu de 'blogQuery'
  const posts = await client.fetch(blogQuery)

  // 2. Récupérer tous les Slugs des Projets Portfolio
  const projectQuery = `*[_type == "project"] { "slug": slug.current, _updatedAt }`
  const projects = await client.fetch(projectQuery)

  // 3. Construire les URLs dynamiques pour le Blog
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. Construire les URLs dynamiques pour le Portfolio
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectUrls = projects.map((project: any) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 5. Retourner le tout combiné avec les pages statiques
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.8 },
    ...blogUrls,
    ...projectUrls,
  ]
}