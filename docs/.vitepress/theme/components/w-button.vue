<template>
  <button
    class="w-button"
    :class="[
      type ? `w-button--${type}` : '',
      {
        'is-plain': plain,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': shape === 'round',
        'is-square': shape === 'square',
      },
    ]"
    :disabled="disabled"
  >
    <i v-if="loading" class="w-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  shape: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss">
.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.1s;
  user-select: none;

  &:hover {
    color: var(--vp-c-brand);
    border-color: var(--vp-c-brand-light);
    background-color: var(--vp-c-bg-soft);
  }

  & + & {
    margin-left: 12px;
  }

  &--primary {
    background: var(--vp-c-brand);
    border-color: var(--vp-c-brand);
    color: white;

    &:hover {
      background: var(--vp-c-brand-light);
      border-color: var(--vp-c-brand-light);
      color: white;
    }
  }

  &--success {
    background: #67c23a;
    border-color: #67c23a;
    color: white;

    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: white;
    }
  }

  &--info {
    background: #909399;
    border-color: #909399;
    color: white;

    &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: white;
    }
  }

  &--warning {
    background: #e6a23c;
    border-color: #e6a23c;
    color: white;

    &:hover {
      background: #ebb563;
      border-color: #ebb563;
      color: white;
    }
  }

  &--danger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: white;

    &:hover {
      background: #f78989;
      border-color: #f78989;
      color: white;
    }
  }

  &.is-plain {
    background: transparent;

    &:hover {
      background: var(--vp-c-brand);
      border-color: var(--vp-c-brand);
      color: white;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: var(--vp-c-bg-soft);
      border-color: var(--vp-c-divider);
      color: var(--vp-c-text-1);
    }
  }

  &.is-loading {
    cursor: wait;
    opacity: 0.8;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-square {
    border-radius: 2px;
  }

  .w-icon-loading {
    display: inline-block;
    animation: rotating 2s linear infinite;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
