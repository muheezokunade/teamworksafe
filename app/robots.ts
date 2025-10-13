import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/staff-login', '/api/', '/admin/'],
      },
    ],
    sitemap: 'https://teamworksafeoperations.com/sitemap.xml',
  }
}
