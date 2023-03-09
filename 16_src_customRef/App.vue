<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import { customRef } from 'vue';
export default {
  name: "App",
  setup() {
    function myRef(value, delay) {
      let timer;
      //通过customRef去实现自定义
      return customRef((track, trigger) => {
        return {
          get() {
            // console.log(`有人获取了keyword的值，我把${value}给他了`);
            track();  //告诉Vue这个value值是需要被“追踪”的
            return value;
          },
          set(newValue) {
            clearTimeout(timer)
            // console.log(`有人修改了keyword的值，值为${value}`);
            timer = setTimeout(() => {
              value = newValue;
              trigger();  //告诉Vue去更新界面
            }, delay)
          }
        }
      })
    }

    // 使用程序员自定义的ref
    let keyword = myRef('test', 500)

    return {
      keyword
    }
  },
};
</script>

<style>

</style>
