<template>
  <div class="container">
    <view class="section">
      <view class="section-title">基础用法</view>
      <lds-card bg-color="#02a7f0">
        <div style="padding: 20rpx">基础卡片</div>
      </lds-card>
    </view>
    <view class="section">
      <view class="section-title">可展开卡片以及背景颜色</view>
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
    </view>

    <view class="section">
      <view class="section-title">默认展开的卡片</view>
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
    </view>

    <view class="section">
      <view class="section-title">业务示例</view>
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
    </view>
  </div>
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
.container {
  padding: 20rpx;
  margin-bottom: 40px;
  background-color: #ffffff;
  width: 100%;
  box-sizing: border-box;
}

:deep(.lds-card) {
  background-color: #3E29B0;
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

/* div[style*="display: flex"] {
  padding: 0 20rpx;
  width: 100%;
  box-sizing: border-box;
} */
</style>
