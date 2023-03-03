/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-02-15 18:57:34
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 15:54:58
 * @FilePath     : /vuepress-starter/packages/components/button/button.ts
 * @Description  :
 *
 */
import { defineComponent, h } from 'vue';
import { ElButton } from 'element-plus';

/**
 * @see https://cn.vuejs.org/api/render-function.html#h
 */
export default defineComponent({
  name: 'FButton',
  // inheritAttrs: false,
  props: {
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots }) {
    console.log(props);
    console.log(attrs);
    return () => h(ElButton, null, slots);
  },
});