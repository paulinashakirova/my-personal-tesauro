// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "nuxt-primevue",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  components: true,
  primevue: {
    importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "Prime",
      include: "*",
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/aura-light-green/theme.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
