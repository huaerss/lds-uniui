<template>
  <button
    class="lds-button"
    :class="[
      `lds-button--${type}`,
      `lds-button--${size}`,
      {
        'lds-button--plain': plain,
        'lds-button--round': round,
        'lds-button--disabled': disabled,
        'lds-button--loading': loading
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <view class="lds-button__content">
      <text v-if="loading" class="lds-button__loading-icon">加载中...</text>
      <slot></slot>
    </view>
  </button>
</template>

<script lang="ts">
export default {
  name: 'LdsButton'
}
</script>

<script setup lang="ts">
const props = defineProps({
  // 按钮类型
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => {
      return ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
    }
  },
  // 按钮尺寸
  size: {
    type: String,
    default: 'normal',
    validator: (value: string) => {
      return ['mini', 'small', 'normal', 'large'].includes(value)
    }
  },
  // 是否朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 是否圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否加载中
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event: any) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<style lang="scss" scoped>
.lds-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  text-align: center;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
  
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // 默认样式
  &--default {
    background: #fff;
    border-color: #dcdfe6;
    color: #606266;
    
    &:active {
      opacity: 0.8;
    }
  }

  // 主要按钮
  &--primary {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
    
    &:active {
      opacity: 0.8;
    }
  }

  // 成功按钮
  &--success {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
    
    &:active {
      opacity: 0.8;
    }
  }

  // 警告按钮
  &--warning {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
    
    &:active {
      opacity: 0.8;
    }
  }

  // 危险按钮
  &--danger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
    
    &:active {
      opacity: 0.8;
    }
  }

  // 朴素按钮
  &--plain {
    background: #fff;
    
    &.lds-button--primary {
      color: #409eff;
    }
    
    &.lds-button--success {
      color: #67c23a;
    }
    
    &.lds-button--warning {
      color: #e6a23c;
    }
    
    &.lds-button--danger {
      color: #f56c6c;
    }
  }

  // 按钮尺寸
  &--mini {
    height: 24px;
    padding: 0 10px;
    font-size: 12px;
  }
  
  &--small {
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
  }
  
  &--large {
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
  }

  // 圆角按钮
  &--round {
    border-radius: 20px;
  }

  // 禁用状态
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
