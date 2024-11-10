<frame />

# Tree 树形控件

树形控件，用于展示具有层级关系的结构化数据。

## 基础用法

```html
<template>
  <lds-tree :tree-data="basicData" @node-click="handleNodeClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string
  id?: string
  children?: TreeNode[]
  expanded?: boolean
}

const basicData = ref<TreeNode[]>([
  {
    label: '一级节点1',
    children: [
      { label: '二级节点1-1', id: '1-1' },
      { label: '二级节点1-2', id: '1-2' }
    ]
  },
  {
    label: '一级节点2',
    expanded: true,
    children: [
      { label: '二级节点2-1' },
      { label: '二级节点2-2' }
    ]
  }
])

const handleNodeClick = (node: TreeNode) => {
  console.log('点击节点:', node)
}
</script>
```

## 复选框功能

```html
<template>
  <lds-tree 
    :tree-data="checkboxData" 
    :show-checkbox="true"
    @node-check="handleNodeCheck" 
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string
  children?: TreeNode[]
  checked?: boolean
}

const checkboxData = ref<TreeNode[]>([
  {
    label: '父节点1',
    children: [
      {
        label: '子节点1-1',
        children: [
          { label: '子节点1-1-1' },
          { label: '子节点1-1-2' }
        ]
      }
    ]
  },
  {
    label: '父节点2',
    children: [
      { label: '子节点2-1' },
      { label: '子节点2-2' }
    ]
  }
])

const handleNodeCheck = (node: TreeNode) => {
  console.log('节点选中状态变化:', node)
}
</script>
```

## 三级节点 + 自定义图标

```html
<template>
  <lds-tree 
    :tree-data="customData" 
    @node-click="handleNodeClick"
  >
    <template #icon="{ node }">
      <image 
        class="custom-icon" 
        :src="getNodeIcon(node)"
        mode="aspectFit"
      />
    </template>
  </lds-tree>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TreeNode {
  label: string
  type: 'root' | 'folder' | 'doc' | 'file' | 'image' | 'font'
  children?: TreeNode[]
  expanded?: boolean
}

const customData = ref<TreeNode[]>([
  {
    label: '项目文档',
    type: 'root',
    expanded: true,
    children: [
      {
        label: '开发指南',
        type: 'folder',
        expanded: true,
        children: [
          {
            label: '介绍',
            type: 'doc',
            children: [
              {
                label: '快速上手',
                type: 'file'
              },
              {
                label: '项目配置',
                type: 'file'
              }
            ]
          },
          {
            label: '组件',
            type: 'doc',
            children: [
              {
                label: '基础组件',
                type: 'file'
              },
              {
                label: '表单组件',
                type: 'file'
              }
            ]
          }
        ]
      },
      {
        label: '资源文件',
        type: 'folder',
        children: [
          {
            label: '图片资源',
            type: 'image'
          },
          {
            label: '字体文件',
            type: 'font'
          }
        ]
      }
    ]
  }
])

const getNodeIcon = (node: TreeNode): string => {
  const iconMap: Record<TreeNode['type'], string> = {
    root: 'https://via.placeholder.com/40x40/3c9cff/fff?text=R',
    folder: 'https://via.placeholder.com/40x40/3c9cff/fff?text=F',
    doc: 'https://via.placeholder.com/40x40/3c9cff/fff?text=D',
    file: 'https://via.placeholder.com/40x40/3c9cff/fff?text=FL',
    image: 'https://via.placeholder.com/40x40/3c9cff/fff?text=I',
    font: 'https://via.placeholder.com/40x40/3c9cff/fff?text=FT'
  }
  return iconMap[node.type]
}

const handleNodeClick = (node: TreeNode) => {
  console.log('点击节点:', node)
}
</script>

<style>
.custom-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  border-radius: 4rpx;
}
</style>
```

## 自定义缩进

通过 `indent-size` 属性自定义层级缩进大小。

```html
<lds-tree 
  :tree-data="treeData"
  :indent-size="50"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tree-data | 树形结构数据 | TreeNode[] | [] |
| show-checkbox | 是否显示复选框 | boolean | false |
| indent-size | 缩进大小(rpx) | number | 30 |

### TreeNode 数据结构

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | 节点标签 | string | - |
| children | 子节点 | TreeNode[] | - |
| expanded | 是否展开 | boolean | false |
| checked | 是否选中（复选框模式） | boolean | false |
| type | 节点类型(用于自定义图标) | string | - |
| id | 节点唯一标识 | string/number | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| node-click | 节点被点击时触发 | (node: TreeNode) |
| node-check | 节点复选框状态变化时触发 | (node: TreeNode) |

### Slots

| 名称 | 说明 | 作用域参数 |
|------|------|------------|
| icon | 自定义节点图标 | { node: TreeNode } |

### 样式变量

组件提供了以下 CSS 变量，可用于自定义样式：

```css
.lds-tree {
  --tree-node-height: 80rpx;
  --tree-node-font-size: 28rpx;
  --tree-icon-size: 40rpx;
  --tree-indent-size: 30rpx;
}
```
