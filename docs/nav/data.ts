import { link } from 'fs'
import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '概览',
    items: [
      {
        title: 'Can I use',
        link: '',
      },
    ],
  },
  {
    title: '快速上手',
    items: [
      {
        title: 'NPM 方式',
        link: '/nav/menu/start',
      },
    ],
  },
]
