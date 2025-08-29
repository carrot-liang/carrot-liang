import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: 'FAsset', link: '/fasset/' },
  { text: '博客', link: '/blog/', activeMatch: '^/(blog|article)/' },
  { text: '支持', link: '/support/' }
])
