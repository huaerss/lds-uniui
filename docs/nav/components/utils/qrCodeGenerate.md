<frame/>

# qrCode 二维码生成

用于快速生成需要使用的二维码，支持自定义内容和中心文字显示。

## 基本用法

```vue
<template>
  <lds-qrCode
    :url="qrCodeUrl"
    :title="QrCodetitle"
    @success="handleQRCodeSuccess"
    @error="handleQRCodeError"
  />
</template>

<script setup lang="ts">
const qrCodeUrl = 'https://example.com'
const QrCodetitle = '示例文字'

const handleQRCodeSuccess = (tempFilePath: string) => {
  console.log('二维码生成成功：', tempFilePath)
}

const handleQRCodeError = (error: any) => {
  console.error('二维码生成失败：', error)
}
</script>
```

## API

### Props

| 参数  | 说明                 | 类型   | 默认值 | 必填 |
|-------|---------------------|--------|--------|------|
| url   | 二维码内容          | string | -      | 是   |
| title | 二维码中心显示文字   | string | -      | 是   |

### Events

| 事件名  | 说明                           | 回调参数                |
|---------|-------------------------------|------------------------|
| success | 二维码生成成功 返回的二维码地址 | (tempFilePath: string) |
| error   | 二维码生成失败                 | (error: any)          |

## 注意事项

- 生成的二维码图片尺寸为 400x400 像素
- 组件基于 canvas 实现，小程序环境需配置相关域名白名单
- success 事件返回临时文件路径，可用于图片展示或保存

