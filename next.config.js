const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    mozjpeg: {
      quality: 50,
    },
    optipng: {
      optimizationLevel: 3,
    },
  }],

  // your other plugins here
  [
    withSass, {}
  ]
]);
