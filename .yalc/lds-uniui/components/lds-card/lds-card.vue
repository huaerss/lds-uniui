<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <!-- 默认内容插槽 -->
    <slot></slot>

    <!-- 只有在有展开内容时才显示分隔线和展开部分 -->
    <template v-if="extend">
      <!-- 分隔线 -->
      <div class="divider"></div>

      <!-- 展开内容插槽 -->
      <div
        ref="expandableContent"
        :class="['more-content', { show: isExpanded }]"
        :style="{ maxHeight: isExpanded ? contentMaxHeight : '0px' }"
      >
        <div class="content-wrapper">
          <slot name="extend"></slot>
        </div>
      </div>

      <!-- 展开/收起按钮 -->
      <div class="toggle-button" @click="toggleExpand">
        <div :class="['arrow-icon', { 'is-expanded': isExpanded }]"></div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, computed, nextTick, getCurrentInstance, onMounted } from 'vue'

// 添加 props 定义
interface Props {
  bgColor?: string
  defaultExpand?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '#02a7f0', // 设置默认背景色
  defaultExpand: false // 默认不展开
})

const slots = useSlots()
const extend = computed(() => !!slots['extend'])

const isExpanded = ref(props.defaultExpand)
const contentMaxHeight = ref('0px')
const expandableContent = ref<HTMLElement | null>(null)
const that = getCurrentInstance()
const queryselect = uni.createSelectorQuery().in(that)

// 组件挂载后，如果默认展开则计算高度
onMounted(async () => {
  if (props.defaultExpand && extend.value) {
    await nextTick()
    queryselect
      .select('.content-wrapper')
      .boundingClientRect((data: any) => {
        if (data) {
          contentMaxHeight.value = `${data.height}px`
        }
      })
      .exec()
  }
})

const toggleExpand = async () => {
  isExpanded.value = !isExpanded.value
  
  if (isExpanded.value) {
    await nextTick()
    
    queryselect
      .select('.content-wrapper')
      .boundingClientRect((data: any) => {
        if (data) {
          contentMaxHeight.value = `${data.height}px`
          console.log('Set maxHeight to:', contentMaxHeight.value)
        }
      })
      .exec()
  }
}
</script>

<style scoped>
.card {
  border-radius: 20rpx;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.card div {
  box-sizing: border-box;
}

.divider {
  height: 1px;
  background-color: var(--divider-color, #D7D7D7);
  margin: 0 10px;
}

.more-content {
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.content-wrapper {
  opacity: 1;
  height: auto;
  padding: 10px 0;
  width: 100%;
  box-sizing: border-box;
}

.toggle-button {
  text-align: center;
  line-height: 35px;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-icon {
  width: 12px;
  height: 12px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.arrow-icon.is-expanded {
  transform: rotate(-135deg);
}
</style>
