<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-03-02 09:22:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 13:43:59
 * @FilePath     : /vuepress-starter/docs/examples/button/base.vue
 * @Description  : 
 * 
-->

<script setup lang="ts">
import { ref } from 'vue'
import { FButton } from '../../../packages/components/button/index'
import { FSwitch } from '../../../packages/components/switch/index'

const btnText = ref('hello world')
const switchVal = ref(true)
</script>

<template>
  <el-button type="primary">我是Element-Plus</el-button>
  <FButton type="warning" :circle="true" :hidden="true">
    {{btnText}}
  </FButton>
  <br/>
  <FSwitch v-model="switchVal"/>
  <f-switch v-model="switchVal" />
</template>
