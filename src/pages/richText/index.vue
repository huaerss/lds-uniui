<template>

  <lds-editor v-model="content" />
   <div style="margin-top: 10px;text-align: center;"> 
     <lds-button @click="handleSubmit">打印文本内容</lds-button>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const content = ref('')

const handleSubmit = () => {
  alert(content.value)
}
</script>

<style scoped>
.container {
  
  background-color: #f0f0f0;
  font-size: 18px;

}
</style>
