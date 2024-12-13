// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Отключить серверный рендеринг
  target: 'static',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    '~/assets/styles/main.scss',  // Подключаем основной файл стилей
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },
  app: {
    baseURL: '/book-market/',
    middleware: {
      'manifest-route-rule': { override: true }
    }
  }
})
