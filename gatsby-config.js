module.exports = {
  siteMetadata: {
    title: `ACME Corporation`,
    description: `Companhia Americana "Faz Tudo"`,
    author: `@AlvesWesley`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00c3ff`,
        theme_color: `#00c3ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Nunito:wght@200;400;900'],
        display: 'swap'
      }
    }
  ]
}
