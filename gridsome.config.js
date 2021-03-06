const nodeExternals = require("webpack-node-externals");

const tailwindcss = require("tailwindcss");
const contentful = require("./plugins/plugin.contentful");
const robot = require("./plugins/plugin.robot");
const sitemap = require("./plugins/plugin.sitemap");
const tailwind = require("./plugins/plugin.tailwind");
const googleAnalytics = require("./plugins/plugin.googleAnalytics");
const googleTM = require("./plugins/plugin.googleTM");

module.exports = {
  siteName: "Rintio",
  siteDescription: "We involve for a better life",
  siteUrl: `https://rintio.fr`,
  titleTemplate: "Rintio - %s",
  icon: "./src/assets/favicon.png",
  metadata: {
    twitter: {
      site: "@rintioGroup",
      creator: "@rintioGroup",
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [
    contentful,
    googleAnalytics,
    googleTM,
    robot,
    sitemap,
    tailwind,
    nodeExternals,
  ],
  templates: {
    ContentfulPost: "/blog/article/:title",
  },
   chainWebpack(config, { isServer }) {
     config.module.rules.delete("svg");
     config.module
       .rule("svg")
       .test(/\.svg$/)
       .use("vue")
       .loader("vue-loader")
       .end()
       .use("svg-to-vue-component")
       .loader("svg-to-vue-component/loader");

     if (isServer) {
       config.externals(
         nodeExternals({
           allowlist: [
             /\.css$/,
             /\?vue&type=style/,
             /vue-instantsearch/,
             /instantsearch.js/,
             /typeface-league-spartan/,
           ],
         })
       );
     }
   },

   configureWebpack(config) {
     config.node = {
       fs: 'empty',
       child_process: 'empty',
       net: 'empty',
       dns: 'empty',
       tls: 'empty',
     };
     return config;
   },
};

