import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/img/carrot.png',

  appearance: true,  // 配置 深色模式

  social: [
     { icon: 'github', link: 'https://github.com/carrot-liang' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration-line:none;margin-right: 20px;">京ICP备2025119193号</a><a style="text-decoration-line:none" href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402054588" target="_blank"><img src="/img/ga-logo.png" style="width:16px;display:inline-block;vertical-align:text-top">&nbsp;京公网安备11011402054588号 </a>',
    copyright: '',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: '/img/carrotliang.png',
    name: 'CARROT LIANG',
    description: '',
    circle: true,
    location: 'Beijing',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
