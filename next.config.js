const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
