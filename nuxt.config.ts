// https://nuxt.com/docs/api/configuration/nuxt-config
import lang from "./lang/language";

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@morev/vue-transitions/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@samk-dev/nuxt-vcalendar",
  ],

  i18n: {
    locales: lang,
    defaultLocale: "fa",
    defaultDirection: "rtl",
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
