const withTwin = require('./withTwin.js');

/**
 * @type {import('next').NextConfig}
 */

module.exports = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'cdn.sanity.io', 'lh3.googleusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/info',
        destination: '/#info',
        permanent: true,
      },
      {
        source: '/details',
        destination: '/#details',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/#work',
        permanent: true,
      },
    ];
  },
  // ...
});
