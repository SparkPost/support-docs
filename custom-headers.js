const customHeaders = {
  source: '/:path*',
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
    },
    {
      key: 'Pragma',
      value: 'no-cache',
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=5184000'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    }
  ]
};

module.exports = customHeaders;