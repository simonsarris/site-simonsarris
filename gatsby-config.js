module.exports = {
  siteMetadata: {
    title: `simon sarris`,
    description: `simeville`,
    author: `@simonsarris`,
  },
  plugins: [
    { // ASTONISHINGLY NECESSARY TO STOP THE WHOLE LAYOUT FROM REMOUNTING ON EACH PAGE LOAD
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-catch-links`, // for markdown <a> to <Link>
    { // for markdown
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    { // for images within markdown
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/images`, },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    //`gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Libre Baskerville`,
            variants: [`400`, `700`]
          },
        ],
      },
    },


    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-7601972-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-meta-redirect` // make sure to put last in the array

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
