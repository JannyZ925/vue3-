<template>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <button @click="sayHello">说话</button>
  <!-- <h1>{{ a }}</h1> -->
</template>

<script>
// import { h } from 'vue'

export default {
  name: 'App',
  setup() {
    let name = "张姣妮"
    let age = 22
    // let a = 200

    function sayHello() {
      console.log(`我叫${name}, 今年${age}岁`);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }

    // 返回一个渲染函数
    // return () => h('h1', '尚硅谷')
  },

  // 如果 setup 和 data 有一样的变量，谁在后面就取谁的值，不建议 vue2 和 vue3 混用
  // data() {
  //   return {
  //     a: 100
  //   }
  // }
}
</script>

<style>

</style>
