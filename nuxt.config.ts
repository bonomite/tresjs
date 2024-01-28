// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@tresjs/nuxt", "@hypernym/nuxt-gsap"],
  gsap: {
    composables: true
  },
  devtools: { enabled: true }
})
