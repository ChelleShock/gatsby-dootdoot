module.exports = {
  siteMetadata: {
    title: "Doot.Doot",
    author: "Doot.Doot",
    description: "The work of Artist Doot.Doot"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'artist-doot-doot',
        short_name: 'dootdoot',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
