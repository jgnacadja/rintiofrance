import DefaultLayout from "~/layouts/Default.vue";
import "~/main.scss";
import "~/variables.scss";
import "~/assets/font-awesome/all.js";

import VueScrollTo from "vue-scrollto";
import Typography from "typography";
import VueObserveVisibility from "vue-observe-visibility";
import VueTailwind from "vue-tailwind";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2.6,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
});

const fontsCss = require("./assets/css/fonts.css");

export default function (Vue, { head }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };

  // Inject Usercentrics scripts and styles
  head.link.push({
    rel: "preconnect",
    href: "//privacy-proxy.usercentrics.eu",
  });

  head.link.push({
    rel: "preload",
    href: "//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js",
    as: "script",
  });

  head.script.push({
    type: "application/javascript",
    src: "https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js",
  });

  head.script.push({
    id: "usercentrics-cmp",
    src: "https://web.cmp.usercentrics.eu/ui/loader.js",
    async: true,
    "data-settings-id": "OB5HQ1USqBI_HK",
  });

  // Import Crisp
  // head.script.push({
  //   src: "crisp.js",
  //   body: true,
  // });

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  });

  head.style.push({
    type: "text/css",
    cssText: fontsCss,
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueScrollTo);

  head.style.push({
    type: "text/css",
    cssText: typography.toString(),
  });

  Vue.use(VueObserveVisibility);
  Vue.use(VueTailwind);
}
