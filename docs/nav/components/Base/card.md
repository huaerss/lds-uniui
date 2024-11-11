<frame />

# Card 卡片

卡片组件，用于展示内容区块。支持可展开的内容区域和自定义背景颜色。

## 基础用法

最简单的卡片用法。

```html
<template>
  <lds-card>
    <div style="padding: 20rpx">基础卡片内容</div>
  </lds-card>
</template>
```

## 自定义背景色

通过 `bg-color` 属性设置卡片背景色。

```html
<template>
  <lds-card bg-color="#FF5733">
    <div style="padding: 20rpx">自定义背景色的卡片</div>
  </lds-card>
</template>
```

## 可展开卡片

使用具名插槽 `extend` 来添加可展开的内容区域。

```html
<template>
  <lds-card>
    <div style="padding: 20rpx">默认显示的内容</div>
    <template #extend>
      <div style="padding: 20rpx">
        这是展开后显示的内容
      </div>
    </template>
  </lds-card>
</template>
```

## 业务示例

展示实际业务场景中的用法。

```html
<template>
  <lds-card>
    <div style="margin: 0 20rpx">
      <div class="pd">本期已收金额</div>
      <div style="font-size: 60rpx" class="pd">
        {{ received }}
      </div>
    </div>
    
    <template #extend>
      <div style="display: flex; justify-content: space-between; padding: 0 20rpx">
        <div class="pd">剩余未收款</div>
        <div class="pd">{{ shouldreceived }}</div>
      </div>
    </template>
  </lds-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const received = ref(1000)
const shouldreceived = ref(500)
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| bg-color | 卡片背景色 | string | #02a7f0 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片主要内容 |
| extend | 可展开的额外内容 |
