<template>
    <div class="qr-code-container">
      <canvas
        type="2d"
        id="qrCanvas"
        class="qr-canvas"
        canvas-id="qrCanvas"
      ></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, getCurrentInstance } from 'vue'
  // @ts-ignore
  import * as UQRCode from 'uqrcodejs'
  
  const props = defineProps<{
    url: string
    title: string
  }>()
  
  const emit = defineEmits<{
    (e: 'success', tempFilePath: string): void
    (e: 'error', error: any): void
  }>()
  
  declare const uni: any
  
  const generateQRCode = async () => {
    try {
      const query = uni.createSelectorQuery().in(getCurrentInstance())
      query
        .select('#qrCanvas')
        .fields({ node: true, size: true })
        .exec((res:any) => {
          if (!res || !res[0]) {
            const error = new Error(
              '没有找到对应的canvas元素 组件问题,请检测是否属于小程序环境'
            )
            emit('error', error)
            return
          }
  
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
  
          // 设置固定大小
          canvas.width = 400
          canvas.height = 400
  
          // 配置图片加载器
          UQRCode.prototype.loadImage = function (src:string) {
            // 需要返回Promise对象，小程序下获取网络图片信息需先配置download域名白名单才能生效
            return new Promise((resolve, reject) => {
              var img = canvas.createImage()
              img.src = src
              img.onload = () => {
                resolve(img)
              }
              img.onerror = (err:object) => {
                // reject返回错误信息
                reject(err)
              }
            })
          }
  
          // 创建二维码实例
          const qr = new UQRCode()
          qr.data = props.url
          qr.size = 400
          // 设置二维码中间留白区域
          qr.margin = 10
          qr.correctLevel = 0
          qr.foregroundImageBackgroundColor = 'rgba(0,0,0,0)'
  
          qr.make()
          qr.canvasContext = ctx
  
          qr.drawCanvas()
            .then(() => {
              // 在二维码中间绘制文字
              const centerX = canvas.width / 2
              const centerY = canvas.height / 2
  
              // 设置文字样式
              ctx.font = 'bold 36px Arial'
              ctx.textAlign = 'center'
              ctx.textBaseline = 'middle'
  
              // 计算文字宽度
              const textMetrics = ctx.measureText(props.title)
              const textWidth = textMetrics.width
              // 添加左右padding
              const padding = 20
              const backgroundWidth = textWidth + padding * 2
              const backgroundHeight = 50
  
              // 绘制白色背景
              ctx.fillStyle = 'white'
              ctx.fillRect(
                centerX - backgroundWidth / 2,
                centerY - backgroundHeight / 2,
                backgroundWidth,
                backgroundHeight
              )
  
              // 绘制文字
              ctx.fillStyle = '#333'
              ctx.fillText(props.title, centerX, centerY)
  
              // 生成临时文件
              uni.canvasToTempFilePath({
                canvas: canvas,
                width: 400,
                height: 400,
                destWidth: 400,
                destHeight: 400,
                fileType: 'png',
                quality: 1,
                success: function (res:{
                  tempFilePath:string
                }) {
                  emit('success', res.tempFilePath)
                },
                fail: (error:string) => {
                  emit('error', error)
                },
              })
            })
            .catch((error:string) => {
              emit('error', error)
            })
        })
    } catch (error) {
      emit('error', error)
    }
  }
  
  onMounted(() => {
    if (props.url) {
      generateQRCode()
    }
  })
  </script>
  
  <style scoped>
  .qr-code-container {
    position: relative;
  }
  .qr-canvas {
    width: 400px;
    height: 400px;
    position: fixed;
    left: -9999px;
  }
  </style>
  