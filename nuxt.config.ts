// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-primevue"],
  components: true,
  primevue: {
    importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    usePrimeVue: false,
    components: {
      prefix: "Prime",
      include: "*",
    },
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
