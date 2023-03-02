/*
 * @Author       : yuqigong@outlook.com
 * @Date         : 2023-02-15 18:57:34
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2023-03-02 16:09:37
 * @FilePath     : /vuepress-starter/packages/components/switch/switch.ts
 * @Description  :
 *
 */
import { defineComponent, h } from 'vue';
import { ElSwitch } from 'element-plus';

/**
 * @see https://cn.vuejs.org/api/render-function.html#h
 */
export default defineComponent({
  name: 'FSwitch',
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
    return () => h(ElSwitch, { class: 'test' }, slots);
  },
});
