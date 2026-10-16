// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['motion-v/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'きりんさん — オープンソースのハートフル童謡 | kirinsan.org',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'きりんさんは、MITライセンスを採用した世界初級のオープンソース童謡です。歌う自由、アレンジする自由、フォークする自由。since 2007.',
        },
        { property: 'og:title', content: 'きりんさん — オープンソースのハートフル童謡' },
        { property: 'og:site_name', content: 'kirinsan.org' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://kirinsan.org' },
        { property: 'og:image', content: 'https://kirinsan.org/img/keyvisual.webp' },
        {
          property: 'og:description',
          content: 'そう、ぞうじゃだめなんだ。オープンソースの童謡、ここに再登場。',
        },
      ],
      script: [
        {
          // apply stored theme before first paint (no FOUC); falls back to system preference
          innerHTML:
            "(function(){try{var t=localStorage.getItem('kirinsan-theme');if(!t&&window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)t='light';if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})()",
          tagPosition: 'head',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Crect width=%2724%27 height=%2724%27 rx=%275%27 fill=%27%230b0a08%27/%3E%3Cg fill=%27%23ffc400%27 transform=%27translate(2.4 2.4) scale(0.8)%27%3E%3Crect x=%278%27 y=%273%27 width=%272.2%27 height=%277%27 rx=%271.1%27/%3E%3Crect x=%2713.8%27 y=%273%27 width=%272.2%27 height=%277%27 rx=%271.1%27/%3E%3Ccircle cx=%279.1%27 cy=%272.6%27 r=%272%27/%3E%3Ccircle cx=%2714.9%27 cy=%272.6%27 r=%272%27/%3E%3Cellipse cx=%274.6%27 cy=%2711.2%27 rx=%273.4%27 ry=%271.7%27 transform=%27rotate(-24 4.6 11.2)%27/%3E%3Cellipse cx=%2719.4%27 cy=%2711.2%27 rx=%273.4%27 ry=%271.7%27 transform=%27rotate(24 19.4 11.2)%27/%3E%3Cellipse cx=%2712%27 cy=%2714.2%27 rx=%276.2%27 ry=%277.6%27/%3E%3C/g%3E%3C/svg%3E',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=IBM+Plex+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },
})
