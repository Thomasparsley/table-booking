// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-headlessui",
    ],

    headlessui: {
        prefix: 'Headless'
    },

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        exposeConfig: true,
    }
});
