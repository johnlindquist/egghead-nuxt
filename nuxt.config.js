module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'egghead todos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'tachyons/css/tachyons.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  env: {
    API: process.env.API
  }
}
