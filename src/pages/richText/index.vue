<template>
  <view class="section">
    <view class="section-title">基础用法</view>
    <lds-editor v-model="content" />
   <div style="margin-top: 10px;text-align: center;"> 
     <lds-button @click="handleSubmit">打印文本内容</lds-button>
   </div>
  </view>

</template>

<script setup lang="ts">
import { ref } from 'vue'
const content = ref('')

const handleSubmit = () => {
  console.log(content.value)
}
</script>

<style scoped>
.container {
  background-color: #f0f0f0;
  font-size: 18px;
}

.section {

  margin: 40rpx 0px;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  padding-left: 20rpx;
  border-left: 8rpx solid #007AFF;
}
</style>
