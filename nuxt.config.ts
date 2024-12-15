// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Отключить серверный рендеринг
  target: 'static',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/book-market/',
    middleware: {
      'manifest-route-rule': { override: true }
    }
  },
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `
            @use "~/assets/styles/main.scss" as *;
            @use "~/assets/styles/_variables.scss" as *;
          `,
        }
      }
    }
  },
  // postcss: {
  //   plugins: {
  //     'postcss-nested': {},
  //     'postcss-custom-media': {}
  //   }
  // },
})
