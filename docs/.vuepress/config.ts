/*
 * @Author       : gongyuqi@max-optics.com
 * @Date         : 2023-03-01 18:24:56
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 09:54:16
 * @FilePath     : /vuepress-starter/docs/.vuepress/config.ts
 * @Description  : 
 * 
 */
import { defineUserConfig } from 'vuepress'
import blockDemo from 'vuepress-plugin-demo-block-vue3'

export default defineUserConfig({
  open: true,

  plugins: [
    blockDemo({
      path: __dirname,
    })
  ]
})