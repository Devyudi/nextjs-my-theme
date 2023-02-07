/** @type {import('next').NextConfig} */

const path = require('path');
const withSass = require('@zeit/next-sass');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

const withPWA = require('next-pwa')({
  dest: 'public',
});

/**
 * @type {import('dotenv/config')}
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  api: {
    bodyParser: true
  },
  env: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    appDomain: process.env.NEXT_PUBLIC_APP_DOMAIN,
    appKeyword: process.env.NEXT_PUBLIC_APP_KEYWORD
  },
  publicRuntimeConfig:{
    apiMaster:process.env.API_MASTER
  },
  trailingSlash: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src','assets','sass')]
  }
}



module.exports = withPWA({
  experimental: {
    appDir: true,             // <---- Comment and Uncomment this
  },
  webpack(config, { dev }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'preact/compat': 'react',
    };
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }

    config.plugins.push(
        new SWPrecacheWebpackPlugin({
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: "networkFirst",
              urlPattern: /^https?.*/
            }
          ]
        })
    )
    return config;
  },
  future: {
    webpack5: true
  }
})
module.exports = {
  generateBuildId: async () => {
    // Return custom build ID, like the latest git commit hash
    return 'my-build-id'
  }
}

module.exports = withSass({
  cssModule: true
})
module.exports = nextConfig
module.exports = {

  async rewrites(){
    return [
      //{source:string,destination:string}
      {
        source:"/rss",
        destination:"/sitemap.xml"
      },
    ]
  }
}