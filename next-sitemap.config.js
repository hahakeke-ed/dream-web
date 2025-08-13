/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mind-study.co.kr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
    ],
  },
};
