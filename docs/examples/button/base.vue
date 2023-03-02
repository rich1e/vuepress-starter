<!--
 * @Author       : gongyuqi@max-optics.com
 * @Date         : 2023-03-02 09:22:14
 * @LastEditors  : gongyuqi@max-optics.com
 * @LastEditTime : 2023-03-02 09:22:22
 * @FilePath     : /vuepress-starter/docs/examples/button/base.vue
 * @Description  : 
 * 
-->

<template>
  <button>按钮</button>
  <button>{{btnText}}</button>
  <el-button type="primary">我是Element-Plus</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btnText = ref('hello world')
</script>

<style>
</style>