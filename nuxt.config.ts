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
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦒</text></svg>',
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
