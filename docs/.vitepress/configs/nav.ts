import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '指南', link: '/nav/menu/introduction' },
  {
    text: '组件',
    items: [
      { text: '基础组件', link: '/nav/components/Base/button' },
      { text: '交互组件', link: '/nav/components/Interaction/rich-text' },
    ]
  },
  {
    text: '函数',
    link: '#'
  }


]
