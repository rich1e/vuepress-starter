/*
 * @Author       : gongyuqi@max-optics.com
 * @Date         : 2023-03-01 18:29:48
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 16:05:46
 * @FilePath     : /vuepress-starter/docs/.vuepress/client.ts
 * @Description  : 
 * 
 */
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import FormPlus from '../../packages/components'

import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(FormPlus)
  },
  setup() {},
  rootComponents: [],
})