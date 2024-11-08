# 快速上手

lds-uniui 提供了 [npm](#npm方式) 的方式使用组件

::: info 提示

lds-uniui 的组件库基于 [Vue 3](https://vuejs.org/) 和 [TypeScript](https://www.typescriptlang.org/)以及[uniui](https://uniui.com.cn/) 开发，因此在使用前请确保你的项目中已经安装了 Vue 3 Ts 和 uniui。
:::

## NPM 方式

---

::: code-group

```bash [pnpm]
pnpm add lds-uniui
```

```bash [yarn]
yarn add lds-uniui
```

```bash [npm]
npm install lds-uniui
```

:::

## 组件导入 {#组件导入}

---

::: warning 注意
使用`easycom` 方式导入
:::

> pages.config.ts 中配置

```ts{3-5}
  easycom: {
    autoscan: true,
    custom: {
      '^lds-(.*)': 'lds-uniui/components/lds-$1/lds-$1.vue',
    },
  },
  // ....
```

## 完成

> 配置完成，现在所有的组件都可以直接使用，它将自动完成按需导入

```vue
<lds-button>按钮</lds-button>
```
