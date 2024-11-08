---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: lds-uniui
  text: 基于业务封装的组件库以及通用Api
  tagline: 基于uniui＆api的二次封装
  image:
    src: /logo.png
    alt: lds-uniui
  actions:
    - text: 快速上手
      link: /nav/menu/start
    - text: 组件文档
      link: /nav/components/Base/button
      theme: alt

features:
  - icon: 📖
    title: 组件设计
    details: 基于uni-ui的二次开发
  - icon: 📘
    title: 按需引入
    details: 一键配置即可自动导入
    link: /nav/menu/start#组件导入
  - icon: 💡
    title: TS支持
    details: 支持 TypeScript & 类型检查 & 类型推断。
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
