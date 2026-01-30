import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fierlah-agency.com'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let blogUrls: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let projectUrls: any[] = []

  try {
    // 1. Récupération Blog
    const blogQuery = `*[_type == "post"] { "slug": slug.current, _updatedAt }`
    const posts = await client.fetch(blogQuery)
    
    if (Array.isArray(posts)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    }

    // 2. Récupération Portfolio
    const projectQuery = `*[_type == "project"] { "slug": slug.current, _updatedAt }`
    const projects = await client.fetch(projectQuery)

    if (Array.isArray(projects)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      projectUrls = projects.map((project: any) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(project._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error("Erreur sitemap sanity:", error)
    // En cas d'erreur, on continue sans les pages dynamiques
  }

  // 3. Retourne tout
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