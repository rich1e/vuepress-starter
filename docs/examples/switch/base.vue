<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-02 09:22:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 16:11:29
 * @FilePath     : /vuepress-starter/docs/examples/switch/base.vue
 * @Description  : 
 * 
-->

<script setup lang="ts">
import { ref } from 'vue'

const switchVal = ref(true)
</script>

<template>
  <FSwitch v-model="switchVal"/>
</template>
