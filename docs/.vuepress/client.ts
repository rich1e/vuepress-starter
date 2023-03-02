/*
 * @Author       : gongyuqi@max-optics.com
 * @Date         : 2023-03-01 18:29:48
 * @LastEditors  : gongyuqi@max-optics.com
 * @LastEditTime : 2023-03-01 18:33:22
 * @FilePath     : /vuepress-starter/docs/.vuepress/client.ts
 * @Description  : 
 * 
 */
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
  },
  setup() {},
  rootComponents: [],
})