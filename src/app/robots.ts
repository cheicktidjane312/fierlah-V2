import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/admin/'],
    },
    sitemap: 'https://fierlah-agency.com/sitemap.xml',
  }
}