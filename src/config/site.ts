export const SITE = {
  name: 'Jemmify Works',
  title: 'Jemmify Works | Elevating SMBs through Websites that Convert',
  description: 'We help small and medium businesses in Bengaluru and beyond evolve into market leaders with data-driven digital strategies.',
  url: 'https://jemmify.works',
  twitterHandle: '@jemmifyworks',
  socials: {
    twitter: 'https://twitter.com/jemmifyworks',
    instagram: 'https://instagram.com/jemmifyworks',
    linkedin: 'https://linkedin.com/company/jemmifyworks',
    facebook: 'https://facebook.com/jemmifyworks',
  },
  image: {
    src: 'https://cdn.pagesmith.app/a9746ff4/images/Jemmify-Works-Logo-Final-Web-1024-1024.webp',
    alt: 'Jemmify Works Logo',
  },
} as const;

export type SiteConfig = typeof SITE;
