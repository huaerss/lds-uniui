<frame />

# Card 卡片

卡片组件，用于展示内容区块。支持可展开的内容区域和自定义背景颜色。

## 基础用法

最简单的卡片用法。

```html
<template>
  <lds-card bg-color="#02a7f0">
    <div style="padding: 20rpx">基础卡片</div>
  </lds-card>
</template>
```

## 自定义背景色

通过 `bg-color` 属性设置卡片背景色。你可以传入任何有效的颜色值。

```html
<template>
  <lds-card bg-color="#4CAF50">
    <div style="padding: 20rpx">自定义背景色的卡片</div>
  </lds-card>
</template>
```

## 可展开卡片

使用具名插槽 `extend` 来添加可展开的内容区域。点击卡片底部的箭头图标可以展开/收起额外内容。

```html
<template>
  <lds-card bg-color="#4CAF50">
    <div style="padding: 20rpx">点击下方箭头展开更多内容</div>
    <template #extend>
      <div style="padding: 20rpx">
        这是展开后显示的内容
      </div>
      <div style="padding: 20rpx">
        可以放置更多详细信息
      </div>
    </template>  
  </lds-card>
</template>
```

## 默认展开卡片

通过设置 `default-expand` 属性为 `true`，可以使卡片在初始化时就处于展开状态。

```html
<template>
  <lds-card bg-color="#FF9800" :default-expand="true">
    <div style="padding: 20rpx">这是一个默认展开的卡片</div>
    <template #extend>
      <div style="padding: 20rpx">
        默认就能看到这些内容
      </div>
      <div style="padding: 20rpx">
        当然你也可以点击箭头收起
      </div>
    </template>
  </lds-card>
</template>
```

## 业务示例

展示实际业务场景中的用法，如财务数据展示卡片。

```html
<template>
  <lds-card>
    <div style="margin: 0 20rpx">
      <div class="pd">
        本期已收金额
        <span class="icon" @click="showdata"></span>
      </div>
      <div style="font-size: 60rpx" class="pd">
        {{ received?.toFixed(2) }}
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-between; margin: 0 20rpx">
      <div class="pd">本期开单总计</div>
      <div class="pd">{{ total.toFixed(2) }}</div>
    </div>

    <template #extend>
      <div style="display: flex; justify-content: space-between; padding: 0 20rpx">
        <div class="pd">剩余未收款</div>
        <div class="pd">{{ shouldreceived.toFixed(2) }}</div>
      </div>
      <div class="divider"></div>
      <div style="display: flex; justify-content: space-between; padding: 0 20rpx">
        <div class="pd">系统内收款</div>
        <div class="pd">{{ Systemreceived.toFixed(2) }}</div>
      </div>
      <div class="divider"></div>
      <div style="display: flex; justify-content: space-between; padding: 0 20rpx">
        <div class="pd">系统外收款</div>
        <div class="pd">{{ SystemOutMoney.toFixed(2) }}</div>
      </div>
    </template>
  </lds-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const received = ref(1000)
const total = ref(2000)
const shouldreceived = ref(1000)
const Systemreceived = ref(800)
const SystemOutMoney = ref(200)

const showdata = () => {
  console.log('显示数据详情')
}
</script>

<style>
.pd {
  padding: 10px 0px;
}

.divider {
  height: 1px;
  background-color: #D7D7D7;
  margin: 0 10px;
}

.icon {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
  font-size: 16px;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| bg-color | 卡片背景色 | string | #02a7f0 |
| default-expand | 是否默认展开 | boolean | false |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片主要内容 |
| extend | 可展开的额外内容，点击底部箭头可展开/收起 |

### 样式定制

组件提供了以下样式变量，可以通过自定义样式覆盖默认样式：

```css
:deep(.lds-card) {
  background-color: #3E29B0; /* 修改默认背景色 */
}
```
