const siteUrl = "https://pms-test.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    };
  },
  /* robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  }, */
};
