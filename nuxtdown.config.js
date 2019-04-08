module.exports = {
  // api: function(isStatic) {
  //   const baseURL = 'http://localhost:3000'
  //   const browserBaseURL = !isStatic ? '' : process.env.BASE_URL

  //   return {
  //     baseURL,
  //     browserBaseURL
  //   }
  // },
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: process.env.BASE_URL
  },
  content: [
    [
      'events',
      {
        page: '/events/_event',
        permalink: '/events/:slug',
        isPost: false
      }
    ]
  ]
}
