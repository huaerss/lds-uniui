<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    
    <!-- 添加组件列表 -->
    <view class="component-list">
      <view 
        v-for="(item, index) in componentList" 
        :key="index"
        class="component-item"
        @click="navigateTo(item.path)"
      >
        <text class="component-name">{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('组件示例')

// 组件列表数据
const componentList = [
  { name: '按钮 Button', path: '/pages/button/index' },
  { name: '富文本 RichText Editor', path: '/pages/richText/index' },
  // 可以继续添加其他组件...
]

// 页面跳转方法
const navigateTo = (path: string) => {
  uni.navigateTo({
    url: path
  })
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
   height: 150px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

/* 新增样式 */
.component-list {
  width: 90%;
  margin-top: 30rpx;
}

.component-item {
  padding: 30rpx;
  background-color: #ffffff;
  border-radius: 12rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
}

.component-name {
  font-size: 28rpx;
  color: #333333;
}
</style>
