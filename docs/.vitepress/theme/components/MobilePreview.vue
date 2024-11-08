<template>
  <div class="mobile-preview">
    <div class="mobile-header">
      <div class="back-icon">
        <span>←</span>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="mobile-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Preview',
  },
})
</script>

<style scoped>
.mobile-preview {
  width: 360px;
  height: 640px;
  border-radius: 12px;
  background: #1a1a1a;
  position: fixed;
  right: 40px;
  top: 100px;
  overflow: hidden;
}

.mobile-header {
  height: 44px;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.back-icon {
  font-size: 20px;
  margin-right: 16px;
}

.title {
  font-size: 16px;
  font-weight: 500;
}

.mobile-content {
  height: calc(100% - 44px);
  overflow-y: auto;
  padding: 16px;
}

@media (max-width: 1400px) {
  .mobile-preview {
    display: none;
  }
}
</style>
