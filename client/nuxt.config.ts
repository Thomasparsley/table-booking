// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
    ],

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        exposeConfig: true,
    }
});
