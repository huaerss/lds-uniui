<template>
  <view class="container">
    <view class="section">
      <view class="section-title">基础用法</view>
      <lds-tree :tree-data="basicData" @node-click="handleNodeClick" />
    </view>
    
    <view class="section">
      <view class="section-title">带复选框</view>
      <lds-tree 
        :tree-data="checkboxData" 
        :show-checkbox="true"
        @node-check="handleNodeCheck" 
      />
    </view>
    
    <view class="section">
      <view class="section-title">三级节点 + 自定义图标</view>
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
    </view>
    

  </view>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

// 基础数据
const basicData = ref([
  {
    label: '一级节点1',
    expanded: false,
    children: [
      { label: '二级节点1-1',
        id: '1-1'
       },
      { label: '二级节点1-2',
        id: '1-2'
       }
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

// 复选框数据
const checkboxData = ref([
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


// 添加自定义三级节点数据
const customData = ref([
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

interface NodeType {
  type: 'root' | 'folder' | 'doc' | 'file' | 'image' | 'font'
  [key: string]: any
}

// 根据节点类型获取对应的图标
const getNodeIcon = (node: NodeType) => {
  console.log(node)
  const iconMap: Record<NodeType['type'], string> = {
    root: 'https://api.dicebear.com/7.x/icons/svg?seed=root&backgroundColor=4080ff',
    folder: 'https://api.dicebear.com/7.x/icons/svg?seed=folder&backgroundColor=4080ff',
    doc: 'https://api.dicebear.com/7.x/icons/svg?seed=doc&backgroundColor=4080ff',
    file: 'https://api.dicebear.com/7.x/icons/svg?seed=file&backgroundColor=4080ff',
    image: 'https://api.dicebear.com/7.x/icons/svg?seed=image&backgroundColor=4080ff',
    font: 'https://api.dicebear.com/7.x/icons/svg?seed=font&backgroundColor=4080ff'
  }
  return iconMap[node.type]
}

const handleNodeClick = (node: any) => {
  console.log('点击节点:', node)
}

const handleNodeCheck = (node) => {
  console.log(`节点选中状态变化: ${JSON.stringify(node)}`)
}
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #ffffff;
}

.section {
  margin-bottom: 40rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  padding-left: 20rpx;
  border-left: 8rpx solid #007AFF;
}

.folder-icon::before {
  content: '📁';
}

.custom-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  border-radius: 4rpx;
  background-color: #ffffff;
}
</style> 
