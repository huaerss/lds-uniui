import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/nav/menu/': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/nav/menu/introduction' },
        { text: '快速上手', link: '/nav/menu/start' },
      ]
    }
  ],
  '/nav/': [
    {
      base: '/nav/components/Base',
      text: '基础组件',
      items: [
        {
          text: '按钮',
          link: '/button'
        },
      ]
    },
    {
      base: '/nav/components/Interaction',
      text: '交互组件',
      items: [
        { text: '富文本编辑器', link: '/rich-text' },
        { text: '树形控件', link: '/tree' },
      ]
    }

  ]
}
