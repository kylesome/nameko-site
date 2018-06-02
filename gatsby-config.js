module.exports = {
  siteMetadata: {
    title: 'Nameko',
    url: 'https://kylesome.github.io/nameko-site/',
  },
  pathPrefix: '/nameko-site',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography.js`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next'
  ]
};
