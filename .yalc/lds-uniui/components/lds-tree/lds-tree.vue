<template>
  <view class="lds-tree">
    <block v-for="(item, index) in treeData" :key="index">
      <view class="tree-item">
        <view class="tree-node" @tap="toggleNode(item)">
          <!-- 展开/折叠图标 -->
          <text v-if="item.children && item.children.length" class="toggle-icon">
            {{ item.expanded ? '▼' : '▶' }}
          </text>
          <!-- 空白占位 -->
          <text v-else class="toggle-placeholder"></text>
          
          <!-- 复选框 -->
          <checkbox 
            v-if="showCheckbox" 
            class="checkbox"
            :checked="item.checked"
            @tap.stop="handleCheck(item)"
          />
          
          <!-- 修改图标插槽部分 -->
          <view class="icon-wrapper">
            <slot name="icon" v-bind:node="item">
              <text v-if="item.icon" class="node-icon" :class="item.icon"></text>
              <image 
                v-else-if="item.imageIcon" 
                class="node-image" 
                :src="item.imageIcon" 
                mode="aspectFit"
              />
            </slot>
          </view>
          
          <!-- 节点内容 -->
          <text class="node-text" @tap.stop="selectNode(item)">
            {{ item.label }}
          </text>
        </view>
        
        <!-- 修改递归组件部分 -->
        <view 
          v-if="item.children && item.children.length && item.expanded" 
          class="child-nodes"
        >
          <lds-tree
            :tree-data="item.children"
            :show-checkbox="showCheckbox"
            @node-click="handleNodeClick"
            @node-check="handleChildCheck"
          >
            <template #icon="slotProps: { node: TreeNode }">
              <slot name="icon" :node="slotProps.node"></slot>
            </template>
          </lds-tree>
        </view>
      </view>
    </block>
  </view>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface TreeNode {
  label: string
  children?: TreeNode[]
  expanded?: boolean
  selected?: boolean
  checked?: boolean
  icon?: string
  imageIcon?: string
  type?: string
  [key: string]: any
}

interface SlotProps {
  node: TreeNode
}

const props = withDefaults(defineProps<{
  treeData: TreeNode[]
  showCheckbox?: boolean
}>(), {
  showCheckbox: false
})

const emit = defineEmits<{
  'node-click': [node: TreeNode]
  'node-check': [node: TreeNode]
}>()

// 切换节点展开/折叠状态
const toggleNode = (node: TreeNode) => {
  try {
    if (node.children && node.children.length) {
      node.expanded = !node.expanded
    }
  } catch (error) {
    console.log(error)
  }
}

// 选择节点
const selectNode = (node: TreeNode) => {
  emit('node-click', node)
}

// 处理复选框选中
const handleCheck = (node: TreeNode) => {
  node.checked = !node.checked
  if (node.children) {
    updateChildrenCheck(node.children, node.checked)
  }

  emit('node-check', node)
}

// 更新子节点选中状态
const updateChildrenCheck = (children: TreeNode[], checked: boolean) => {
  try{
    children.forEach(child => {
    child.checked = checked
    if (child.children) {
      updateChildrenCheck(child.children, checked)
    }
  })
  }catch (error){
    console.log(error)
  }

}

// 处理子节点点击
const handleNodeClick = (node: TreeNode) => {
  emit('node-click', node)
}

// 处理子节点复选框变化
const handleChildCheck = (node: TreeNode) => {
  emit('node-check', node)
}


</script>

<style scoped>
.lds-tree {
  width: 100%;
}

.tree-item {
  line-height: 80rpx;
}

.tree-node {
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  transition: background-color 0.3s;
  height: 80rpx;
}

.tree-node:active {
  background-color: #f5f5f5;
}

.toggle-icon {
  width: 40rpx;
  text-align: center;
  color: #666;
  font-size: 24rpx;
}

.toggle-placeholder {
  width: 40rpx;
}

.checkbox {
  transform: scale(0.8);
}

.node-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  text-align: center;
  line-height: 40rpx;
}

.node-image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 10rpx;
  flex-shrink: 0;
}

.node-text {
  flex: 1;
  font-size: 28rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.child-nodes {
  margin-left: 30rpx;
}

/* 添加图标包装器样式 */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10rpx;
}
</style>
