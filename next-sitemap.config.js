/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://links.dianananda.site",
  generateRobotsTxt: true,
  sitemapSize: 1000,
};
