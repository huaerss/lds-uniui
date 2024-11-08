<template>
  <view class="button-demo">
    <view class="demo-header">
      <text class="demo-title">Button 按钮</text>
      <text class="demo-desc">常用的操作按钮</text>
    </view>

    <!-- 基础按钮 -->
    <view class="section">
      <view class="section-header">
        <text class="title">基础按钮</text>
        <text class="desc">基础的按钮用法</text>
      </view>
      <view class="btn-group">
        <lds-button type="default">默认按钮</lds-button>
        <lds-button >主要按钮</lds-button>
        <lds-button type="success">成功按钮</lds-button>
        <lds-button type="warning">警告按钮</lds-button>
        <lds-button type="danger">危险按钮</lds-button>
      </view>
    </view>

    <!-- 朴素按钮 -->
    <view class="section">
      <view class="section-header">
        <text class="title">朴素按钮</text>
        <text class="desc">朴素的按钮样式</text>
      </view>
      <view class="btn-group">
        <lds-button  type="default" plain>朴素按钮</lds-button>
        <lds-button  plain>主要按钮</lds-button>
        <lds-button type="success" plain>成功按钮</lds-button>
      </view>
    </view>

    <view class="section-row">
      <!-- 圆角按钮 -->
      <view class="section section-half">
        <view class="section-header">
          <text class="title">圆角按钮</text>
        </view>
        <view class="btn-group btn-group-column">
          <lds-button round>圆角按钮</lds-button>
          <lds-button round>主要按钮</lds-button>
          <lds-button type="success" round>成功按钮</lds-button>
        </view>
      </view>

      <!-- 禁用状态 -->
      <view class="section section-half">
        <view class="section-header">
          <text class="title">禁用状态</text>
        </view>
        <view class="btn-group btn-group-column">
          <lds-button type="default" disabled>禁用按钮</lds-button>
          <lds-button  disabled>禁用按钮</lds-button>
          <lds-button type="success" disabled>禁用按钮</lds-button>
        </view>
      </view>
    </view>

    <!-- 加载状态 -->
    <view class="section">
      <view class="section-header">
        <text class="title">加载状态</text>
        <text class="desc">点击后进行数据加载操作</text>
      </view>
      <view class="btn-group">
        <lds-button type="default" loading>加载中</lds-button>
        <lds-button loading>加载中</lds-button>
      </view>
    </view>

    <!-- 按钮尺寸 -->
    <view class="section">
      <view class="section-header">
        <text class="title">按钮尺寸</text>
        <text class="desc">不同尺寸的按钮</text>
      </view>
      <view class="btn-group btn-group-sizes">
        <lds-button size="mini" >小型按钮</lds-button>
        <lds-button size="small" >中型按钮</lds-button>
        <lds-button >正常按钮</lds-button>
        <lds-button size="large" >大型按钮</lds-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 组件已全局注册,无需引入
</script>

<style lang="scss" scoped>
.button-demo {
  min-height: 100vh;
  background-color: #f5f7fa;
  padding-bottom: 30px;

  .demo-header {
    padding: 20px 16px;
    background: #fff;
    margin-bottom: 10px;
    
    .demo-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      display: block;
      margin-bottom: 8px;
    }
    
    .demo-desc {
      font-size: 14px;
      color: #666;
    }
  }
  
  .section {
    margin: 12px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
    
    &-header {
      margin-bottom: 16px;
      
      .title {
        font-size: 15px;
        font-weight: 500;
        color: #333;
        display: block;
        margin-bottom: 4px;
      }
      
      .desc {
        font-size: 12px;
        color: #999;
      }
    }
  }

  .section-row {
    display: flex;
    gap: 12px;
    padding: 0 12px;
  }

  .section-half {
    flex: 1;
    margin: 0;
  }
  
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    &-column {
      flex-direction: column;
      align-items: stretch;
    }

    &-sizes {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
    }
  }
}
</style>
