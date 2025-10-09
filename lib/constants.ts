export const SITE_CONFIG = {
  name: 'Teamwork Safe Operations Limited',
  shortName: 'Teamwork Safe Operations',
  tagline: 'Experts You Can Trust',
  description:
    'Leading provider of General Construction, Project Management, Renewable Energy Solutions, and Equipment Leasing in Nigeria. Established 2009.',
  url: 'https://teamworksafeoperations.com',
  email: 'info@teamworksafeoperations.com',
  phones: {
    primary: '+234 803 726 4745',
    secondary: '+234 807 438 9216',
  },
  addresses: {
    lagos: {
      title: 'Lagos Office',
      address: 'Suite C10 Betto Mall Abijo GRA, Km 43 Lekki Epe Expressway',
      city: 'Lekki, Lagos State',
      country: 'Nigeria',
    },
    portHarcourt: {
      title: 'Port Harcourt Office',
      address: '75, Shell Location Road, Oyigbo',
      city: 'Rivers State',
      country: 'Nigeria',
    },
  },
  social: {
    facebook: 'https://facebook.com/teamworksafeoperations',
    twitter: 'https://twitter.com/teamworksafe',
    linkedin: 'https://linkedin.com/company/teamwork-safe-operations',
    instagram: 'https://instagram.com/teamworksafeoperations',
  },
  stats: {
    yearEstablished: 2009,
    clients: '62+',
    projectsCompleted: '236+',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMenu: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'HSE', href: '/hse' },
  { label: 'Clients', href: '/clients' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;



