<template>
    <div class="qrcode-container">
   
        <lds-qrCode
        v-if="qrCodeUrl"
        :url="qrCodeUrl"
        :title="QrCodetitle"
        @success="handleQRCodeSuccess"
        @error="handleQRCodeError"
      />
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const qrCodeTempPath = ref('')
  const qrCodeUrl = ref('')
  const QrCodetitle = ref('')
  
  onMounted(() => {
    qrCodeUrl.value = '这只是一个模板'
    QrCodetitle.value ='模板'
  
  })
  
  const handleQRCodeSuccess = (tempFilePath: string) => {
    qrCodeTempPath.value = tempFilePath
  }
  
  const handleQRCodeError = (error: any) => {
    uni.showToast({
      title: error.toString(),
      icon: 'error',
    })
  }
  
  const handleClick = () => {
    uni.navigateTo({
      url: '/leaseDetail/leaseCode/serviceCode',
    })
  }
  </script>
  
  <style scoped>
  .qrcode-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .qrcode-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .qrcode-img {
    width: 400rpx;
    height: 400rpx;
  }
  
  .description {
    color: #666;
    line-height: 1.5;
    text-align: center;
    margin-top: 20rpx;
  }
  </style>
  