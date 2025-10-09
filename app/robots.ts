import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/staff/', '/staff-login/'],
    },
    sitemap: 'https://teamworksafeoperations.com/sitemap.xml',
  };
}



