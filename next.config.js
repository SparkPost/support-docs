/** @type {import('next').NextConfig} */
const SentryPlugin = require('@sentry/webpack-plugin');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "script-src * 'unsafe-eval' 'unsafe-inline'",
  },
  // { key: 'Access-Control-Allow-Origin', value: '*' },
  // { key: 'Access-Control-Allow-Credentials', value: 'false' },
];

tmpArr = {
  'script-src': [
    // 'default-src',
    "'self'",
    'www.google-analytics.com',
    'www.googletagmanager.com',
    'o104929.ingest.sentry.io',
    "'unsafe-inline'",
  ],
};
// tmpArr["report-to"] = ["https://o104929.ingest.sentry.io/api/5254252/security/?sentry_key=f57f5f1a442f4f64871cfd7eae1e5dc1/?sentry_environment=".VIP_GO_APP_ENVIRONMENT];
// tmpArr["report-uri"] = ["https://o104929.ingest.sentry.io/api/5254252/security/?sentry_key=f57f5f1a442f4f64871cfd7eae1e5dc1/?sentry_environment=".VIP_GO_APP_ENVIRONMENT];

// tmpArr.forEach()

// // Format into a usable string.
// $headers['Content-Security-Policy'] = '';
// foreach ($tmpArr as $key => $arr) {
//   $headers['Content-Security-Policy'] .= $key;
//   foreach ($arr as $key => $value) {
//     $headers['Content-Security-Policy'] .= ' '.$value;
//   }
//   $headers['Content-Security-Policy'] .= '; ';
// }
// }
// return $headers;
let cspValue = '';
Object.entries(tmpArr).forEach((headerArray) => {
  // console.log('headerArray', headerArray);
  // cspValue += headerArray[0];
  // console.log('cspValue', cspValue);
  headerArray.forEach((currentVal) => {
    cspValue += ` ${currentVal} `;
  });
});

// securityHeaders[0].value = cspValue;
// console.log('securityHeaders', securityHeaders);
// console.log('cspValue', cspValue);

// let ratings = ['word', 'word two', 'word three'];
// let sum = '';

// let sumFunction = function (a, b) {
//   return a + b;
// };

// ratings.forEach((rating, key) => {
//   sum += `${rating} ${key}`;
// });

// console.log(sum);

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  target: 'serverless',

  // Sourcemaps are enabled to be uploaded to Sentry
  // Warning: Can significantly increase build times
  // and memory usage while being generated.
  productionBrowserSourceMaps: true,

  webpack: (config, { dev, isServer }) => {
    // This uploads sourcemaps to Sentry
    // if (!dev && !isServer) {
    config.plugins.push(
      new SentryPlugin({
        release: process.env.RELEASE,
        include: './out',
      }),
    );
    // }

    // Important: return the modified config
    return config;
  },
};
