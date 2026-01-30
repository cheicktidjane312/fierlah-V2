import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // On cache l'admin à Google
    },
    sitemap: 'https://fierlah.com/sitemap.xml',
  }
}